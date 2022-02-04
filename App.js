import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import style from './assets/globalCss'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={style.text}>Cricket Scorer App</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
