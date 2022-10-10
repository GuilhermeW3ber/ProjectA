import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /*async addStory(){
    if (this.state.title && this.state.description && this.state.story && this.state.moral) {
      let storyData = {
        preview_image: this.state.previewImage,
        title:this.state.title,
        description: this.state.description,
        story:this.state.story,
        moral:this.state.moral,
        author:firebase.auth().currentUser.displayName,
        created_on:new Date(),
        author_uid:firebase.auth().currentUser.uid,
        likes:0
      }
      await firebase
        .database()
        .ref("/posts/"+(Math.random().toString(36).slice(2)))
        .set(storyData)
        .then(function(snapshot){

        })
        this.props.setUpdateToTrue();
        this.props.navigation.navigate("Feed");
    }else{
      Alert.alert(
        'Error',
        'Todos os campos são obrigatórios',
        [
          {text:"OK",onPress:()=>console.log('Ok Pressionado')}
        ],
        {cancelable:false}
      )
    }
  }

  componentDidMount() {
    this._loadFontsAsync();
  }*/

  render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/BirdIcon.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={this.state.light_theme
                ? styles.appTitleTextLight
                : styles.appTitleText}>Novo Projeto</Text>
            </View>
          </View>

          <View style={styles.fieldsContainer}>
            <ScrollView>
            <View style={styles.inputContainer}>
            <TextInput style={[styles.input, {marginTop:100}]}
              underlineColorAndroid="transparent"
              placeholderTextColor={'#7B8794'}
              placeholder={"Nome do Projeto"}
              secureTextEntry={this.state.isSecureTextEntryOn}
            />
              <Ionicons
                name={"construct-outline"}
                size={26}
                color={'#7B8794'}
                style={[styles.icon, {marginTop:100, marginRight:60}]}
              />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
              underlineColorAndroid="transparent"
              placeholderTextColor={'#7B8794'}
              placeholder={"Descrição"}
            />
              <Ionicons
                name={"clipboard-outline"}
                size={26}
                color={'#7B8794'}
                style={styles.icon}
              />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={'#7B8794'}
            placeholder={"Estado de Compra"}
          />
              <Ionicons
                    name={"pricetags-outline"}
                    size={26}
                    color={'#7B8794'}
                    style={styles.icon}
                  />
              <TouchableOpacity 
                style={{ position:"absolute", right:RFValue(17)}}
                onPress={()=>{
                  this.checkSecurityEntry()
                }}>
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
        </ScrollView>
      </View>      
    </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "black",
    fontSize: RFValue(28),
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabel: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabelLight: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton:{
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  },
  loginButtonContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    alignSelf:"stretch",
    marginTop:RFValue(150)
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
  continueButton:{
    width: RFValue(100),
    height: RFValue(40),
    flexDirection:"column",
    justifyContent:"flex-end",
    alignItems:"center",
    borderRadius: RFValue(10),
    backgroundColor:"white",
    marginTop:RFValue(29)
  }, 
  postContainer:{
    flex:0.01,
    justifyContent:"space-around",
    flexDirection:"row",
    alignSelf:"stretch",
    //backgroundColor:"yellow"
  },
  buttonIcon:{
    position:"absolute",
  },
  icon:{
    position:"absolute",
    top:12,
    marginLeft:25
  },
});