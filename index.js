/** @format */
import React, { PureComponent } from 'react';
import { AppRegistry, View } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PanResponderScene from './components/PanResponderScene';
import ScaleAnimation from './components/ScaleAnimation';
import RotateAnimation from './components/RotateAnimation';
import { StackNavigator } from 'react-navigation';

const AppFlow = StackNavigator({
	App: { screen: App },
	RotateAnimation: { screen: RotateAnimation },
	ScaleAnimation: { screen: ScaleAnimation },
	PanResponderScene: { screen: PanResponderScene }
});

export default class FirstScene extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow />
			</View>
		);
	}
}

AppRegistry.registerComponent(appName, () => FirstScene);
