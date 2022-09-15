import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, Image, TouchableOpacity, Text, Platform, StatusBar, TextInput, ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./components/Header"
import { FlatList } from "react-native-gesture-handler";
import Post from "./components/Post";

let stories = require("./temp_stories.json");

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories:[],
    };
  }

  componentDidMount(){
    let story=[];
      Object.keys(stories).map(item=>{
        story.push(item)
      })
      this.setState({ stories: story})
    console.log(story)
  }


  renderItem = ({ item: story }) => {
    return <Post story={story} navigation={this.props.navigation}/>;
  };

  keyExtractor = (item, index) => index.toString();

  render(){
      return (
        
        <View style={styles.container}>
          
        <SafeAreaView style={styles.droidSafeArea}/>
          <View> 
            <Header/>
          </View>

          <View style={styles.postContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.stories}
                renderItem={this.renderItem}
              />
            </View>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
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
  },
  postContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    alignSelf:"stretch",
  },
  postAlike:{
    width: RFValue(300),
    height: RFValue(300),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"white",
    paddingHorizontal:20,
    marginTop:RFValue(450)
  }
});