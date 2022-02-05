import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export function Teams(){
return(
    <View style={styles.container}>
        <Text>Teams</Text>
    </View>
)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})