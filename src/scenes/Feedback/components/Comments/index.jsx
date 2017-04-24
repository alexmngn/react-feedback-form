import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Timeline } from 'antd';

import Comment from './components/Comment';
import styles from './styles.scss';

class CommentsContainer extends Component {
	render() {
		return (
			<div styleName="Comments">
				<h2>Comments</h2>
				<Timeline>
					<Comment
						name="Alexis"
						email="alexis@gmail.com"
						rating={2}
						date={new Date()}
						comment="Comment 1"
					/>
					<Comment
						name="John"
						email="john@gmail.com"
						rating={5}
						date={new Date()}
						comment="Comment 2"
					/>
				</Timeline>
			</div>
		)
	}
}

export default CSSModules(CommentsContainer, styles);
