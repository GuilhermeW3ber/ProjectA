import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, ImageBackground} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Asset } from "expo-asset";
//import {AppLoading} from 'expo';
import Animated, { Value } from "react-native-reanimated";
import { TapGestureHandle, State, TapGestureHandler } from "react-native-gesture-handler";
import LoginParts from "./components/LoginPartsPage";

function cacheImages(images){
    return images.map(image =>{
        if(typeof image === 'string'){
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    })
}

export default class LoginScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady:false, 
    };
  }

  async _loadAssetsAsync(){
    const imageAssets=cacheImges([
        require('../assets/backgroundTheme.jpg')
    ]);
    await Promise.all([...imageAssets]);
  }

  render(){
    /*if(!this.state.isReady){
        return(
            <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={()=>this.setState({isReady:true})}
                onError={console.warn}
            />
        );
    }else{
        return (
            <View style={styles.container}>
            
            </View>
          );
    }*/
      return <LoginParts/>;  
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    backgroundColor:'white',
    height:70,
    marginHorizontal:20,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:5
  },
});