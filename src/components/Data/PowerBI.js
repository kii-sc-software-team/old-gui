import React from 'react';
// import axios from 'axios';

// import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
// import KFAMNav from './KFAMNav';




class PowerBI extends React.Component {
    
 
    render () {
      return (
        <div >
            <br/>
            <Container>
                <h3>Power BI</h3>
                <p>This is a placeholder for the Power BI section</p>
                <Container style={{backgroundColor: '#dde4f0', borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid'}}>
                    <br/>
                    {/* <iframe width="1000" height="625" src="https://app.powerbi.com/reportEmbed?reportId=173bb2ea-06c3-4488-999f-5d3c11d73882&appId=1152dd2a-5295-49a4-ae93-872c31590043&autoAuth=true&ctid=1eb2716d-0dd3-4ae7-8d89-60b3faa22f6a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe> */}
                </Container>
            </Container>
            <br/>
        </div>
      )
    }
}

export default PowerBI;