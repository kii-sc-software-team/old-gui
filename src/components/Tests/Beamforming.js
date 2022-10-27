import React from 'react';
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import Plotly from "plotly.js-gl3d-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);



class Beamforming extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            az_vector: 0,
            el_vector: 0,
            scan_freq: 26,
            arr_rows: 4,
            arr_cols: 4,
            gsx: null,
            gsy: null,

            ax1_high: '90',
            ax1_low: '0',
            ax1_step: '10',
            ax1_pos_control: 'Theta',
            ax2_high: '180',
            ax2_low: '-180',
            ax2_step: '10',
            ax2_pos_control: 'Phi',

            cal_phases: [],

            x: [[]],
            y: [[]],
            z: [[]],
            show3d: true,
            data: null,
            layout: null,
            beam_phases: [],

            codebook: [],
            beam_index: 0,

            az_points: [ ],
            el_points: [ ],

            bw_az: 0,
            bw_el: 0,
            sl_az: 13,
            sl_el: 13,

            elem_Y: 24,
            elem_Z: 4,
            az_beams: 23,
            az_span: 57.5,
            el_beams: 3,
            el_span: 15,
            // fov_x: 60,
            // fov_y: 15,
            beam_width: 3,

            beam_id: null,

            show: false,
            showBeamSyntesizer: false,
            graphJSON: {data: null, layout: null},

            
            //considering adding paths and filenames for the load_recall, save_recall functions. As of now we do not use it, but it should be an input box theoretically
        }

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleInputChange(event) {
        const target = event.target;
        // console.log(this.state.t5arget.checked);
        console.log(event.target.value, 'Checked input');
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }, function () {
            console.log(this.state)
        });
        //console.log(this.state);
    }


  
    chooseBeam = beam => {
        if (beam.id > 25){
            return
        }
        this.sendMove(`beam_select/1/${beam.id}`);
        this.setState({currBeam: beam.id});
      }

    async sendMove(query) {
        let url = `http://127.0.0.1:5000/${query}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                var data = response.data;
                console.log(data);
                this.setState(data);
                console.log(this.state);
                return data;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    makePostRequest(path, queryObj) {
        axios.post(path, queryObj, { 
            headers: {  
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }}).then(
                (response) => {
                    var result = response.data;
                    console.log(result);
                    this.setState(result);
                    console.log(this.state);
                },
                (error) => {
                console.log(error);
            }
        );
    }

    generateBeam = e => {
        e.preventDefault();
        this.sendMove(`phasecal/rapid_cal/${this.state.azimuth}+${this.state.elevation}`);
        // this.sendMove(`pattern/contionuous`);
    }

    measureContinuousPattern = e => {
        e.preventDefault();
        this.sendMove(`pattern/contionuous/${this.state.ax1_high}+${this.state.ax1_low}+${this.state.ax1_step}+${this.state.ax2_high}+${this.state.ax2_low}+${this.state.ax2_step}`);
    }

    computeBeam = e => {
        e.preventDefault();
        this.sendMove(`phasecal/compute_beam/${this.state.az_vector}+${this.state.el_vector}+${this.state.arr_rows}+${this.state.arr_cols}`);
        // this.sendMove(`pattern/contionuous`);
        this.setState({azimuth: Number(this.state.az_vector), elevation: Number(this.state.el_vector)});
    }

    appendToCodebook = e => {
        e.preventDefault();
        let tmp = this.state.codebook;
        let temp_index = this.state.beam_index + 1;
        tmp.push({beam: temp_index, azimuth: this.state.azimuth, elevation: this.state.elevation, phases: this.state.beam_phases, beamwidth: [this.state.bw_az, this.state.bw_el], sidelobes: [this.state.sl_az, this.state.sl_el]});
        let tmp_az = this.state.az_points;
        tmp_az.push(this.state.azimuth);
        let tmp_el = this.state.el_points;
        tmp_el.push(this.state.elevation);
        this.setState({codebook: tmp, beam_index: temp_index, az_points: tmp_az, el_points: tmp_el});
        console.log(this.state);
    }

    visualizeCodebook = e => {
        e.preventDefault();
        

    }

    removeBeam = beam => {
        let tmp = this.state.codebook;
        if (this.state.codebook.includes(beam)) {
            this.setState({
                codebook: this.state.codebook.filter(el => el !== beam),
            })
  
        } else {
            tmp.push(beam);
            this.setState({
                codebook: tmp
            })
        }
  
        console.log(this.state);
    }



    codebookCal = e => {
        e.preventDefault();
        let queryObj = {
            codebook: this.state.codebook
        }
        this.makePostRequest('http://127.0.0.1:5000/phasecal/codebook_cal', queryObj);
    }

    generateBeamIndex = e => {
        e.preventDefault();
        let queryObj = {
            beamforming_params: {
                elem_Y: this.state.elem_Y,
                elem_Z: this.state.elem_Z,
                az_beams: this.state.az_beams,
                az_span: this.state.az_span,
                el_beams: this.state.el_beams,
                el_span: this.state.el_span,
                scan_freq: this.state.scan_freq,
                beam_width: this.state.beam_width
            }
        }
        this.makePostRequest('http://127.0.0.1:5000/beamforming/generate_beam_index/', queryObj);
    }

    displayPhases = beam => {
        this.setState({
            beam_phases: this.state.codebook[beam].phases,
            azimuth: this.state.codebook[beam].azimuth,
            elevation: this.state.codebook[beam].elevation,
            beam_id: this.state.codebook[beam].beam_id,
        });
    }

    toggleBeamSynthesizer = e => {
        e.preventDefault();
        let temp = this.state.showBeamSyntesizer;
        this.setState({
            showBeamSyntesizer: !temp
        });
    }
    




    render() {
        
        return (
            <div>                
                <Container style={{backgroundColor: '#dde4f0', width: '100%'}}>
                    <br/>
                    <h1>Beamforming</h1>
                    <hr/>
                    <h3>Beam Index</h3>
                    <br/>
                    <Form>
                        <Container style={{width: "90%"}}>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Azimuth Beams:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="az_beams" placeholder="Azimuth" value={this.state.az_beams} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elevation Beams:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="el_beams" placeholder="Elevation" value={this.state.el_beams} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Aziumuth Span:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="az_span" placeholder="Rows" value={this.state.az_span} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elevation Span:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="el_span" placeholder="Cols" value={this.state.el_span} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elements Y:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="elem_Y" placeholder="Azimuth" value={this.state.elem_Y} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elements Z:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="elem_Z" placeholder="Elevation" value={this.state.elem_Z} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Scan Frequency:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="scan_freq" placeholder="Scan Freq." value={this.state.scan_freq} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">GHz</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Beam Width:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="beam_width" placeholder="Elevation" value={this.state.beam_width} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">db</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Button onClick={this.generateBeamIndex} style={{float: 'right', width: '100%'}}>Generate Beam Index</Button>
                            </Row>
                        </Container>
                    </Form>
                    <hr/>
                    <Button variant='warning' size='sm' onClick={this.toggleBeamSynthesizer}>Toggle Display Manual Beam Synthesis</Button>
                    <br/>
                    {this.state.showBeamSyntesizer &&
                    <div>
                    <h3>Synthesize Beam</h3>
                    <br/>
                    <Form>
                        <Container style={{width: "90%"}}>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Azimuth Vector:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="az_vector" placeholder="Azimuth" value={this.state.az_vector} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elevation Vector:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="el_vector" placeholder="Elevation" value={this.state.el_vector} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Array Rows:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="arr_rows" placeholder="Rows" value={this.state.arr_rows} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">Rows</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Array Cols:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="arr_cols" placeholder="Cols" value={this.state.arr_cols} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">Cols</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Azimuth Beam Width:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="bw_az" placeholder="Azimuth" value={this.state.bw_az} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elevation Beam Width:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="bw_el" placeholder="Elevation" value={this.state.bw_el} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">°</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Azimuth Sidelobes:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="sl_az" placeholder="Azimuth" value={this.state.sl_az} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">db</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Elevation Sidelobs:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="sl_el" placeholder="Elevation" value={this.state.sl_el} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">db</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Scan Frequency:</span>
                                        </div>
                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="scan_freq" placeholder="Scan Freq." value={this.state.scan_freq} onChange={this.handleInputChange}/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">GHz</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <Button onClick={this.computeBeam} style={{float: 'right', width: '100%'}}>Compute Beam</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                    </div>
                    }
                    <hr/>
                    <h3>Computed Phases</h3>
                    <Container>
                        <br/>
                        <h6>Beam: {this.state.beam_id} Aziumuth: {this.state.azimuth} Elevation: {this.state.elevation}</h6>
                        <table className="table table-striped table-bordered" style={{width: '100%','font-size':'70%'}}>
                            <tbody>
                                {this.state.beam_phases.map((data, index) => (
                                    <tr key={index}>
                                        
                                            {data.map((data) => (
                                                <td>{data}</td>
                                            ))}
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Button onClick={this.generateBeam}>Send Beam for Cal</Button>
                        <br/>
                        <br/>
                        {/* <Button onClick={this.appendToCodebook}>Append to Codebook</Button> */}
                        <br/>
                        <h4>Codebook</h4>
                        <Container>
                            <table className="table table-striped table-bordered" style={{width: '100%'}}>
                                <thead>
                                    <th>Beam #</th>
                                    <th>Azimuth</th>
                                    <th>Elevation</th>
                                    <th>Phase Shift Az</th>
                                    <th>Phase Shift El</th>
                                    {/* <th>Beam Type</th> */}
                                    <th>Remove</th>
                                </thead>
                                <tbody style={{width: '100%','font-size':'85%'}}>
                                    {this.state.codebook.map((data) => (
                                        <tr>
                                            <td>{data.beam_id}</td>
                                            <td>{data.azimuth}°</td>
                                            <td>{data.elevation}°</td>
                                            <td>{data.phase_shift_x}°</td>
                                            <td>{data.phase_shift_y}°</td>
                                            {/* <td>{data.sidelobes[0] * data.sidelobes[0] === 169 ? "Regular" : "Spoiled"}</td> */}
                                            <td><Button size='sm' onClick={() => this.displayPhases(data.beam_id)}>Phases</Button>{' '}<Button size='sm' variant='danger' onClick={() => this.removeBeam(data)}>Remove</Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button onClick={this.handleShow}>Visualize Codebook</Button>
                            {'  '}
                            <Button onClick={this.codebookCal}>Send Codebook for Cal</Button>
                            <Modal show={this.state.show} onHide={this.handleClose} contentClassName='custom-modal-stle' dialogClassName="modal-90w">
                            <Modal.Header closeButton>
                                <Modal.Title>Codebook Visualized</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* {this.state.codebook} */}
                                <Plot data={this.state.graphJSON.data} layout={this.state.graphJSON.layout}
                                    // data={[
                                    //     {
                                    //       x: this.state.az_points,
                                    //       y: this.state.el_points,
                                    //       type: 'scatter',
                                    //       mode: 'markers',
                                    //       marker: {color: 'red', size: 62},
                                    //     }
                                    //   ]}
                                    //   layout={ {
                                    //     width: 500, height: 500, 
                                    //     xaxis: {
                                    //         range: [ -60, 60]
                                    //     },
                                    //     yaxis: {
                                    //         range: [-60, 60]
                                    //     },
                                    //     title: 'Beam Index'} }
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        </Container>
                        
                    </Container>
                    
                    <hr/>
                    <Form>
                        <Container style={{width:"75%"}}>
                            <h3>Measure Pattern</h3>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>
                                            <u>Theta Axis Control</u>
                                        </Form.Label>

                                        <Form.Group className="mb-3" controlId="pos_ax1_high">
                                            <Form.Label>Upper Limit:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'auto', float: 'right'}} type="number" name="ax1_high" placeholder="Upper Limit" value={this.state.ax1_high} onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pos_ax1_low">
                                            <Form.Label>Lower Limit:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="ax1_low" placeholder="Lower Limit" value={this.state.ax1_low} onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pos_ax1_step">
                                            <Form.Label>Step Size:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="ax1_step" placeholder="Step Size" value={this.state.ax1_step} onChange={this.handleInputChange}/>
                                        </Form.Group>


                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>

                                        <Form.Label>
                                            <u>Phi Axis Control</u>
                                        </Form.Label>

                                        <Form.Group className="mb-3" controlId="pos_ax2_high">
                                            <Form.Label>Upper Limit:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="ax2_high" placeholder="Upper Limit" value={this.state.ax2_high} onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pos_ax2_low">
                                            <Form.Label>Lower Limit:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="ax2_low" placeholder="Lower Limit" value={this.state.ax2_low} onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pos_ax2_step">
                                            <Form.Label>Step Size:</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="ax2_step" placeholder="Step Size" value={this.state.ax2_step} onChange={this.handleInputChange}/>
                                        </Form.Group>


                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                    <Button onClick={this.measureContinuousPattern}>Run Continuous Pattern</Button>
                    <br/>
                </Container>  
                <br/>
                {this.state.show3d &&
                    <div>
                        <h4>Beam 3D</h4>
                        <Plot data={this.state.data} layout={this.state.layout}/>
                    </div>
                }
            </div>
        )
    }
}

export default Beamforming;