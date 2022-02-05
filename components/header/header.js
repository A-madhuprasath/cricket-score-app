import React from "react";
import {View, Text, StyleSheet} from "react-native";


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Cricket</Text>
                <Text style={styles.subTitleText}>scorer</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{paddingLeft: 10, paddingTop: 30}}>Icon 1</Text>
                <Text style={{paddingLeft: 10, paddingTop: 30}}>Icon 2</Text>
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
