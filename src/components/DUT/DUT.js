import React from 'react';
import axios from 'axios';

// import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Form, Row, Col, ToggleButton, ToggleButtonGroup, Button, Tabs, Tab, ButtonToolbar } from 'react-bootstrap';
import FileUpload1p5 from '../Data/FileUpload_1p5';
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
  { id: 0, h: 14, v: 7, title: '1,1' },
  { id: 1, h: 15, v: 6, title: '1,2' },
  { id: 2, h: 0, v: 9, title: '1,3' },
  { id: 3, h: 2, v: 8, title: '1,4' },
  { id: 4, h: 12, v: 5, title: '1,5' },
  { id: 5, h: 13, v: 4, title: '1,6' },
  { id: 6, h: 1, v: 11, title: '2,1' },
  { id: 7, h: 4, v: 10, title: '2,2' },
  { id: 8, h: 10, v: 3, title: '2,3' },
  { id: 9, h: 11, v: 1, title: '2,4' },
  { id: 10, h: 3, v: 14, title: '2,5' },
  { id: 11, h: 5, v: 12, title: '2,6' },
  { id: 12, h: 9, v: 2, title: '3,1' },
  { id: 13, h: 8, v: 0, title: '3,2' },
  { id: 14, h: 7, v: 15, title: '3,3' },
  { id: 15, h: 6, v: 13, title: '3,4' }
]

const RFC_TX_AGC_SETTINGS = [
  { id: 'pa', min: 0, max: 7, title: 'PA' },
  { id: 'da', min: 0, max: 7, title: 'DA' },
  { id: 'u_vga', min: 0, max: 7, title: 'Uni-VGA' },
  { id: 'u_vga_cs', min: 0, max: 15, title: 'Uni-VGA CS' },
  { id: 'tx_d_ba', min: 0, max: 7, title: 'DisNBA' },
  { id: 'tx_d_ba_cs', min: 0, max: 15, title: 'DisNBA CS' }
]

const TX_MIXER_SETTINGS = [
  { id: 'mx_vga1', min: 0, max: 3, title: 'MX-VGA Stg 1' },
  { id: 'mx_vga2', min: 0, max: 3, title: 'MX-VGA Stg 2' },
  { id: 'mx_pa', min: 0, max: 3, title: 'MX-PA' },
  { id: 'mx_da', min: 0, max: 3, title: 'MX-DA' },
  { id: 'txmx', min: 0, max: 3, title: 'TXMX' },
  { id: 'tx_if_diff', min: 0, max: 3, title: 'TXIF' }
]

const RX_MIXER_SETTINGS = [
  { id: 'rxrf', min: 0, max: 3, title: 'RX RF' },
  { id: 'rxrf_cs', min: 0, max: 15, title: 'RX RF CS' },
  { id: 'rxmx', min: 0, max: 3, title: 'RX MX' },
  { id: 'rx_if_diff', min: 0, max: 3, title: 'RX IF Diff'}
]

const RFC_RX_AGC_SETTINGS = [
  { id: 'lna1', min: 0, max: 7, title: 'LNA1' },
  { id: 'lna2', min: 0, max: 7, title: 'LNA2' },
  { id: 'lna3', min: 0, max: 7, title: 'LNA3' },
  { id: 'rsv_rfc', min: 0, max: 15, title: 'RSV RFC'},
  { id: 'rx_d_ba', min: 0, max: 7, title: 'DisNBA' },
  { id: 'rx_d_ba_cs', min: 0, max: 15, title: 'DisNBA CS' }
]

const IF_3G_TX_BIAS_SETTINGS =[
  { id: 'tx_if1_ba', min: 0, max: 7, title: 'IF1 Bias' },
  { id: 'tx_if2_ba', min: 0, max: 7, title: 'IF2 Bias' },
  { id: 'tx_mx_ba', min: 0, max: 7, title: 'Mixer Bias' },
  { id: 'tx_act_balun_ba', min: 0, max: 7, title: 'Active Balun Bias'},
  { id: 'tx_div_ba', min: 0, max: 7, title: 'Divider Bias' },
]

