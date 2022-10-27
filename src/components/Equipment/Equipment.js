import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Route, Switch} from "react-router-dom";

import PositionerParameters from './Parameters';
import Positioner from './Positioner';
import EquipmentNav from './EquipmentNav';
import PositionerTest from '../Tests/PositionerTest';
import PositionerAzEl from '../Tests/PositionerAzEl';

import Instrument from './Instrument';
import PowerSupplies from './PowerSupplies';


class Equipment extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <Container>
                <h3>Equipment</h3>
                <p>This section of the Web App allows us to control the Equipment within the chamber</p>
                <Row>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                        <EquipmentNav/>
                    </Col>
                    <Col>
                        <Switch>
                            {/* <Redirect exact from="/Positioner" to="/Positioner" /> */}
                            <Route path="/Equipment/Positioner">
                                <Positioner />
                            </Route>
                            <Route path="/Equipment/Instrument">
                                <Instrument/>
                            </Route>
                            <Route path="/Equipment/Parameters">
                                <PositionerParameters />
                            </Route>
                            <Route path="/Test/PositionerTest">
                                <PositionerTest />
                            </Route>
                            <Route path="/Tests/AzEl">
                                <PositionerAzEl />
                            </Route>
                            <Route path="/Equipment/PowerSupply">
                                <PowerSupplies />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
                <br/>
                </Container>
            </div>
        )
    }
}

export default Equipment;