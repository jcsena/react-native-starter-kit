// @flow strict

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appCheck } from 'ReduxIndex/actions';
import { Container, Content, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Styles from 'Common/theme/Styles';

type Props = {
	appCheck: Function,
	title: string
};

class Explore extends Component<Props> {
	componentWillMount() {
		this.props.appCheck();
	}

	render() {
		return (
			<Container style={styles.container}>
				<Text style={Styles.H1}>{this.props.title}</Text>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = (state, ownProps) => {
	const { app } = state;
	return { app };
};

export default connect(mapStateToProps, { appCheck })(Explore);
