import React from 'react';
import { Container, Nav } from 'react-bootstrap';


class EquipmentNav extends React.Component {
    render() {
        return (
            <div >
                <Container style={{backgroundColor: '#ffffff', maxWidth: '200px', resize: 'none', border: '2px solid', borderColor: '#eb4034', borderRadius: '25px'}}>
                    <h5>Equipment Navigation</h5>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/Equipment/Positioner">Positioner</Nav.Link>
                        <Nav.Link href="/Equipment/Instrument">Instrument Setup</Nav.Link>
                        <Nav.Link href="/Equipment/PowerSupply">Power Supply</Nav.Link>
                        <Nav.Link href="/Equipment/Parameters">Parameters</Nav.Link>
                        
                        <Nav.Link href="/Tests/PositionerMovement">Pattern Theta/Phi</Nav.Link>
                        <Nav.Link href="/Tests/AzEl">Az/El</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Container>
            </div>
            
        )
    }
}
export default EquipmentNav;