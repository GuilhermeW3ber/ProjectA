import React, { Component } from 'react';
import StackNavigation from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchScreen from './screens/SearchScreen';

export default class App extends Component{
  render(){
    return (

      <View>
        <SearchScreen/>
      </View>
      /*<NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>*/
    );
  }
}

