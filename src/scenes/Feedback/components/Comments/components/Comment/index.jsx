import React from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import { Timeline, Rate } from 'antd';

import styles from './styles.scss';

const Comment = props => (
	<Timeline.Item styleName="Comment">
		<div className="info">
			<Rate
				disabled
				value={props.rating}
			/>
			<a href={`mailto:${props.email}`}>{props.name}</a>{' - '}
			<span className="date">{moment(props.date).format('ll')}</span>
		</div>
		{props.comment}
	</Timeline.Item>
);

export default CSSModules(Comment, styles);
