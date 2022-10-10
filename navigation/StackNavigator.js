import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './TabNavigator';
import ProjectScreen from '../screens/ProjectScreen';
import CheckList1 from '../screens/CheckList1';
import CreateProject from '../screens/CreateProject';
import CheckList2 from '../screens/CheckList2';
import HomeProjectScreen from '../screens/HomeProjectScreen';
import LoginScreen2 from '../screens/LoginScreen2';


const Stack = createStackNavigator();

const StackNavigation  = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="TabNavigator" component={BottomTabNavigator}/>
            <Stack.Screen name="ProjectScreen" component={ProjectScreen}/>
            <Stack.Screen name="CheckList1" component={CheckList1}/>
            <Stack.Screen name="CheckList2" component={CheckList2}/>
            <Stack.Screen name="CreateProject" component={CreateProject}/>
            <Stack.Screen name="HomeProjectScreen" component={HomeProjectScreen}/>
        </Stack.Navigator>
    );
}
export default StackNavigation