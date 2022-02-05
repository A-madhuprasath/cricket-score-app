import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import Header from '../../components/Header/Header';

export function Settings(){
return(
    <View>
    <Header/>
    <View style={styles.container}>
    <Text>Settings</Text>
</View>
</View>

)
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
})