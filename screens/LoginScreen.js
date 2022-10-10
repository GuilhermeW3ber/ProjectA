import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, Image, TouchableOpacity, Text, Platform, StatusBar, TextInput} from "react-native";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

let customFonts = {
  "Bubblegum-Sans": require("../assets/Fonts/BubblegumSans-Regular.ttf")
};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      isSecureTextEntryOn:true,
      visibleIcon: "eye-off",
    };
  }

  checkSecurityEntry=()=>{
    if (this.state.isSecureTextEntryOn) {
      this.setState({isSecureTextEntryOn:false, visibleIcon:"eye"});
    } else {
      this.setState({isSecureTextEntryOn:true, visibleIcon:"eye-off"});
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.appTitle}>
            <Image style={styles.appIcon} source={require("../assets/BirdIcon.png")}/>
            <Text style={styles.appTitleText}>
            {`Sign In`}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={'#7B8794'}
            secureTextEntry={false}
            />
            <Ionicons
                  name={"person"}
                  size={26}
                  color={'#7B8794'}
                  style={styles.icon}
                />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={'#7B8794'}
            secureTextEntry={this.state.isSecureTextEntryOn}
            />
              <Ionicons
                    name={"lock-closed"}
                    size={26}
                    color={'#7B8794'}
                    style={styles.icon}
                  />
              <TouchableOpacity 
                style={{ position:"absolute", right:RFValue(17)}}
                onPress={()=>{
                  this.checkSecurityEntry()
                }}>
                  <Ionicons
                      name={this.state.visibleIcon}
                      size={26}
                      color={'#7B8794'}
                      style={styles.iconSecret}
                    />
              </TouchableOpacity> 
          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity
              style={[styles.button, {margin:5, backgroundColor:"white"}]}>
              <Image source={require("../assets/google_icon.png")} 
              style={styles.googleIcon}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.discordButton, {margin:5}]}>
              <Image source={require("../assets/DiscordLogoWhite.png")} 
              style={styles.googleIcon}/>
              
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.gitButton, {margin:5}]}>
              <Image source={require("../assets/git.png")} 
              style={styles.gitIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButtonContainer}>
            <TouchableOpacity
              style={[styles.loginButton, {margin:5, backgroundColor:"#dc143c"}]}
              onPress={()=>
                this.props.navigation.navigate("TabNavigator")
              }
              >
              <Ionicons
                  name="arrow-forward"
                  size={70}
                  color={'#F5F5F5'}
                  style={styles.buttonIcon}
                />
            </TouchableOpacity>
          </View>

        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
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
    width: RFValue(90),
    height: RFValue(90),
    paddingLeft:90,
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
    height: 50,
    backgroundColor:"#CCC",
    paddingLeft:40,
    borderRadius: 8,
    padding: 10,
    marginHorizontal:20,
    fontSize:18,
    borderColor:'#E4E7EB'

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