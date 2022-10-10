import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, TouchableOpacity, Text, Platform, StatusBar, TextInput, ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./components/Header";
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
    return <Post story={story} navigation={this.props.navigation}/>
  }

  keyExtractor = (item, index) => index.toString()

  render(){
      return (
        
        <View style={styles.container}>
          
        <SafeAreaView style={styles.droidSafeArea}/>
        <View Style={{
          paddingTop:-100
        }}>
          <Header/>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.postContainer}>
                    <TouchableOpacity
                    style={[styles.postAlike, {margin:5, backgroundColor:"#dc143c"}]}
                    onPress={()=>
                        this.props.navigation.navigate("HomeProjectScreen")
                    }
                    >
                    <View style={styles.centerButtonIcon}>
                      <Ionicons
                      name="map-outline"
                      size={70}
                      color={'#F5F5F5'}
                      />
                    </View>
                    <View>
                      <Text Style={styles.IDFont}>
                        {'#001'}
                      </Text>
                    </View>
                    <View style={styles.buttonIcon}>
                      <Ionicons
                        name="heart"
                        size={30}
                        color={'#F5F5F5'}
                        //style={styles.buttonIconHeart}
                        />
                      <Ionicons
                        name="chatbubble-outline"
                        size={30}
                        color={'#F5F5F5'}
                        //style={styles.buttonIcon}
                        />
                      <Ionicons
                        name="download-outline"
                        size={30}
                        color={'#F5F5F5'}
                        //style={styles.buttonIcon}
                        />
                    </View>
                    </TouchableOpacity>
            </View>

            <View style={styles.postContainer}>
                    <TouchableOpacity
                    style={[styles.postAlike, {margin:-350, backgroundColor:"#dc143c", marginBottom:20}]}
                    onPress={()=>
                        this.props.navigation.navigate("HomeProjectScreen")
                    }
                    >
                    <View style={styles.centerButtonIcon}>
                      <Ionicons
                      name="map-outline"
                      size={70}
                      color={'#F5F5F5'}
                      />
                    </View>
                    <View>
                      <Text Style={styles.IDFont}>
                        {'#002'}
                      </Text>
                    </View>
                    <View style={styles.buttonIcon}>
                      <Ionicons
                        name="heart"
                          size={30}
                          color={'#F5F5F5'}
                          //style={styles.buttonIconHeart}
                          />
                      <Ionicons
                          name="chatbubble-outline"
                          size={30}
                          color={'#F5F5F5'}
                          //style={styles.buttonIconComent}
                          />
                      <Ionicons
                          name="download-outline"
                          size={30}
                          color={'#F5F5F5'}
                          //style={styles.buttonIconDownload}
                          />
                    </View>
                    </TouchableOpacity>
                </View>
              </ScrollView>

          {/* <View style={styles.postContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.stories}
                renderItem={this.renderItem}
              />
            </View> */}
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
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
  IDFont:{
    color: "white",
    fontSize: RFValue(40),
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
  centerButtonIcon:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginTop:120,
    alignSelf:"stretch",
  },
  buttonIcon:{
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    marginTop:110,
    alignSelf:"stretch",
  },
  postContainer:{
    flex:0.01,
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
    marginTop:RFValue(20)
  },
  buttonIconHeart:{
    flexDirection:"row",
    marginLeft:RFValue(-250),
    marginTop:RFValue(250)
  },
  buttonIconComent:{
    flexDirection:"row",
    marginLeft:RFValue(-250),
    marginTop:RFValue(250)
  },
  buttonIconDownload:{
    flexDirection:"row",
    marginLeft:RFValue(-250),
    marginTop:RFValue(250)
  }
});