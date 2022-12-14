import React from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';
import HomeScreen from '../screens/HomeScreen';
import SearchCreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            light_theme:true,
            isUpdated: false

        }
    }

    /*componentDidMount(){
        let theme;
        firebase.database().ref("/users/"+firebase.auth().currentUser.uid)
        .on("value", function(snapshot){
            theme=snapshot.val().current_theme;
        })
        this.setState({
            light_theme: theme=="light" ? true : false
        });

    }*/
    render(){
        return (
            <Tab.Navigator
                labeled={false}
                barStyle={styles.bottomTabStyle}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }
                        return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />;
                    },
                })}
                activeColor={'#EE8249'}
                inactiveColor={'gray'}
                >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
               <Tab.Screen
                    name="Search"
                    component={SearchCreen}
                />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
