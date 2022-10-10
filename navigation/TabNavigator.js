import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

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
                tabBarOptions={{activeTintColor:'#ffffff',
                inactiveTintColor:'#000000',
                style:{
                  height:150,
                  borderTopWidth:0,
                  backgroundColor:"#dc143c"
                },
                labelStyle:{
                  fontSize:20,
                },
                labelPosition:"beside-icon",
                tabStyle:{
                  marginTop:10,
                  marginLeft:10,
                  marginRight:10,
                  borderRadius:30,
                  alignItens:'center',
                  justfyContent:'center',
                  backgroundColor:"#dc143c"
                }}}
                >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
               <Tab.Screen
                    name="Search"
                    component={SearchScreen}
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
