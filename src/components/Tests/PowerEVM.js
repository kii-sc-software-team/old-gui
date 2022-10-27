import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Instrument from '../Equipment/Instrument';
// import { Slider } from '@mui/material';




class PowerEVM extends React.Component {

    constructor() {
        super();
        this.state = {
            rfcs: '16',
            phasesteps: '32',
            gainsets: '16',

            header: '',
            zna_data: '',
            lgShow: false,
            graph_data: '',
            
            // lo_start: '19.66666667',
            // lo_stop: '21.66666667',
            // lo_step: '2.33333333',
            if_power: '-28',
            if_freq: '3',
            lo_power: '0',


            if_start: -40,
            if_stop: -30,
            if_step: 1,
            if_range: [-40,-30],

            lo_start: 7,
            lo_stop: 7,
            lo_step: 1,
            lo_range: [-5,5]


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

    async sendMove(query="data") {
        let url = `http://127.0.0.1:5000/tests/var_sweep/${query}`;
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

    makePostRequest(path, queryObj) {
        axios.post(path, queryObj, { 
          headers: {  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }}).then(
            (response) => {
                var result = response.data;
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );
    }


    sweepIF = e => {
        console.log(e.cancelable);

        e.preventDefault();
        this.sendMove(`evm_if_sweep/${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}`);
    }

    sweepLO = e => {
        console.log(e.cancelable);

        e.preventDefault();
        this.sendMove(`lo_sweep/${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}+${this.state.lo_start}+${this.state.lo_stop}+${this.state.lo_step}`);
    }

    render() {


        return (
            <div>
                <Container>
                    {/* <Row> */}
                        <Container style={{backgroundColor: '#dde4f0'}}>
                        {/* <Col> */}
                            <br/>
                            <h3>Power/EVM Measurement</h3>
                            <br/>
                            <Form>
                                
                                <Row>
                                    <Instrument evm="False"/>
                                </Row>
                                <hr/>
                                <Row>
                                    <h4>Test Parameters</h4>
                                    <br/>
                                    <br/>
                                    {/* <Col> */}
                                    <Form.Group>
                                        <Row>
                                            <Col md>
                                                <Form.Label>Measurement:</Form.Label>
                                            </Col>
                                            <Col sm>
                                                <Form.Label style={{float:'left'}}>Lower Limit:</Form.Label>
                                            </Col>
                                            <Col sm>
                                                <Form.Label style={{float:'left'}}>Upper Limit:</Form.Label>
                                            </Col>
                                            <Col sm>
                                                <Form.Label style={{float:'left'}}>Step Size:</Form.Label>
                                            </Col>
                                            <Col sm>
                                                <Form.Label style={{float:'left'}}>Start Measurement:</Form.Label>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md>
                                                <Form.Label>Sweep IF Power Measure EVM:</Form.Label>
                                            </Col>
                                            <Col>
                                                <div class="input-group" style={{width: "120px"}}>
                                                    <input type="number"  class="form-control" name="if_start" placeholder="IF Amp." value={this.state.if_start} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">dB</span>
                                                    </div>
                                                </div>
                                                {/* <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="if_start" value={this.state.if_start} placeholder="Lower Limit"  onChange={this.handleInputChange}/> */}
                                            </Col>
                                            <Col sm>
                                                <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="if_stop" value={this.state.if_stop} placeholder="Upper Limit"  onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col sm>
                                                <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="if_step" value={this.state.if_step} placeholder="Step Size"  onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col>
                                                <Button variant= "success" onClick={this.sweepIF}>Sweep IF Power</Button>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md>
                                                <Form.Label>Sweep LO Power Measure EVM:</Form.Label>
                                            </Col>
                                            <Col>
                                                <div class="input-group" style={{width: "120px"}}>
                                                    <input type="number"  class="form-control" name="lo_start" placeholder="LO Start" value={this.state.lo_start} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">dB</span>
                                                    </div>
                                                </div>
                                                {/* <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="if_start" value={this.state.if_start} placeholder="Lower Limit"  onChange={this.handleInputChange}/> */}
                                            </Col>
                                            <Col sm>
                                                <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="lo_stop" value={this.state.lo_stop} placeholder="Upper Limit"  onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col sm>
                                                <Form.Control style={{width:'80px', resize:'auto'}} type="number" name="lo_step" value={this.state.lo_step} placeholder="Step Size"  onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col>
                                                <Button variant= "success" onClick={this.sweepLO}>Sweep LO Power</Button>
                                            </Col>
                                        </Row>
                                    {/* </Col> */}
                                    </Form.Group>
                                </Row>

                                
                            </Form>
                        <hr/>
                        
                        </Container>
                        <br/>
                </Container>
            </div>
        )
    }
}

export default PowerEVM;