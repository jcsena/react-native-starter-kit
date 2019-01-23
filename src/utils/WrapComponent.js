import React, { Component } from 'react';
import { StyleProvider, Root } from 'native-base';

const WrapComponent = (WrappedComponent, theme) =>
	class extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<StyleProvider style={theme}>
					<Root>
						<WrappedComponent {...this.props} />
					</Root>
				</StyleProvider>
			);
		}
	};

export default WrapComponent;
