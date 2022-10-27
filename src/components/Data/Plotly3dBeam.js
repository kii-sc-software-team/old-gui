import React from "react";
// import Plot from "react-plotly.js";
// import Plotly from "plotly.js-basic-dist";
import Plotly from "plotly.js-gl3d-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);


class Plotly3dBeam extends React.Component {

    constructor(props) {
        super();
        this.state = {
            x: props.x,
            y: props.y,
            z: props.z
            
        }
    }

    render() {
        return (
            <div>
                <Plot
                    data= {
                        [
                            {
                                x: this.state.x,
                                y: this.state.y,
                                z: this.state.z,
                                type: 'surface',
                                name: 'Test Plot',
                                mode: 'markers',
                                "marker.color": this.state.z,
                            }
                        ]
                    }
                
                layout={ {width: 800, height: 800, title: '3D Beam'} }
                />
                {/* <Plot
                    data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                /> */}
            </div>
        )
    }
}

export default Plotly3dBeam;