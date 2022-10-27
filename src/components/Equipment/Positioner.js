import React from 'react';
import { Container, Form, Row, Col, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';



// var testData = {}

class Positioner extends React.Component {

    constructor() {
        super();

        

        this.state = {
            positioner: '',
            pos_connected: false,
            query: '',
            device_name: '',
            device_ip: '',
            firmware: '',
            set_az: '',
            set_el: '',
            set_th: '',
            set_ph: '',
            ax_control: '',
            set_cr: '',
            set_ncr: '',
            continous_rotation: '',
            rotation_direction: '',
            is_home: '',
            set_speed: '',
            get_speed: '',
            // get_speed_preset: '',
            // set_speed_preset: '',
            get_ax_cp: '',
            set_ax_cp: ''
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

    async sendMove(query) {
        let url = `http://127.0.0.1:5000/positioner/${query}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                var data = response.data;
                console.log(data);
                this.setState(data);
                return data;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    onRunTest = e => {
        e.preventDefault();
        // this.sendMove();
    }

    getId = e => {
        e.preventDefault();
        this.sendMove(`getId`);
    }

    getIP = e => {
        e.preventDefault();
        this.sendMove(`getIP`);
    }

    getAzEl = e => {
        e.preventDefault();
        this.sendMove(`getCPAzEl`);
    }

    setAzEl = e => {
        e.preventDefault();
        this.sendMove(`seekAzEl/${this.state.set_az}/${this.state.set_el}`);
    }

    getThPhi = e => {
        e.preventDefault();
        this.sendMove(`getCPThPh`);
    }

    setThPhi = e => {
        e.preventDefault();
        this.sendMove(`seekThPh/${this.state.set_th}/${this.state.set_ph}`);
    }

    setCR = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/setCR`);
    }

    setNCR = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/setNCR`);
    }

    isCR = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/isCR`);
    }

    rotDir = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/rotation`);
    }

    goHome = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/moveHome`);
    }

    isHome = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/isHome`);
    }

    setSpeed = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/setSpeed/${this.state.set_speed}`);
    }

    getSpeed = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/getSpeed`);
    }

    // setSpeedPreset = e => {
    //     e.preventDefault();
    //     this.sendMove(`${this.state.ax_control}/setSpeedPreset/${this.state.set_speed_preset}`);
    // }

    // getSpeedPreset = e => {
    //     e.preventDefault();
    //     this.sendMove(`${this.state.ax_control}/getSpeedPreset`);
    // }

    setAxisCP = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/setAxisCP/${this.state.set_ax_cp}`);
    }

    getAxisCP = e => {
        e.preventDefault();
        this.sendMove(`${this.state.ax_control}/getAxisCP`);
    }

    positionerInit = e => {
        e.preventDefault();
        this.sendMove(`${this.state.positioner}/init`);
    }


    render() {

        return (
            <div>
                <Container>
                        <Container style={{backgroundColor: '#dde4f0', borderRadius: '20px', borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                            <br/>
                            <h3>Control Positioner</h3>
                            <hr/>
                            <Row>
                                {/* <!-- DEVICE --> */}
                                
                                <Form.Label style={{textAlign: "left"}}>Positioner Selection</Form.Label>
                                <select class="form-select" name="positioner" aria-label="Default select example"  onChange={this.handleInputChange}>
                                    <option selected>Select Positioner</option>
                                    <option value="ets">ETS</option>
                                    <option value="catr">Compact Range</option>
                                </select>
                                <Button onClick={this.positionerInit}>Connect</Button>
                            </Row>
                            <br/>

                            { this.state.pos_connected  &&
                            <div>
                            <Form>
                                <Container>
                                <Form.Group>
                                    <Container>
                                    {/* <br/> */}
                                    <h6>System</h6>
                                    {/* <table border="1">  */}
                                    <Row>
                                        {/* <!-- DEVICE --> */}
                                        <Form.Label style={{textAlign: "left"}}>Device</Form.Label>
                                        <Form.Control style={{width:'300px', resize:'none'}} name="device_name" value={this.state.device_name} placeholder="Device Name" onChange={this.handleInputChange}/>
                                        <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.getId}>GET</Button>
                                    </Row>
                                    <Row>
                                        {/* <!-- IP ADDRESS --> */}
                                        <Form.Label style={{textAlign: "left"}}>IP Address</Form.Label>
                                        <Form.Control style={{width:'300px', resize:'none'}} name="device_ip" value={this.state.device_ip} placeholder="Device IP" onChange={this.handleInputChange}/>
                                        <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.getIP}>GET</Button>
                                        {/* <Button size="sm" style={{width:'50px', resize:'none'}}>SET</Button> */}
                                    </Row>
                                    </Container>
                                </Form.Group>
                                <br/>
                                <h6>Set Cordinates</h6>
                                    <Form.Group>
                                        <Container>
                                        <Row>
                                            {/* <Col> */}
                                                <Form.Label style={{textAlign: "left"}}>Azimuth and Elevation</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'none'}} name="set_az" value={this.state.set_az} placeholder="Azimuth" onChange={this.handleInputChange}/>
                                                <Form.Control style={{width:'200px', resize:'none'}} name="set_el" value={this.state.set_el} placeholder="Elevation" onChange={this.handleInputChange}/>
                                                <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.setAzEl}>SET</Button>
                                                <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.getAzEl}>GET</Button>

                                            {/* </Col> */}
                                        </Row>
                                        <br/>
                                        <Row>
                                                <Form.Label style={{textAlign: "left"}}>Theta and Phi</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'none'}} name="set_th" value={this.state.set_th} placeholder="Theta" onChange={this.handleInputChange}/>
                                                <Form.Control style={{width:'200px', resize:'none'}} name="set_ph" value={this.state.set_ph} placeholder="Phi" onChange={this.handleInputChange}/>
                                                <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.setThPhi}>SET</Button>
                                                <Button size="sm" style={{width:'50px', resize:'none'}} onClick={this.getThPhi}>GET</Button>
                                        </Row>
                                        </Container>
                                    </Form.Group>
                                </Container>
                            </Form>


                            <hr/>
                            <h5>Axis Control</h5>
                            <Form onSubmit={this.onRunTest}>
                                <ToggleButtonGroup type="radio" name="ax_control">
                                    <ToggleButton variant="outline-dark" id="ax1_phi" value={"Phi"} checked={this.state.checked === "Phi"} onChange={this.handleInputChange}>
                                    Phi Axis
                                    </ToggleButton>
                                    <ToggleButton variant="outline-dark" id="ax1_theta" value={"Theta"} checked={this.state.checked === "Theta"} onChange={this.handleInputChange}>
                                    Theta Axis
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                <Form.Group>
                                <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.setCR}>Set Continous Rotation</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.set_cr} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.setNCR}>Set Noncontinous Rotation</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.set_ncr} onChange={this.handleInputChange}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.isCR}>Check Continous Rotation</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.continous_rotation} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.rotDir}>Get Rotation Direction</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.rotation_direction} onChange={this.handleInputChange}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.goHome}>Move to Home</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.is_home} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.isHome}>Check if Home</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.is_home} onChange={this.handleInputChange}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.setSpeed}>Set Speed</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.set_speed} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.getSpeed}>Get Speed</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.get_speed} />
                                    </Col>
                                </Row>
                                {/* <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.setSpeedPreset}>Set Speed Preset</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.set_speed_preset} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.getSpeedPreset}>Get Speed Preset</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} value={this.state.get_speed_preset} onChange={this.handleInputChange}/>
                                    </Col>
                                </Row> */}
                                <br/>
                                <Row>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.setAxisCP}>Set Current Position</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} name="set_ax_cp" value={this.state.set_ax_cp} onChange={this.handleInputChange}/>
                                    </Col>
                                    <Col>
                                        <Button size="sm" style={{width:'200px', resize:'none'}} onClick={this.getAxisCP}>Get Current Position</Button>
                                    </Col>
                                    <Col xs sm md lg = "2">
                                        <Form.Control style={{width:'50px', resize:'none'}} name="get_ax_cp" value={this.state.get_ax_cp}/>
                                    </Col>
                                </Row>
                            </Form.Group>

                                <br/>
                                <Button type= "submit">Run Test</Button>
                            </Form>
                            </div>
                            }
                        </Container>
                        <br/>
                </Container>
            </div>
        )
    }
}

export default Positioner;