import React from 'react';
import { Container, Col, Form, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';


class PositionerParameters extends React.Component {

    constructor() {
        super();
        this.state = {
            ax1_start: '',
            ax1_stop: '',
            ax1_step: '',
            ax1_pos_control: '',
            ax2_start: '',
            ax2_stop: '',
            ax2_step: '',
            ax2_pos_control: '',
            polarization: '',
            ax2_measure_mode: '',
            antenna_height: '',
            antenna_dist: '',
            pattern_type: '',
            freq_range_type: '',
            freq_range_control: '',
            freq_start: '',
            freq_stop: '',
            freq_center: '',
            freq_span: ''
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
                <Container>
                    <Form>
                        <br/>
                        <h3>Parameters</h3>
                        <hr/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        <u>Primary Axis Control</u>
                                    </Form.Label>

                                    <Form.Group className="mb-3" controlId="pos_ax1_start">
                                        <Form.Label>Upper Limit:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} max="91" type="number" name="ax1_start" placeholder="Upper Limit" value={this.state.ax1_start} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="pos_ax1_stop">
                                        <Form.Label>Lower Limit:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} min="-91" type="number" name="ax1_stop" placeholder="Lower Limit" value={this.state.ax1_stop} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="pos_ax1_step">
                                        <Form.Label>Step Size:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="ax1_step" placeholder="Step Size" value={this.state.ax1_step} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <ToggleButtonGroup type="radio" name="ax1_pos_control" defaultValue={"Theta"}>
                                        <ToggleButton id="ax1_phi" value={"Phi"} checked={this.state.checked === "Phi"} onChange={this.handleInputChange}>
                                        Phi Angle
                                        </ToggleButton>
                                        <ToggleButton id="ax1_theta" value={"Theta"} checked={this.state.checked === "Theta"} onChange={this.handleInputChange}>
                                        Theta Angle
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>

                                    <Form.Label>
                                        <u>Secondary Axis Control</u>
                                    </Form.Label>

                                    <Form.Group className="mb-3" controlId="pos_ax2_start">
                                        <Form.Label>Upper Limit:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} max="91" type="number" name="ax2_start" placeholder="Upper Limit" value={this.state.ax2_start} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="pos_ax2_stop">
                                        <Form.Label>Lower Limit:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} max="-91" type="number" name="ax2_stop" placeholder="Lower Limit" value={this.state.ax2_stop} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="pos_ax2_step">
                                        <Form.Label>Step Size:</Form.Label>
                                        <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="ax2_step" placeholder="Step Size" value={this.state.ax2_step} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                    <ToggleButtonGroup type="radio" name="ax2_pos_control" defaultValue={"Phi"}>
                                        <ToggleButton id="ax2_phi" value={"Phi"} checked={this.state.checked === "Phi"} onChange={this.handleInputChange}>
                                        Phi Angle
                                        </ToggleButton>
                                        <ToggleButton id="ax2_theta" value={"Theta"} checked={this.state.checked === "Theta"} onChange={this.handleInputChange}>
                                        Theta Angle
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <Row>
                            <Col>
                                <Form.Label><u>Polarization</u></Form.Label>
                                <br/>
                                <ToggleButtonGroup type="radio" name="polarization" defaultValue={"Theta"}>
                                    <ToggleButton id="pol_theta" value={"Theta"} checked={this.state.checked === "Theta"} onChange={this.handleInputChange}>
                                    Theta
                                    </ToggleButton>
                                    <ToggleButton id="pol_phi" value={"Phi"} checked={this.state.checked === "Phi"} onChange={this.handleInputChange}>
                                    Phi
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>

                            <Col>
                                <Form.Label><u>Secondary Axis Measurement Mode</u></Form.Label>
                                <ToggleButtonGroup type="radio" name="ax2_measure_mode" defaultValue={"Stepped"}>
                                    <ToggleButton id="ax2_meas_cont" value={"Continuous"} checked={this.state.checked === "Continuous"} onChange={this.handleInputChange}>
                                    Continuous
                                    </ToggleButton>
                                    <ToggleButton id="ax2_meas_step" value={"Stepped"} checked={this.state.checked === "Stepped"} onChange={this.handleInputChange}>
                                    Stepped
                                    </ToggleButton>
                                    <ToggleButton id="ax2_meas_trg_swp" value={"Triggered Sweep"} checked={this.state.checked === "Triggered Sweep"} onChange={this.handleInputChange}>
                                    Triggered Sweep
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <Row>
                            <Col>
                                <Form.Label>
                                    <u>Antenna Position</u>
                                </Form.Label>

                                <Form.Group className="mb-3" controlId="antenna_height">
                                    <Form.Label>Transmit Height:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="antenna_height" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="antenna_dist">
                                    <Form.Label>Separation Distance:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="antenna_dist" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            
                            <Col>
                                <Form.Label><u>Pattern Type</u></Form.Label>
                                <ToggleButtonGroup type="radio" name="pattern_type" defaultValue={"Spherical"}>
                                    <ToggleButton id="pattern_sph" value={"Spherical"} checked={this.state.checked === "Spherical"} onChange={this.handleInputChange}>
                                    Spherical
                                    </ToggleButton>
                                    <ToggleButton id="pattern_pln" value={"Planar"} checked={this.state.checked === "Planar"} onChange={this.handleInputChange}>
                                    Planar
                                    </ToggleButton>
                                    <ToggleButton id="pattern_cyl" value={"Cylindrical"} checked={this.state.checked === "Cylindrical"} onChange={this.handleInputChange}>
                                    Cylindrical
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <h3>Frequency Range</h3>
                            <Col>
                                <Row>
                                    <Form.Label><u>Frequency Range Type</u></Form.Label>
                                    <ToggleButtonGroup type="radio" name="freq_range_type" defaultValue={"Linear"}>
                                        <ToggleButton id="lin_freq" value={"Linear"} checked={this.state.checked === "Linear"} onChange={this.handleInputChange}>
                                        Linear Frequency
                                        </ToggleButton>
                                        <ToggleButton id="log_freq" value={"Log"} checked={this.state.checked === "Log"} onChange={this.handleInputChange}>
                                        Log Frequency
                                        </ToggleButton>
                                        <ToggleButton id="list_freq" value={"List"} checked={this.state.checked === "List"} onChange={this.handleInputChange}>
                                        List Frequency
                                        </ToggleButton>
                                        <ToggleButton id="wireless" value={"Wireless"} checked={this.state.checked === "Wireless"} onChange={this.handleInputChange}>
                                        Wireless Channels
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Row>
                                <Row>
                                    <Form.Label><u>Range Control</u></Form.Label>
                                    <ToggleButtonGroup type="radio" name="freq_range_control" defaultValue={"User"}>
                                        <ToggleButton id="zero_span" value={"Zero"} checked={this.state.checked === "Zero"} onChange={this.handleInputChange}>
                                        Zero Span
                                        </ToggleButton>
                                        <ToggleButton id="default" value={"Default"} checked={this.state.checked === "Default"} onChange={this.handleInputChange}>
                                        Default Bandwidth
                                        </ToggleButton>
                                        <ToggleButton id="user" value={"User"} checked={this.state.checked === "User"} onChange={this.handleInputChange}>
                                        User Defined
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Row>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <u>Frequency Range</u>
                                </Form.Label>

                                <Form.Group className="mb-3" controlId="freq_range">
                                    <Form.Label>Start:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="freq_start" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="freq_range">
                                    <Form.Label>Stop:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="freq_stop" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="freq_range">
                                    <Form.Label>Center:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="freq_center" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="freq_range">
                                    <Form.Label>Span:</Form.Label>
                                    <Form.Control style={{width:'150px', resize:'none', float: 'right'}} type="number" name="freq_span" placeholder="0.0" onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default PositionerParameters;