import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class NavbarTop extends React.Component {
    render () {
        return (
            <div>
                <Container>
                    <Navbar bg="light" expand="lg" variant="light" className="Navbar">
                        <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                            alt=""
                            src="../../kyocera_red.png"
                            width="130"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            Test Script GUI v0.1
                        </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                                {/* <Nav.Link as={Link} to="/KFAM">KFAM</Nav.Link> */}
                                <NavDropdown title="DUT"  id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item as={Link} to="/DUT/DUT">DUT</NavDropdown.Item> */}
                                    <NavDropdown.Item as={Link} to="/DUT/DUT_Gen2">DUT Gen 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/Equipment">Equipment</Nav.Link>
                                <Nav.Link as={Link} to="/Tests">Tests</Nav.Link>
                                <NavDropdown title="Quick Links" as={Link} to="/Tests" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/Data/PowerBI">Power BI</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Some test</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

// export default NavbarTop;