import React from "react";
import {  Form, Row, Col } from 'react-bootstrap';



class ZNASetup extends React.Component {

    constructor() {
        super();
        this.state = {
            zna_data: '',
            rf_start: '26.5',
            rf_stop: '29.5',
            rf_step: '0.5',
            lo_start: '19.66666667',
            lo_stop: '21.66666667',
            lo_step: '2.33333333',
            if_power: '-28',
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



    render() {

        return (
            <div>
                <hr/>
                <h3>ZNA Setup</h3>
                <br/>
                <Row>
                    <Col>
                        <Form.Label>
                            <u>RF Frequency Setup</u>
                        </Form.Label>

                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>RF Start:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="rf_start" value={this.state.rf_start} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>RF Stop:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="rf_stop" value={this.state.rf_stop} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>RF Step:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="rf_step" value={this.state.rf_step} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Label>
                            <u>LO Frequency Setup</u>
                        </Form.Label>

                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>LO Start:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="lo_start" value={((parseFloat(this.state.rf_start) + parseInt(this.state.if_freq)) * 2/3).toFixed(2)} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>LO Stop:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="lo_stop" value={((parseFloat(this.state.rf_stop) + parseInt(this.state.if_freq)) * (2/3)).toFixed(2)} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>LO Step:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="lo_step" value={((parseFloat(this.state.rf_step) + parseInt(this.state.if_freq)) * (2/3)).toFixed(2)} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Col>
                    
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Form.Label>
                            <u>IF Power Setup</u>
                        </Form.Label>

                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>IF Freq:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="if_freq" value={this.state.if_freq} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>IF Power:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="if_power" value={this.state.if_power} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        
                    </Col>
                    <Col>
                        <Form.Label>
                            <u>LO Power Setup</u>
                        </Form.Label>

                        <Form.Group className="mb-3" controlId="freq_range">
                            <Form.Label>LO Power:</Form.Label>
                            <Form.Control style={{width:'100px', resize:'none', float: 'right'}} type="number" name="lo_power" value={this.state.lo_power} placeholder="0.0" onChange={this.handleInputChange}/>
                        </Form.Group>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ZNASetup;