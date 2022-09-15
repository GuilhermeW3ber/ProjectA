import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import Icon from "react-native-ionicons";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      underlineColorAndroid="transparent"
      placeholderTextColor={'#7B8794'}
      secureTextEntry={props.secureTextEntry}
      />
      <Icon name="account" size={26} color={'#444'} style={styles.icon}/>
      <TouchableOpacity>
        <Icon name="eye" size={26} color={'#7B8794'} style={styles.iconSecret}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    marginTop:20,

  },
  input: {
    height: 50,
    flex:1,
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
    right:30,
    top:12
  }
});

export default Input;