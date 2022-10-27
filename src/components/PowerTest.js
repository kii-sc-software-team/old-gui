import React from 'react';
import Chart from './Chart';

import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container, Form, Row } from 'react-bootstrap';




class PowerTest extends React.Component {
    constructor() {
      super();
      this.state = {
        dummy_data: {},
        test: '',
        start: '-40',
        stop: '-15',
        step: '1'
      }; 

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

    onRunTest = e => {
          e.preventDefault();
          this.getPowerTestMeasure();
        }

    async getPowerTestMeasure() {
      let url = `http://127.0.0.1:5000/power_if/${this.state.test}/${this.state.start}/${this.state.stop}/${this.state.step}`;
      console.log(url);
      let response = await fetch(url, {
        method: 'get',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin' : "*", 
          'Access-Control-Allow-Credentials' : true
        }
      });
      let result = await response.json();
      let data = result;
      console.log(data);
      this.setState({dummy_data: data});
      // return data;
    }  
 
    render () {
      return (
        <div >
          <br/>
          <Container>
            <h3>Power Measure Dummy Test</h3>
            <p>This is a placeholder for the Power Measure dummy test</p>
            <Row className="power-test" style={{border: '5px solid', borderColor: '#000000', borderRadius: '25px'}}>
              <Col xs={2} md={2}  >
                <Form onSubmit={this.onRunTest} className="power-test-input">

                  <Form.Group size="lg">
                    <Form.Label>Test Type</Form.Label>
                    <br />
                    <select name="test" onChange={this.handleInputChange} className="select-test">
                      <option value="">Select Test</option>
                      <option value="power">Power</option>
                      <option value="evm">EVM</option>
                    </select>
                    </Form.Group>
                    
                  

                  <Form.Group className="mb-3" controlId="test_run_start">
                    <Form.Label>Start</Form.Label>
                    <Form.Control max="-10" type="number" name="start" placeholder="Start power range" value={this.state.start} onChange={this.handleInputChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="test_run_stop">
                    <Form.Label>Stop</Form.Label>
                    <Form.Control max="-10" type="number" name="stop" placeholder="Stop power range" value={this.state.stop} onChange={this.handleInputChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="test_run_step">
                    <Form.Label>Step</Form.Label>
                    <Form.Control type="number" name="step" placeholder="Power Increment" value={this.state.step} onChange={this.handleInputChange}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Run Test
                  </Button>
                  

                </Form>
              </Col>
            
              <Col xs={2} md={4} className="power-chart">
                <Chart power_data = {this.state.dummy_data} test_type = {this.state.test}/>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
}

export default PowerTest;