import React from 'react';
import { Container, Nav } from 'react-bootstrap';


class TestsNav extends React.Component {
    render() {
        return (
            <div >
                <Container style={{backgroundColor: '#ffffff', resize: 'none', border: '2px solid', borderColor: '#eb4034', borderRadius: '25px'}}>
                    {/* <h5>Tests</h5> */}
                    <Nav defaultActiveKey="/home" justify variant="tabs" >
                        <Nav.Item>
                            <Nav.Link href="/Tests/PositionerTest">Pattern Theta/Phi</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/AzEl">Pattern Az/El</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/GainCal">Gain Calibration</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/PhaseCal">Phase Calibration</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/PowerEVM">Power/EVM</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/VariableSweep">Variable Sweep</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/FreqSweep">Frequency Sweep</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Tests/Beamforming">Beamforming</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Container>
            </div>
            
        )
    }
}
export default TestsNav;