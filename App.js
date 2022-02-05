import {StyleSheet, Text, View} from 'react-native';
import Header from "./components/header/header";
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <View>
            <Header/>
             <AppNavigator/>
        </View>
);}
