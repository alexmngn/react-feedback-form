import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { Timeline } from 'antd';

import { getCommentsDesc } from '../../data/comments/reducer';
import Comment from './components/Comment';
import styles from './styles.scss';

class CommentsContainer extends Component {
	render() {
		return (
			<div styleName="Comments">
				<h2>Comments</h2>
				{this.props.comments.length ? (
					<Timeline>
						{this.props.comments.map((comment, index) => (
							<Comment
								key={index}
								{...comment}
							/>
						))}
					</Timeline>
				) : 'No comments'}
			</div>
		)
	}
}

export default connect(state => ({
	comments: getCommentsDesc(state.Feedback.data.comments),
}))(CSSModules(CommentsContainer, styles));
