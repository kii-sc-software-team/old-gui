import React from 'react';
import {Container, Form, Row, Collapse} from 'react-bootstrap';
import PowerSupply from './PowerSupply';


class PowerSupplies extends React.Component {



    constructor(props) {
        super();
        this.state = {
            ps1: false,
            ps2: false,
            ps3: false
            //considering adding paths and filenames for the load_recall, save_recall functions. As of now we do not use it, but it should be an input box theoretically
        }
    }


    render() {
        
        return (
            <div>
                <Container>
                    <Form>
                        <Container style={{backgroundColor: '#dde4f0'}}>
                            <Form.Group>
                                <br/>
                                <h3>Power Supply Setup</h3>
                                <br/>
                                <Row>
                                    
                                    <h5> Instrument Selection:</h5>
                                    <h6>Each slider controls a unique power supply.</h6>
                                    &nbsp;
                                    
                                    {['switch'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="NGP_800_1"
                                                name="ps1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                onClick={(e) => this.setState(prevState => ({ps1: !prevState.ps1}))}
                                            />
                                            <Form.Check
                                                inline
                                                label="NGP_800_2"
                                                name="ps2"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                onClick={(e) => this.setState(prevState => ({ps2: !prevState.ps2}))}
                                            />
                                            <Form.Check
                                                inline
                                                label="NGP_800_3"
                                                name="ps3"
                                                type={type}
                                                id={`inline-${type}-3`}
                                                onClick={(e) => this.setState(prevState => ({ps3: !prevState.ps3}))}
                                            />
                                        </div>
                                    ))}
                                </Row>
                                 
                            </Form.Group>
                            <Collapse in={this.state.ps1}>
                                <div>
                                    {this.state.ps1 === true &&
                                                                
                                        <PowerSupply machine_num={1}/>   
                                    }
                                </div>
                            </Collapse>

                            <Collapse in={this.state.ps2}>
                                <div>
                                    {this.state.ps2 === true &&
                                                                
                                        <PowerSupply machine_num={2}/>   
                                    }
                                </div>
                            </Collapse>

                            <Collapse in={this.state.ps3}>
                                <div>
                                    {this.state.ps3 === true &&
                                                                
                                        <PowerSupply machine_num={3}/>   
                                    }
                                </div>
                            </Collapse>
                        </Container>
                    </Form>
                </Container>  
            </div>
        )
    }
}

export default PowerSupplies;