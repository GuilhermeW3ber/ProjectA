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
            placeholderTextColor={'#7B8794'}
            />
            <Ionicons
                  name={"add"}
                  size={26}
                  color={'#7B8794'}
                  style={styles.addIcon}
                />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"gray",
    flexDirection:"row",
    alignItems:"center",
    marginRight:30
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop:15
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width: RFValue(35),
    height: RFValue(35),
    paddingLeft:78,
    resizeMode: "contain",

  },
  appTitleText: {
    color: "black",
    fontSize: RFValue(40),
    //fontFamily: "Bubblegum-Sans",
    textAlign:"center"
  },
  buttonContainer:{
    flex:0.2,
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    marginLeft:26,
    alignSelf:"stretch",
  
  },
  button:{
    width: RFValue(40),
    height: RFValue(40),
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"white",
    paddingHorizontal:20
  },
  gitButton:{
    width: RFValue(40),
    height: RFValue(40),
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"purple",
    paddingHorizontal:20
  },
  discordButton:{
    width: RFValue(40),
    height: RFValue(40),
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"black",
    paddingHorizontal:20
  },
  googleIcon:{
    width: RFValue(25),
    height: RFValue(25),
    resizeMode: "contain",
  },
  gitIcon:{
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain",
  },
  googleText:{
    color:"black",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
  },
  cloudContainer:{
    flex:0.3
  },
  inputContainer:{
    margin:10,
  },
  input: {
    height: 40,
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
    top:RFValue(-12),
  },
  
  icon:{
    position:"absolute",
    left:30,
    top:12
  },
  iconSecret:{
    position:"absolute",
    right:10,
    top:12
  },
  cloudImage:{
    position:"absolute",
    width: "100%",
    resizeMode: "contain",
    bottom:RFValue(-5)
  },
  loginButtonContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    alignSelf:"stretch",
    

  },
  loginButton:{
    width: RFValue(100),
    height: RFValue(100),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"white",
    paddingHorizontal:20
  },
  buttonIcon:{
    position:"absolute",
  }
});