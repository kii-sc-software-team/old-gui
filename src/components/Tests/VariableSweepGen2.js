import React from 'react';
import { Container, Form, Row, Col, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Instrument from '../Equipment/Instrument';
import { Slider, Typography } from '@mui/material';

const TX_VARIABLES = [

    { id: 'PA_Bias', min: 1, max: 7, title: 'PA' },
    { id: 'DA_Bias', min: 1, max: 7, title: 'DA' },
    { id: 'BDVGA_TX_Bias', min: 1, max: 7, title: 'BD VGA Bias' },
    // { id: 'bd_vga_cs', min: 1, max: 15, title: 'Uni-VGA CS' },
    { id: 'tx_d_ba', min: 1, max: 7, title: 'DisNBA' },
    // { id: 'tx_d_ba_cs', min: 1, max: 15, title: 'DisNBA CS' },

    // { id: 'tx_if_diff', min: 1, max: 3, title: 'TXIF' },
    { id: 'LO_Amp_1', min: 1, max: 7, title: 'LO Amp 1' },
    { id: 'LO_Amp_2', min: 1, max: 7, title: 'LO Amp 2' },
    // { id: 'txmx', min: 1, max: 3, title: 'TXMX' },
    { id: 'IF_VGA_Bias_N', min: 1, max: 7, title: 'IF VGA N Bias' },
    { id: 'IF_VGA_Bias_S', min: 1, max: 7, title: 'IF VGA S Bias' },

    // { id: 'if_lo_driver_bias', min: 1, max: 7, title: 'IF LO Driver Bias' }
]


const RX_VARIABLES = [
{ id: 'lna1', min: 1, max: 7, title: 'LNA1' },
{ id: 'lna2', min: 1, max: 7, title: 'LNA2' },
{ id: 'lna3', min: 1, max: 7, title: 'LNA3' },
// { id: 'rsv_rfc', min: 1, max: 15, title: 'RSV RFC'},
{ id: 'rx_d_ba', min: 1, max: 7, title: 'DisNBA' },
{ id: 'rx_d_ba_cs', min: 1, max: 15, title: 'DisNBA CS' },

{ id: 'rxrf', min: 1, max: 3, title: 'RX RF' },
// { id: 'rxrf_cs', min: 1, max: 15, title: 'RX RF CS' },
{ id: 'rxmx', min: 1, max: 3, title: 'RX MX' },
{ id: 'rx_if_diff', min: 1, max: 3, title: 'RX IF Diff'},

{ id: 'if_lo_driver_bias', min: 1, max: 7, title: 'IF LO Driver Bias' }
]

const TX_MIXER_SETTINGS = [
    { id: 'LO_Amp_1', min: 0, max: 7, title: 'LO Amp 1', pol: ['V','H'] },
    { id: 'LO_Amp_2', min: 0, max: 7, title: 'LO Amp 2', pol: ['V','H'] },
    { id: 'Mixer_S', min: 0, max: 7, title: 'Mixer S', pol: ['H'] },
    { id: 'Mixer_N', min: 0, max: 7, title: 'Mixer N', pol: ['V'] },
    { id: 'IF_VGA_Bias_S', min: 0, max: 7, title: 'IF VGA S Bias', pol: ['H'] },
    { id: 'IF_VGA_Bias_N', min: 0, max: 7, title: 'IF VGA N Bias', pol: ['V'] },
    { id: 'IF_VGA_TX_S_CS', min: 0, max: 7, title: 'IF VGA S CS', pol: ['H'] },
    { id: 'IF_VGA_TX_N_CS', min: 0, max: 7, title: 'IF VGA N CS', pol: ['V'] }
]


const RFC_TX_AGC_SETTINGS = [
    { id: 'PA_Bias', min: 0, max: 7, title: 'PA', pol: ['V','H'] },
    { id: 'DA_Bias', min: 0, max: 7, title: 'DA', pol: ['V','H'] },
    { id: 'BDVGA_TX_Bias', min: 0, max: 7, title: 'BD VGA Bias', pol: ['V','H'] },
    { id: 'DisN_BA_TX_S_Bias', min: 0, max: 7, title: 'DisNBA S Bias', pol: ['H'] },
    { id: 'DisN_BA_TX_N_Bias', min: 0, max: 7, title: 'DisNBA N Bias', pol: ['V'] }
]

class VariableSweepGen2 extends React.Component {

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
            // lo_start: '19.66666667',
            // lo_stop: '21.66666667',
            // lo_step: '2.33333333',
            if_power: '-28',
            if_freq: '3',
            lo_power: '0',

            trx_mode: '',
            if_3_7: '',

            sweep_method: '',
            
            num_genes: '',
            num_gen: '',
            parents: '',
            sol_per_pop: '',
            parent_selection: '',
            keep_parents: '',
            mutation_type: '',
            crossover_type: '',
            mut_num_genes: '',
            mut_percent: '',

            pop_size: '50',
            n_offsprings: '25',
            sampling: 'int_random',
            crossover: 'int_sbx',
            x_prob: '0.5',
            x_eta: '15',
            mutation: 'int_pm',
            m_eta: '20',
            elim_duplicates: 'True',
            n_gen: '5',

            group: 'AGC',


            PA_Bias: [1,7],
            DA_Bias: [1,7],
            BDVGA_TX_Bias: [1,7],
            DisN_BA_TX_S_Bias: [1,7],
            DisN_BA_TX_N_Bias: [1,7],

            LO_Amp_1: [1,7],
            LO_Amp_2: [1,7],
            Mixer_S: [1,7],
            Mixer_N: [1,7],
            IF_VGA_Bias_N: [1,7],
            IF_VGA_Bias_S: [1,7],            



            lna1: [1,7],
            lna2: [1,7],
            lna3: [1,7],
            rsv_rfc: [1,15],
            rx_d_ba: [1,7],
            rx_d_ba_cs: [1,15],
            
            

            if_start: -40,
            if_stop: -30,
            if_step: 1,
            if_range: [-40,-30],

            lo_start: 7,
            lo_stop: 7,
            lo_step: 1,
            lo_range: [-5,5],

            power_obj: '',
            evm_target: 3

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

    sweepVarsTX = e => {
        e.preventDefault();
        let tx_settings = {};
        if (this.state.group === 'MIXER') {
            tx_settings = {
                'IF_VGA_Bias_S': this.state.IF_VGA_Bias_S,
                'IF_VGA_Bias_N': this.state.IF_VGA_Bias_N, 
                'LO_Amp_1': this.state.LO_Amp_1, 
                'LO_Amp_2': this.state.LO_Amp_2,
                'Mixer_S': this.state.Mixer_S, 
                'Mixer_N': this.state.Mixer_N
            }
        }
        if (this.state.group === 'AGC') {
            tx_settings = {
                'PA_Bias': this.state.PA_Bias, 
                'DA_Bias': this.state.DA_Bias, 
                'BDVGA_TX_Bias': this.state.BDVGA_TX_Bias, 
                // 'bd_vga_cs': this.state.bd_vga_cs, 
                'DisN_BA_TX_S_Bias': this.state.DisN_BA_TX_S_Bias, 
                'DisN_BA_TX_N_Bias': this.state.DisN_BA_TX_N_Bias, 
                // 'tx_d_ba_cs': this.state.tx_d_ba_cs,
            }
        }
        let queryObj = tx_settings
        
        this.makePostRequest('http://127.0.0.1:5000/test_variables', queryObj);
    }

    sweepVarsRX = e => {
        e.preventDefault();
        let rx_settings = { 
            "lna1": this.state.lna1,
            "lna2": this.state.lna2,
            "lna3": this.state.lna3,
            "rsv_rfc": this.state.rsv_rfc,
            "rx_d_ba": this.state.rx_d_ba,
            "rx_d_ba_cs": this.state.rx_d_ba_cs,
            "rxrf": this.state.rxrf,
            // "rxrf_cs": this.state.rxrf_cs,
            "rxmx": this.state.rxmx,
            "rx_if_diff": this.state.rx_if_diff
        }
        let queryObj = rx_settings
        
        this.makePostRequest('http://127.0.0.1:5000/test_variables', queryObj);
    }


    sweepIF = e => {
        console.log(e.cancelable);

        e.preventDefault();
        // this.sendMove(`${this.state.pa_low}+${this.state.pa_high}+${this.state.da_low}+${this.state.da_high}+${this.state.bd_vga_low}+${this.state.bd_vga_high}+${this.state.bd_vga_cs_low}+${this.state.bd_vga_cs_high}+${this.state.d_ba_low}+${this.state.d_ba_high}+${this.state.d_ba_cs_low}+${this.state.d_ba_cs_high}+${this.state.if_vga_n_ba_low}+${this.state.if_vga_n_ba_high}+${this.state.mx_da_low}+${this.state.mx_da_high}+${this.state.mx_vga_s1_low}+${this.state.mx_vga_s1_high}+${this.state.mx_vga_s2_low}+${this.state.mx_vga_s2_high}+${this.state.tx_if1_gain_low}+${this.state.tx_if1_gain_high}+${this.state.tx_if1_bias_low}+${this.state.tx_if1_bias_high}+${this.state.tx_if2_gain_low}+${this.state.tx_if2_gain_high}+${this.state.tx_if2_bias_low}+${this.state.tx_if2_bias_high}+${this.state.act_balun_ba_low}+${this.state.act_balun_ba_high}+${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}`);
        if (this.state.sweep_method === 'brute_force') {   
            this.sendMove(`if_sweep/${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}`);
        }
        let query = ``;
        if (this.state.sweep_method === 'nsga2') {   
            query = `nsga2/${this.state.pop_size}+${this.state.n_offsprings}+${this.state.sampling}+${this.state.crossover}+${this.state.x_prob}+${this.state.x_eta}+${this.state.mutation}+${this.state.m_eta}+${this.state.elim_duplicates}+${this.state.n_gen}/${this.state.if_range[0]}+${this.state.if_range[1]}+${this.state.lo_range[0]}+${this.state.lo_range[1]}+${this.state.evm_target}+${this.state.power_obj}`
            this.sendMove(query);
        }
        // let query = ``;
        if (this.state.sweep_method === 'genetic'){
            query = `genetic/${this.state.num_gen}+${this.state.parents}+${this.state.num_genes}+${this.state.sol_per_pop}+${this.state.keep_parents}+${this.state.parent_selection}+${this.state.mutation_type}+${this.state.crossover_type}+${this.state.mut_percent}+${this.state.mut_num_genes}`
            this.sendMove(query);
        }
    }

    sweepLO = e => {
        console.log(e.cancelable);

        e.preventDefault();
        // this.sendMove(`${this.state.pa_low}+${this.state.pa_high}+${this.state.da_low}+${this.state.da_high}+${this.state.bd_vga_low}+${this.state.bd_vga_high}+${this.state.bd_vga_cs_low}+${this.state.bd_vga_cs_high}+${this.state.d_ba_low}+${this.state.d_ba_high}+${this.state.d_ba_cs_low}+${this.state.d_ba_cs_high}+${this.state.if_vga_n_ba_low}+${this.state.if_vga_n_ba_high}+${this.state.mx_da_low}+${this.state.mx_da_high}+${this.state.mx_vga_s1_low}+${this.state.mx_vga_s1_high}+${this.state.mx_vga_s2_low}+${this.state.mx_vga_s2_high}+${this.state.tx_if1_gain_low}+${this.state.tx_if1_gain_high}+${this.state.tx_if1_bias_low}+${this.state.tx_if1_bias_high}+${this.state.tx_if2_gain_low}+${this.state.tx_if2_gain_high}+${this.state.tx_if2_bias_low}+${this.state.tx_if2_bias_high}+${this.state.act_balun_ba_low}+${this.state.act_balun_ba_high}+${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}`);
        this.sendMove(`lo_sweep/${this.state.if_start}+${this.state.if_stop}+${this.state.if_step}+${this.state.lo_start}+${this.state.lo_stop}+${this.state.lo_step}`);
        // this.sendMove();
    }

    render() {


        return (
            <div>
                <Container>
                    {/* <Row> */}
                        <Container style={{backgroundColor: '#dde4f0'}}>
                        {/* <Col> */}
                            <br/>
                            <h3>Variable Sweep</h3>
                            <br/>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>TRX Mode</Form.Label>
                                            <ToggleButtonGroup type="radio" name="trx_mode" style={{float: "right"}}>
                                                <ToggleButton variant="outline-dark" id="rx" value={"RX"} checked={this.state.checked === "RX"} onChange={this.handleInputChange}>
                                                RX
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="tx" value={"TX"} checked={this.state.checked === "TX"} onChange={this.handleInputChange}>
                                                TX
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Group</Form.Label>
                                            <ToggleButtonGroup type="radio" name="group" style={{float: "right"}} defaultValue={"AGC"}>
                                                <ToggleButton variant="outline-dark" id="mixer" value={"MIXER"} checked={this.state.checked === "MIXER"} onChange={this.handleInputChange}>
                                                MIXER
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="agc" value={"AGC"} checked={this.state.checked === "AGC"} onChange={this.handleInputChange}>
                                                AGC
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Label style={{textAlign: "left"}}>Sweep Method</Form.Label>
                                <select class="form-select" name="sweep_method" aria-label="Default select example"  onChange={this.handleInputChange}>
                                    <option selected>Select Sweep Method</option>
                                    <option value="brute_force">Brute Force</option>
                                    {/* <option value="genetic">Genetic Algorithm</option> */}
                                    <option value="nsga2">NSGA2</option>
                                </select>
                                <br/>
                                {this.state.sweep_method === "brute_force" &&
                                <Row>
                                    {/* <Col> */}
                                        <Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Row>
                                                    <Col xs>
                                                        <Form.Label>Variables:</Form.Label>
                                                    </Col>
                                                    <Col md>
                                                        <Form.Label style={{float:'left'}}>Range:</Form.Label>                                                    
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                            {this.state.trx_mode === 'TX' &&
                                                <div>
                                                    {this.state.group === 'MIXER' &&
                                                        <div>
                                                            {TX_MIXER_SETTINGS.map(st => (
                                                                <div>
                                                                    <Row>
                                                                        <Col>
                                                                            <Typography id="track-false-slider" gutterBottom>
                                                                                {st.title}:
                                                                            </Typography>
                                                                        </Col>
                                                                        <Col>
                                                                            <Slider 
                                                                                name={st.id}
                                                                                value={this.state[st.id]} 
                                                                                onChange={this.handleInputChange} 
                                                                                marks
                                                                                min={st.min}
                                                                                max={st.max}
                                                                                valueLabelDisplay="auto"
                                                                            />
                                                                        </Col>
                                                                    </Row>                                                                    
                                                                </div>
                                                            ))}
                                                        </div>
                                                    }
                                                    {this.state.group === 'AGC' &&
                                                        <div>
                                                            {RFC_TX_AGC_SETTINGS.map(st => (
                                                                <div>
                                                                    <Row>
                                                                        <Col>
                                                                            <Typography id="track-false-slider" gutterBottom>
                                                                                {st.title}:
                                                                            </Typography>
                                                                        </Col>
                                                                        <Col>
                                                                            <Slider 
                                                                                name={st.id}
                                                                                value={this.state[st.id]} 
                                                                                onChange={this.handleInputChange} 
                                                                                marks
                                                                                min={st.min}
                                                                                max={st.max}
                                                                                valueLabelDisplay="auto"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    
                                                                </div>
                                                            ))}
                                                        </div>    
                                                    }                                                    
                                                    <br/>
                                                    <Button onClick={this.sweepVarsTX}>Set Variables</Button>
                                                </div>
                                            }
                                            {this.state.trx_mode === 'RX' &&
                                            <div>
                                                {RX_VARIABLES.map(st => (
                                                    <div>
                                                        <Row>
                                                            <Col>
                                                                <Typography id="track-false-slider" gutterBottom>
                                                                    {st.title}:
                                                                </Typography>
                                                            </Col>
                                                            <Col>
                                                                <Slider 
                                                                    name={st.id}
                                                                    // aria-label="rfc0_phase" 
                                                                    value={this.state[st.id]} 
                                                                    onChange={this.handleInputChange} 
                                                                    // step={11.25}
                                                                    marks
                                                                    min={st.min}
                                                                    max={st.max}
                                                                    valueLabelDisplay="auto"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        
                                                    </div>
                                                ))}
                                                
                                                    <Button onClick={this.sweepVarsRX}>Set Variables</Button>
                                                
                                                </div>
                                            }
                                        </Form.Group>
                                </Row>
                                }
                                {this.state.sweep_method === "genetic" &&
                                <Row>
                                    
                                    <Col>
                                    <h5>Genetic Algorithm Parameters</h5>
                                    <br/>
                                    <Form.Group className="mb-3" controlId="rfcs">
                                        <Form.Label># of Genes:</Form.Label>
                                        <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="num_genes" placeholder="# of Genes" value={this.state.num_genes} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="rfcs">
                                        <Form.Label># of Gen.:</Form.Label>
                                        <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="num_gen" placeholder="# of Gen." value={this.state.num_gen} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="rfcs">
                                        <Form.Label># of Parents:</Form.Label>
                                        <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="parents" placeholder="# of Parents." value={this.state.parents} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="rfcs">
                                        <Form.Label># Solutions per Generations:</Form.Label>
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
                                    </Col>

                                    <Col>
                                    {/* <Col> */}
                                    <h5>Variable Ranges</h5>
                                        <Form.Group>
                                            {/* <Form.Label>
                                                <u>Variables</u>
                                            </Form.Label> */}
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Row>
                                                    <Col xs>
                                                        <Form.Label>Variables:</Form.Label>
                                                    </Col>
                                                    <Col md>
                                                        <Form.Label style={{float:'left'}}>Range:</Form.Label>                                                    
                                                    </Col>
                                                    {/* <Col md>
                                                        <Form.Label style={{float:'left'}}>Upper Limit:</Form.Label>                                                   
                                                    </Col> */}
                                                </Row>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Row>
                                                {this.state.trx_mode === 'TX' &&
                                                <div>
                                                    {TX_VARIABLES.map(st => (
                                                        <div>
                                                            <Row>
                                                                <Col>
                                                                    <Typography id="track-false-slider" gutterBottom>
                                                                        {st.title}:
                                                                    </Typography>
                                                                </Col>
                                                                <Col>
                                                                    <Slider 
                                                                        name={st.id}
                                                                        // aria-label="rfc0_phase" 
                                                                        value={this.state[st.id]} 
                                                                        onChange={this.handleInputChange} 
                                                                        // step={11.25}
                                                                        marks
                                                                        min={st.min}
                                                                        max={st.max}
                                                                        valueLabelDisplay="auto"
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            
                                                        </div>
                                                    ))}
                                                    
                                                    <br/>
                                                    <Button onClick={this.sweepVarsTX}>Set Variables</Button>
                                                </div>
                                            }
                                            {this.state.trx_mode === 'RX' &&
                                            <div>
                                                {RX_VARIABLES.map(st => (
                                                    <div>
                                                        <Row>
                                                            <Col>
                                                                <Typography id="track-false-slider" gutterBottom>
                                                                    {st.title}:
                                                                </Typography>
                                                            </Col>
                                                            <Col>
                                                                <Slider 
                                                                    name={st.id}
                                                                    // aria-label="rfc0_phase" 
                                                                    value={this.state[st.id]} 
                                                                    onChange={this.handleInputChange} 
                                                                    // step={11.25}
                                                                    marks
                                                                    min={st.min}
                                                                    max={st.max}
                                                                    valueLabelDisplay="auto"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        
                                                    </div>
                                                ))}
                                                
                                                    <Button onClick={this.sweepVarsRX}>Set Variables</Button>
                                                
                                                </div>
                                            }
                                                </Row>
                                            </Form.Group>
                                        </Form.Group>
                                    </Col>
                                <Button onClick={this.sweepIF}>Run Test</Button>
                                </Row>

                                }
                                {this.state.sweep_method === "nsga2" &&
                                    <Row>
                                    
                                        <Col>
                                            <h5>NSGA2 Algorithm Parameters</h5>
                                            <br/>

                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>Pop. Size:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="pop_size" placeholder="Population Size" value={this.state.pop_size} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label># Offsprings:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="n_offsprings" placeholder="# of Offsprings" value={this.state.n_offsprings} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label style={{textAlign: "left"}}>Sampling </Form.Label>
                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="sampling" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                    <option>Sampling Selection</option>
                                                    <option selected value="int_random">Random</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label style={{textAlign: "left"}}>Crossover Type </Form.Label>
                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="crossover" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                    <option>Crossover Type</option>
                                                    <option selected value="int_sbx">SBX</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>X Prob.:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="x_prob" placeholder="Prob. of Crossover" value={this.state.x_prob} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>X ETA:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="x_eta" placeholder="Crossover ETA" value={this.state.x_eta} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            
                                            <Form.Group>
                                                <Form.Label style={{textAlign: "left"}}>Mutation Type </Form.Label>
                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="mutation" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                    <option>Mutation Type</option>
                                                    <option selected value="int_pm">PM</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>M ETA:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="m_eta" placeholder="Mutation ETA" value={this.state.m_eta} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            
                                            <Form.Group>
                                                <Form.Label>Eliminate Duplicates:</Form.Label>
                                                <ToggleButtonGroup type="radio" name="elim_duplicates" defaultValue={"True"} style={{width:'200px', resize:'auto', float: 'right'}}>
                                                    <ToggleButton variant="outline-dark" id="elim_dup" value={"True"} checked={this.state.checked === "True"} onChange={this.handleInputChange}>
                                                    True
                                                    </ToggleButton>
                                                    <ToggleButton variant="outline-dark" id="keep_dup" value={"False"} checked={this.state.checked === "False"} onChange={this.handleInputChange}>
                                                    False
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label># Generations:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="n_gen" placeholder="# of Gen." value={this.state.n_gen} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Form.Label>EVM Target %:</Form.Label>
                                                <Form.Control style={{width:'200px', resize:'auto', float: 'right'}} type="number" name="evm_target" placeholder="EVM Target %" value={this.state.evm_target} onChange={this.handleInputChange}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label style={{textAlign: "left"}}>Power Obj. </Form.Label>
                                                <select style={{width: '200px', float: 'right'}} class="form-select" name="power_obj" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                    <option selected>Select Power Optimization</option>
                                                    <option value="power_in">Power In</option>
                                                    <option value="power_out">Power Out</option>
                                                </select>
                                            </Form.Group>
                                    
                                    </Col>

                                    <Col>
                                    {/* <Col> */}
                                    <h5>Variable Ranges</h5>
                                        <Form.Group>
                                            {/* <Form.Label>
                                                <u>Variables</u>
                                            </Form.Label> */}
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Row>
                                                    <Col xs>
                                                        <Form.Label>Variables:</Form.Label>
                                                    </Col>
                                                    <Col md>
                                                        <Form.Label style={{float:'left'}}>Range:</Form.Label>                                                    
                                                    </Col>
                                                    {/* <Col md>
                                                        <Form.Label style={{float:'left'}}>Upper Limit:</Form.Label>                                                   
                                                    </Col> */}
                                                </Row>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="rfcs">
                                                <Row>
                                                    {this.state.trx_mode === 'TX' &&
                                                    <div>
                                                        {this.state.group === 'MIXER' &&
                                                            <div>
                                                                {TX_MIXER_SETTINGS.map(st => (
                                                                    <div>
                                                                        <Row>
                                                                            <Col>
                                                                                <Typography id="track-false-slider" gutterBottom>
                                                                                    {st.title}:
                                                                                </Typography>
                                                                            </Col>
                                                                            <Col>
                                                                                <Slider 
                                                                                    name={st.id}
                                                                                    value={this.state[st.id]} 
                                                                                    onChange={this.handleInputChange} 
                                                                                    marks
                                                                                    min={st.min}
                                                                                    max={st.max}
                                                                                    valueLabelDisplay="auto"
                                                                                />
                                                                            </Col>
                                                                        </Row>                                                                    
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }
                                                        {this.state.group === 'AGC' &&
                                                            <div>
                                                                {RFC_TX_AGC_SETTINGS.map(st => (
                                                                    <div>
                                                                        <Row>
                                                                            <Col>
                                                                                <Typography id="track-false-slider" gutterBottom>
                                                                                    {st.title}:
                                                                                </Typography>
                                                                            </Col>
                                                                            <Col>
                                                                                <Slider 
                                                                                    name={st.id}
                                                                                    value={this.state[st.id]} 
                                                                                    onChange={this.handleInputChange} 
                                                                                    marks
                                                                                    min={st.min}
                                                                                    max={st.max}
                                                                                    valueLabelDisplay="auto"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        
                                                                    </div>
                                                                ))}
                                                            </div>    
                                                        }                                                    
                                                        <br/>
                                                        <Button onClick={this.sweepVarsTX}>Set Variables</Button>
                                                    </div>
                                                    }
                                            {this.state.trx_mode === 'RX' &&
                                            <div>
                                                {RX_VARIABLES.map(st => (
                                                    <div>
                                                        <Row>
                                                            <Col>
                                                                <Typography id="track-false-slider" gutterBottom>
                                                                    {st.title}:
                                                                </Typography>
                                                            </Col>
                                                            <Col>
                                                                <Slider 
                                                                    name={st.id}
                                                                    // aria-label="rfc0_phase" 
                                                                    value={this.state[st.id]} 
                                                                    onChange={this.handleInputChange} 
                                                                    // step={11.25}
                                                                    marks
                                                                    min={st.min}
                                                                    max={st.max}
                                                                    valueLabelDisplay="auto"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        
                                                    </div>
                                                ))}
                                                
                                                    <Button onClick={this.sweepVarsRX}>Set Variables</Button>
                                                
                                                </div>
                                            }
                                                </Row>
                                            </Form.Group>
                                        </Form.Group>
                                    </Col>
                                    <br/>
                                    <br/>
                                    
                                        <Row>
                                            <Col>
                                                    <Typography id="track-false-slider" gutterBottom>
                                                        IF Range:
                                                    </Typography>
                                                </Col>
                                                <Col>
                                                    <Slider 
                                                        name='if_range'
                                                        // aria-label="rfc0_phase" 
                                                        value={this.state.if_range} 
                                                        onChange={this.handleInputChange} 
                                                        // step={11.25}
                                                        marks
                                                        min={-40}
                                                        max={15}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Col>
                                            <Col>
                                                <Typography id="track-false-slider" gutterBottom>
                                                    LO Range:
                                                </Typography>
                                            </Col>
                                            <Col>
                                                <Slider 
                                                    name='lo_range'
                                                    // aria-label="rfc0_phase" 
                                                    value={this.state.lo_range} 
                                                    onChange={this.handleInputChange} 
                                                    // step={11.25}
                                                    marks
                                                    min={-45}
                                                    max={15}
                                                    valueLabelDisplay="auto"
                                                />
                                            </Col>
                                        </Row>
                                <Button onClick={this.sweepIF}>Run Test</Button>
                                </Row>

                                }
                                {/* <Row>
                                    
                                </Row> */}
                                {/* <Button onClick={this.sweepVarsTX}>Set Variables</Button>
                                <Button onClick={this.sweepIF}>Run Test</Button> */}
                                <hr/>
                                <Row>
                                    <Instrument evm="False"/>
                                </Row>
                                <hr/>
                                { this.state.sweep_method === 'brute_force' &&
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
                                }

                                
                            </Form>
                        <hr/>
                        
                        </Container>
                        <br/>
                </Container>
            </div>
        )
    }
}

export default VariableSweepGen2;