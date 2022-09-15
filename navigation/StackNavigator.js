import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/components/Header';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './TabNavigator';
//import BottomTabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigation  = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="TabNavigator" component={BottomTabNavigator}/>
        </Stack.Navigator>
    );
}

export default StackNavigation