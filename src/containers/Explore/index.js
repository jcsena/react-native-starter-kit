// @flow strict

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appCheck } from 'ReduxIndex/actions';
import { Container, Content, Text } from 'native-base';

type Props = {
	appCheck: Function
};
class Explore extends Component<Props> {
	componentWillMount() {
		this.props.appCheck();
	}
	render() {
		return (
			<Container>
				<Content>
					<Text>View For Explore</Text>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { app } = state;
	return { app };
};

export default connect(mapStateToProps, { appCheck })(Explore);
