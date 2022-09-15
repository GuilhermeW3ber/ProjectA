import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,

} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //story_id:this.props.story.key,
      story_data:this.props.story,
      light_theme:true,
      is_liked: false,
      //likes: this.props.story.value.likes
    };
  }
  likeAction = () => {
    if (this.state.is_liked) {
      firebase
        .database()
        .ref("posts")
        .child(this.state.story_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(-1));
      this.setState({ likes: (this.state.likes -= 1), is_liked: false });
    } else {
      firebase
        .database()
        .ref("posts")
        .child(this.state.story_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(1));
      this.setState({ likes: (this.state.likes += 1), is_liked: true });
    }
  };

  render() {
    let story=this.state.story_data
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", {
              story: this.state.story_data,story_id:this.state.story_id
            })
          }
        >
          <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {story.title}
              </Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.postContainer}>
                    <TouchableOpacity
                    style={[styles.postAlike, {margin:5, backgroundColor:"#dc143c"}]}
                    onPress={()=>
                        this.props.navigation.navigate("HomeScreen")
                    }
                    >
                    <Ionicons
                        name="heart-outline"
                        size={70}
                        color={'#F5F5F5'}
                        style={styles.buttonIcon}
                        />
                    <Ionicons
                        name="chatbubble-outline"
                        size={70}
                        color={'#F5F5F5'}
                        style={styles.buttonIcon}
                        />
                    <Ionicons
                        name="download-outline"
                        size={70}
                        color={'#F5F5F5'}
                        style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "white"
  },
  descriptionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
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
    buttonIcon:{
      position:"absolute",
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