const IF_3G_TX_SETTINGS =[
  { id: 'tx_if1_gain', min: 0, max: 3, title: 'IF1 Gain' },
  { id: 'tx_if2_gain', min: 0, max: 1, title: 'IF2 Gain' },
  { id: 'tx_if_io_match', min: 0, max: 3, title: 'IO Matching' },
  { id: 'tx_if2_bsw', min: 0, max: 1, title: 'IF2 BSW'},
  { id: 'tx_poly_ul', min: 0, max: 1, title: 'Polyphase UL BSW' },
  { id: 'tx_poly_bsw', min: 0, max: 3, title: 'Polyphase Filter BSW' }
]

const IF_3G_RX_BIAS_SETTINGS =[
  { id: 'rx_if1_ba', min: 0, max: 7, title: 'IF1 Bias' },
  { id: 'rx_if2_ba', min: 0, max: 7, title: 'IF2 Bias' },
  { id: 'rx_mx_ba', min: 0, max: 7, title: 'Mixer Bias' },
  { id: 'rx_act_balun_ba', min: 0, max: 7, title: 'Active Balun Bias'},
  { id: 'rx_div_ba', min: 0, max: 7, title: 'Divider Bias' },
  { id: 'o_buff_ba', min: 0, max: 7, title: 'Output Buffer Bias' },
]

const IF_3G_RX_SETTINGS =[
  { id: 'rx_if1_gain', min: 0, max: 3, title: 'IF1 Gain' },
  { id: 'rx_if2_gain', min: 0, max: 1, title: 'IF2 Gain' },
  { id: 'rx_if_attn', min: 0, max: 3, title: 'Attenuator' },
  { id: 'rx_if2_bsw', min: 0, max: 7, title: 'IF2 BSW'},
  { id: 'rx_poly_ul', min: 0, max: 1, title: 'Polyphase UL BSW' },
  { id: 'rx_ppf_bsw', min: 0, max: 3, title: 'Polyphase Filter BSW' }
]

