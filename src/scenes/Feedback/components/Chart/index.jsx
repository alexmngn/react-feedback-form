import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'react-highcharts';

import { getRating } from '../../data/comments/reducer';

const getChartData = payload => Object.entries(payload).map(([key, value]) => ({
	name: `${key} rating`,
	y: value,
}));


class ChartContainer extends Component {
	render() {
		return (
			<Highcharts
				config={
					{
						title: false,
						credits: false,
						colors: ['#703030', '#2F343B', '#7E827A', '#E3CDA4', '#C77966'],
						chart: {
							type: 'pie',
							backgroundColor: 'transparent'
						},
						series: [{
							name: 'Rating',
							colorByPoint: true,
							data: getChartData(this.props.chart)
						}]
					}
				}
			/>
		)
	}
}

export default connect(state => ({
	chart: getRating(state.Feedback.data.comments),
}))(ChartContainer);
