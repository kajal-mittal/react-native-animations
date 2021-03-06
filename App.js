/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<Button
					title={'PanResponder'}
					onPress={() => {
						this.props.navigation.navigate('PanResponderScene');
					}}
				/>
				<Button
					title={'ScaleAnimation'}
					onPress={() => {
						this.props.navigation.navigate('ScaleAnimation');
					}}
				/>
				<Button
					title={'RotateAnimation'}
					onPress={() => {
						this.props.navigation.navigate('RotateAnimation');
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	box: {},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		alignSelf: 'center'
	}
});