class DUT extends React.Component {
    constructor() {
      super();
      this.state = {
        polarity: 'V',
        tx_rx: 'TX',
        if_3ghz: 'True',
        currBeam: '',
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
        file_upload: false,
        test_reg: 4,
        show_rfc_tx_agc: false,
        show_mixer_set: false,

        arr3_beam:'',
        arr4_beam: '',
        
        compensate: "True",

        // rfcs: [
        //   { id: 0, phase: 0, ge_gain: 0 },
        //   { id: 1, phase: 11.25, ge_gain: 0 },
        //   { id: 2, phase: 22.5, ge_gain: 0 },
        //   { id: 3, phase: 3, ge_gain: 0 },
        //   { id: 4, phase: 0, ge_gain: 0 },
        //   { id: 5, phase: 0, ge_gain: 0 },
        //   { id: 6, phase: 0, ge_gain: 0 },
        //   { id: 7, phase: 0, ge_gain: 0 },
        //   { id: 8, phase: 0, ge_gain: 0 },
        //   { id: 9, phase: 0, ge_gain: 0 },
        //   { id: 10, phase: 0, ge_gain: 0 },
        //   { id: 11, phase: 0, ge_gain: 0 },
        //   { id: 12, phase: 0, ge_gain: 0 },
        //   { id: 13, phase: 0, ge_gain: 0 },
        //   { id: 14, phase: 0, ge_gain: 0 },
        //   { id: 15, phase: 0, ge_gain: 0 },
        // ],

        phases: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ge_gain_vals: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ge_bias: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

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

        settings: {
          pa: 4,
          da: 4,
          u_vga: 5,
          u_vga_cs: 15,
          d_ba: 6,
          d_ba_cs: 15,
          
          txif: 2,
          rxrf: 0,
          rxmx: 0,
          rx_if_diff: 0,
          rxrf_cs: 0,
          mx_vga_stg1: 2,
          mx_vga_stg2: 2,
          txmx: 1,
          mx_pa: 2,
          mx_da: 2,
        },

        pa: 1,
        da: 1,
        u_vga: 1,
        u_vga_cs: 1,
        tx_d_ba: 1,
        tx_d_ba_cs: 1,

        tx_if_diff: 2,
        mx_vga1: 2,
        mx_vga2: 2,
        txmx: 1,
        mx_pa: 2,
        mx_da: 2,

        tx_if1_ba: 4,
        tx_if2_ba: 4,
        tx_mx_ba: 4,
        tx_act_balun_ba: 4,
        tx_div_ba: 6,

        tx_if2_gain: 1,
        tx_if1_gain: 1,
        tx_if_io_match: 3,
        tx_if2_bsw: 0,
        tx_poly_ul: 0,
        tx_poly_bsw: 0,

        rxrf: 0,
        rxmx: 0,
        rx_if_diff: 0,
        rxrf_cs: 0,

        lna1: 1,
        lna2: 1,
        lna3: 1,
        rsv_rfc: 3,
        rx_d_ba: 3,
        rx_d_ba_cs: 15,

        rx_if1_ba: 4,
        rx_if2_ba: 4,
        rx_mx_ba: 4,
        rx_act_balun_ba: 4,
        rx_div_ba: 6,
        o_buff_ba: 4,

        rx_if2_gain: 1,
        rx_if1_gain: 1,
        rx_if_attn: 3,
        rx_if2_bsw: 0,
        rx_poly_ul: 0,
        rx_ppf_bsw: 0,


        
        selectedModules: [],
        rows: [],
        selectedRows: [],
        cols: [],
        selectedCols: [],
        modulesOn: [],
        standby: [],

        reg_vals: ['Test', 'test2'],
        
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
        let url = `http://127.0.0.1:5000/dut/${query}`;
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
            this.sendMove(`init/kfam+${this.state.polarity}+${this.state.tx_rx}+${this.state.if_3ghz}+${this.state.evb_sn}+${this.state.dut_sn}`);
        } else {
            this.sendMove(`init/paam+${this.state.polarity}+${this.state.tx_rx}+${this.state.if_3ghz}+${this.state.evb_sn}+${this.state.dut_sn}`);
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
        this.sendMove(`beam_steer_test/${this.state.polarity}`);
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
      url = `http://127.0.0.1:5000/dut/read_back/${object}`;
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

    rfcOn = rfc => {
      this.sendMove(`rfc_on/${rfc}`);
      let tmp = this.state.ge_bias;
      tmp[rfc] = 1;
      this.setState({ge_bias: tmp});
      console.log(this.state);
    }

    rfcOff = rfc => {
      this.sendMove(`rfc_off/${rfc}`);
      let tmp = this.state.ge_bias;
      tmp[rfc] = 0;
      this.setState({ge_bias: tmp});
      console.log(this.state);
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
      this.sendMove(`save_settings_to_file/${this.state.selectedRows}+${this.state.selectedCols}`);

    }

    async get_state(button) {
      var url = ``;
      if (this.state.dut === "kfam") {
        url = `http://127.0.0.1:5000/dut/read_register_fields/3072`;
      } else {
        url = `http://127.0.0.1:5000/dut/${button.row}+${button.col}/read_register_fields/3072`;
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
                pa: result.settings.pa,
                da: result.settings.da,
                u_vga: result.settings.u_vga,
                u_vga_cs: result.settings.u_vga_cs,
                tx_d_ba: result.settings.tx_d_ba,
                tx_d_ba_cs: result.settings.tx_d_ba_cs,
                tx_if_diff: result.settings.tx_if_diff,
                rxrf: result.settings.rxrf,
                rxmx: result.settings.rxmx,
                rx_if_diff: result.settings.rx_if_diff,
                rxrf_cs: result.settings.rxrf_cs,
                mx_vga1: result.settings.mx_vga1,
                mx_vga2: result.settings.mx_vga2,
                txmx: result.settings.txmx,
                mx_pa: result.settings.mx_pa,
                mx_da: result.settings.mx_da,
                lna1: result.settings.lna1,
                lna2: result.settings.lna2,
                lna3: result.settings.lna3,
                rsv_rfc: result.settings.rsv_rfc,
                rx_d_ba: result.settings.rx_d_ba,
                rx_d_ba_cs: result.settings.rx_d_ba_cs,

                tx_if1_ba: result.settings.tx_if1_ba,
                tx_if2_ba: result.settings.tx_if2_ba,
                tx_mx_ba: result.settings.tx_mx_ba,
                tx_act_balun_ba: result.settings.tx_act_balun_ba,
                tx_div_ba: result.settings.tx_div_ba,

                tx_if2_gain: result.settings.tx_if2_gain,
                tx_if1_gain: result.settings.tx_if1_gain,
                tx_if_io_match: result.settings.tx_if_io_match,
                tx_if2_bsw: result.settings.tx_if2_bsw,
                tx_poly_ul: result.settings.tx_poly_ul,
                tx_poly_bsw: result.settings.tx_poly_bsw,

                rx_if1_ba: result.settings.rx_if1_ba,
                rx_if2_ba: result.settings.rx_if2_ba,
                rx_mx_ba: result.settings.rx_mx_ba,
                rx_act_balun_ba: result.settings.rx_act_balun_ba,
                rx_div_ba: result.settings.rx_div_ba,
                o_buff_ba: result.settings.o_buff_ba,

                rx_if2_gain: result.settings.rx_if2_gain,
                rx_if1_gain: result.settings.rx_if1_gain,
                rx_if_attn: result.settings.rx_if_attn,
                rx_if2_bsw: result.settings.rx_if2_bsw,
                rx_poly_ul: result.settings.rx_poly_ul,
                rx_ppf_bsw: result.settings.rx_ppf_bsw,
                

                
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

                ge_bias: result.ge_bias
                
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

    paam_rfcs_on = e => {
      e.preventDefault();
      let queryObj = {
        modules: [
          this.state.selectedRows,
          this.state.selectedCols
        ]
      }
      this.makePostRequest('http://127.0.0.1:5000/dut/rfcs_on', queryObj);
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
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings', queryObj);
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
      this.makePostRequest('http://127.0.0.1:5000/send_phases', queryObj);
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
      this.makePostRequest('http://127.0.0.1:5000/send_ge_gain', queryObj);
    }

    send_rfc_tx_agc = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "pa": this.state.pa,
            "da": this.state.da,
            "u_vga": this.state.u_vga,
            "u_vga_cs": this.state.u_vga_cs,
            "tx_d_ba": this.state.tx_d_ba,
            "tx_d_ba_cs": this.state.tx_d_ba_cs
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/agc', queryObj);
    }

    send_rfc_rx_agc = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "lna1": this.state.lna1,
            "lna2": this.state.lna2,
            "lna3": this.state.lna3,
            "rsv_rfc": this.state.rsv_rfc,
            "rx_d_ba": this.state.rx_d_ba,
            "rx_d_ba_cs": this.state.rx_d_ba_cs
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/agc', queryObj);
    }

    send_tx_mixer = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "tx_if_diff": this.state.tx_if_diff,
            "mx_vga1": this.state.mx_vga1,
            "mx_vga2": this.state.mx_vga2,
            "txmx": this.state.txmx,
            "mx_pa": this.state.mx_pa,
            "mx_da": this.state.mx_da            
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/mixer', queryObj);
    }


    send_rx_mixer = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {            
            "rxmx": this.state.rxmx,
            "rx_if_diff": this.state.rx_if_diff,
            "rxrf": this.state.rxrf,
            "rxrf_cs": this.state.rxrf_cs
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/mixer', queryObj);
    }

    send_tx_if_3g_bias = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "tx_if1_ba": this.state.tx_if1_ba,
            "tx_if2_ba": this.state.tx_if2_ba,
            "tx_mx_ba": this.state.tx_mx_ba,
            "tx_act_balun_ba": this.state.tx_act_balun_ba,
            "tx_div_ba": this.state.tx_div_ba,            
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/if_3g', queryObj);
    }

