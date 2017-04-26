import React from 'react';
import CSSModules from 'react-css-modules';
import { Layout, Row, Col } from 'antd';

import Form from './components/Form';
import Chart from './components/Chart';
import Comments from './components/Comments';
import styles from './styles.scss';

const Feedback = () => (
	<div styleName="Feedback">
		<Layout>
			<Layout.Header>
				Feedback form
			</Layout.Header>
			<Layout.Content>
				<Row gutter={32}>
					<Col span={8}>
						<Form />
					</Col>
					<Col span={16}>
						<Chart />
					</Col>
				</Row>
				<Comments />
			</Layout.Content>
		</Layout>
	</div>
);

export default CSSModules(Feedback, styles);
