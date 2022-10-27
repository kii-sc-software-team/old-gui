import React from 'react';
import { Container, Nav } from 'react-bootstrap';


class KFAMNav extends React.Component {
    render() {
        return (
            <div >
                <br/>
                <Container style={{backgroundColor: '#ffffff', maxWidth: '200px', resize: 'none', border: '2px solid', borderColor: '#eb4034', borderRadius: '25px'}}>
                    <h4>KFAM Navigation</h4>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/KFAM/">Something</Nav.Link>
                        <Nav.Link href="/KFAM/">Something Else</Nav.Link>
                        <Nav.Link href="/KFAM/">Some Action</Nav.Link>
                        <Nav.Link href="/KFAM/">Another action</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Container>
            </div>
            
        )
    }
}
export default KFAMNav;