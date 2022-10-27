import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import ZNASetup from '../Equipment/ZNA';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Instrument from '../Equipment/Instrument';




class GainCal extends React.Component {

    constructor() {
        super();
        this.state = {
            rfcs: '16',
            phasesteps: '32',
            gainsets: '16',
            ax1_pos_control: 'Azimuth',
            ax2_high: '90',
            ax2_low: '-90',
            ax2_step: '180',
            ax2_pos_control: 'Elevation',
            header: '',
            positions: [{"azimuth": 45, "elevation": 45}],
            zna_data: '',
            lgShow: false,
            graph_data: '',
            rf_start: '26.5',
            rf_stop: '29.5',
            rf_step: '0.5',
            lo_start: '19.66666667',
            lo_stop: '21.66666667',
            lo_step: '2.33333333',
            if_power: '-32',
            if_freq: '3',
            lo_power: '0'
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

    async sendMove() {
        let url = `http://127.0.0.1:5000/tests/calibration/gaincal/all_rfc`;
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
        this.sendMove();
    }

    render() {


        return (
            <div>
                <Container>
                    {/* <Row> */}
                        <Container style={{backgroundColor: '#dde4f0'}}>
                        {/* <Col> */}
                            <br/>
                            <h3>Gain Equalization Calibration</h3>
                            <br/>
                            <Form onSubmit={this.onRunTest}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <u>Setup</u>
                                            </Form.Label>

                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>RFCs:</Form.Label>
                                                <Form.Control style={{width:'100px', resize:'auto', float: 'right'}} type="number" name="rfcs" placeholder="Upper Limit" value={this.state.rfcs} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phasesteps">
                                                <Form.Label>Phase Steps:</Form.Label>
                                                <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="phasesteps" placeholder="Lower Limit" value={this.state.phasesteps} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="gainsets">
                                                <Form.Label>Gainsets:</Form.Label>
                                                <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="gainsets" placeholder="Step Size" value={this.state.gainsets} onChange={this.handleInputChange}/>
                                            </Form.Group>

                                        
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        
                                    </Col>
                                </Row>
                                <hr/>
                                <Instrument/>

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

export default GainCal;