import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewMatch} from '../screens/NewMatch/NewMatch';
import {Teams} from '../screens/Teams/Teams';
import {History} from '../screens/History/History';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NewMatchNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="NewMatch" component={NewMatch}/>
        </Stack.Navigator>
    )
}

function TeamsNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Teams" component={Teams}/>
        </Stack.Navigator>
    )
}

function HistoryNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="History" component={History}/>
        </Stack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === "NewMatchTab") {
                    iconName = focused ? "sports-cricket" : "sports-cricket";
                } else if (route.name === "TeamsTab") {
                    iconName = focused ? "groups" : "groups";
                } else if (route.name === "HistoryTab") {
                    iconName = focused ? "history" : "history";
                }

                return <MaterialIcons name={iconName} size={25} color={color}/>;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'grey',
            headerShown: false,
        })}>
            <Tab.Screen name="NewMatchTab" component={NewMatchNavigator} options={{title: 'New Match'}}/>
            <Tab.Screen name="TeamsTab" component={TeamsNavigator} options={{title: 'Teams'}}/>
            <Tab.Screen name="HistoryTab" component={HistoryNavigator} options={{title: 'History'}}/>
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}