import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity, PanResponder } from 'react-native';

export default class ScaleAnimation extends PureComponent {
	state = {
		animateScale: new Animated.Value(0),
		showText: true
	};
	constructor(props) {
		super(props);
	}

	startAnimation1 = () => {
		this.setState({ showText: false });
		Animated.timing(this.state.animateScale, {
			toValue: 1,
			duration: 2000
		}).start();
	};
	startAnimation2 = () => {
		this.setState({ showText: false });
		Animated.timing(this.state.animateScale, {
			toValue: 1,
			duration: 2000
		}).start();
	};
	startAnimation3 = () => {
		this.setState({ showText: false });
		Animated.timing(this.state.animateScale, {
			toValue: 1,
			duration: 2000
		}).start(() => {
			this.state.animateScale.setValue(0);
			this.setState({ showText: true });
		});
	};
	render() {
		const scaleInterpolate = this.state.animateScale.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 100]
		});

		const animatedStyle = {
			transform: [
				{
					scale: scaleInterpolate
				}
			]
		};

		return (
			<View style={styles.container}>
				{/* <Animated.View style={[styles.box, animatedStyle]}>
					<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={this.startAnimation1}>
						{this.state.showText && <Text style={styles.instructions}>{'+'}</Text>}
					</TouchableOpacity>
				</Animated.View> */}

				{/* <Animated.View style={[styles.boxTopLeft, animatedStyle]}>
					<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={this.startAnimation2}>
						{this.state.showText && <Text style={styles.instructions}>{'+'}</Text>}
					</TouchableOpacity>
				</Animated.View> */}

				<Animated.View style={[styles.boxTopRight, animatedStyle]}>
					<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={this.startAnimation3}>
						{this.state.showText && <Text style={styles.instructions}>{'+'}</Text>}
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
		height: 100,
		backgroundColor: 'red',
		borderRadius: 50,
		position: 'absolute',
		right: 10,
		bottom: 20
	},
	boxTopRight: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderRadius: 50,
		position: 'absolute',
		right: 10,
		top: 20
	},
	boxTopLeft: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderRadius: 50,
		position: 'absolute',
		left: 10,
		top: 20
	},
	instructions: {
		color: '#ffffff',
		fontSize: 70,
		textAlign: 'center',
		alignSelf: 'center'
	}
});
