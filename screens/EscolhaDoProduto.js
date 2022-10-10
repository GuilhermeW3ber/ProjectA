import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, Image, TouchableOpacity, Text, Platform, StatusBar, TextInput, ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./components/Header";
import Post from "./components/Post";

let stories = require("./temp_stories.json");

export default class EscolhaDoProduto extends Component {
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
          paddingTop:100
        }}>
          <Header/>
        </View>
        
          <ScrollView style={styles.scrollView}>
            <View style={styles.postContainer}>
              <TouchableOpacity
                style={[styles.postAlike, { backgroundColor:"#dc143c"}]}
                onPress={()=>
                    this.props.navigation.navigate("HomeScreen")
                }
                >
                        
                <View style={styles.buttonIcon}>
                  <Ionicons
                      name="heart-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIconHeart}
                      />
                  <Ionicons
                      name="download-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIcon}
                      />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.postAlike, { backgroundColor:"#dc143c"}]}
                onPress={()=>
                    this.props.navigation.navigate("HomeScreen")
                }
                >
                <View style={styles.buttonIcon}>
                  <Ionicons
                      name="heart-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIconHeart}
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

            <View style={styles.postContainer}>
              <TouchableOpacity
                style={[styles.postAlike, { backgroundColor:"#dc143c"}]}
                onPress={()=>
                    this.props.navigation.navigate("HomeScreen")
                }
                >
                  
                <View style={styles.buttonIcon}>
                  <Ionicons
                      name="heart-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIconHeart}
                      />
                  <Ionicons
                      name="download-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIcon}
                      />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.postAlike, { backgroundColor:"#dc143c"}]}
                onPress={()=>
                    this.props.navigation.navigate("HomeScreen")
                }>
                <View style={styles.buttonIcon}>
                  <Ionicons
                      name="heart-outline"
                      size={30}
                      color={'#F5F5F5'}
                      //style={styles.buttonIconHeart}
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

            <View style={styles.addPostAlikeContainer}>
              <TouchableOpacity
                style={[styles.addPostAlike, { backgroundColor:"#dcdcdc"}]}
                onPress={()=>
                    this.props.navigation.navigate("HomeScreen")
                }
                >
                  
                <View style={styles.buttonIconAdd}>
                  <Ionicons
                      name="add"
                      size={60}
                      color={'#F5F5F5'}
                      //style={styles.buttonIconHeart}
                      />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  appIcon: {
    width: RFValue(90),
    height: RFValue(90),
    paddingLeft:90,
    resizeMode: "contain",

  },
  addPostAlikeContainer:{
    flex:0.01,
    justifyContent:"space-around",
    flexDirection:"row",
    alignSelf:"stretch",
    //backgroundColor:"yellow"

  },
  addPostAlike:{
    width: RFValue(100),
    height: RFValue(100),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"white",
    marginTop:RFValue(20),
    marginTop:RFValue(70),

  },
  buttonIconAdd:{
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column",
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

  icon:{
    position:"absolute",
    left:30,
    top:12
  },

  buttonIcon:{
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    marginTop:130,
    alignSelf:"stretch",
  },
  postContainer:{
    flex:0.01,
    justifyContent:"space-around",
    flexDirection:"row",
    alignSelf:"stretch",
    //backgroundColor:"yellow"
  },
  postAlike:{
    width: RFValue(150),
    height: RFValue(150),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: RFValue(30),
    backgroundColor:"white",
    marginTop:RFValue(20)
  },
  buttonIconHeart:{
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