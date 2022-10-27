import { Slider } from '@mui/material';
import React from 'react';
import { Button, ButtonToolbar, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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

const SETTINGS = [
    { id: 'pa', min: 0, max: 7, title: 'PA' },
    { id: 'da', min: 0, max: 7, title: 'DA' },
    { id: 'u_vga', min: 0, max: 7, title: 'Uni-VGA' },
    { id: 'u_vga_cs', min: 0, max: 15, title: 'Uni-VGA CS' },
    { id: 'd_ba', min: 0, max: 7, title: 'DisNBA' },
    { id: 'd_ba_cs', min: 0, max: 15, title: 'DisNBA CS' },
    
]

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModules: [],
            rows: [],
            selectedRows: [],
            cols: [],
            selectedCols: [],
            modulesOn: [],


            pa: 1,
            da: 1,
            u_vga: 1,
            u_vga_cs: 1,
            d_ba: 1,
            d_ba_cs: 1

        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state);
      }

    powerOn = e => {
        e.preventDefault();
        this.setState({
            modulesOn: this.state.selectedModules
        })
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

    read_state = e => {
        e.preventDefault();
        console.log('Test');
    }

    buttoncolor(button) {
        if (this.state.selectedModules.includes(button)) {
            return 'primary'
        }
        if (this.state.modulesOn.includes(button)) {
            return 'success'
        }
        
    }

    render() {

        
        return (
            <div>
                <br/>
                <hr/>
                <Container>
                    {SETTINGS.map(st => (
                        <Slider 
                            name={st.id}
                            // aria-label="rfc0_phase" 
                            value={this.state[st.id].val} 
                            onChange={this.handleInputChange} 
                            // step={11.25}
                            marks
                            min={st.min}
                            max={st.max}
                            valueLabelDisplay="auto"
                        />
                    ))}


                </Container>




                <br/>
                <hr/>
                <br/>
                <Container style={{width: "350px"}}>
                    {/* <ButtonToolbar> */}
                    {/* <ToggleButtonGroup style={{width: "50%"}} name="grid" type='checkbox' checked={this.state.selectedModules}> */}
                        {BUTTONS.map(bt => (
                            <Button variant={this.buttoncolor(bt.id)}
                                // type='checkbox'
                                key={bt.id}
                                // value={bt.id}
                                onClick={() => this.handleButton(bt)}
                                checked={this.state.selectedModules.includes(bt.id) ? true : false}
                            >
                                {bt.title}
                            </Button>
                        ))}
                    {/* </ToggleButtonGroup> */}
                    {/* </ButtonToolbar> */}
                    <hr/>
                    <div>Selected Modules<div>{this.state.selectedModules}</div></div>
                    {/* <div>Rows<div>{this.state.rows}</div></div> */}
                    <div>Selected Rows<div>{this.state.selectedRows}</div></div>
                    {/* <div>Cols<div>{this.state.cols}</div></div> */}
                    <div>Selected Cols<div>{this.state.selectedCols}</div></div>
                    <hr/>
                    <Button onClick={this.powerOn}>Power On</Button>
                </Container >

                <br/>
                <hr/>
                <Container style={{width: "350px"}}>
                    {/* <ButtonToolbar style={{width: "400px"}}> */}
                    {/* <ToggleButtonGroup style={{width: "400px"}} type='checkbox' value={this.state.modulesOn}> */}
                    {BUTTONS.map(bt => (
                        <Button variant={this.state.modulesOn.includes(bt.id) ? 'danger' : 'outline-secondary'}
                            // type='checkbox'
                            key={bt.id}
                            value={bt.id}
                            // onClick={() => this.handleButton(bt)}
                            // checked={this.state.modulesOn.includes(bt.id) ? true : false}
                        >
                            {bt.title}
                        </Button>
                    ))}
                    {/* </ToggleButtonGroup> */}
                    {/* </ButtonToolbar> */}
                </Container >

                <br/>
                <br/>
                <Container>
                    <ButtonToolbar style={{width: "350px"}}>
                        <ToggleButtonGroup type="checkbox" value={this.state.modulesOn}>
                            {/* <ToggleButton variant="outline-primary" value={BUTTONS[0].id} >1,1</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[1].id} >1,2</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[2].id} >1,3</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[3].id} >1,4</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[4].id} >1,5</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[5].id} >1,6</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[6].id} >2,1</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[7].id} >2,2</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[8].id} >2,3</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[9].id} >2,4</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[10].id} >2,5</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[11].id} >2,6</ToggleButton> */}
                            <ToggleButton variant="outline-primary" value={BUTTONS[12].id} onClick={this.read_state}>3,1</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[13].id} >3,2</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[14].id} >3,3</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[15].id} >3,4</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[16].id} >3,5</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[17].id} >3,6</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[18].id} >4,1</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[19].id} >4,2</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[20].id} >4,3</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[21].id} >4,4</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[22].id} >4,5</ToggleButton>
                            <ToggleButton variant="outline-primary" value={BUTTONS[23].id} >4,6</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Container>
                
                
                <br/>
            </div>
        );
    }
}

export default Map;