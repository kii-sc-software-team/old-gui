import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import { Route, Switch} from "react-router-dom";

import TestsNav from './TestsNav';
import PositionerAzEl from '../Tests/PositionerAzEl';
import PositionerTest from '../Tests/PositionerTest';
import GainCal from './GainCal';
import VariableSweep from './VariableSweep';
import PhaseCal from './PhaseCal';
import PowerEVM from './PowerEVM';
import VariableSweepGen2 from './VariableSweepGen2';
import Beamforming from './Beamforming';
import FreqSweep from './FreqSweep';



class Tests extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <Container>
                <h3>Tests</h3>
                <p>This section of the Web App allows us to run our Tests</p>
                <Row>
                    {/* <Col xs={3} sm={3} md={3} lg={3} xl={3}> */}
                        <TestsNav/>
                    {/* </Col> */}
                </Row>
                    <Row>
                        <Switch>
                            {/* <Redirect exact from="/Positioner" to="/Positioner" /> */}
                            <Route path="/Tests/PositionerTest">
                                <PositionerTest />
                            </Route>
                            <Route path="/Tests/AzEl">
                                <PositionerAzEl />
                            </Route>
                            <Route path="/Tests/GainCal">
                                <GainCal />
                            </Route>
                            <Route path="/Tests/PhaseCal">
                                <PhaseCal />
                            </Route>
                            <Route path="/Tests/PowerEVM">
                                <PowerEVM />
                            </Route>
                            <Route path="/Tests/VariableSweep">
                                <VariableSweep />
                            </Route>
                            <Route path="/Tests/VariableSweepGen2">
                                <VariableSweepGen2 />
                            </Route>
                            <Route path="/Tests/FreqSweep">
                                <FreqSweep />
                            </Route>
                            <Route path="/Tests/Beamforming">
                                <Beamforming/>
                            </Route>
                            {/* <Route path="/Tests/System">
                                <SystemSetup/>
                            </Route>
                            <Route path="/Tests/Parameters">
                                <PositionerParameters />
                            </Route>
                            <Route path="/Tests/TestMovement">
                                <PositionerTest />
                            </Route>
                            <Route path="/Equipment/AzEl">
                                <PositionerAzEl />
                            </Route> */}
                        </Switch>
                    {/* </Col> */}
                </Row>
                <br/>
                </Container>
            </div>
        )
    }
}

export default Tests;