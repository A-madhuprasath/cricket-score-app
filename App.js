import {StyleSheet, Text, View} from 'react-native';
import Header from "./components/header/header";

export default function App() {
    return (
        <View>
            <Header/>
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
