import React from 'react';
import axios from 'axios';

// import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Form, Row, Col, ToggleButton, ToggleButtonGroup, Button, Tabs, Tab, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FileUpload2 from '../Data/FileUpload_2';
// import InputSlider from 'react-input-slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';
// import KFAMNav from './KFAMNav';
import { styled } from '@mui/material/styles';
import Image from "../Data/62070_graph_blankb_lg.gif"



const Input = styled(MuiInput)`
  width: 42px;
`;
const KFAM_BEAMS = [
  { id: 1, row: 1, col: 1, title: '01' },
  { id: 2, row: 1, col: 2, title: '02' },
  { id: 3, row: 1, col: 3, title: '03' },
  { id: 4, row: 1, col: 4, title: '04' },
  { id: 5, row: 1, col: 5, title: '05' },
  { id: 6, row: 2, col: 1, title: '06' },
  { id: 7, row: 2, col: 2, title: '07' },
  { id: 8, row: 2, col: 3, title: '08' },
  { id: 9, row: 2, col: 4, title: '09' },
  { id: 10, row: 2, col: 5, title: '10' },
  { id: 11, row: 3, col: 1, title: '11' },
  { id: 12, row: 3, col: 2, title: '12' },
  { id: 13, row: 3, col: 3, title: '13' },
  { id: 14, row: 3, col: 4, title: '14' },
  { id: 15, row: 3, col: 5, title: '15' },
  { id: 16, row: 4, col: 1, title: '16' },
  { id: 17, row: 4, col: 2, title: '17' },
  { id: 18, row: 4, col: 3, title: '18' },
  { id: 19, row: 4, col: 4, title: '19' },
  { id: 20, row: 4, col: 5, title: '20' },
  { id: 21, row: 5, col: 1, title: '21' },
  { id: 22, row: 5, col: 2, title: '22' },
  { id: 23, row: 5, col: 3, title: '23' },
  { id: 24, row: 5, col: 4, title: '24' },
  { id: 25, row: 5, col: 5, title: '25' }
]

const ARR1_BEAMS = [
  { row: 1, id:59},
  { row: 1, id:60},
  { row: 1, id:61},
  { row: 1, id:62},
  { row: 1, id:63},
  { row: 1, id:64},
  { row: 1, id:65},
  { row: 1, id:66},
  { row: 1, id:67},
  { row: 1, id:68},
  { row: 1, id:69},
  { row: 1, id:24},
  { row: 1, id:26},
  { row: 1, id:27},
  { row: 1, id:28},
  { row: 1, id:29},
  { row: 1, id:30},
  { row: 1, id:31},
  { row: 1, id:32},
  { row: 1, id:33},
  { row: 1, id:34},
  { row: 1, id:35},
  { row: 1, id:36},
  { row: 1, id:1},
  { row: 1, id:2},
  { row: 1, id:3},
  { row: 1, id:4},
  { row: 1, id:5},
  { row: 1, id:6},
  { row: 1, id:7},
  { row: 1, id:8},
  { row: 1, id:9},
  { row: 1, id:10},
  { row: 1, id:11},
  { row: 1, id:12},
  { row: 1, id:13},
  { row: 1, id:14},
  { row: 1, id:15},
  { row: 1, id:16},
  { row: 1, id:17},
  { row: 1, id:18},
  { row: 1, id:19},
  { row: 1, id:20},
  { row: 1, id:21},
  { row: 1, id:22},
  { row: 1, id:23},
  { row: 1, id:37},
  { row: 1, id:38},
  { row: 1, id:39},
  { row: 1, id:40},
  { row: 1, id:41},
  { row: 1, id:42},
  { row: 1, id:43},
  { row: 1, id:44},
  { row: 1, id:45},
  { row: 1, id:46},
  { row: 1, id:47},
  { row: 1, id:25},
  { row: 1, id:48},
  { row: 1, id:49},
  { row: 1, id:50},
  { row: 1, id:51},
  { row: 1, id:52},
  { row: 1, id:53},
  { row: 1, id:54},
  { row: 1, id:55},
  { row: 1, id:56},
  { row: 1, id:57},
  { row: 1, id:58}
]

const ARR2_BEAMS = [
  { row: 2, id:59},
  { row: 2, id:60},
  { row: 2, id:61},
  { row: 2, id:62},
  { row: 2, id:63},
  { row: 2, id:64},
  { row: 2, id:65},
  { row: 2, id:66},
  { row: 2, id:67},
  { row: 2, id:68},
  { row: 2, id:69},
  { row: 2, id:24},
  { row: 2, id:26},
  { row: 2, id:27},
  { row: 2, id:28},
  { row: 2, id:29},
  { row: 2, id:30},
  { row: 2, id:31},
  { row: 2, id:32},
  { row: 2, id:33},
  { row: 2, id:34},
  { row: 2, id:35},
  { row: 2, id:36},
  { row: 2, id:1},
  { row: 2, id:2},
  { row: 2, id:3},
  { row: 2, id:4},
  { row: 2, id:5},
  { row: 2, id:6},
  { row: 2, id:7},
  { row: 2, id:8},
  { row: 2, id:9},
  { row: 2, id:10},
  { row: 2, id:11},
  { row: 2, id:12},
  { row: 2, id:13},
  { row: 2, id:14},
  { row: 2, id:15},
  { row: 2, id:16},
  { row: 2, id:17},
  { row: 2, id:18},
  { row: 2, id:19},
  { row: 2, id:20},
  { row: 2, id:21},
  { row: 2, id:22},
  { row: 2, id:23},
  { row: 2, id:37},
  { row: 2, id:38},
  { row: 2, id:39},
  { row: 2, id:40},
  { row: 2, id:41},
  { row: 2, id:42},
  { row: 2, id:43},
  { row: 2, id:44},
  { row: 2, id:45},
  { row: 2, id:46},
  { row: 2, id:47},
  { row: 2, id:25},
  { row: 2, id:48},
  { row: 2, id:49},
  { row: 2, id:50},
  { row: 2, id:51},
  { row: 2, id:52},
  { row: 2, id:53},
  { row: 2, id:54},
  { row: 2, id:55},
  { row: 2, id:56},
  { row: 2, id:57},
  { row: 2, id:58}
]

const ARR3_BEAMS = [
  { row: 3, id:59},
  { row: 3, id:60},
  { row: 3, id:61},
  { row: 3, id:62},
  { row: 3, id:63},
  { row: 3, id:64},
  { row: 3, id:65},
  { row: 3, id:66},
  { row: 3, id:67},
  { row: 3, id:68},
  { row: 3, id:69},
  { row: 3, id:24},
  { row: 3, id:26},
  { row: 3, id:27},
  { row: 3, id:28},
  { row: 3, id:29},
  { row: 3, id:30},
  { row: 3, id:31},
  { row: 3, id:32},
  { row: 3, id:33},
  { row: 3, id:34},
  { row: 3, id:35},
  { row: 3, id:36},
  { row: 3, id:1},
  { row: 3, id:2},
  { row: 3, id:3},
  { row: 3, id:4},
  { row: 3, id:5},
  { row: 3, id:6},
  { row: 3, id:7},
  { row: 3, id:8},
  { row: 3, id:9},
  { row: 3, id:10},
  { row: 3, id:11},
  { row: 3, id:12},
  { row: 3, id:13},
  { row: 3, id:14},
  { row: 3, id:15},
  { row: 3, id:16},
  { row: 3, id:17},
  { row: 3, id:18},
  { row: 3, id:19},
  { row: 3, id:20},
  { row: 3, id:21},
  { row: 3, id:22},
  { row: 3, id:23},
  { row: 3, id:37},
  { row: 3, id:38},
  { row: 3, id:39},
  { row: 3, id:40},
  { row: 3, id:41},
  { row: 3, id:42},
  { row: 3, id:43},
  { row: 3, id:44},
  { row: 3, id:45},
  { row: 3, id:46},
  { row: 3, id:47},
  { row: 3, id:25},
  { row: 3, id:48},
  { row: 3, id:49},
  { row: 3, id:50},
  { row: 3, id:51},
  { row: 3, id:52},
  { row: 3, id:53},
  { row: 3, id:54},
  { row: 3, id:55},
  { row: 3, id:56},
  { row: 3, id:57},
  { row: 3, id:58}
]

const ARR4_BEAMS = [
  { row: 4, id:59},
  { row: 4, id:60},
  { row: 4, id:61},
  { row: 4, id:62},
  { row: 4, id:63},
  { row: 4, id:64},
  { row: 4, id:65},
  { row: 4, id:66},
  { row: 4, id:67},
  { row: 4, id:68},
  { row: 4, id:69},
  { row: 4, id:24},
  { row: 4, id:26},
  { row: 4, id:27},
  { row: 4, id:28},
  { row: 4, id:29},
  { row: 4, id:30},
  { row: 4, id:31},
  { row: 4, id:32},
  { row: 4, id:33},
  { row: 4, id:34},
  { row: 4, id:35},
  { row: 4, id:36},
  { row: 4, id:1},
  { row: 4, id:2},
  { row: 4, id:3},
  { row: 4, id:4},
  { row: 4, id:5},
  { row: 4, id:6},
  { row: 4, id:7},
  { row: 4, id:8},
  { row: 4, id:9},
  { row: 4, id:10},
  { row: 4, id:11},
  { row: 4, id:12},
  { row: 4, id:13},
  { row: 4, id:14},
  { row: 4, id:15},
  { row: 4, id:16},
  { row: 4, id:17},
  { row: 4, id:18},
  { row: 4, id:19},
  { row: 4, id:20},
  { row: 4, id:21},
  { row: 4, id:22},
  { row: 4, id:23},
  { row: 4, id:37},
  { row: 4, id:38},
  { row: 4, id:39},
  { row: 4, id:40},
  { row: 4, id:41},
  { row: 4, id:42},
  { row: 4, id:43},
  { row: 4, id:44},
  { row: 4, id:45},
  { row: 4, id:46},
  { row: 4, id:47},
  { row: 4, id:25},
  { row: 4, id:48},
  { row: 4, id:49},
  { row: 4, id:50},
  { row: 4, id:51},
  { row: 4, id:52},
  { row: 4, id:53},
  { row: 4, id:54},
  { row: 4, id:55},
  { row: 4, id:56},
  { row: 4, id:57},
  { row: 4, id:58}
]


