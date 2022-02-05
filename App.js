import {StyleSheet, Text, View} from 'react-native';
import Header from "./src/components/header/header";
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <View>
            <View>
                <Header/>
            </View>
            <AppNavigator/>
        </View>
    );
}
