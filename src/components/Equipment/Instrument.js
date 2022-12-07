import React from 'react';
import { Button, ToggleButton, ToggleButtonGroup, Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';



class Instrument extends React.Component {

    constructor(props) {
        super();
        this.state = {
            instruments: '',
            zna: '0',
            if1_sg: '0',
            lo1_sg: '0',
            sa: '0',
            if_freq: '7',
            if_amp: '-15',
            lo_freq: '21',
            lo_amp: '-5',
            if1_freq: '3',
            if1_amp: '-32',
            lo_start: '19.5',
            lo1_freq: '5.166667',
            lo_stop: '22.5',
            lo_step: '0.5',
            lo_mult: '1',
            lo_div: '1',
            lo1_amp: '0',
            rf_freq: '28',
            conversion: "Upper",
            evm: props.evm,
            setup: false,

            dut: 'kfam',

            second_source: true,

            if2_sg: '0',
            lo2_sg: '0',
            if2_freq: '3',
            if2_amp: '-32',
            lo2_freq: '5.166667',
            lo2_amp: '0',

            if_sg: '0',
            lo_sg: '0',
            // sa: ''
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

    imposeMinMax(el) {
        if(el.value !== ""){
          if(parseInt(el.value) < parseInt(el.min)){
            el.value = el.min;
          }
          if(parseInt(el.value) > parseInt(el.max)){
            el.value = el.max;
          }
        }
      }

    onRunTest = e => {
        console.log(e.cancelable);
        e.preventDefault();
        let query = '';
        // if(this.state.instruments==='three_instruments') {
        query = `${this.state.instruments}+${this.state.if_sg}+${this.state.if_freq}+${this.state.if_amp}+${this.state.lo_sg}+${this.state.lo_start}+${this.state.lo_freq}+${this.state.lo_stop}+${this.state.lo_mult}+${this.state.lo_div}+${this.state.lo_amp}+${this.state.conversion}+${this.state.sa}+${this.state.rf_freq}`
        // }
        this.setupInstruments(query);
        this.setState({
            setup: true
        })
    }

    onSetup = e => {
        console.log(e.cancelable);
        e.preventDefault();
        let query = '';
        if(this.state.instruments==='three_instruments') {
            query = `${this.state.if_sg}+${this.state.lo_sg}+${this.state.sa_fsw}+${this.state.dut}`
        }
        if(this.state.instruments==='zna') {
            query = `${this.state.instruments}+${this.state.if_sg}+${this.state.if_freq}+${this.state.if_amp}+${this.state.lo_sg}+${this.state.lo_start}+${this.state.lo_freq}+${this.state.lo_stop}+${this.state.lo_mult}+${this.state.lo_div}+${this.state.lo_amp}+${this.state.conversion}+${this.state.sa}+${this.state.rf_freq}`
        }
        this.setupInstruments(query);
        this.setState({
            setup: true
        })
    }

    release = e => {
        console.log(e.cancelable);
        e.preventDefault();
        let query = '';
        if(this.state.instruments==='three_instruments') {
            query = `close`
        }
        this.setupInstruments(query);
    }

    async setupInstruments(query=``) {
        // if(this.state.instruments==='three_instruments') {
        //     query = `${this.state.instruments}+${this.state.if_sg}+${this.state.if_freq}+${this.state.if_amp}+${this.state.lo_sg}+${this.state.lo_freq}+${this.state.lo_amp}+${this.state.sa}+${this.state.sa_freq}`
        // }


        let url = `http://127.0.0.1:5000/instruments/setup/${query}`;
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

    setupIFSG1 = e => {
        e.preventDefault();
        this.setupInstruments(`if1_sg/${this.state.if1_sg}+${this.state.if1_freq}+${this.state.if1_amp}`)
    }

    setupIFSG2 = e => {
        e.preventDefault();
        this.setupInstruments(`if2_sg/${this.state.if2_sg}+${this.state.if2_freq}+${this.state.if2_amp}`)
    }

    setupLOSG1 = e => {
        e.preventDefault();
        this.setupInstruments(`lo1_sg/${this.state.lo1_sg}+${this.state.lo1_freq}+${this.state.lo1_amp}`)
    }

    setupLOSG2 = e => {
        e.preventDefault();
        this.setupInstruments(`lo2_sg/${this.state.lo2_sg}+${this.state.lo2_freq}+${this.state.lo2_amp}`)
    }

    setupSA = e => {
        e.preventDefault();
        this.setupInstruments(`sa/${this.state.sa}+${this.state.rf_freq}`)
    }

    releaseIF1 = e => {
        e.preventDefault();
        this.setupInstruments(`release/if1_sg`);
    }
    releaseIF2 = e => {
        e.preventDefault();
        this.setupInstruments(`release/if2_sg`);
    }
    releaseLO1 = e => {
        e.preventDefault();
        this.setupInstruments(`release/lo1_sg`);
    }
    releaseLO2 = e => {
        e.preventDefault();
        this.setupInstruments(`release/lo2_sg`);
    }
    releaseSA = e => {
        e.preventDefault();
        this.setupInstruments(`release/sa`);
    }

    render() {
        
        return (
            <div>
                <Container>
                    <Form>
                        <Container style={{backgroundColor: '#dde4f0'}}>
                            {/* <!-- SYSTEM COMMANDS --> */}
                            <Form.Group>
                                <h4>Instrument Setup</h4>
                                {/* <table border="1">  */}
                                <Row>
                                    {/* <!-- DEVICE --> */}
                                    <Form.Label style={{textAlign: "left"}}>Instrument Selection</Form.Label>
                                    <select class="form-select" name="instruments" aria-label="Default select example"  onChange={this.handleInputChange}>
                                        <option selected>Select Instrument Set</option>
                                        <option value="three_instruments">Three Instrument Setup</option>
                                        <option value="zna">ZNA</option>
                                    </select>
                                </Row>
                                <br/>
                                {this.state.instruments === 'zna' &&
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">IF Freq.</span>
                                                    </div>
                                                    <input type="number" max={5} style={{width: "50px", float: "center"}} class="form-control" name="if_freq" placeholder="IF Freq." value={this.state.if_freq} onChange={this.handleInputChange} onKeyUp={this.imposeMinMax}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">GHz</span>
                                                    </div>
                                                </div>
                                                {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_freq" placeholder="IF Freq." onChange={this.handleInputChange}/> */}
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">IF Amp.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="if_amp" placeholder="IF Amp." value={this.state.if_amp} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">dB</span>
                                                    </div>
                                                </div>
                                                {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_amp" placeholder="IF Amp." onChange={this.handleInputChange}/> */}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO Start.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_start" placeholder="LO Freq." value={this.state.lo_start} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">GHz</span>
                                                    </div>
                                                </div>
                                                {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_freq" placeholder="LO Freq." onChange={this.handleInputChange}/> */}
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO Stop.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_stop" placeholder="LO Amp." value={this.state.lo_stop} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">GHz</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO Step.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_step" placeholder="LO Amp." value={this.state.lo_step} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">GHz</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Conversion</span>
                                                    </div>
                                                    <input style={{width: "50px", float: "center"}} class="form-control" name="conversion" placeholder="Conversion" value={this.state.conversion} onChange={this.handleInputChange}/>
                                                    
                                                </div>
                                                {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_amp" placeholder="LO Amp." onChange={this.handleInputChange}/> */}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO1 Amp.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_amp" placeholder="LO Amp." value={this.state.lo_amp} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">dB</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO Mult.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_mult" placeholder="LO Mult." value={this.state.lo_mult} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Multiplier</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">LO Div.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo_div" placeholder="LO Div." value={this.state.lo_div} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Divider</span>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="input-group">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">RF Freq.</span>
                                                    </div>
                                                    <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="rf_freq" placeholder="RF Freq." value={this.state.rf_freq} onChange={this.handleInputChange}/>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">GHz</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                }
                                {this.state.instruments === 'three_instruments' &&
                                <div>
                                    <Row>
                                        {/* IF #1 Signal Generator */}
                                        <Col>
                                            {/* <!-- IP ADDRESS --> */}
                                            <Form.Label style={{textAlign: "left"}}>IF1 Signal Generator</Form.Label>
                                            <select class="form-select form-select" name='if1_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected>Select IF1 SG</option>
                                                <option value="1">Rohde-Schwarz SMW200A (ETS)</option>
                                                <option value="2">Rohde-Schwarz SMW200A #2 (CalBox)</option>
                                                <option value="3">Rohde-Schwarz SMW200A #3 (Tent)</option>
                                                <option value="4">Rohde-Schwarz SMW200A #4 (CATR)</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                            {this.state.if1_sg !== "0" &&
                                                <Form.Group>
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">IF1 Freq.</span>
                                                        </div>
                                                        <input type="number" max={5} style={{width: "50px", float: "center"}} class="form-control" name="if1_freq" placeholder="IF1 Freq." value={this.state.if1_freq} onChange={this.handleInputChange} onKeyUp={this.imposeMinMax}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">GHz</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_freq" placeholder="IF Freq." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">IF1 Amp.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="if1_amp" placeholder="IF1 Amp." value={this.state.if1_amp} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">dB</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_amp" placeholder="IF Amp." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <Button size='sm' onClick={this.setupIFSG1}>Setup</Button>
                                                    <Button size='sm' variant='danger' onClick={this.releaseIF1}>Release</Button>
                                                </Form.Group>
                                            }
                                        </Col>
                                        {/* LO #1 Signal Generator */}
                                        <Col>
                                            {/* <!-- IP ADDRESS --> */}
                                            <Form.Label style={{textAlign: "left"}}>LO1 Signal Generator</Form.Label>
                                            <select class="form-select form-select" name='lo1_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected>Select LO1 SG</option>
                                                <option value="1">Keysight E8257D (ETS)</option>
                                                <option value="2">Keysight E8257D (CalBox)</option>
                                                <option value="3">Rohde-Schwarz SMW200A #3 (Tent)</option>
                                                <option value="4">Rohde-Schwarz SMW200A #4 (CATR)</option>
                                            </select>
                                            {this.state.lo1_sg !== "0" &&
                                                <Form.Group>
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">LO1 Freq.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo1_freq" placeholder="LO1 Freq." value={this.state.lo1_freq} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">GHz</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_freq" placeholder="LO Freq." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">LO1 Amp.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo1_amp" placeholder="LO1 Amp." value={this.state.lo1_amp} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">dB</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_amp" placeholder="LO Amp." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <Button size='sm' onClick={this.setupLOSG1}>Setup</Button>
                                                    <Button size='sm' variant='danger' onClick={this.releaseLO1}>Release</Button>
                                                </Form.Group>
                                            }
                                            
                                        </Col>
                                        <br/>
                                        <hr/>
                                    </Row>
                                    
                                    <Row>
                                        {/* IF #2 Signal Generator */}
                                        <Col>
                                            {/* <!-- IP ADDRESS --> */}
                                            <Form.Label style={{textAlign: "left"}}>IF2 Signal Generator</Form.Label>
                                            <select class="form-select form-select" name='if2_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option value="1">Rohde-Schwarz SMW200A (ETS)</option>
                                                <option value="2">Rohde-Schwarz SMW200A #2 (CalBox)</option>
                                                <option value="3">Rohde-Schwarz SMW200A #3 (Tent)</option>
                                                <option value="4">Rohde-Schwarz SMW200A #4 (Loaner)</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                            {this.state.if2_sg !== "0" &&
                                                <Form.Group>
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">IF2 Freq.</span>
                                                        </div>
                                                        <input type="number" max={5} style={{width: "50px", float: "center"}} class="form-control" name="if2_freq" placeholder="IF2 Freq." value={this.state.if2_freq} onChange={this.handleInputChange} onKeyUp={this.imposeMinMax}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">GHz</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_freq" placeholder="IF Freq." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">IF2 Amp.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="if2_amp" placeholder="IF2 Amp." value={this.state.if2_amp} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">dB</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="if_amp" placeholder="IF Amp." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <Button size='sm' onClick={this.setupIFSG2}>Setup</Button>
                                                    <Button size='sm' variant='danger' onClick={this.releaseIF2}>Release</Button>
                                                </Form.Group>
                                            }
                                        </Col>
                                        {/* LO #2 Signal Generator */}
                                        <Col>
                                            {/* <!-- IP ADDRESS --> */}
                                            <Form.Label style={{textAlign: "left"}}>LO2 Signal Generator</Form.Label>
                                            <select class="form-select form-select" name='lo2_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected>Select LO2 SG</option>
                                                <option value="1">Keysight E8257D (ETS)</option>
                                                <option value="2">Keysight E8257D #2 (CalBox)</option>
                                                <option value="3">Rohde-Schwarz SMW200A #3 (Tent)</option>
                                                <option value="4">Rohde-Schwarz SMW200A #4 (Loaner)</option>
                                            </select>
                                            {this.state.lo2_sg !== "0" &&
                                                <Form.Group>
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">LO2 Freq.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo2_freq" placeholder="LO2 Freq." value={this.state.lo2_freq} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">GHz</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_freq" placeholder="LO Freq." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">LO2 Amp.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="lo2_amp" placeholder="LO2 Amp." value={this.state.lo2_amp} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">dB</span>
                                                        </div>
                                                    </div>
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_amp" placeholder="LO Amp." onChange={this.handleInputChange}/> */}
                                                    <br/>
                                                    <Button size='sm' onClick={this.setupLOSG2}>Setup</Button>
                                                    <Button size='sm' variant='danger' onClick={this.releaseLO2}>Release</Button>
                                                </Form.Group>
                                            }
                                        </Col>
                                        <br/>
                                        <hr/>
                                    </Row>

                                    <Row style={{width: '50%'}}>
                                        <Col>
                                            {/* <!-- SA Setup --> */}
                                            <Form.Label style={{textAlign: "left"}}>Signal Analyzer</Form.Label>
                                            <select class="form-select form-select" name='sa' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected>Select SA</option>
                                                <option value="1">Rohde-Schwarz FSW #1 (ETS)</option>
                                                <option value="2">Rohde-Schwarz FSW #2 (CalBox)</option>
                                                <option value="3">Rohde-Schwarz FSW #3 (Tent)</option>
                                                <option value="4">Rohde-Schwarz FSW #4 (CATR)</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                            {this.state.sa !== "0" &&
                                                <Form.Group>
                                                    <br/>
                                                    <div class="input-group">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">SA Freq.</span>
                                                        </div>
                                                        <input type="number" style={{width: "50px", float: "center"}} class="form-control" name="rf_freq" placeholder="RF Freq." value={this.state.rf_freq} onChange={this.handleInputChange}/>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">GHz</span>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                                                                        
                                                    {/* <input type="number" style={{width: "100px", float: "center"}} class="form-control form-control-sm" name="lo_amp" placeholder="LO Amp." onChange={this.handleInputChange}/> */}
                                                    <Button size='sm'  onClick={this.setupSA}>Setup</Button>
                                                    <Button size='sm' variant='danger' onClick={this.releaseSA}>Release</Button>
                                                </Form.Group>
                                            }
                                        </Col>
                                    </Row>
                                </div>
                                }
                                </Form.Group>
                            
                                        
                            <br/>
                            
                            <h4>Select Instrument Set</h4>
                            {this.state.instruments === 'three_instruments' &&
                            <div>
                                <Container style={{width: "800px"}}>
                                    <Row>
                                        <Col>
                                            <h5>IF</h5>
                                            <select class="form-select form-select" style={{width: "100"}} name='if_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected></option>
                                                <option value="if1_sg">IF1</option>
                                                <option value="if2_sg">IF2</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                        </Col>
                                        <Col>
                                            <h5>LO</h5>
                                            <select class="form-select form-select" style={{width: "100"}} name='lo_sg' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected></option>
                                                <option value="lo1_sg">LO1</option>
                                                <option value="lo2_sg">LO2</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                        </Col>
                                        
                                        <Col>
                                            <h5>SA</h5>
                                            <select class="form-select form-select" style={{width: "100"}} name='sa_fsw' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                <option selected></option>
                                                <option value="sa">SA</option>
                                                {/* <option value="2">Two</option> */}
                                            </select>
                                        </Col>
                                    </Row>
                                    
                                    
                                    
                                </Container>
                                
                            </div>
                            }
                            <br/>
                                <Form.Group>
                                    <Form.Label>DUT</Form.Label>
                                    <ToggleButtonGroup type="radio" name="dut" defaultValue={"kfam"}>
                                        <ToggleButton variant="outline-dark" id="dut_kfam" value={"kfam"} checked={this.state.checked === "kfam"} onChange={this.handleInputChange}>
                                            KFAM
                                        </ToggleButton>
                                        <ToggleButton variant="outline-dark" id="dut_paam" value={"paam"} checked={this.state.checked === "paam"} onChange={this.handleInputChange}>
                                            PAAM
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Button onClick={this.onSetup}>Setup Instruments</Button>
                                {' '}
                                <Button variant='danger' onClick={this.release}>Release Instruments</Button>
                            {/* <br/> */}
                        </Container>
                        
                    </Form>
                </Container>  
            </div>
        )
    }
}

export default Instrument;