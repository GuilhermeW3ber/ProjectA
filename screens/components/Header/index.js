import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, Image, TouchableOpacity, Text, Platform, StatusBar, TextInput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecureTextEntryOn:true,
      visibleIcon: "eye-off",
    };
  }

  render(){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.appIcon} source={require("../../../assets/BirdIcon.png")}/>
            <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Busca por ID"
            placeholderTextColor={'#7B8794'}
            />
            <Ionicons
                name={"search-outline"}
                size={20}
                color={'#7B8794'}
                style={styles.addIcon}
                paddingTop={40}
              />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#dcdcdc",
    flexDirection:"row",
    alignItems:"center",
  },
  container: {
    marginTop:-42,
    backgroundColor: "#F5F5F5",
    
  },
  appIcon: {
    width: RFValue(35),
    height: RFValue(35),
    paddingLeft:78,
    resizeMode: "contain",

  },
  input: {
    height: 35,
    width:220,
    backgroundColor:"#CCC",
    paddingLeft:40,
    borderRadius: 8,
    padding: 10,
    marginHorizontal:20,
    fontSize:18,
    borderColor:'#E4E7EB'

  },
  addIcon:{
    position:"absolute",
    left:RFValue(90),
    top:RFValue(8),
  }
});