const BUTTONS = [
  { id: 11, row: 1, col: 1, title: '1,1' },
  { id: 12, row: 1, col: 2, title: '1,2' },
  { id: 13, row: 1, col: 3, title: '1,3' },
  { id: 14, row: 1, col: 4, title: '1,4' },
  { id: 15, row: 1, col: 5, title: '1,5' },
  { id: 16, row: 1, col: 6, title: '1,6' },
  { id: 21, row: 2, col: 1, title: '2,1' },
  { id: 22, row: 2, col: 2, title: '2,2' },
  { id: 23, row: 2, col: 3, title: '2,3' },
  { id: 24, row: 2, col: 4, title: '2,4' },
  { id: 25, row: 2, col: 5, title: '2,5' },
  { id: 26, row: 2, col: 6, title: '2,6' },
  { id: 31, row: 3, col: 1, title: '3,1' },
  { id: 32, row: 3, col: 2, title: '3,2' },
  { id: 33, row: 3, col: 3, title: '3,3' },
  { id: 34, row: 3, col: 4, title: '3,4' },
  { id: 35, row: 3, col: 5, title: '3,5' },
  { id: 36, row: 3, col: 6, title: '3,6' },
  { id: 41, row: 4, col: 1, title: '4,1' },
  { id: 42, row: 4, col: 2, title: '4,2' },
  { id: 43, row: 4, col: 3, title: '4,3' },
  { id: 44, row: 4, col: 4, title: '4,4' },
  { id: 45, row: 4, col: 5, title: '4,5' },
  { id: 46, row: 4, col: 6, title: '4,6' }
]

const RFC_MAP = [
  { id: 0, h: 2, v: 9, title: '1,1' },
  { id: 1, h: 3, v: 8, title: '1,2' },
  { id: 2, h: 7, v: 12, title: '1,3' },
  { id: 3, h: 6, v: 13, title: '1,4' },
  { id: 4, h: 1, v: 10, title: '1,5' },
  { id: 5, h: 0, v: 11, title: '1,6' },
  { id: 6, h: 5, v: 15, title: '2,1' },
  { id: 7, h: 4, v: 14, title: '2,2' },
  { id: 8, h: 8, v: 1, title: '2,3' },
  { id: 9, h: 11, v: 0, title: '2,4' },
  { id: 10, h: 15, v: 4, title: '2,5' },
  { id: 11, h: 14, v: 5, title: '2,6' },
  { id: 12, h: 9, v: 2, title: '3,1' },
  { id: 13, h: 10, v: 3, title: '3,2' },
  { id: 14, h: 12, v: 7, title: '3,3' },
  { id: 15, h: 13, v: 6, title: '3,4' }
]

