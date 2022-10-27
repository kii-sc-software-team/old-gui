import React from 'react';
import { Container, Form, Row, Col, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
// import ZNASetup from '../Equipment/ZNA';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Instrument from '../Equipment/Instrument';




class PositionerAzEl extends React.Component {

    constructor() {
        super();
        this.state = {
            ax1_high: '180',
            ax1_low: '-180',
            ax1_step: '180',
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
            // rf_start: '26.5',
            // rf_stop: '29.5',
            // rf_step: '0.5',
            // lo_start: '19.66666667',
            // lo_stop: '21.66666667',
            // lo_step: '2.33333333',
            // if_power: '-28',
            // if_freq: '3',
            // lo_power: '0'
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
        let url = `http://127.0.0.1:5000/positioner/iterateAzEl/${this.state.ax1_high}+${this.state.ax1_low}+${this.state.ax1_step}+${this.state.ax1_pos_control}+${this.state.ax2_high}+${this.state.ax2_low}+${this.state.ax2_step}+${this.state.ax2_pos_control}/${this.state.rf_start}+${this.state.rf_stop}+${this.state.rf_step}+${this.state.lo_start}+${this.state.lo_stop}+${this.state.lo_power}+${this.state.if_freq}+${this.state.if_power}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                var data = response.data;
                console.log(data);
                this.setState({header: data.headers, positions: data.positions, zna_pos: data.zna_data});
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
                            <h3>Pattern Measurement (Azimuth & Elevation)</h3>
                            <br/>
                            <Form onSubmit={this.onRunTest}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <u>Primary Axis Control</u>
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

                                            <ToggleButtonGroup type="radio" name="ax1_pos_control" defaultValue={"Azimuth"}>
                                                <ToggleButton variant="outline-dark" id="ax1_phi" value={"Azimuth"} checked={this.state.checked === "Azimuth"} onChange={this.handleInputChange}>
                                                Azimuth Angle
                                                </ToggleButton>
                                                {/* <ToggleButton variant="outline-dark" id="ax1_theta" value={"Elevation"} checked={this.state.checked === "Elevation"} onChange={this.handleInputChange}>
                                                Elevation Angle
                                                </ToggleButton> */}
                                            </ToggleButtonGroup>

                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>

                                            <Form.Label>
                                                <u>Secondary Axis Control</u>
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

                                            <ToggleButtonGroup type="radio" name="ax2_pos_control" defaultValue={"Elevation"}>
                                                {/* <ToggleButton variant="outline-dark" id="ax2_phi" value={"Azimuth"} checked={this.state.checked === "Azimuth"} onChange={this.handleInputChange}>
                                                Azimuth Angle
                                                </ToggleButton> */}
                                                <ToggleButton variant="outline-dark" id="ax2_theta" value={"Elevation"} checked={this.state.checked === "Elevation"} onChange={this.handleInputChange}>
                                                Elevation Angle
                                                </ToggleButton>
                                            </ToggleButtonGroup>

                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr/>
                                <Instrument/>
                                {/* <ZNASetup/> */}
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

export default PositionerAzEl;