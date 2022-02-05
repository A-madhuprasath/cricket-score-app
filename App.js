import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import style from './assets/globalCss'
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <AppNavigator/>

    );
}
