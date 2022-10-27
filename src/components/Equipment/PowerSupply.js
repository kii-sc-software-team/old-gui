import React from 'react';
import { Button, Container, Form, Row, Col, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import axios from 'axios';


class PowerSupply extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            query: '',
            v_ch1: '',
            v_ch1_read: '',
            curr_ch1: '',
            curr_ch1_read: '',
            output_ch1: false,
            v_ch2: '',
            v_ch2_read: '',
            curr_ch2: '',
            curr_ch2_read: '',
            output_ch2: false,
            v_ch3: '',
            v_ch3_read: '',
            curr_ch3: '',
            curr_ch3_read: '',
            output_ch3: false,
            v_ch4: '',
            v_ch4_read: '',
            curr_ch4: '',
            curr_ch4_read: '',
            output_ch4: false,
            master_output: false,
            recall_control: "Global",
            connection_control: "Close",

            machine: this.props.machine_num,
            current_state: ''
            //considering adding paths and filenames for the load_recall, save_recall functions. As of now we do not use it, but it should be an input box theoretically
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
        }, function () {
            console.log(this.state)
        });
        //console.log(this.state);
    }



    async sendMove(query) {
        let url = `http://127.0.0.1:5000/test/powersupply/${query}`;
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

    //only difference from sendMove is that it does not update the state variables
    async sendMove_noState(query) {
        let url = `http://127.0.0.1:5000/test/powersupply/${query}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                var data = response.data;
                console.log(data);
                console.log(this.state);
                return data;
                // this.setState({
                //     ch1_v: data.ch1_v
                // })
            },
            (error) => {
                console.log(error);
            }
        );
      } 



    ps_setup = e => {
        e.preventDefault();
        this.sendMove_noState(`/connect/${this.state.machine}`);
        this.setState({
            connection_control: "Instantiate"
        })
    }

    ps_close = e => {
        e.preventDefault();
        console.log("Power Supply Connection Closed.");
        this.sendMove_noState(`/close/${this.state.machine}`);
        this.setState({
            connection_control: "Close"
        })
    }

    load_recall = e => {
        e.preventDefault();
        console.log("Power Supply Loaded with recall settings!");
        this.sendMove(`/load_recall/${this.state.recall_control}+${this.state.machine}`);
    }

    save_recall = e => {
        e.preventDefault();
        console.log("Power Supply Saved with recall settings!");
        this.sendMove(`/save_recall/${this.state.machine}`);
    }


    get_voltage = channel => e => {
        e.preventDefault();
        this.sendMove(`/get_voltage/${channel}+${this.state.machine}`);
    }

    set_voltage = channel => e => {
        e.preventDefault();
        this.sendMove(`/set_voltage/${channel}+${this.state['v_ch' + channel]}+${this.state.machine}`);
    }

    read_real_time = e => {
        e.preventDefault();
        this.sendMove(`/read_real_time/${this.state.machine}`);
    }


    get_current = channel => e => {
        e.preventDefault();
        this.sendMove(`/get_current/${channel}+${this.state.machine}`);
    }

    set_current = channel => e => {
        e.preventDefault();
        this.sendMove(`/set_current/${channel}+${this.state['curr_ch' + channel]}+${this.state.machine}`);
    }

    get_output = channel => e => {
        e.preventDefault();
        this.sendMove(`/get_channel_outout_state/${channel}+${this.state.machine}`);
    }

    set_output = channel => e => {
        e.preventDefault();
        var temp_bool;
        temp_bool = !this.state['output_ch' + channel];
        this.sendMove(`/toggle_channel_output_state/${channel}+${temp_bool}+${this.state.machine}`);
    }

    get_output_master = e => {
        e.preventDefault();
        this.sendMove(`/get_master_output_state/${this.state.machine}`);
    }

    set_output_master = e => {
        e.preventDefault();
        var temp_bool;
        temp_bool = !this.state.master_output;
        this.sendMove(`/toggle_master_output_state/${temp_bool}+${this.state.machine}`);
    }


    render() {
        
        return (
            <div>
                <Container>
                    <Form>
                        <Container style={{backgroundColor: '#dde4f0'}}>
                            <Form.Group>
                                <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
                                    <div>
                                        <Row>
                                            &nbsp;
                                            <h3>NGP_800 #{this.state.machine}</h3>
                                            &nbsp;
                                            <Col>
                                                {/* <Button size="lg" variant={'primary'} onClick={this.ps_setup(this.state.machine)}>Instantiate Connection PS #{this.state.machine}</Button> */}
                                                {/* <ToggleButtonGroup type="radio" name="connection_control" defaultValue={"Close"}> */}
                                                <Button  variant={this.state.connection_control === "Instantiate" ? 'success' : 'outline-success'} name="connection_instantiate" onClick={this.ps_setup} onChange={this.handleInputChange}>
                                                     {/* onClick={this.ps_setup}> */}
                                                Instantiate Connection
                                                </Button>
                                                <Button  variant={this.state.connection_control === "Close" ? 'danger' : 'outline-danger'} name="connection_close" onClick={this.ps_close} onChange={this.handleInputChange}>
                                                     {/* onClick={this.ps_close}> */}
                                                Close Connection
                                                </Button>
                                                {/* </ToggleButtonGroup> */}
                                            </Col>
                                            <Col>
                                                <Button variant={'secondary'} onClick={this.load_recall}>Load Recall Settings </Button>
                                                &nbsp;
                                                <ToggleButtonGroup type="radio" name="recall_control" defaultValue={"Global"}>
                                                <ToggleButton  variant={'outline-info'} id="recall_file" value={"File"} checked={this.state.checked === "File"} onChange={this.handleInputChange}>
                                                File
                                                </ToggleButton>
                                                <ToggleButton  variant={'outline-info'} id="recall_global" value={"Global"} checked={this.state.checked === "Global"} onChange={this.handleInputChange}>
                                                Global
                                                </ToggleButton>
                                                </ToggleButtonGroup>
                                            </Col>
                                            <Col>
                                                <Button variant={'secondary'} onClick={this.save_recall}>Save Recall Settings</Button>
                                            </Col>
                                            {/* <Col>
                                                <Button variant={'danger'} size="lg" onClick={this.ps_close}>Close Connection PS #{this.state.machine}</Button>
                                            </Col> */}
                                            &nbsp;
                                            
                                        </Row>
                                        <hr></hr>
                                        &nbsp;
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label style={{textAlign: "left"}}>Channel 1</Form.Label>
                                                    <br/>
                                                    
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch1" placeholder="Ch1 Voltage" value={this.state.v_ch1} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">V</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_voltage(1)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_voltage(1)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch1" placeholder="Ch1 Current" value={this.state.curr_ch1} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">A</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_current(1)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_current(1)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <Button variant={this.state.output_ch1 ? 'success' : 'outline-primary'} onClick={this.set_output(1)} onChange={this.handleInputChange}>CH1 Output</Button>
                                                    <br/>
                                                    <br/>
                                                    
                                                    
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group>
                                                    <Form.Label style={{textAlign: "left"}}>Channel 2</Form.Label>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch2" placeholder="Ch2 Voltage" value={this.state.v_ch2} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">V</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_voltage(2)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_voltage(2)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch2" placeholder="Ch2 Current" value={this.state.curr_ch2} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">A</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm"onClick={this.get_current(2)}>Get</Button>
                                                    <Button size="sm"onClick={this.set_current(2)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <Button variant={this.state.output_ch2 ? 'success' : 'outline-primary'} onClick={this.set_output(2)} onChange={this.handleInputChange}>CH2 Output</Button>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label style={{textAlign: "left"}}>Channel 3</Form.Label>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch3" placeholder="Ch3 Voltage" value={this.state.v_ch3} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">V</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_voltage(3)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_voltage(3)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch3" placeholder="Ch3 Current" value={this.state.curr_ch3} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">A</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm"onClick={this.get_current(3)}>Get</Button>
                                                    <Button size="sm"onClick={this.set_current(3)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <Button variant={this.state.output_ch3 ? 'success' : 'outline-primary'} onClick={this.set_output(3)} onChange={this.handleInputChange}>CH3 Output</Button>
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group>
                                                    <Form.Label style={{textAlign: "left"}}>Channel 4</Form.Label>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch4" placeholder="Ch4 Voltage" value={this.state.v_ch4} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">V</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_voltage(4)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_voltage(4)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <div class="input-group">
                                                        <input type="number" step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch4" placeholder="Ch4 Current" value={this.state.curr_ch4} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">A</span>
                                                        </div>
                                                    </div>
                                                    <Button size="sm" onClick={this.get_current(4)}>Get</Button>
                                                    <Button size="sm" onClick={this.set_current(4)}>Set</Button>
                                                    <br/>
                                                    <br/>
                                                    <Button variant={this.state.output_ch4 ? 'success' : 'outline-primary'} onClick={this.set_output(4)} onChange={this.handleInputChange}>CH4 Output</Button>
                                                </Form.Group>
                                            </Col>
                                            <Button variant={this.state.master_output ? 'success' : 'outline-primary'} size="lg" onClick={this.set_output_master}>Master Output</Button>
                                        </Row>
                                            <hr></hr>
                                        <Row>
                                            <h4>Reading Real Time Measurements</h4>
                                            <Col>
                                            <Form.Group>
                                                <Form.Label>Channel 1</Form.Label>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch1_read" placeholder="Ch1 Voltage" value={this.state.v_ch1_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">V</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch1_read" placeholder="Ch1 Current" value={this.state.curr_ch1_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">A</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            </Col>

                                            <Col>
                                            <Form.Group>
                                                <Form.Label>Channel 2</Form.Label>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch2_read" placeholder="Ch2 Voltage" value={this.state.v_ch2_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">V</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch2_read" placeholder="Ch2 Current" value={this.state.curr_ch2_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">A</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            </Col>

                                            <Col>
                                            <Form.Group>
                                                <Form.Label>Channel 3</Form.Label>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch3_read" placeholder="Ch3 Voltage" value={this.state.v_ch3_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">V</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch3_read" placeholder="Ch3 Current" value={this.state.curr_ch3_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">A</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            </Col>

                                            <Col>
                                            <Form.Group>
                                                <Form.Label>Channel 4</Form.Label>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="v_ch4_read" placeholder="Ch4 Voltage" value={this.state.v_ch4_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">V</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <input type="number" disabled step="any" min={0} max={60} style={{width: "50px", float: "center"}} class="form-control" name="curr_ch4_read" placeholder="Ch4 Current" value={this.state.curr_ch4_read} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">A</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            </Col>

                                            &nbsp;
                                            <br/>
                                            <Button variant={'primary'} size="lg" onClick={this.read_real_time}>Refresh Power Supply #{this.state.machine} Display</Button>
                                        </Row>
                                        &nbsp;
                                    </div>
                            </Form.Group>
                        </Container>
                    </Form>
                </Container>  
            </div>
        )
    }
}

export default PowerSupply;