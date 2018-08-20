import React, { Component } from 'react';
import { Text, View, Animated, StyleSheet, PanResponder, Dimensions, TouchableOpacity } from 'react-native';

export default class PanResponderScene extends Component {
	state = {
		animation: new Animated.ValueXY()
	};
	componentWillMount = () => {
		this._panResponder = PanResponder.create({
			// Ask to be the responder:
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

			onPanResponderGrant: (evt, gestureState) => {
				// The gesture has started. Show visual feedback so the user knows
				// what is happening!
				// gestureState.d{x,y} will be set to zero now
				this.state.animation.extractOffset();
			},
			onPanResponderMove: Animated.event([
				null,
				{
					dx: this.state.animation.x,
					dy: this.state.animation.y
				}
			]),
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: () => {
				// The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
				Animated.spring(this.state.animation, {
					toValue: 0,
					duration: 5000
				}).start();
			},

			onPanResponderTerminate: (evt, gestureState) => {
				// Another component has become the responder, so this gesture
				// should be cancelled
			},
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
				return true;
			}
		});
	};

	componentWillUnmount() {
		this.state.animation.x.removeAllListeners();
		this.state.animation.y.removeAllListeners();
	}
	render() {
		const { height } = Dimensions.get('window');

		const inputRange = [0, height / 2 - 50.01, height / 2 - 50, height];
		const backgroundInteroplate = this.state.animation.y.interpolate({
			inputRange,
			outputRange: ['red', 'red', 'green', 'green']
		});

		const animatedStyle = {
			backgroundColor: backgroundInteroplate,
			transform: [
				...this.state.animation.getTranslateTransform(),
				{
					rotate: this.state.animation.x.interpolate({
						inputRange: [-200, 0, 200],
						outputRange: ['-40deg', '0deg', '1080deg']
					})
				}
			]
		};
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.box, animatedStyle]} {...this._panResponder.panHandlers}>
					<TouchableOpacity onPress={this.startAnimation} style={[styles.box]}>
						<Text style={styles.instructions}>{'instructions'}</Text>
					</TouchableOpacity>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: 'white'
	},
	box: {
		width: 100,
		height: 100
	},
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
