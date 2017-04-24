import React from 'react';
import CSSModules from 'react-css-modules';
import { Layout, Row, Col } from 'antd';

import Form from './components/Form';
import styles from './styles.scss';

const Feedback = () => (
	<div styleName="Feedback">
		<Layout>
			<Layout.Header>
				Checkout.com React Test
			</Layout.Header>
			<Layout.Content>
				<Row gutter={32}>
					<Col span={8}>
						<Form />
					</Col>
					<Col span={16}></Col>
				</Row>
			</Layout.Content>
		</Layout>
	</div>
);

export default CSSModules(Feedback, styles);
