import React from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

// import Plot from 'react-plotly.js';
// import Plotly from "plotly.js"




class Home extends React.Component {


    async sendMove() {
        let url = `http://127.0.0.1:5000/test/flask/helloworld/24`;
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

    render() {
        return (
            <div>
                <br/>
                <Container style={{width: '50%', backgroundColor: '#dde4f0'}}>
                    <br/>
                    <h4>
                        This is the home page for the 5G projects test GUI.
                    </h4>
                    <br/>
                    <ul>
                        <li>
                            This User Inteface puts together all of the test scripts written for the 5G module, and brings them together in one place. 
                        </li>
                        <br/>
                        <li>
                            It will contain different pages to control different functions, including connecting and talking to the DUT (KFAM, PAAM, etc.) as well as ways to control the chamber positioner and instruments used for testing
                        </li>
                        <br/>
                        <li>
                            In future versions of this Web application, we will include ways to visualize the data from within the app, as well as control individual elements of the DUT
                        </li>
                    </ul>
                </Container>
                <div>
                    <Button onClick={this.sendMove}>Test Flask Hello World</Button>
                </div>
                <br/>
            </div>
        )
    }
}

export default Home;