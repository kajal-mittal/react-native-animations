/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity, PanResponder, Easing } from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends PureComponent {
	state = {
		animBgColor: new Animated.Value(0),
		animRotate: new Animated.Value(0),
		animScale: new Animated.Value(1),
		width: new Animated.Value(100)
	};
	constructor(props) {
		super(props);
		this.startAnimation - this.startAnimation.bind(this);
	}

	startAnimation = () => {
		Animated.parallel([
			Animated.timing(this.state.animRotate, {
				toValue: 360,
				easing: Easing.bounce,
				duration: 500
			}),
			Animated.timing(this.state.animBgColor, {
				toValue: 1,
				easing: Easing.bounce,
				duration: 200
			}),
			Animated.timing(this.state.animScale, {
				toValue: 2,
				easing: Easing.bounce,
				duration: 200
			})
		]).start(() => {
			this.state.animBgColor.setValue(0);
			this.state.animRotate.setValue(0);
			this.state.animScale.setValue(1);
		});
	};
	render() {
		const rotateInterpolate = this.state.animRotate.interpolate({
			inputRange: [0, 360],
			outputRange: ['0deg', '1080deg']
		});
		const bgInterpolate = this.state.animBgColor.interpolate({
			inputRange: [0, 1],
			outputRange: ['red', 'green']
		});
		// Destructure the value of pan from the state
		const animatedStyle = {
			backgroundColor: bgInterpolate,
			width: this.state.width,
			height: this.state.width,
			transform: [
				{
					rotate: rotateInterpolate
				},
				{
					scale: this.state.animScale
				}
			]
		};

		return (
			<View style={styles.container}>
				<Animated.View style={[styles.box, animatedStyle]}>
					<TouchableOpacity onPress={this.startAnimation} style={[styles.box]}>
						<Text style={styles.instructions}>{instructions}</Text>
					</TouchableOpacity>
				</Animated.View>
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
