import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import style from './assets/globalCss'

export default function App() {
    return (
        <View style={styles.container}>
<<<<<<< HEAD
            <Text style={style.text}>Cricket Scorer App</Text>
            <Text style={style.text}>Start match</Text>
=======
            <Text style={style.text}>Cricket Scorer App starting</Text>
>>>>>>> f23070adfe1dfe9e2f3ba2decdf47d46ff46c2c3
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
