import React from 'react';
import { Container, Form, Row, Col, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
// import ZNASetup from '../Equipment/ZNA';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Instrument from '../Equipment/Instrument';




class PhaseCal extends React.Component {

    constructor() {
        super();
        this.state = {
            rfcs: '16',
            phasesteps: '32',
            gainsets: '16',
            
            header: '',
            positions: [{"azimuth": 45, "elevation": 45}],
            zna_data: '',
            lgShow: false,
            graph_data: '',
            
            
            start_phases: "None",
            calibrate: "None",
            spiral_order: "",
            re_cal: 0,
            rotate: 0,

            num_gen: '',
            parents: '',
            sol_per_pop: '',
            parent_selection: '',
            keep_parents: '',
            mutation_type: '',
            crossover_type: '',
            mut_num_genes: '',
            mut_percent: ''
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        // console.log(this.state.target.checked);
        console.log(event.target.value, 'Checked input');
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state);
    }

    async sendMove(url) {
        // let url = `http://127.0.0.1:5000/tests/calibration/phasecal/${this.state.phasesteps}+${this.state.re_cal}+${this.state.rotate}+${this.state.start_phases}+${this.state.calibrate}+${this.state.spiral_order}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                var data = response.data;
                console.log(data);
                return data;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    onRunTest = e => {
        e.preventDefault();
        if (this.state.calibrate === "genetic") {
            let url = `http://127.0.0.1:5000/tests/calibration/phasecal/genetic/${this.state.phasesteps}+${this.state.start_phases}+${this.state.calibrate}/${this.state.num_gen}+${this.state.parents}+${this.state.rfcs}+${this.state.sol_per_pop}+${this.state.keep_parents}+${this.state.parent_selection}+${this.state.mutation_type}+${this.state.crossover_type}+${this.state.mut_percent}+${this.state.mut_num_genes}`;
            this.sendMove(url);
        }
        else {
            let url = `http://127.0.0.1:5000/tests/calibration/phasecal/${this.state.phasesteps}+${this.state.re_cal}+${this.state.rotate}+${this.state.start_phases}+${this.state.calibrate}+${this.state.spiral_order}`;
            this.sendMove(url);
        }
        // this.sendMove(url);
    }

    render() {


        return (
            <div>
                <Container>
                    {/* <Row> */}
                        <Container style={{backgroundColor: '#dde4f0'}}>
                        {/* <Col> */}
                            <br/>
                            <h3>Phase Equalization Calibration</h3>
                            <br/>
                            <Form onSubmit={this.onRunTest}>
                                <Container style={{width: "80%"}}>
                                    <Form.Label>
                                        <u>Setup</u>
                                    </Form.Label>
                                    <br/>
                                    <Row>
                                    <br/>
                                        <Col style={{float: "left"}}>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>RFCs:</Form.Label>
                                                <Form.Control style={{width:'80px', resize:'auto', float: 'right'}} type="number" name="rfcs" placeholder="Upper Limit" value={this.state.rfcs} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phasesteps">
                                                <Form.Label>Phase Steps:</Form.Label>
                                                <Form.Control style={{width:'80px', resize:'none', float: 'right'}} type="number" name="phasesteps" placeholder="Lower Limit" value={this.state.phasesteps} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="re_cal">
                                                <Form.Label>Re-Calibrate:</Form.Label>
                                                <Form.Control style={{width:'80px', resize:'none', float: 'right'}} type="number" name="re_cal" placeholder="Lower Limit" value={this.state.re_cal} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="rotate">
                                                <Form.Label>Rotate:</Form.Label>
                                                <Form.Control style={{width:'80px', resize:'none', float: 'right'}} type="number" name="rotate" placeholder="Lower Limit" value={this.state.rotate} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                        </Col>
                                        <Col sm>
                                            <Form.Group>
                                                
                                                <Row>
                                                    <Form.Label style={{textAlign: "left"}}>Start Phases</Form.Label>
                                                    <ToggleButtonGroup type="radio" name="start_phases" defaultValue={"None"}>
                                                        <ToggleButton variant="outline-dark" id="ax1_phi" value={"None"} checked={this.state.checked === "None"} onChange={this.handleInputChange}>
                                                        None
                                                        </ToggleButton>
                                                        <ToggleButton variant="outline-dark" id="ax1_theta" value={"Codebook"} checked={this.state.checked === "Codebook"} onChange={this.handleInputChange}>
                                                        Codebook
                                                        </ToggleButton>
                                                        <ToggleButton variant="outline-dark" id="ax1_phi" value={"Cal"} checked={this.state.checked === "Cal"} onChange={this.handleInputChange}>
                                                        Phase Cal
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </Row>

                                                <Row>
                                                    <Form.Label style={{textAlign: "left"}}>Calibration Method</Form.Label>
                                                    <select class="form-select" name="calibrate" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                        <option selected>None</option>
                                                        <option value="spiral">Spiral</option>
                                                        <option value="random">Random</option>
                                                        <option value="genetic">Genetic Algorithm</option>
                                                    </select>
                                                    {this.state.calibrate === "spiral" &&
                                                        <div>
                                                        <Form.Label style={{textAlign: "left"}}>Spiral Order</Form.Label>
                                                        <select class="form-select" name="spiral_order" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                            <option selected>Select Spiral</option>
                                                            <option value="tl_cw">TL CW</option>
                                                            <option value="tl_ccw">TL CCW</option>
                                                            <option value="tr_cw">TR CW</option>
                                                            <option value="tr_ccw">TR CCW</option>
                                                            <option value="bl_cw">BL CW</option>
                                                            <option value="bl_ccw">BL CCW</option>
                                                            <option value="br_cw">BR CW</option>
                                                            <option value="br_ccw">BR CCW</option>
                                                        </select>
                                                        </div>
                                                    }
                                                    {this.state.calibrate === "genetic" &&
                                                        <div>
                                                            <br/>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label># of Gen.:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="num_gen" placeholder="# of Gen." value={this.state.num_gen} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label># of Parents:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="parents" placeholder="# of Parents." value={this.state.parents} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label># Solutions:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="sol_per_pop" placeholder="# of Sol." value={this.state.sol_per_pop} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label style={{textAlign: "left"}}>Parent Selection </Form.Label>
                                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="parent_selection" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                                    <option selected>Parent Selection Type</option>
                                                                    <option value="sss">SSS</option>
                                                                    <option value="rank">Rank</option>
                                                                    <option value="random">Random</option>
                                                                    <option value="tournament">Tournament</option>
                                                                    <option value="rws">RWS</option>
                                                                    <option value="sus">SUS</option>
                                                                </select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label># Parents to Keep:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="keep_parents" placeholder="Keep Parents." value={this.state.keep_parents} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label style={{textAlign: "left"}}>Crossover Type </Form.Label>
                                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="crossover_type" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                                    <option selected>Crossover Type</option>
                                                                    <option value="single_point">Single Point</option>
                                                                    <option value="two_points">Two Point</option>
                                                                    <option value="uniform">Uniform</option>
                                                                    <option value="scattered">Scattered</option>
                                                                </select>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label style={{textAlign: "left"}}>Mutation Type </Form.Label>
                                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="mutation_type" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                                    <option selected>Mutation Type</option>
                                                                    <option value="random">Random</option>
                                                                    <option value="swap">Swap</option>
                                                                    <option value="inversion">Inversion</option>
                                                                    <option value="scramble">Scramble</option>
                                                                    <option value="adaptive">Adaptive</option>
                                                                </select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label># Mutation Genes:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="mut_num_genes" placeholder="Mut. Num. Genes" value={this.state.mut_num_genes} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rfcs">
                                                                <Form.Label>% Mutation:</Form.Label>
                                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="mut_percent" placeholder="Mut. Gene %" value={this.state.mut_percent} onChange={this.handleInputChange}/>
                                                            </Form.Group>
                                                        </div>
                                                    }
                                                </Row>
                                        
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                                <hr/>
                                <Instrument/>

                                <hr/>

                                <Button type= "submit">Run Test</Button>
                            </Form>
                        <hr/>
                        
                        </Container>
                        <br/>
                </Container>
            </div>
        )
    }
}

export default PhaseCal;