import React, { Component } from 'react';
import StackNavigation from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component{
  render(){
    return (

      /*<View>
        <SearchScreen/>
      </View>*/
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    );
  }
}