const RFC_TX_AGC_SETTINGS = [
  { id: 'PA_Bias', min: 0, max: 7, title: 'PA', pol: ['V','H'] },
  { id: 'DA_Bias', min: 0, max: 7, title: 'DA', pol: ['V','H'] },
  { id: 'BDVGA_TX_Bias', min: 0, max: 7, title: 'BD VGA Bias', pol: ['V','H'] },
  { id: 'DisN_BA_TX_S_Bias', min: 0, max: 7, title: 'DisNBA S Bias', pol: ['H'] },
  { id: 'DisN_BA_TX_N_Bias', min: 0, max: 7, title: 'DisNBA N Bias', pol: ['V'] }
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

const RX_MIXER_SETTINGS = [
  { id: 'LO_Amp_1', min: 0, max: 7, title: 'LO Amp 1', pol: ['V','H'] },
  { id: 'LO_Amp_2', min: 0, max: 7, title: 'LO Amp 2', pol: ['V','H'] },
  { id: 'Mixer_S', min: 0, max: 7, title: 'Mixer S', pol: ['H'] },
  { id: 'Mixer_N', min: 0, max: 7, title: 'Mixer N', pol: ['V'] },
  { id: 'IF_VGA_Bias_S', min: 0, max: 7, title: 'IF VGA S Bias', pol: ['H'] },
  { id: 'IF_VGA_Bias_N', min: 0, max: 7, title: 'IF VGA N Bias', pol: ['V'] },
  { id: 'IF_VGA_RX_S_CS', min: 0, max: 7, title: 'IF VGA S CS', pol: ['H'] },
  { id: 'IF_VGA_RX_N_CS', min: 0, max: 7, title: 'IF VGA N CS', pol: ['V'] }
]

const RFC_RX_AGC_SETTINGS = [
  { id: 'LNA1_Bias', min: 0, max: 7, title: 'LNA1', pol: ['V','H'] },
  { id: 'LNA2_Bias', min: 0, max: 7, title: 'LNA2', pol: ['V','H'] },
  { id: 'LNA_180', min: 0, max: 1, title: 'LNA 180', pol: ['V','H'] },
  { id: 'BDVGA_RX_Bias', min: 0, max: 7, title: 'BD VGA Bias', pol: ['V','H'] },
  { id: 'DisN_BA_RX_S_Bias', min: 0, max: 7, title: 'DisNBA S Bias', pol: ['H'] },
  { id: 'DisN_BA_RX_N_Bias', min: 0, max: 7, title: 'DisNBA N Bias', pol: ['V'] }  
]

const RFC_BSW_SETTINGS = [
  { id: 'LNA_BSW', min: 0, max: 7, title: 'LNA BSW', pol: ['V','H'] },
  { id: 'sp_1_2_bsw', min: 0, max: 3, title: '1-2 BSW', pol: ['V','H'] },
  { id: 'Fine_Phase', min: 0, max: 7, title: 'Fine Phase Tuning', pol: ['V','H'] },
  { id: 'BD_VGA_BSW', min: 0, max: 7, title: 'BD VGA BSW', pol: ['V','H'] },
  { id: 'sp_1_4_bsw_S', min: 0, max: 1, title: '1-4 BSW S', pol: ['H'] },
  { id: 'sp_1_4_bsw_N', min: 0, max: 1, title: '1-4 BSW N', pol: ['V'] },
  { id: 'DisN_BA_BSW_S', min: 0, max: 7, title: 'DisNBA BSW S', pol: ['H'] },
  { id: 'DisN_BA_BSW_N', min: 0, max: 7, title: 'DisNBA BSW N', pol: ['V'] }
]


class DUT_GEN2 extends React.Component {
    constructor() {
      super();
      this.state = {
        polarity: 'H',
        tx_rx: 'TX',
        reset_dut: 'False',
        currBeam: '',
        ic_gen: '2p1',
        num_beams: 0,
        chosenBeam: '',
        beam_toggle: 0,
        dut: '',
        dut_sn: '',
        evb_sn: '',
        message: '',
        paam_row: '',
        paam_col: '',
        register_control: false,
        manual_register: false,
        file_upload: false,
        test_reg: 4,
        show_rfc_tx_agc: false,
        show_mixer_set: false,

        arr3_beam:'',
        arr4_beam: '',
        
        compensate: "True",

        phases: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ge_gain_vals: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        acd_bias: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

        rfc0_phase: 0,
        rfc1_phase: 0,
        rfc2_phase: 0,
        rfc3_phase: 0,
        rfc4_phase: 0,
        rfc5_phase: 0,
        rfc6_phase: 0,
        rfc7_phase: 0,
        rfc8_phase: 0,
        rfc9_phase: 0,
        rfc10_phase: 0,
        rfc11_phase: 0,
        rfc12_phase: 0,
        rfc13_phase: 0,
        rfc14_phase: 0,
        rfc15_phase: 0,

        ge_gain_0: 0,
        ge_gain_1: 0,
        ge_gain_2: 0,
        ge_gain_3: 0,
        ge_gain_4: 0,
        ge_gain_5: 0,
        ge_gain_6: 0,
        ge_gain_7: 0,
        ge_gain_8: 0,
        ge_gain_9: 0,
        ge_gain_10: 0,
        ge_gain_11: 0,
        ge_gain_12: 0,
        ge_gain_13: 0,
        ge_gain_14: 0,
        ge_gain_15: 0,

        acd_bias_0: 0,
        acd_bias_1: 0,
        acd_bias_2: 0,
        acd_bias_3: 0,
        acd_bias_4: 0,
        acd_bias_5: 0,
        acd_bias_6: 0,
        acd_bias_7: 0,
        acd_bias_8: 0,
        acd_bias_9: 0,
        acd_bias_10: 0,
        acd_bias_11: 0,
        acd_bias_12: 0,
        acd_bias_13: 0,
        acd_bias_14: 0,
        acd_bias_15: 0,

        register_fields: [
          {
            field: "PA_Bias",
            value: 4,
            address: 3072, 
            max: 7
          }
        ],

        PA_Bias: 1,
        DA_Bias: 1,
        BDVGA_TX_Bias: 1,
        DisN_BA_TX_S_Bias: 1,
        DisN_BA_TX_N_Bias: 1,
        IF_VGA_TX_S_CS: 1,
        IF_VGA_TX_N_CS: 1,

        IF_VGA_Bias_S: 2,
        IF_VGA_Bias_N: 1,
        LO_Amp_1: 2,
        LO_Amp_2: 2,
        Mixer_S: 2,
        Mixer_N: 2,

        LNA_BSW: 0, 
        sp_1_2_bsw: 0, 
        Fine_Phase:0, 
        BD_VGA_BSW:0, 
        DisN_BA_BSW_S:0, 
        DisN_BA_BSW_N:0, 
        sp_1_4_bsw_S:0,
        sp_1_4_bsw_N:0,



        LNA1_Bias: 1,
        LNA2_Bias: 1,
        LNA_180: 1,
        BDVGA_RX_Bias: 3,
        DisN_BA_RX_S_Bias: 4,
        DisN_BA_RX_N_Bias: 4,
        IF_VGA_RX_S_CS: 1,
        IF_VGA_RX_N_CS: 1,



        selectedRFCs: [],
        rfcsOn: [],
        rfcsStandby: [],
        selectedModules: [],
        rows: [],
        selectedRows: [],
        cols: [],
        selectedCols: [],
        modulesOn: [],
        standby: [],

        variableRFCs: [],

        reg_vals: ['Test', 'test2'],

        reg_address: null,
        reg_hex: null,
        reg_bin: null,
        die_select: "0",

        
        subarray1_if: '',
        subarray2_if: '',
        subarray3_if: '',
        subarray4_if: '',

        subarray1_lo: '',
        subarray2_lo: '',
        subarray3_lo: '',
        subarray4_lo: '',


      }; 

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    removeItemOnce(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }

    handleButton = button => {
      let tmp = this.state.selectedModules;
      console.log(tmp);
      let tmp_rows = this.state.rows;
      let tmp_cols = this.state.cols;
      if (this.state.selectedModules.includes(button.id)) {
          tmp_rows = this.removeItemOnce(tmp_rows, button.row)
          tmp_cols = this.removeItemOnce(tmp_cols, button.col)
          this.setState({
              selectedModules: this.state.selectedModules.filter(el => el !== button.id),
              rows: tmp_rows,
              cols: tmp_cols
          })

      } else {
          tmp.push(button.id);
          tmp_rows.push(button.row)
          tmp_cols.push(button.col)
          this.setState({
              selectedModules: tmp,
              rows: tmp_rows,
              cols: tmp_cols
          })
      }
      this.setState({
          selectedRows: [...new Set(tmp_rows)],
          selectedCols: [...new Set(tmp_cols)]
      })

      console.log(this.state);
    }

    handleRFC = button => {
      let tmp = this.state.selectedRFCs;
      console.log(tmp);

      if (this.state.selectedRFCs.includes(button.id)) {
          this.setState({
              selectedRFCs: this.state.selectedRFCs.filter(el => el !== button.id),
          })

      } else {
          tmp.push(button.id);
          this.setState({
              selectedRFCs: tmp
          })
      }

      console.log(this.state);
    }

    selectAllRFCs = e => {
      this.setState({selectedRFCs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]})
    }

    unSelectAllRFCs = e => {
      this.setState({selectedRFCs: []})
    }

    handleVariableRFC = button => {
      let tmp = this.state.variableRFCs;
      console.log(tmp);

      if (this.state.variableRFCs.includes(button.id)) {
          this.setState({
            variableRFCs: this.state.variableRFCs.filter(el => el !== button.id),
          })

      } else {
          tmp.push(button.id);
          this.setState({
            variableRFCs: tmp
          })
      }

      console.log(this.state);
    }

    selectVariableRFCs = e => {
      this.setState({variableRFCs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]})
    }

    unSelectVariableRFCs = e => {
      this.setState({variableRFCs: []})
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      console.log(name);
  
      this.setState({
        [name]: value
      });
      console.log(this.state);
    }

    // handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };

    async sendMove(query) {
        let url = `http://127.0.0.1:5000/dut_gen2/${query}`;
        console.log(url);
        axios.get(url).then(
          (response) => {
              var result = response.data;
              console.log(result);
              this.setState(
                result
              );
              return result;
          },
          (error) => {
              console.log(error);
          },
        );
      // return data;
    }  

    
    onRunTest = e => {
      e.preventDefault();
      this.sendMove();
    }

    connect = e => {
        e.preventDefault();
        if (this.state.dut === "kfam") {
            this.sendMove(`init/kfam+${this.state.polarity}+${this.state.tx_rx}+${this.state.reset_dut}+${this.state.evb_sn}+${this.state.dut_sn}+${this.state.ic_gen}`);
        } else {
            this.sendMove(`init/paam+${this.state.polarity}+${this.state.tx_rx}+${this.state.reset_dut}+${this.state.evb_sn}+${this.state.dut_sn}`);
        }
        this.setState({
            // currBeam: "1",
            beam_toggle: 0,
            
        });
    }

    powerOn = e => {
      e.preventDefault();
      this.sendMove(`kfam/power_on`);
      this.setState({
          // currBeam: "1",
          beam_toggle: 0,
          rfcsOn: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      });
    }

    rfcOn = e => {
      e.preventDefault();
      // this.sendMove(`toggle_rfc`);
      let tmp = this.state.modulesOn;
      let tmp_sel = this.state.selectedModules;
      tmp.push.apply(tmp, tmp_sel);
      console.log(tmp);
      let sb = this.state.standby;
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        sb = this.removeItemOnce(sb, tmp_sel[i]);
      }
      this.setState({
        modulesOn: [...new Set(tmp)],
        standby: sb
      })
    }

    disconnect = e => {
      e.preventDefault();
      this.sendMove(`disconnect`);
    }
    

    moduleStandby = e => {
      e.preventDefault();
      this.sendMove(`test/${this.state.selectedRows}+${this.state.selectedCols}/rfc_power_off`);
      let tmp = this.state.modulesOn;
      // tmp = this.removeItemOnce(tmp, selectedModules)
      let tmp_sel = this.state.selectedModules;
      let sb = this.state.standby;
      if ((!(this.state.standby.includes(tmp_sel))) ){
        sb.push.apply(sb, tmp_sel);
        console.log("Not there")
      }
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        tmp = this.removeItemOnce(tmp, tmp_sel[i]);
      }
      console.log(tmp);
      this.setState({
        // currBeam: "1",
        beam_toggle: 0,
        modulesOn: tmp,
        standby: sb
      });
    }

    powerOff = e => {
      e.preventDefault();
      if (this.state.dut === "paam") {
        this.sendMove(`test/full_power_off`);
        this.setState({
          // currBeam: "1",
          beam_toggle: 0,
          modulesOn: [],
          standby: [],
          selectedModules: [],
          selectedRows: [],
          selectedCols: [],
          rows: [],
          cols: []
        });
      }
      else {
        this.sendMove(`test/rfc_power_off`);
      }
    }

    selectModule = e => {
      e.preventDefault();
      this.sendMove(`paam/select_module/${this.state.selectedRows}+${this.state.selectedCols}`);
    }

    

    paamModule = e => {
      e.preventDefault();
      let lo_sg = ''
      let if_sg = ''
      if (this.state.selectedRows[0] === 1) {
        if_sg = this.state.subarray1_if 
        lo_sg = this.state.subarray1_lo
      }
      else if (this.state.selectedRows[0] === 2) {
        if_sg = this.state.subarray2_if 
        lo_sg = this.state.subarray2_lo
      }
      else if (this.state.selectedRows[0] === 3) {
        console.log("Subarray 3")
        if_sg = this.state.subarray3_if
        lo_sg = this.state.subarray3_lo
      }
      else if (this.state.selectedRows[0] === 4) {
        console.log("Subarray 4")
        if_sg = this.state.subarray4_if
        lo_sg = this.state.subarray4_lo
      }
      this.sendMove(`paam/module/${this.state.selectedRows}+${this.state.selectedCols}/${if_sg}+${lo_sg}+${this.state.compensate}`)
      let tmp = this.state.modulesOn;
      let tmp_sel = this.state.selectedModules;
      tmp.push.apply(tmp, tmp_sel);
      console.log(tmp);
      let sb = this.state.standby;
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        sb = this.removeItemOnce(sb, tmp_sel[i]);
      }
      this.setState({
        modulesOn: [...new Set(tmp)],
        standby: sb
      })
    }

    show_register_control = e => {
      e.preventDefault();
      this.setState({
        register_control: !this.state.register_control
      })
    }

    manual_register_control = e => {
      e.preventDefault();
      this.setState({
        manual_register: !this.state.manual_register
      })
    }

    show_file_upload = e => {
      e.preventDefault();
      this.setState({
        file_upload: !this.state.file_upload
      })
    }

    rfc_tx_agc = e => {
      e.preventDefault();
      this.setState({
        show_rfc_tx_agc: true
      });
    }

    mixer_set = e => {
      e.preventDefault();
      this.setState({
        show_mixer_set: true
      });
    }

    loadAWV = e => {
      e.preventDefault();
      if(this.state.dut ==="paam") {
        this.sendMove(`paam/codebook/${this.state.selectedRows}+${this.state.selectedCols}`);
      }
      else{
        this.sendMove(`codebook`);
      }  
      this.setState({
        // currBeam: "1",
        beam_toggle: 1
      });
    }

    // loadCal = e => {
    //   e.preventDefault();
    //   this.sendMove(`paam/codebook/${this.state.selectedRows}+${this.state.selectedCols}`);
    //   this.setState({
    //     // currBeam: "1",
    //     beam_toggle: 1
    //   });
    // }

    setAWV = e => {
      e.preventDefault();
      if(this.state.dut ==="paam") {
        this.sendMove(`paam/set_awv/${this.state.selectedRows}+${this.state.selectedCols}`);
      }
      else{
        this.sendMove(`kfam/set_awv`);
      }
      this.setState({
        currBeam: "1",
        beam_toggle: 1
      });
    }

    setDED = e => {
      e.preventDefault();
      if(this.state.dut ==="paam") {
        this.sendMove(`paam/set_ded/${this.state.selectedRows}+${this.state.selectedCols}`);
      }
      else{
        this.sendMove(`kfam/set_ded`);
      }
      this.setState({
        // currBeam: "1",
        beam_toggle: 0
      });
    }

    toggleBeam = e => {
      e.preventDefault();
      // if(this.state.dut ==="paam") {
      //   this.sendMove(`paam/beam_switch_test/${this.state.selectedRows}`);
      // }
      // else{
      //   this.sendMove(`beam_switch_test`);
      // }
      this.sendMove(`beam_switch_test`);
      
    }

    async read_back(object) {
      var url = ``;
      url = `http://127.0.0.1:5000/dut_gen2/read_back/${object}`;
      console.log(url);
      axios.get(url).then(
        (response) => {
            var result = response.data;
            console.log(result);
            this.setState(result)
            return result;
          },
          (error) => {
              console.log(error);
          },
        );
    }
    
    getCurrBeamPhases = e => {
      e.preventDefault();
      this.read_back(`awv_tbl`); 
    }

    getCurrBeam = e => {
      e.preventDefault();
      this.read_back(`awv_pointer`);
    }

    selectBeam = e => {
      e.preventDefault();
      this.sendMove(`beam_select/${this.state.chosenBeam}`);
      this.setState({
        currBeam: this.state.chosenBeam
      })
    }

    chooseBeam = beam => {
      if (beam.id > 25){
          return
      }
      this.sendMove(`beam_select/${beam.row}/${beam.id}`);
      // this.setState({currBeam:beam.id});
    }

    invertPhases = e => {
      e.preventDefault();
      this.sendMove(`invert_phases`);
    }

    read_state = button => {
      // button.preventDefault();
      let one = 1;
      if (one) {
        this.get_state(button);
        one = 0;
      }
      else{
        console.log('Caught');
      }
      // this.get_state(button).then(() => console.log('Test', button.id));
    }

    saveSettingsToFile = e => {
      e.preventDefault();
      this.sendMove(`save_settings_to_file/kfam`);

    }

    async get_state(button) {
      var url = ``;
      if (this.state.dut === "kfam") {
        url = `http://127.0.0.1:5000/dut_gen2/read_register_fields/${button.id}`;
      } else {
        url = `http://127.0.0.1:5000/dut_gen2/${button.row}+${button.col}/read_register_fields/3072`;
      }
      console.log(url);
      axios.get(url).then(
        (response) => {
            var result = response.data;
            console.log(result);
            this.setState(
              {
                reg_vals: result,
                settings: result.settings,
                PA_Bias: result.settings.PA_Bias,
                DA_Bias: result.settings.DA_Bias,
                BDVGA_TX_Bias: result.settings.BDVGA_TX_Bias,
                // BDVGA_TX_Bias_cs: result.settings.BDVGA_TX_Bias_cs,
                DisN_BA_TX_S_Bias: result.settings.DisN_BA_TX_S_Bias,
                DisN_BA_TX_N_Bias: result.settings.DisN_BA_TX_N_Bias,
                
                IF_VGA_Bias_S: result.settings.IF_VGA_Bias_S,
                IF_VGA_Bias_N: result.settings.IF_VGA_Bias_N,

                LO_Amp_1: result.settings.LO_Amp_1,
                LO_Amp_2: result.settings.LO_Amp_2,
                Mixer_S: result.settings.Mixer_N,
                Mixer_N: result.settings.Mixer_S,
                IF_VGA_TX_S_CS: result.settings.IF_VGA_TX_S_CS,
                IF_VGA_TX_N_CS: result.settings.IF_VGA_TX_N_CS,
                IF_VGA_RX_S_CS: result.settings.IF_VGA_RX_S_CS,
                IF_VGA_RX_N_CS: result.settings.IF_VGA_RX_N_CS,

                LNA1_Bias: result.settings.LNA1_Bias,
                LNA2_Bias: result.settings.LNA2_Bias,
                LNA_180: result.settings.LNA_180,
                // rsv_rfc: result.settings.rsv_rfc,
                DisN_BA_RX_S_Bias: result.settings.DisN_BA_RX_S_Bias,
                DisN_BA_RX_N_Bias: result.settings.DisN_BA_RX_N_Bias,    
                
                LNA_BSW: result.settings.LNA_BSW, 
                sp_1_2_bsw: result.settings["2_1_ACD_BSW"], 
                fine_phase: result.settings.Fine_Phase, 
                BD_VGA_BSW: result.settings.BD_VGA_BSW, 
                DisN_BA_BSW_S: result.settings.DisN_BA_BSW_S, 
                DisN_BA_BSW_N: result.settings.DisN_BA_BSW_N, 
                sp_1_4_bsw_S: result.settings["4_1_ACD_BSW_S"],
                sp_1_4_bsw_N: result.settings["4_1_ACD_BSW_N"],

                acd_bias: result.settings.acd_bias,

                
                phases: result.phases,
                rfc0_phase: result.phases[0],
                rfc1_phase: result.phases[1],
                rfc2_phase: result.phases[2],
                rfc3_phase: result.phases[3],
                rfc4_phase: result.phases[4],
                rfc5_phase: result.phases[5],
                rfc6_phase: result.phases[6],
                rfc7_phase: result.phases[7],
                rfc8_phase: result.phases[8],
                rfc9_phase: result.phases[9],
                rfc10_phase: result.phases[10],
                rfc11_phase: result.phases[11],
                rfc12_phase: result.phases[12],
                rfc13_phase: result.phases[13],
                rfc14_phase: result.phases[14],
                rfc15_phase: result.phases[15],
                
                ge_gain_0: result.ge_gain_vals[0],
                ge_gain_1: result.ge_gain_vals[1],
                ge_gain_2: result.ge_gain_vals[2],
                ge_gain_3: result.ge_gain_vals[3],
                ge_gain_4: result.ge_gain_vals[4],
                ge_gain_5: result.ge_gain_vals[5],
                ge_gain_6: result.ge_gain_vals[6],
                ge_gain_7: result.ge_gain_vals[7],
                ge_gain_8: result.ge_gain_vals[8],
                ge_gain_9: result.ge_gain_vals[9],
                ge_gain_10: result.ge_gain_vals[10],
                ge_gain_11: result.ge_gain_vals[11],
                ge_gain_12: result.ge_gain_vals[12],
                ge_gain_13: result.ge_gain_vals[13],
                ge_gain_14: result.ge_gain_vals[14],
                ge_gain_15: result.ge_gain_vals[15],

                acd_bias_0: result.acd_bias[0],
                acd_bias_1: result.acd_bias[1],
                acd_bias_2: result.acd_bias[2],
                acd_bias_3: result.acd_bias[3],
                acd_bias_4: result.acd_bias[4],
                acd_bias_5: result.acd_bias[5],
                acd_bias_6: result.acd_bias[6],
                acd_bias_7: result.acd_bias[7],
                acd_bias_8: result.acd_bias[8],
                acd_bias_9: result.acd_bias[9],
                acd_bias_10: result.acd_bias[10],
                acd_bias_11: result.acd_bias[11],
                acd_bias_12: result.acd_bias[12],
                acd_bias_13: result.acd_bias[13],
                acd_bias_14: result.acd_bias[14],
                acd_bias_15: result.acd_bias[15],
                
                }
            );
            return result;
          },
          (error) => {
              console.log(error);
          },
        );
      // return data;
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

    kfam_rfcs_on = e => {
      e.preventDefault();
      let queryObj = {
        rfcs: [
          this.state.selectedRFCs,
        ]
      }
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/kfam_rfcs_on', queryObj);
      let tmp = this.state.rfcsOn;
      let tmp_sel = this.state.selectedRFCs;
      tmp.push.apply(tmp, tmp_sel);
      console.log(tmp);
      let sb = this.state.rfcsStandby;
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        sb = this.removeItemOnce(sb, tmp_sel[i]);
      }
      this.setState({
        rfcsOn: [...new Set(tmp)],
        rfcsStandby: sb
      })
    }

    rfcsOff = e => {
      e.preventDefault();
      let queryObj = {
        rfcs: [
          this.state.selectedRFCs,
        ]
      }
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/rfcs_off', queryObj);
      let tmp = this.state.rfcsOn;
      // tmp = this.removeItemOnce(tmp, selectedModules)
      let tmp_sel = this.state.selectedRFCs;
      let sb = this.state.rfcsStandby;
      if ((!(this.state.rfcsStandby.includes(tmp_sel))) ){
        sb.push.apply(sb, tmp_sel);
        console.log("Not there")
      }
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        tmp = this.removeItemOnce(tmp, tmp_sel[i]);
      }
      console.log(tmp);
      this.setState({
        // currBeam: "1",
        // beam_toggle: 0,
        rfcsOn: tmp,
        rfcsStandby: sb
      });
    }

    paam_rfcs_on = e => {
      e.preventDefault();
      let queryObj = {
        modules: [
          this.state.selectedRows,
          this.state.selectedCols
        ]
      }
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/rfcs_on', queryObj);
      let tmp = this.state.modulesOn;
      let tmp_sel = this.state.selectedModules;
      tmp.push.apply(tmp, tmp_sel);
      console.log(tmp);
      let sb = this.state.standby;
      for (var i = tmp_sel.length -1; i >= 0; i--) {
        sb = this.removeItemOnce(sb, tmp_sel[i]);
      }
      this.setState({
        modulesOn: [...new Set(tmp)],
        standby: sb
      })
    }

    send_settings = e => {
      e.preventDefault();
      let queryObj = {
          settings: this.state.settings
      }
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings', queryObj);
    }

    send_phases = e => {
      e.preventDefault();
      let queryObj = { 
          phases: [
            this.state.rfc0_phase,
            this.state.rfc1_phase,
            this.state.rfc2_phase,
            this.state.rfc3_phase,
            this.state.rfc4_phase,
            this.state.rfc5_phase,
            this.state.rfc6_phase,
            this.state.rfc7_phase,
            this.state.rfc8_phase,
            this.state.rfc9_phase,
            this.state.rfc10_phase,
            this.state.rfc11_phase,
            this.state.rfc12_phase,
            this.state.rfc13_phase,
            this.state.rfc14_phase,
            this.state.rfc15_phase
          ]
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/send_phases', queryObj);
    }

    send_ge_vals = e => {
      e.preventDefault();
      let queryObj = { 
          ge_gain_vals: [
            this.state.ge_gain_0,
            this.state.ge_gain_1,
            this.state.ge_gain_2,
            this.state.ge_gain_3,
            this.state.ge_gain_4,
            this.state.ge_gain_5,
            this.state.ge_gain_6,
            this.state.ge_gain_7,
            this.state.ge_gain_8,
            this.state.ge_gain_9,
            this.state.ge_gain_10,
            this.state.ge_gain_11,
            this.state.ge_gain_12,
            this.state.ge_gain_13,
            this.state.ge_gain_14,
            this.state.ge_gain_15
          ]
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/send_ge_gain', queryObj);
    }

    send_rfc_tx_agc = e => {
      e.preventDefault();
      let queryObj = {};
      if (this.state.polarity === 'H') {
        queryObj = {
          settings: {
            "PA_Bias": this.state.PA_Bias,
            "DA_Bias": this.state.DA_Bias,
            "BDVGA_TX_Bias": this.state.BDVGA_TX_Bias,
            // "BDVGA_TX_Bias_cs": this.state.BDVGA_TX_Bias_cs,
            "DisN_BA_TX_S_Bias": this.state.DisN_BA_TX_S_Bias,
          },
          rfcs: this.state.variableRFCs
        }
      };
      if (this.state.polarity === 'V') {
        queryObj = {
          settings: {
            "PA_Bias": this.state.PA_Bias,
            "DA_Bias": this.state.DA_Bias,
            "BDVGA_TX_Bias": this.state.BDVGA_TX_Bias,
            // "BDVGA_TX_Bias_cs": this.state.BDVGA_TX_Bias_cs,
            "DisN_BA_TX_N_Bias": this.state.DisN_BA_TX_N_Bias
          },
          rfcs: this.state.variableRFCs
        }
      };
      
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings/agc', queryObj);
    }

    send_rfc_bsw = e => {
      e.preventDefault();
      let queryObj = {};
      if (this.state.polarity === 'H') {
        queryObj = {
          settings: {
            "LNA_BSW": this.state.LNA_BSW, 
            "2_1_ACD_BSW": this.state.sp_1_2_bsw, 
            "Fine_Phase": this.state.Fine_Phase, 
            "BD_VGA_BSW": this.state.BD_VGA_BSW, 
            "DisN_BA_BSW_S": this.state.DisN_BA_BSW_S, 
            "4_1_ACD_BSW_S": this.state.sp_1_4_bsw_S,
          },
          rfcs: this.state.variableRFCs
        }
      };
      if (this.state.polarity === 'V') {
        queryObj = {
          settings: {
            "LNA_BSW": this.state.LNA_BSW, 
            "2_1_ACD_BSW": this.state.sp_1_2_bsw, 
            "Fine_Phase": this.state.Fine_Phase, 
            "BD_VGA_BSW": this.state.BD_VGA_BSW, 
            "DisN_BA_BSW_N": this.state.DisN_BA_BSW_N, 
            "4_1_ACD_BSW_N": this.state.sp_1_4_bsw_N,
          },
          rfcs: this.state.variableRFCs
        }
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings/bsw', queryObj);
    }

    send_rfc_rx_agc = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "RX_agc_LNA1": this.state.LNA1_Bias,
            "RX_agc_LNA2": this.state.LNA2_Bias,
            "RX_agc_LNA_180": this.state.lna3,
            // "rsv_rfc": this.state.rsv_rfc,
            "RX_agc_DBa_Bias": this.state.rx_d_ba,
            // "rx_d_ba_cs": this.state.rx_d_ba_cs
          },
          rfcs: this.state.variableRFCs
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings/agc', queryObj);
    }

    send_tx_mixer = e => {
      e.preventDefault();
      let queryObj = {};
      if (this.state.polarity === 'H') {
        queryObj = {
          settings: {            
            "IF_VGA_Bias_S": this.state.IF_VGA_Bias_S,
            "LO_Amp_1": this.state.LO_Amp_1,
            "LO_Amp_2": this.state.LO_Amp_2,
            "Mixer_S": this.state.Mixer_S,
            "IF_VGA_TX_S_CS": this.state.IF_VGA_TX_S_CS,
          }
        }
      };
      if (this.state.polarity === 'V') {
        queryObj = {
          settings: {            
            "LO_Amp_1": this.state.LO_Amp_1,
            "LO_Amp_2": this.state.LO_Amp_2,
            "IF_VGA_Bias_N": this.state.IF_VGA_Bias_N,
            "Mixer_N": this.state.Mixer_N,
            "IF_VGA_TX_N_CS": this.state.IF_VGA_TX_N_CS,  
          }
        }
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings/mixer', queryObj);
    }


    send_rx_mixer = e => {
      e.preventDefault();
      let queryObj = {};
      if (this.state.polarity === 'H') {
        queryObj = {
          settings: {            
            "IF_VGA_Bias_S": this.state.IF_VGA_Bias_S,
            "LO_Amp_1": this.state.LO_Amp_1,
            "LO_Amp_2": this.state.LO_Amp_2,
            "Mixer_S": this.state.Mixer_S,
            "IF_VGA_TX_S_CS": this.state.IF_VGA_TX_S_CS,
          }
        }
      };
      if (this.state.polarity === 'V') {
        queryObj = {
          settings: {            
            "LO_Amp_1": this.state.LO_Amp_1,
            "LO_Amp_2": this.state.LO_Amp_2,
            "IF_VGA_Bias_N": this.state.IF_VGA_Bias_N,
            "Mixer_N": this.state.Mixer_N,
            "IF_VGA_TX_N_CS": this.state.IF_VGA_TX_N_CS,  
          }
        }
      };
      this.makePostRequest('http://127.0.0.1:5000/dut_gen2/update_settings/mixer', queryObj);
    }


    applyAllPhases = e => {
      e.preventDefault();
      let queryObj = { 
          phases: Array(16).fill(this.state.rfc0_phase)        
      };
      this.makePostRequest('http://127.0.0.1:5000/send_phases', queryObj);
    }

    applyAllGEGain = e => {
      e.preventDefault();
      let queryObj = { 
          ge_gain_vals: Array(16).fill(this.state.ge_gain_0)        
      };
      this.makePostRequest('http://127.0.0.1:5000/send_ge_gain', queryObj);
    }

    die_address_read = e => {
      e.preventDefault();
      this.sendMove(`die_address_read/${this.state.die_select}+${this.state.reg_address}`);
    }

    die_address_write_hex = e => {
      e.preventDefault();
      this.sendMove(`die_address_write_hex/${this.state.die_select}+${this.state.reg_address}+${this.state.reg_hex}`);
    }

    die_address_write_bin = e => {
      e.preventDefault();
      this.sendMove(`die_address_write_bin/${this.state.die_select}+${this.state.reg_address}+${this.state.reg_bin}`);
    }

    die_address_read_fields = e => {
      e.preventDefault();
      this.sendMove(`die_address_read_fields/${this.state.die_select}+${this.state.reg_address}`);
    }


    pol1 = e => {
      e.preventDefault();
      this.sendMove(`switchPol/pol1`);
      this.setState({
        pol: "Pol1"
      })
    }

    pol2 = e => {
      e.preventDefault();
      this.sendMove(`switchPol/pol2`);
      this.setState({
        pol: "Pol2"
      })
    }
    buttoncolor(button) {
      if (this.state.modulesOn.includes(button)) {
          return 'success'
      }
      if (this.state.standby.includes(button)) {
        return 'warning'
      }
      else {
        return 'outline-secondary'
      }
    }

    rfcscolor(button) {
      if (this.state.rfcsOn.includes(button)) {
          return 'success'
      }
      if (this.state.rfcsStandby.includes(button)) {
        return 'warning'
      }
      else {
        return 'outline-secondary'
      }
    }

    variablerfcscolor(button) {
      if (this.state.variableRFCs.includes(button)) {
        return 'primary'
      }
      if (this.state.rfcsOn.includes(button)) {
          return 'success'
      }
      if (this.state.rfcsStandby.includes(button)) {
        return 'warning'
      }
      else {
        return 'outline-primary'
      }
    }

    renderTooltip = (props) => (
      <Tooltip id="button-tooltip">
        {props}
      </Tooltip>
    );

    render () {
      return (
        <div >
            <br/>
            <Container>
                <h3>DUT Gen 2</h3>
                <p>This is a placeholder for the DUT section</p>
                <Row>
                    <Col>
                        <Container style={{backgroundColor: '#dde4f0', borderRadius: '20px', borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                            <Form>
                                <br/>
                                <h3>Control DUT</h3>
                                <hr/>
                                <h5>DUT Setup</h5>
                                <br/>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Select DUT:</Form.Label>
                                            <select style={{width: "150px", resize:'none', float: 'right'}} class="form-select" name="dut" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                <option>Select DUT</option>
                                                <option selected value="kfam">KFAM</option>
                                                <option value="paam">PAAM</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Select IC Gen:</Form.Label>
                                            <select style={{width: "150px", resize:'none', float: 'right'}} class="form-select" name="ic_gen" aria-label="Default select example"  onChange={this.handleInputChange}>
                                                <option selected>Select DUT</option>
                                                <option value="1p5">1.5</option>
                                                <option value="2p0">2.0</option>
                                                <option value="2p1">2.1</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Group>
                                          <Form.Label>DUT SN:</Form.Label>
                                          <Form.Control style={{width:'150px', resize:'none', float: 'right'}} name="dut_sn" value={this.state.dut_sn} placeholder="DUT SN." onChange={this.handleInputChange}/>
                                      </Form.Group>
                                
                                  </Col>
                                  <Col>
                                      <Form.Group>
                                          <Form.Label>EVB SN:</Form.Label>
                                          <Form.Control style={{width:'150px', resize:'none', float: 'right'}} name="evb_sn" value={this.state.evb_sn} placeholder="EVB SN." onChange={this.handleInputChange}/>
                                      </Form.Group>
                                  
                                  </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Polarity</Form.Label>
                                            <ToggleButtonGroup type="radio" name="polarity" defaultValue={"H"}>
                                                <ToggleButton variant="outline-dark" id="pol_v" value={"V"} checked={this.state.checked === "V"} onChange={this.handleInputChange}>
                                                    V
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="pol_h" value={"H"} checked={this.state.checked === "H"} onChange={this.handleInputChange}>
                                                    H
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>TX/RX</Form.Label>
                                            <ToggleButtonGroup type="radio" name="tx_rx" defaultValue={"TX"}>
                                                <ToggleButton variant="outline-dark" id="tx" value={"TX"} checked={this.state.checked === "TX"} onChange={this.handleInputChange}>
                                                    TX
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="rx" value={"RX"} checked={this.state.checked === "RX"} onChange={this.handleInputChange}>
                                                    RX
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Reset DUT</Form.Label>
                                            <ToggleButtonGroup type="radio" name="reset_dut" defaultValue={"False"}>
                                                <ToggleButton variant="outline-dark" id="reset_dut_false" value={"True"} checked={this.state.checked === "True"} onChange={this.handleInputChange}>
                                                    True
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="reset_dut_true" value={"False"} checked={this.state.checked === "False"} onChange={this.handleInputChange}>
                                                    False
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Complete power off")}
                                >
                                  <Button size="md" variant="danger" onhov style={{width:'120px', resize:'none', float: 'right'}} onClick={this.powerOff}>
                                      Power OFF
                                  </Button>
                                </OverlayTrigger>
                                {this.state.dut === "kfam" &&
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Full Power Cycle")}
                                >
                                  <Button size="md" variant="success" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.powerOn}>
                                      Power On
                                  </Button>
                                </OverlayTrigger>
                                }
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Disconnect DUT")}
                                >
                                  <Button size="md" variant="warning" style={{width:'120px', resize:'none', float: 'right'}} onClick={this.disconnect}>
                                      Disconnect
                                  </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Connect to DUT")}
                                >
                                  <Button size="md" style={{width:'120px', resize:'none', float: 'right'}} onClick={this.connect}>
                                      Connect
                                  </Button>
                                </OverlayTrigger>
                      
                                <br/>
                                <hr/>
                                <h5>Apply Variable/Phase Settings</h5>
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Show File Upload Box for Phases or Variable Fields")}
                                >
                                  <Button size="sm" onClick={this.show_file_upload}>Toggle Display File Upload</Button>
                                </OverlayTrigger>
                                {this.state.file_upload &&
                                  <Container style={{borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                                    <FileUpload2/>
                                  </Container>
                                
                                }

                                {this.state.dut === "paam" &&
                                    <div>
                                      <hr/>
                                      <h5>PAAM Module Control</h5>
                                
                                      <br/>
                                        <br/>
                                        <Row>
                                          <Col sm>
                                                <h5>Modules Powered On (Display Grid)</h5>
                                                <Container style={{width: "350px"}}>
                                                  {/* <ButtonToolbar style={{width: "400px"}}> */}
                                                  {/* <ToggleButtonGroup type='checkbox' value={this.state.modulesOn}> */}
                                                  {BUTTONS.map(bt => (
                                                      <Button 
                                                          variant={this.buttoncolor(bt.id)}//{this.state.standby.includes(bt.id) ? 'warning' : 'outline-success'}
                                                          // type='checkbox'
                                                          key={bt.id}
                                                          // value={bt.id}
                                                          onClick={() => this.read_state(bt)}
                                                          // checked={this.state.modulesOn.includes(bt.id) ? true : false}
                                                      >
                                                          {bt.title}
                                                      </Button>
                                                  ))}
                                                  {/* </ToggleButtonGroup> */}
                                                  {/* </ButtonToolbar> */}
                                              </Container >
                                          <hr/>
                                          </Col>
                                          <Col sm>
                                          <h5>Selection Grid</h5>
                                            <Container style={{width: "350px"}}>
                                                <ButtonToolbar>
                                                {/* <ToggleButtonGroup style={{width: "400px"}} type='checkbox'> */}
                                                {BUTTONS.map(bt => (
                                                    <Button 
                                                        // style={{
                                                        //   color: 'white', /* Text color */
                                                        //   // background: '#0099cc'
                                                        //   background: "linear-gradient(#e5f4f9, #b2e0ef, #3c568c);"
                                                        // }}
                                                        variant={this.state.selectedModules.includes(bt.id) ? 'primary' : 'outline-primary'}
                                                        // type='checkbox'
                                                        key={bt.id}
                                                        // value={bt.id}
                                                        onClick={() => this.handleButton(bt)}
                                                        // checked={this.state.selectedModules.includes(bt.id) ? true : false}
                                                    >
                                                        {bt.title}
                                                    </Button>
                                                ))}
                                                {/* </ToggleButtonGroup> */}
                                                </ButtonToolbar>
                                                <hr/>

                                                
                                            </Container >
                                          </Col>
                                          <Col xs={7} style={{width: "100px"}}>
                                            <h5>IF</h5>

                                            <Container style={{width: "100px"}}>
                                              {/* <Col> */}
                                                <select class="form-select form-select" style={{width: "70px"}} name='subarray1_if' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="if1_sg">IF1</option>
                                                    <option value="if2_sg">IF2</option>
                                                    {/* <option value="2">Two</option> */}
                                                </select>
                                                <select class="form-select form-select" style={{width: "70px"}} name='subarray2_if' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="if1_sg">IF1</option>
                                                    <option value="if2_sg">IF2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                                  <br/>
                                                  <select class="form-select form-select" style={{width: "70px"}} name='subarray3_if' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="if1_sg">IF1</option>
                                                    <option value="if2_sg">IF2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                                  <select class="form-select form-select" style={{width: "70px"}} name='subarray4_if' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="if1_sg">IF1</option>
                                                    <option value="if2_sg">IF2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                              {/* </Col> */}
                                            </Container>
                                          </Col>
                                          <Col xs={6} style={{width: "100px"}}>
                                            <h5>LO</h5>

                                            <Container>
                                              {/* <Col> */}
                                                <select class="form-select form-select" style={{width: "80px"}} name='subarray1_lo' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="lo1_sg">LO1</option>
                                                    <option value="lo2_sg">LO2</option>
                                                    {/* <option value="2">Two</option> */}
                                                </select>
                                                <select class="form-select form-select" style={{width: "80px"}} name='subarray2_lo' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="lo1_sg">LO1</option>
                                                    <option value="lo2_sg">LO2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                                  <br/>
                                                  <select class="form-select form-select" style={{width: "80px"}} name='subarray3_lo' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="lo1_sg">LO1</option>
                                                    <option value="lo2_sg">LO2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                                  <select class="form-select form-select" style={{width: "80px"}} name='subarray4_lo' aria-label=".form-select-sm example" onChange={this.handleInputChange}>
                                                    <option selected></option>
                                                    <option value="lo1_sg">LO1</option>
                                                    <option value="lo2_sg">LO2</option>
                                                    {/* <option value="2">Two</option> */}
                                                  </select>
                                                {/* </Col> */}
                                              

                                              </Container>
                                            <Button onClick={this.selectModule}>Select Modules</Button>
                                
                                          </Col>
                                          
                                        </Row>                                
                                        <Row>
                                        <Form.Group>
                                              <Form.Label>Compensate</Form.Label>
                                              <ToggleButtonGroup type="radio" name="compensate" defaultValue={"True"}>
                                                  <ToggleButton variant="outline-dark" id="compensate_true" value={"True"} checked={this.state.checked === "True"} onChange={this.handleInputChange}>
                                                      True
                                                  </ToggleButton>
                                                  <ToggleButton variant="outline-dark" id="compensate_false" value={"False"} checked={this.state.checked === "False"} onChange={this.handleInputChange}>
                                                      False
                                                  </ToggleButton>
                                              </ToggleButtonGroup>
                                          </Form.Group>
                                        </Row>
                                        <Row style={{float: 'right'}}>
                                          
                                          <Button size="sm" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.paamModule}>
                                              Power On
                                          </Button>
                                          {' '}
                                          <Button size="sm" variant="danger" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.moduleStandby}>
                                            RFCs Off
                                          </Button>
                                          <Button size="sm" variant="success" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.paam_rfcs_on}>
                                            RFCs On
                                          </Button>
                                        </Row>
                                        
                                          {/* <Col> */}
                                      </div>
                                }
                                {this.state.dut === "kfam" &&
                                    <div>
                                      <hr/>
                                      <h5>KFAM RFC Control</h5>
                                
                                      <br/>
                                        <br/>
                                        <Row>
                                          <Col sm>
                                                <h5>RFCs Powered On (Display Grid)</h5>
                                                <Container style={{width: "250px"}}>
                                                  {RFC_MAP.map(bt => (
                                                      <Button style={{width: "50px"}}
                                                          variant={this.rfcscolor(bt.id)}//{this.state.standby.includes(bt.id) ? 'warning' : 'outline-success'}
                                                          key={bt.id}
                                                          // value={bt.id}
                                                          onClick={() => this.read_state(bt)}
                                                          // checked={this.state.modulesOn.includes(bt.id) ? true : false}
                                                      >
                                                          {this.state.polarity === "H" ? bt.h : bt.v}
                                                      </Button>
                                                  ))}
                                              </Container >
                                          <hr/>
                                          </Col>
                                          <Col sm>
                                          <h5>Selection Grid</h5>
                                            <Container style={{width: "250px"}}>
                                                <ButtonToolbar>
                                                {/* <ToggleButtonGroup style={{width: "400px"}} type='checkbox'> */}
                                                {RFC_MAP.map(bt => (
                                                    <Button style={{width: "50px"}}
                                                        // style={{
                                                        //   color: 'white', /* Text color */
                                                        //   // background: '#0099cc'
                                                        //   background: "linear-gradient(#e5f4f9, #b2e0ef, #3c568c);"
                                                        // }}
                                                        variant={this.state.selectedRFCs.includes(bt.id) ? 'primary' : 'outline-primary'}
                                                        // type='checkbox'
                                                        key={bt.id}
                                                        // value={bt.id}
                                                        onClick={() => this.handleRFC(bt)}
                                                        // checked={this.state.selectedModules.includes(bt.id) ? true : false}
                                                    >
                                                        {this.state.polarity === "H" ? bt.h : bt.v}
                                                    </Button>
                                                ))}
                                                {/* </ToggleButtonGroup> */}
                                                </ButtonToolbar>
                                                <hr/>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Select All RFCs")}
                                                >
                                                  <Button variant='outline-success' onClick={this.selectAllRFCs}>Select All</Button>                                                  
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Unselect ALL RFCs")}
                                                >
                                                  <Button variant='outline-danger' onClick={this.unSelectAllRFCs}>Unselect All</Button>                                                  
                                                </OverlayTrigger>
                                            </Container >
                                          </Col>
                                          
                                        </Row>
                                        <Row style={{float: 'right'}}>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Enable selected RFCs")}
                                          >
                                            <Button size="sm" variant="success" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.kfam_rfcs_on}>
                                              RFCs On
                                            </Button>
                                          </OverlayTrigger>
                                          {' '}
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Disable selected RFCs")}
                                          >
                                            <Button size="sm" variant="danger" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.rfcsOff}>
                                              RFCs Off
                                            </Button>                                            
                                          </OverlayTrigger>
                                        </Row>
                                        
                                      </div>
                                }
                                <br/>
                                <hr/>
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Display Manual Register Control")}
                                >
                                  <Button size="sm" onClick={this.manual_register_control}>
                                    Toggle Manual Register Control
                                  </Button>
                                </OverlayTrigger>
                                {this.state.manual_register &&
                                  <div>
                                    <br/>
                                    <Container style={{border: '1px solid black'}}>
                                      <h5>Manual Register Control</h5>
                                      <Row>
                                        <Col>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Die Select</Form.Label>
                                            <ToggleButtonGroup type="radio" name="die_select" defaultValue={"0"}>
                                                <ToggleButton variant="outline-dark" id="die_0" value={"0"} checked={this.state.checked === "0"} onChange={this.handleInputChange}>
                                                    0
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="die_1" value={"1"} checked={this.state.checked === "1"} onChange={this.handleInputChange}>
                                                    1
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                          </Form.Group>
                                        </Col>
                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Read Register Value")}
                                          >
                                            <Button variant='warning' onClick={this.die_address_read}>Read</Button>
                                          </OverlayTrigger>
                                        </Col>
                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Write HEX Value to selected Die Address")}
                                          >
                                            <Button variant='success' onClick={this.die_address_write_hex}>Write Hex</Button>
                                          </OverlayTrigger>
                                        </Col>
                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Write Binary Value to selected Die Address")}
                                          >
                                            <Button variant='success' onClick={this.die_address_write_bin}>Write Binary</Button>
                                          </OverlayTrigger>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Register Address</Form.Label>
                                            <Form.Control name="reg_address" value={this.state.reg_address} placeholder="Register Address" onChange={this.handleInputChange}/>
                                          </Form.Group>
                                        </Col>
                                        <Col>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>HEX Value</Form.Label>
                                            <Form.Control name="reg_hex" value={this.state.reg_hex} placeholder="Hex Value" onChange={this.handleInputChange}/>
                                          </Form.Group>
                                        </Col>
                                        <Col>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Binary Value</Form.Label>
                                            <Form.Control name="reg_bin" value={this.state.reg_bin} placeholder="Binary Value" onChange={this.handleInputChange}/>
                                          </Form.Group>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={2} sm={2} md={2} lg={2}>
                                          {/* {this.state.settings} */}
                                          <br/>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Read Register Fields from selected Die Address")}
                                          >
                                            <Button variant='success' onClick={this.die_address_read_fields}>Read Fields</Button>
                                          </OverlayTrigger>
                                        </Col>
                                        <Col>
                                          <table className="table table-striped table-bordered" style={{width: '100%'}}>
                                            <thead>
                                                <th>Address</th>
                                                <th>Field Name</th>
                                                <th>Field Value</th>
                                                <th>Max Value</th>
                                            </thead>
                                            <tbody style={{width: '100%','font-size':'85%'}}>
                                                {this.state.register_fields.map((data) => (
                                                    <tr>
                                                        <td>{data.address}</td>
                                                        <td>{data.field}</td>
                                                        <td>{data.value}</td>
                                                        <td>{data.max}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        </Col>
                                      </Row>
                                      <br/>
                                    </Container>
                                  </div>
                                }
                                <br/>
                                <hr/>
                                <OverlayTrigger
                                  placement="auto"
                                  overlay={this.renderTooltip("Display Register Control")}
                                >
                                  <Button size="sm" onClick={this.show_register_control}>
                                    Toggle Display Register Slider Control
                                  </Button>
                                </OverlayTrigger>
                                
                                <br/>
                                {this.state.register_control &&
                                  <div>
                                    <br/>
                                    <h5>Register Control</h5>
                                    {this.state.dut === "kfam" &&
                                      <div>
                                        <Row>
                                          <Col>
                                            <OverlayTrigger
                                              placement="auto"
                                              overlay={this.renderTooltip("Read KFAM AWV registers, Mixers, AGC, BSW settings")}
                                            >
                                              <Button variant='outline-primary' onClick={() => this.get_state(BUTTONS[20])}>Read Current State</Button>
                                            </OverlayTrigger>
                                          </Col>
                                          <Col>
                                            <OverlayTrigger
                                              placement="auto"
                                              overlay={this.renderTooltip("Read Mixer, AGC, BSW settings for both die and save to a file")}
                                            >
                                              <Button onClick={this.saveSettingsToFile} variant='warning'>Save Current Settings to File</Button>
                                            </OverlayTrigger>
                                          </Col>
                                        </Row>
                                      </div>                                    
                                    }
                                    <br/>
                                    <Container >
                                      <Tabs defaultActiveKey="phases" id="uncontrolled-tab-example" className="mb-3">
                                        
                                        <Tab eventKey="rfc_awv" title="RFC AWV">
                                          <Grid container spacing={2}>
                                            <Grid item xs={1}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  RFC #
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={5}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  Phase Shift
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={3}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  Phase Shifter Bias
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={3}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  Combiner/Divider Bias
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={12}>
                                            {[...Array(16).keys()].map(rfc => (
                                              <div>
                                                <Row>
                                                <Grid item xs={1}>
                                                    <Typography id="track-false-slider" gutterBottom>
                                                      {rfc}:
                                                    </Typography>
                                                    </Grid>
                                                  <Grid item xs={3}>
                                                    <Slider size='small'
                                                          name={"rfc"+ rfc +"_phase"}
                                                          // aria-label="rfc0_phase" 
                                                          value={this.state["rfc" + rfc + "_phase"]} 
                                                          onChange={this.handleInputChange} 
                                                          marks
                                                          step={2.875}
                                                          min={0}
                                                          max={360}
                                                          valueLabelDisplay="auto"
                                                      />
                                                      </Grid>
                                                    <Grid item xs={2}>
                                                      <Input style={{width:'80%'}}
                                                        type='float'
                                                        name={"rfc"+ rfc +"_phase"}
                                                        value={this.state["rfc" + rfc + "_phase"]} 
                                                        onChange={this.handleInputChange} 
                                                        marks
                                                        min={0}
                                                        max={360}
                                                        step={11.25}
                                                        />
                                                      </Grid>
                                                      <Grid item xs={2}>
                                                        <Slider 
                                                          name={"ge_gain_" + rfc}
                                                          // aria-label="rfc0_phase" 
                                                            value={this.state["ge_gain_" + rfc]} 
                                                            onChange={this.handleInputChange} 
                                                            marks
                                                            min={0}
                                                            max={7}
                                                            valueLabelDisplay="auto"
                                                        />
                                                      </Grid>
                                                      <Grid item xs={1}>
                                                        <Input  style={{width:'90%'}}
                                                        type='number'
                                                          name={"ge_gain_" + rfc}
                                                          value={this.state["ge_gain_" + rfc]} 
                                                          onChange={this.handleInputChange} 
                                                          marks
                                                          min={0}
                                                          max={7}
                                                          />
                                                      </Grid>
                                                      <Grid item xs={2}>
                                                        <Slider 
                                                          name={"acd_bias_" + rfc}
                                                          // aria-label="rfc0_phase" 
                                                            value={this.state["acd_bias_" + rfc]} 
                                                            onChange={this.handleInputChange} 
                                                            marks
                                                            min={0}
                                                            max={7}
                                                            valueLabelDisplay="auto"
                                                        />
                                                      </Grid>
                                                      <Grid item xs={1}>
                                                        <Input  style={{width:'90%'}}
                                                        type='number'
                                                          name={"acd_bias_" + rfc}
                                                          value={this.state["acd_bias_" + rfc]} 
                                                          onChange={this.handleInputChange} 
                                                          marks
                                                          min={0}
                                                          max={7}
                                                          />
                                                      </Grid>
                                                    </Row>
                                              </div>
                                              ))}
                                              </Grid>
                                              <Grid item xs={5}>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Apply RFC 0 Phases to All RFCs")}
                                                >
                                                  <Button variant='outline-primary' onClick={this.applyAllPhases}>Apply All</Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Read AWV Phases and Invert by 180°")}
                                                >
                                                  <Button variant='warning' onClick={this.invertPhases}>
                                                    Invert Phases
                                                  </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Send AWV Phases to all RFCs")}
                                                >
                                                  <Button onClick={this.send_phases}>Send Phases</Button>
                                                </OverlayTrigger>
                                              </Grid>
                                              <Grid item xs={5}>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Send all GE Gain Values to all RFCs")}
                                                >
                                                  <Button onClick={this.send_ge_vals}>Send GE Vals</Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Send RFC 0 GE Gain Value to all RFCs")}
                                                >
                                                  <Button variant='outline-primary' onClick={this.applyAllGEGain}>Apply All</Button>
                                                </OverlayTrigger>

                                              </Grid>
                                              <Grid item xs={2}>
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Read AWV Phases from current AWV Table Beam")}
                                                >
                                                  <Button variant='outline-primary' onClick={this.getCurrBeamPhases}>Read AWV Table</Button>
                                                </OverlayTrigger>
                                              </Grid>
                                          </Grid>
                                        </Tab>
                                        {this.state.tx_rx === 'TX' &&
                                        <Tab eventKey="tx_mixer_set" title="Mixer Set">
                                            <Box sx={{ width: '80%' }}>
                                            {TX_MIXER_SETTINGS.map(st => (
                                                  <div>
                                                  {st.pol.includes(this.state.polarity) &&
                                                      <div>
                                                        <Typography id="track-false-slider" gutterBottom>
                                                          {st.title}:
                                                        </Typography>
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
                                                        
                                                      </div>
                                                  }
                                                  </div>
                                              ))}
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Send Mixer settings to both Die")}
                                                >
                                                  <Button onClick={this.send_tx_mixer}>Send Settings</Button>
                                                </OverlayTrigger>
                                            </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'TX' &&
                                        <Tab eventKey="rfc_tx_agc" title="RFC TX AGC" >
                                          <Row>
                                            <Col>
                                              <Box sx={{ width: '80%' }}>
                                              {RFC_TX_AGC_SETTINGS.map(st => (
                                                <div>
                                                {st.pol.includes(this.state.polarity) &&
                                                    <div>
                                                      <Typography id="track-false-slider" gutterBottom>
                                                        {st.title}:
                                                      </Typography>
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
                                                      
                                                    </div>
                                                }
                                                </div>
                                              ))}
                                                <OverlayTrigger
                                                  placement="auto"
                                                  overlay={this.renderTooltip("Send AGC settings to selected RFCs")}
                                                >
                                                  <Button onClick={this.send_rfc_tx_agc}>Send Settings</Button>
                                                </OverlayTrigger>
                                              </Box>
                                            </Col>
                                            <Col>
                                                  <h5>RFC Selection Grid</h5>
                                                    <Container style={{width: "250px"}}>
                                                        <ButtonToolbar>
                                                        {RFC_MAP.map(bt => (
                                                            <Button style={{width: "50px"}}
                                                                variant={this.variablerfcscolor(bt.id)}
                                                                checked={this.state.variableRFCs.includes(bt.id)}
                                                                key={bt.id}
                                                                onClick={() => this.handleVariableRFC(bt)}

                                                            >
                                                                {this.state.polarity === "H" ? bt.h : bt.v}
                                                            </Button>
                                                        ))}
                                                        </ButtonToolbar>
                                                        <hr/>
                                                        
                                                        <OverlayTrigger
                                                          placement="auto"
                                                          overlay={this.renderTooltip("Select ALL RFCs")}
                                                        >
                                                          <Button variant='outline-success' onClick={this.selectVariableRFCs}>Select All</Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                          placement="auto"
                                                          overlay={this.renderTooltip("Unselect ALL RFCs")}
                                                        >
                                                          <Button variant='outline-danger' onClick={this.unSelectVariableRFCs}>Unselect All</Button>
                                                        </OverlayTrigger>
                                                    </Container >
                                            </Col>
                                          </Row>
                                        </Tab>
                                        }
                                        {/* {this.state.tx_rx === 'TX' && */}
                                        <Tab eventKey="rfc_bsw" title="RFC BSW" >
                                          <Row>
                                            <Col>
                                               <Box sx={{ width: '80%' }}>
                                                {RFC_BSW_SETTINGS.map(st => (
                                                    <div>
                                                      {st.pol.includes(this.state.polarity) &&
                                                        <div>
                                                          <Typography id="track-false-slider" gutterBottom>
                                                            {st.title}:
                                                          </Typography>
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
                                                          
                                                        </div>
                                                    }                                                      
                                                    </div>
                                                ))}
                                                  <OverlayTrigger
                                                    placement="auto"
                                                    overlay={this.renderTooltip("Send BSW settings to selected RFCs")}
                                                  >
                                                    <Button onClick={this.send_rfc_bsw}>Send Settings</Button>
                                                  </OverlayTrigger>
                                                </Box>
                                            </Col>
                                            <Col>
                                              <h5>RFC Selection Grid</h5>
                                                <Container style={{width: "250px"}}>
                                                    <ButtonToolbar>
                                                    {RFC_MAP.map(bt => (
                                                        <Button style={{width: "50px"}}
                                                            variant={this.state.selectedRFCs.includes(bt.id) ? 'primary' : 'outline-primary'}
                                                            key={bt.id}
                                                            onClick={() => this.handleRFC(bt)}
                                                        >
                                                            {this.state.polarity === "H" ? bt.h : bt.v}
                                                        </Button>
                                                    ))}
                                                    </ButtonToolbar>
                                                    <hr/>
                                                    <Button variant='outline-success' onClick={this.selectAllRFCs}>Select All</Button>
                                                    <Button variant='outline-danger' onClick={this.unSelectAllRFCs}>Unselect All</Button>
                                                </Container >
                                            </Col>
                                          </Row>
                                        </Tab>
                                        {/* } */}
                                        {this.state.tx_rx === 'RX' &&
                                        <Tab eventKey="rx_mixer_set" title="RX Mixer Set">
                                            <Box sx={{ width: '80%' }}>
                                            {RX_MIXER_SETTINGS.map(st => (
                                                  <div>
                                                  {st.pol.includes(this.state.polarity) &&
                                                      <div>
                                                        <Typography id="track-false-slider" gutterBottom>
                                                          {st.title}:
                                                        </Typography>
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
                                                        
                                                      </div>
                                                  }
                                                  </div>
                                              ))}
                                                <Button onClick={this.send_rx_mixer}>Send Settings</Button>
                                            </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'RX' &&
                                        <Tab eventKey="rfc_rx_agc" title="Phase RFC RX AGC" >
                                               <Box sx={{ width: '80%' }}>
                                               {RFC_RX_AGC_SETTINGS.map(st => (
                                                  <div>
                                                    {st.pol.includes(this.state.polarity) &&
                                                      <div>
                                                        <Typography id="track-false-slider" gutterBottom>
                                                          {st.title}:
                                                        </Typography>
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
                                                        
                                                      </div>
                                                  }
                                                  </div>
                                              ))}
                                                <Button onClick={this.send_rfc_rx_agc}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }                                        
                                      </Tabs>
                                    </Container>
                                    
                                  </div>
                                }
                            </Form>

                            <hr/>
                            <br/>

                            <h5>Load AWV Table</h5>
                            <br/>
                            <Form>
                              <Row>
                                <Col>
                                  <OverlayTrigger
                                    placement="auto"
                                    overlay={this.renderTooltip("Load Default Codebook or Uploaded Phases")}
                                  >
                                    <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.loadAWV}>
                                      Load Codebook
                                    </Button>
                                  </OverlayTrigger>
                                </Col>
                                {/* <Col>
                                  <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.loadCal}>
                                    Load Calibrated Phases
                                  </Button>
                                </Col> */}
                                <Col>
                                  <OverlayTrigger
                                    placement="auto"
                                    overlay={this.renderTooltip("Set DUT to AWV Table Sweep Mode")}
                                  >
                                    <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.setAWV}>
                                      Set AWV
                                    </Button>
                                  </OverlayTrigger>
                                </Col>
                                <Col>
                                  <OverlayTrigger
                                    placement="auto"
                                    overlay={this.renderTooltip("Set DUT to AWV Dedicated Mode")}
                                  >
                                    <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.setDED}>
                                      Set Dedicated
                                    </Button>
                                  </OverlayTrigger>
                                </Col>
                              </Row>
                              <Row>
                              
                              </Row>
                              <br/>
                              <Container style={{borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                                {/* <FileUpload/> */}
                              </Container>
                              {this.state.beam_toggle === 1 &&
                                <div>
                                  <hr/>
                                  <h5>Toggle Beam</h5>
                                    <br/>
                                    <Form>
                                      <Row>
                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Get current beam pointer")}
                                          >
                                            <Button size="sm" style={{width:'80px', resize:'none'}} onClick={this.getCurrBeam}>
                                              Get Current Beam
                                            </Button>

                                          </OverlayTrigger>
                                        </Col>
                                        <Col>
                                            <Form.Label>Current Beam</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none'}} name="currBeam" value={this.state.currBeam} placeholder="Current Beam ID" onChange={this.handleInputChange}/>
                                        </Col>
                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Toggle beam by one increment")}
                                          >
                                            <Button size="sm" style={{width:'80px', resize:'none'}} onClick={this.toggleBeam}>
                                              Toggle Beam
                                            </Button>
                                          </OverlayTrigger>
                                        </Col>
                                        
                                        <Col>
                                            <Form.Label>Beam of Choice</Form.Label>
                                            <Form.Control style={{width:'100px', resize:'none'}} name="chosenBeam" value={this.state.chosenBeam} placeholder="Beam of Choice" onChange={this.handleInputChange}/>
                                        </Col>

                                        <Col>
                                          <br/>
                                          <OverlayTrigger
                                            placement="auto"
                                            overlay={this.renderTooltip("Move to a specific Beam")}
                                          >
                                            <Button size="sm" style={{width:'80px', resize:'none'}} onClick={this.selectBeam}>
                                              Move to Beam
                                            </Button>
                                          </OverlayTrigger>
                                        </Col>
                                      </Row>
                                    </Form>
                                    <br/>
                                    <h4>Beam Index</h4>
                                    {this.state.dut === 'kfam' &&
                                    <div>
                                      {/* <BeamPointAndrey /> */}
                                      <Container  style={{width: '290px', height: '250px', backgroundImage: 'url(' + Image + ')',
                                                                                            backgroundPosition: 'center',
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundRepeat: 'no-repeat'}}>
                                        <div>
                                        <Row noGutters ><div>55</div></Row>
                                        <Row noGutters >
                                        <Col md='auto' ><hr style={{height:'52px', visibility:'hidden'}} />-55</Col> 
                                        <Col noGutters style={{width: '100px'}}>
                                            
                                                {KFAM_BEAMS.map(beam => (
                                                    <Button variant={this.state.currBeam === beam.id ? 'primary' : 'warning'} style={{borderRadius: '50%'}} key={beam.id} onClick={() => this.chooseBeam(beam)}>
                                                    {beam.title}
                                                    </Button>
                                                ))}
                                            </Col>   
                                            <Col md='auto' style={{backgroundColor: '#eb3f35'}}><hr style={{height:'52px', visibility:'hidden'}}/>55</Col>
                                            </Row>
                                            <Row noGutters ><div style={{backgroundColor: '#73c991'}}><strong>-55</strong></div></Row>
                                        </div>
                                        </Container >
                                    </div>
                                    }
                                    {this.state.dut === 'paam' &&
                                    <div>
                                      <Container 
                                        style={{width: '755px'}}
                                    >
                                      <h5>Subarray #1</h5>
                                        {ARR1_BEAMS.map(beam => (
                                            <Button
                                                variant={this.state.arr1_beam === (beam.id) ? 'primary' : 'outline-primary'} 
                                                style={
                                                    beam.id <= 25 ? {
                                                        borderRadius: '50%', 
                                                        width: '30px',
                                                        height: '30px',
                                                        fontSize: '12px',
                                                        borderWidth: '1px'
                                                        } : {
                                                    borderRadius: '50%', 
                                                    width: '30px',
                                                    height: '30px',
                                                    fontSize: '12px',
                                                    borderWidth: '1px',
                                                    backgroundColor: 'grey'
                                                    }
                                                }
                                                disabled={beam.id > 25}
                                                
                                                onClick={() => this.chooseBeam(beam)}
                                            >
                                                {beam.id}
                                            </Button>
                                        ))}
                                    </Container>
                                    <br/>
                                      <Container 
                                        style={{width: '755px'}}
                                    >
                                      <h5>Subarray #2</h5>
                                        {ARR2_BEAMS.map(beam => (
                                            <Button
                                                variant={this.state.arr2_beam === (beam.id) ? 'primary' : 'outline-primary'} 
                                                style={
                                                    beam.id <= 25 ? {
                                                        borderRadius: '50%', 
                                                        width: '30px',
                                                        height: '30px',
                                                        fontSize: '12px',
                                                        borderWidth: '1px'
                                                        } : {
                                                    borderRadius: '50%', 
                                                    width: '30px',
                                                    height: '30px',
                                                    fontSize: '12px',
                                                    borderWidth: '1px',
                                                    backgroundColor: 'grey'
                                                    }
                                                }
                                                disabled={beam.id > 25}
                                                
                                                onClick={() => this.chooseBeam(beam)}
                                            >
                                                {beam.id}
                                            </Button>
                                        ))}
                                    </Container>
                                    <br/>
                                    <Container 
                                        style={{width: '755px'}}
                                    >
                                      <h5>Subarray #3</h5>
                                        {ARR3_BEAMS.map(beam => (
                                            <Button
                                                variant={this.state.arr3_beam === (beam.id) ? 'primary' : 'outline-primary'} 
                                                style={
                                                    beam.id <= 25 ? {
                                                        borderRadius: '50%', 
                                                        width: '30px',
                                                        height: '30px',
                                                        fontSize: '12px',
                                                        borderWidth: '1px'
                                                        } : {
                                                    borderRadius: '50%', 
                                                    width: '30px',
                                                    height: '30px',
                                                    fontSize: '12px',
                                                    borderWidth: '1px',
                                                    backgroundColor: 'grey'
                                                    }
                                                }
                                                disabled={beam.id > 25}
                                                
                                                onClick={() => this.chooseBeam(beam)}
                                            >
                                                {beam.id}
                                            </Button>
                                        ))}
                                    </Container>
                                    <br/>
                                    <Container 
                                        style={{width: '755px'}}
                                    >
                                    <h5>Subarray #4</h5>
                                        {ARR4_BEAMS.map(beam => (
                                            <Button
                                                variant={this.state.arr4_beam === (beam.id) ? 'primary' : 'outline-primary'} 
                                                style={
                                                    beam.id <= 25 ? {
                                                        borderRadius: '50%', 
                                                        width: '30px',
                                                        height: '30px',
                                                        fontSize: '12px',
                                                        borderWidth: '1px'
                                                        } : {
                                                    borderRadius: '50%', 
                                                    width: '30px',
                                                    height: '30px',
                                                    fontSize: '12px',
                                                    borderWidth: '1px',
                                                    backgroundColor: 'grey'
                                                    }
                                                }
                                                disabled={beam.id > 25}
                                                
                                                onClick={() => this.chooseBeam(beam)}
                                            >
                                                {beam.id}
                                            </Button>
                                        ))}
                                    </Container>
                                    </div>
                                  }
                                  </div>
                              }
                                
                            </Form>
                            <hr/>
                            <br/>
                        </Container>
                      
                  </Col>
                </Row>
            </Container>
            <br/>
        </div>
      )
    }
}

export default DUT_GEN2;