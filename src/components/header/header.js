import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Cricket</Text>
                <Text style={styles.subTitleText}>scorer</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons style={{paddingRight: 10, marginTop: 30}} name='settings' size={30} color={'white'}/>
                <MaterialIcons style={{paddingRight: 10, marginTop: 30}} name='notifications' size={30} color={'white'}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#ffffff",
    },
    subTitleText: {
        fontSize: 15,
        marginLeft: 5,
        color: "#ffffff",
        paddingTop: 13
    },
    textContainer: {
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
    }
});

export default Header;
