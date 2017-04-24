import React, { Component } from 'react';
import Highcharts from 'react-highcharts';

class ChartContainer extends Component {
	render() {
		return (
			<Highcharts
				config={
					{
						title: false,
						credits: false,
						chart: {
							type: 'pie',
							backgroundColor: 'transparent'
						},
						series: [{
							name: 'Rating',
							colorByPoint: true,
							data: [{
								name: '1 rating',
								y: 100,
							}]
						}]
					}
				}
			/>
		)
	}
}

export default ChartContainer;
