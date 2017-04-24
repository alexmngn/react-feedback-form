import React, { Component } from 'react';
import { Form, Input, Rate, Button } from 'antd';

const initialState = {
	name: '',
	email: '',
	rating: 0,
	comment: '',
};

class FormContainer extends Component {

	state = initialState

	onSubmit() {

	}

	render() {
		return (
			<Form onSubmit={() => this.onSubmit()}>
				<Form.Item label="Name">
					<Input
						placeholder="John Smith"
						onChange={e => this.setState({ name: e.target.value })}
						value={this.state.name}
					/>
				</Form.Item>
				<Form.Item label="Email">
					<Input
						type="email"
						placeholder="name@company.com"
						onChange={e => this.setState({ email: e.target.value })}
						value={this.state.email}
					/>
				</Form.Item>
				<Form.Item label="Rating">
					<Rate
						onChange={rating => this.setState({ rating })}
						value={this.state.rating}
					/>
				</Form.Item>
				<Form.Item label="Comment">
					<Input
						type="textarea"
						rows={3}
						onChange={e => this.setState({ comment: e.target.value })}
						value={this.state.comment}
					/>
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

export default FormContainer;
