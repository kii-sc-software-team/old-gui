import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Image from "../Data/62070_graph_blankb_lg.gif"





  const BUTTONS = [
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

  const styles = {
    header: {
    //   width: '290px',
    //   height: '250px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundImage: 'url(' + Image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    },
  
    content: {
      height: '100%',
      width: '100%',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  }



class BeamPointAndrey extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            query: '',
            selectedModule: '',
        row: '',
        selectedRow: '',
        col: '',
        selectedCol: '',
        currBeam: ''
            //considering adding paths and filenames for the load_recall, save_recall functions. As of now we do not use it, but it should be an input box theoretically
        }

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        // console.log(this.state.t5arget.checked);
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

    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }

    handleButton = button => {
        let tmp = this.state.selectedModule;
        console.log(tmp);
        let tmp_rows = this.state.row;
        let tmp_cols = this.state.col;
        if (this.state.selectedModule.includes(button.id)) {
            return
        }
        if (this.state.selectedModule === '') {
            tmp_rows = []
            tmp_cols = []
            this.setState({
                selectedModules: [],
                rows: tmp_rows,
                cols: tmp_cols
            })
        }
        console.log(tmp);
        tmp.push(button.id);
        tmp_rows.push(button.row)
        tmp_cols.push(button.col)
        this.setState({
            selectedModules: tmp,
            rows: tmp_rows,
            cols: tmp_cols
        })
        
        this.setState({
            selectedRow: [...new Set(tmp_rows)],
            selectedCol: [...new Set(tmp_cols)]
        })
  
        console.log(this.state);
      }




    //   handleButton = button => {
    //     let tmp = this.state.selectedModules;
    //     console.log(tmp);
    //     let tmp_rows = this.state.rows;
    //     let tmp_cols = this.state.cols;
    //     if (this.state.selectedModules.includes(button.id)) {
    //         tmp_rows = this.removeItemOnce(tmp_rows, button.row)
    //         tmp_cols = this.removeItemOnce(tmp_cols, button.col)
    //         this.setState({
    //             selectedModules: this.state.selectedModules.filter(el => el !== button.id),
    //             rows: tmp_rows,
    //             cols: tmp_cols
    //         })
    //     } else {
    //         tmp.push(button.id);
    //         tmp_rows.push(button.row)
    //         tmp_cols.push(button.col)
    //         this.setState({
    //             selectedModules: tmp,
    //             rows: tmp_rows,
    //             cols: tmp_cols
    //         })
    //     }
    //     this.setState({
    //         selectedRows: [...new Set(tmp_rows)],
    //         selectedCols: [...new Set(tmp_cols)]
    //     })
  
    //     console.log(this.state);
    //   }

  
      chooseBeam = beam => {
        if (beam.id > 25){
            return
        }
        this.sendMove(`beam_select/1/${beam.id}`);
        this.setState({currBeam: beam.id});
      }

    async sendMove(query) {
        let url = `http://127.0.0.1:5000/dut/${query}`;
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

    




    render() {
        
        return (
            <div>
                
                <Container>
                    <Form>
                        <Container style={{backgroundColor: '#dde4f0'}}>
                        <h2>SELECT BEAM</h2>
                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
                        <div class="inline">
                            <div class="row">
                                <button type="button" class="btn btn-primary col">btn1</button>
                            </div>
                            <div class="row">
                                <button type="button" class="btn btn-primary col-6">btn2</button>
                                <button type="button" class="btn btn-primary col-6">btn3</button>
                            </div>
                            <div class="row">
                                <button type="button" class="btn btn-primary col-4">btn4</button>
                                <button type="button" class="btn btn-primary col-4">btn5</button>
                                <button type="button" class="btn btn-primary col-4">btn6</button>
                            </div>
                        </div> */}
                        
                        {/* , width: '200px',height: '250px', justifyContent: 'center', alignItems: 'center',  display: 'display-box' */}
                                {/* <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}> */}
                                <Container style={{width: '320px',height: '250px'}}>
                                <div style={styles.header}>    
                                <div style={styles.content}>
                                <Row noGutters ><div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}><strong>55</strong></div></Row>
                                <Row noGutters >
                                <Col md='auto' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} ><hr style={{height:'52px', visibility:'hidden'}} /><strong>-55</strong></Col> 
                                <Col noGutters style={{width: '100px'}}>
                                    
                                        {BUTTONS.map(beam => (
                                            <Button variant={this.state.currBeam === beam.id ? 'warning' : 'outline-light'} style={{borderRadius: '50%', fontWeight: 'bold'}} key={beam.id} onClick={() => this.chooseBeam(beam)}>
                                            {beam.title}
                                            </Button>
                                        ))}
                                    </Col>   
                                    <Col md='auto' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}><hr style={{height:'52px', visibility:'hidden'}}/><strong>55</strong></Col>
                                    </Row>
                                    <Row noGutters ><div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}><strong>-55</strong></div></Row>
                                </div>
                                </div>
                                </Container >
                                {/* </div> */}
                        
                        
                        
                        


                        </Container>
                    </Form>
                </Container>  
            </div>
        )
    }
}

export default BeamPointAndrey;