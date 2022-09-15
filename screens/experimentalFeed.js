import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

export default class experimentalFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme:true,
      stories:[]
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }


  renderItem = ({ item: story }) => {
    return <StoryCard story={story} navigation={this.props.navigation}/>;
  };


    render() {
      return (
        <View style={this.state.light_theme ? styles.containerLight : styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={this.state.light_theme
                ? styles.appTitleTextLight
                : styles.appTitleText
              }>App Narração de Histórias</Text>
            </View>
          </View>
          {
            !this.state.stories[0]
              ?
              (<View style={styles.noStories}>
                <Text style={this.state.light_theme ? styles.noStoriesTextLight : styles.noStoriesText}>Nenhuma História Disponível</Text>
              </View>)

              :
              (<View style={styles.cardContainer}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.stories}
                  renderItem={this.renderItem}
                />
              </View>)
          }
        </View>
      )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
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
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  }
});