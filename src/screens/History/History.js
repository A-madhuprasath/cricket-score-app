import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export function History(){
return(
    <View style={styles.container}>
        <Text>History</Text>
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