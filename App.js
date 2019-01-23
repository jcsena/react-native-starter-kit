/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';
import VariablesTheme from 'VariablesTheme';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Container style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Spinner color={VariablesTheme.brandPrimary} />
			</Container>
		);
	}
}