    send_rx_if_3g_bias = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "rx_if1_ba": this.state.rx_if1_ba,
            "rx_if2_ba": this.state.rx_if2_ba,
            "rx_mx_ba": this.state.rx_mx_ba,
            "rx_act_balun_ba": this.state.rx_act_balun_ba,
            "rx_div_ba": this.state.rx_div_ba,     
            "o_buff_ba": this.state.o_buff_ba       
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/if_3g', queryObj);
    }

    send_tx_if_3g_set = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "tx_if2_gain": this.state.tx_if2_gain,
            "tx_if1_gain": this.state.tx_if1_gain,
            "tx_if_io_match": this.state.tx_if_io_match,
            "tx_if2_bsw": this.state.tx_if2_bsw,
            "tx_poly_ul": this.state.tx_poly_ul,     
            "tx_poly_bsw": this.state.tx_poly_bsw     
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/if_3g', queryObj);
    }

    send_rx_if_3g_set = e => {
      e.preventDefault();
      let queryObj = { 
          settings: {
            "rx_if2_gain": this.state.rx_if2_gain,
            "rx_if1_gain": this.state.rx_if1_gain,
            "rx_if_attn": this.state.rx_if_attn,
            "rx_if2_bsw": this.state.rx_if2_bsw,
            "rx_poly_ul": this.state.rx_poly_ul,     
            "rx_ppf_bsw": this.state.rx_ppf_bsw     
          }
        
      };
      this.makePostRequest('http://127.0.0.1:5000/dut/update_settings/if_3g', queryObj);
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

    render () {
      return (
        <div >
            <br/>
            <Container>
                <h3>DUT</h3>
                <p>This is a placeholder for the DUT section</p>
                <Row>
                    {/* <Col xs sm md lg xl="3">
                        <KFAMNav/>
                    </Col> */}
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
                                                <option selected>Select DUT</option>
                                                <option value="kfam">KFAM</option>
                                                <option value="paam">PAAM</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
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
                                            <ToggleButtonGroup type="radio" name="polarity" defaultValue={"V"}>
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
                                            <Form.Label>IF 3GHz</Form.Label>
                                            <ToggleButtonGroup type="radio" name="if_3ghz" defaultValue={"True"}>
                                                <ToggleButton variant="outline-dark" id="if_3ghz_false" value={"True"} checked={this.state.checked === "True"} onChange={this.handleInputChange}>
                                                    True
                                                </ToggleButton>
                                                <ToggleButton variant="outline-dark" id="if_3ghz_true" value={"False"} checked={this.state.checked === "False"} onChange={this.handleInputChange}>
                                                    False
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>
                                <Button size="md" variant="danger" style={{width:'120px', resize:'none', float: 'right'}} onClick={this.powerOff}>
                                    Power OFF
                                </Button>
                                {this.state.dut === "kfam" &&
                                <Button size="md" variant="success" style={{width:'100px', resize:'none', float: 'right'}} onClick={this.powerOn}>
                                    Power On
                                </Button>
                                }
                                <Button size="md" variant="warning" style={{width:'120px', resize:'none', float: 'right'}} onClick={this.disconnect}>
                                    Disconnect
                                </Button>
                                <Button size="md" style={{width:'120px', resize:'none', float: 'right'}} onClick={this.connect}>
                                    Connect
                                </Button>
                      
                                <br/>
                                <hr/>
                                <h5>Apply Variable/Phase Settings</h5>
                                <Button size="sm" onClick={this.show_file_upload}>Toggle Display File Upload</Button>
                                {this.state.file_upload &&
                                  <Container style={{borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                                    <FileUpload1p5/>
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
                                          <Col>
                                          <h5>RFC Map on Antenna</h5>
                                          <Container style={{width: "250px"}}>
                                            
                                            {RFC_MAP.map(bt => (
                                                <Button style={{width: "50px"}} disabled
                                                    // variant={this.rfcscolor(bt.id)}//{this.state.standby.includes(bt.id) ? 'warning' : 'outline-success'}
                                                    // type='checkbox'
                                                    key={bt.id}
                                                    // value={bt.id}
                                                    // onClick={() => this.read_state(bt)}
                                                    // checked={this.state.modulesOn.includes(bt.id) ? true : false}
                                                >
                                                    {this.state.polarity === "H" ? bt.h : bt.v}
                                                </Button>
                                            ))}
                                          </Container >
                                          </Col>
                                          <Col>
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
                                          </Col>
                                          <Col>
                                            <Button onClick={this.saveSettingsToFile} variant='warning'>Save Settings to File</Button>
                                          </Col>
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
                                <br/>
                                <hr/>
                                <Button size="sm" onClick={this.show_register_control}>
                                  Toggle Display Register Control
                                </Button>
                                <br/>
                                {this.state.register_control &&
                                  <div>
                                    <br/>
                                    <h5>Register Control</h5>
                                    {this.state.dut === "kfam" &&
                                      <div>
                                        <Button variant='outline-primary' onClick={() => this.get_state(BUTTONS[0])}>Read Current State</Button>
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
                                              <Grid item xs={3}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  Phase Slider
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={2}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  Phase Input
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={2}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  GE Gain Slider
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={2}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  GE Gain Input
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={2}>
                                                <Typography id="track-false-slider" gutterBottom>
                                                  RFC ON/OFF
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
                                                          step={11.25}
                                                          min={0}
                                                          max={348.75}
                                                          valueLabelDisplay="auto"
                                                      />
                                                      </Grid>
                                                    <Grid item xs={2}>
                                                      <Input style={{width: "80%"}}
                                                        type='number'
                                                        name={"rfc"+ rfc +"_phase"}
                                                        value={this.state["rfc" + rfc + "_phase"]} 
                                                        onChange={this.handleInputChange} 
                                                        marks
                                                        min={0}
                                                        max={15}
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
                                                            max={15}
                                                            valueLabelDisplay="auto"
                                                        />
                                                      </Grid>
                                                      <Grid item xs={2}>
                                                        <Input style={{width: "80%"}}
                                                        type='number'
                                                          name={"ge_gain_" + rfc}
                                                          value={this.state["ge_gain_" + rfc]} 
                                                          onChange={this.handleInputChange} 
                                                          marks
                                                          min={0}
                                                          max={15}
                                                          />
                                                      </Grid>
                                                      <Grid item xs={2}>
                                                        <Button onClick={() => this.rfcOn(rfc)} size='sm' variant={this.state.ge_bias[rfc]===0 ? 'outline-success' : 'success'}>On</Button>
                                                        <Button onClick={() => this.rfcOff(rfc)} size='sm' variant={this.state.ge_bias[rfc]===0 ? 'danger' : 'outline-danger'}>Off</Button>
                                                      </Grid>
                                                    </Row>
                                              </div>
                                              ))}
                                              </Grid>
                                              <Grid item xs={5}>
                                              <Button variant='outline-primary' onClick={this.applyAllPhases}>Apply All</Button>
                                                <Button variant='warning' onClick={this.invertPhases}>
                                                  Invert Phases
                                                </Button>
                                                <Button onClick={this.send_phases}>Send Phases</Button>
                                              </Grid>
                                              <Grid item xs={5}>
                                              <Button onClick={this.send_ge_vals}>Send GE Vals</Button>
                                                <Button variant='outline-primary' onClick={this.applyAllGEGain}>Apply All</Button>

                                              </Grid>
                                              <Grid item xs={2}>
                                              <Button variant='outline-primary' onClick={this.getCurrBeamPhases}>Read AWV Table</Button>
                                              </Grid>
                                          </Grid>
                                        </Tab>
                                        {this.state.tx_rx === 'TX' &&
                                        <Tab eventKey="tx_mixer_set" title="TX Mixer Set">
                                            <Box sx={{ width: '80%' }}>
                                            {TX_MIXER_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_tx_mixer}>Send Settings</Button>
                                            </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'TX' &&
                                        <Tab eventKey="rfc_tx_agc" title="Phase RFC TX AGC" >
                                               <Box sx={{ width: '80%' }}>
                                               {RFC_TX_AGC_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_rfc_tx_agc}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'RX' &&
                                        <Tab eventKey="rx_mixer_set" title="RX Mixer Set">
                                            <Box sx={{ width: '80%' }}>
                                            {RX_MIXER_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_rfc_rx_agc}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'TX' && this.state.if_3ghz === 'True' &&
                                        <Tab eventKey="tx_if3_bias" title="TX IF3 Bias" >
                                               <Box sx={{ width: '80%' }}>
                                               {IF_3G_TX_BIAS_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_tx_if_3g_bias}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'TX' && this.state.if_3ghz === 'True' &&
                                        <Tab eventKey="tx_if3_set" title="TX IF3 SET" >
                                               <Box sx={{ width: '80%' }}>
                                               {IF_3G_TX_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_tx_if_3g_set}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'RX' && this.state.if_3ghz === 'True' &&
                                        <Tab eventKey="rx_if3_bias" title="RX IF3 Bias" >
                                               <Box sx={{ width: '80%' }}>
                                               {IF_3G_RX_BIAS_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_rx_if_3g_bias}>Send Settings</Button>
                                                </Box>
                                        </Tab>
                                        }
                                        {this.state.tx_rx === 'RX' && this.state.if_3ghz === 'True' &&
                                        <Tab eventKey="rx_if3_set" title="RX IF3 SET" >
                                               <Box sx={{ width: '80%' }}>
                                               {IF_3G_RX_SETTINGS.map(st => (
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
                                              ))}
                                                <Button onClick={this.send_rx_if_3g_set}>Send Settings</Button>
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
                                  <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.loadAWV}>
                                    Load Codebook
                                  </Button>
                                </Col>
                                {/* <Col>
                                  <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.loadCal}>
                                    Load Calibrated Phases
                                  </Button>
                                </Col> */}
                                <Col>
                                  <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.setAWV}>
                                    Set AWV
                                  </Button>
                                </Col>
                                <Col>
                                  <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.setDED}>
                                    Set Dedicated
                                  </Button>
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
                                          <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.getCurrBeam}>
                                            Get Current Beam
                                          </Button>
                                        </Col>
                                        <Col>
                                            <Form.Label>Current Beam Index</Form.Label>
                                            <Form.Control style={{width:'150px', resize:'none'}} name="currBeam" value={this.state.currBeam} placeholder="Current Beam ID" onChange={this.handleInputChange}/>
                                        </Col>
                                        <Col>
                                        <br/>
                                          <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.toggleBeam}>
                                            Toggle Beam
                                          </Button>
                                        </Col>
                                        
                                        <Col>
                                            <Form.Label>Beam of Choice</Form.Label>
                                            <Form.Control style={{width:'150px', resize:'none'}} name="chosenBeam" value={this.state.chosenBeam} placeholder="Beam of Choice" onChange={this.handleInputChange}/>
                                        </Col>

                                        <Col>
                                        <br/>
                                          <Button size="sm" style={{width:'150px', resize:'none'}} onClick={this.selectBeam}>
                                            Move to Beam
                                          </Button>
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

                            <br/>

                            <h5>Switch Probe:</h5>
                            <br/>
                            <Form>
                                <Button size="sm" style={{width:'100px', resize:'none'}} onClick={this.pol1}>
                                  Pol1 ("V")
                                </Button>
                                {' '}
                                <Button size="sm" style={{width:'100px', resize:'none'}} onClick={this.pol2}>
                                  Pol2 ("H")
                                </Button>
                            </Form>
                            <hr/>

                        </Container>
                      
                  </Col>
                </Row>
            </Container>
            <br/>
        </div>
      )
    }
}

export default DUT;