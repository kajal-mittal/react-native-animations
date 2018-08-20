/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PanResponderScene from './components/PanResponderScene';
import ScaleAnimation from './components/ScaleAnimation';

AppRegistry.registerComponent(appName, () => ScaleAnimation);
