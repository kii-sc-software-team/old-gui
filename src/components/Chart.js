import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Label } from 'recharts';


class Chart extends Component {

  render() {
    return (
      <div >
        <ScatterChart
            width={400}
            height={400}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis type="number" dataKey="input_power" name="Power In" unit="dB" >
              {/* <Label value="Input Power" position="inside" /> */}
            </XAxis>
            <YAxis type="number" dataKey="measure" name={this.props.test_type}>
              <Label value={this.props.test_type} angle='-90' position="insideLeft" />
            </YAxis>
            <Tooltip cursor={{ strokeDasharray: '1 1' }} />
            <Scatter name="IF Power Measure" data={this.props.power_data} shape="diamond" fill="#ffffff" stroke="#040913" strokeWidth="3"/>
        </ScatterChart>
          Input Power
      </div>
    );
  }
}

export default Chart;