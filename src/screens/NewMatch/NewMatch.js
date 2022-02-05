import React from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import Header from '../../components/Header/Header';
import {Button, RadioButton} from 'react-native-paper';
import {object, string} from "yup";
import {useFormik} from "formik";

export function NewMatch() {
    const [tossWonBy, setTossWonBy] = React.useState('first');
    const [optedTo, setOptedTo] = React.useState('first');
    const [hostName, setHostName] = React.useState("");
    const [visitorName, setVisitorName] = React.useState("");
    const [overs, setOvers] = React.useState("");
    const [matchDetails, setMatchDetails] = React.useState([]);

    const validationSchema = object().shape({
        hostName: string().required("Please Enter Host name!"),
        visitorName: string().required("Please enter Visitor name!"),
        overs: string().required("Please Enter Overs"),
    });

    const addMatchData = useFormik({
        initialValues: {
            hostName: "",
            visitorName: "",
            overs: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const {hostName, visitorName, overs} = values;
            Alert.alert('Error', 'Please add some todo');
        }
    });

    const alert = () => {
        Alert.alert('Error', 'Please add some todo');
    }


    return (
        <View>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.title}>Teams</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Host team"
                        name={'hostName'}
                        onChangeText={text => setHostName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Visitor team"
                        name={'visitorsName'}
                        onChangeText={text => setVisitorName(text)}
                    />
                </View>
                <Text style={styles.title}>Toss won by?</Text>
                <View style={styles.card}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton
                                value="first"
                                status={tossWonBy === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setTossWonBy('first')}
                            />
                            <Text style={styles.radioTitle}>{hostName ? hostName : 'Host'}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton
                                value="second"
                                status={tossWonBy === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setTossWonBy('second')}
                            />
                            <Text style={styles.radioTitle}>{visitorName ? visitorName : 'Visitor'}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Opted to?</Text>
                <View style={styles.card}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton
                                value="first"
                                status={optedTo === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setOptedTo('first')}
                            />
                            <Text style={styles.radioTitle}>Bat</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton
                                value="second"
                                status={optedTo === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setOptedTo('second')}
                            />
                            <Text style={styles.radioTitle}>Bowl</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Overs?</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="20"
                        name={'overs'}
                        onChangeText={text => setOvers(text)}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{fontWeight: '500', fontSize: 15}}>Advanced Settings</Text>
                    <Button onPress={() => alert()} style={styles.button} color="green"
                            uppercase={false}
                            mode="contained">Start match</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        color: 'green',
        fontSize: 15,
        fontWeight: '600'
    },
    radioTitle: {
        color: 'black',
        fontSize: 13,
        fontWeight: '500'
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
        shadowColor: '#52006A'
    },
    input: {
        justifyContent: "center",
        alignItems: "stretch",
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    button: {
        width: '50%'
    }
})