import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Rate, Button } from 'antd';

import * as commentsActionCreators from '../../data/comments/actions';

class FormContainer extends Component {

	onSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.dispatch(commentsActionCreators.add(values));
				this.props.form.resetFields();
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={e => this.onSubmit(e)}>
				<Form.Item label="Name" hasFeedback>
					{getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please enter your name' }],
					})(
						<Input
							placeholder="John Smith"
						/>
					)}
				</Form.Item>
				<Form.Item label="Email" hasFeedback>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email', message: 'Please enter a valid email address',
						}, {
							required: true, message: 'Please enter your email',
						}]
					})(
						<Input
							type="email"
							placeholder="name@company.com"
						/>
					)}
				</Form.Item>
				<Form.Item label="Rating" hasFeedback>
					{getFieldDecorator('rating', {
						rules: [{ required: true, message: 'Please enter your rating' }],
					})(
						<Rate />
					)}
				</Form.Item>
				<Form.Item label="Comment" hasFeedback>
					{getFieldDecorator('comment', {
						rules: [{ required: true, message: 'Please enter your comment' }],
					})(
						<Input
							type="textarea"
							rows={3}
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		)
	}
}
export default connect()(Form.create()(FormContainer));
