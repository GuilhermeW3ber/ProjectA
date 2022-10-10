import React, { Component } from "react";
import { StyleSheet, View,  SafeAreaView, Image, TouchableOpacity, Text, Platform, StatusBar, TextInput, ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Post from "./components/Post";
import MaskInput, {} from "react-native-mask-input";

let stories = require("./temp_stories.json");

export default class CheckList1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isCheckListMarkedOff:false,
          visibleIcon:"close-outline",
          bkColor:"#dc143c",
          isInputFilled:false,
          text:null,
        };
    }

    async addStory(){
      if (this.state.tempoDeVidaDoLoteamento && this.state.description && this.state.story && this.state.moral) {
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

    
    saveInformationsJSON=()=>{
        
    }

    validateInputLog=()=>{
      if(!this.state.text==[0]||!this.state.text==null){
        this.setState({visibleIcon:"checkmark-outline", bkColor:"#00e676"});
      } else {
        //this.setState({visibleIcon:"checkmark-outline", bkColor:"#00e676"});
        this.setState({visibleIcon:"close-outline", bkColor:"#dc143c"});
      }
      console.log(this.state.text)
    }

    checkListIsMarked=()=>{
      if (this.state.isCheckListMarkedOff) {
        this.setState({isCheckListMarkedOff:false, visibleIcon:"close-outline", bkColor:"#dc143c"});
      } else {
        this.setState({isCheckListMarkedOff:true, visibleIcon:"checkmark-outline", bkColor:"#00e676"});
      }
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
          <ScrollView style={styles.scrollView}>
            <View style={{
                justifyContent:"center",
                alignItems:"center",
              }}>
              <Image source={require("../assets/BirdIcon.png")} 
              style={{
                width: RFValue(90),
                height: RFValue(90), 
              }}/>
            </View>

            <View style={styles.postContainer}>
              <TextInput
                placeholder="Dias"
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
                onChangeText={(text, tempoDeVidaDoLoteamento)=>{
                  this.setState({
                    text:text, isInputFilled:true,
                  })
                  this.setState({ tempoDeVidaDoLoteamento })
                  this.validateInputLog()
                  
                }}
              >

              </TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>{
                this.validateInputLog()
                this.saveInformationsJSON(this.state.text) 
            }}
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Tempo de vida do loteamento</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
                placeholder="Itens de Lazer"
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Itens de lazer do condomínio</Text>

            <View style={styles.postContainer}>
            <MaskInput 
                placeholder="Somente numerais"
                //type={Masks.BRL_CURRENCY}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              >

              </MaskInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Valor da taxa condominial</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                placeholder={"Valor da Chamada"}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Chamada de capital? Para que?</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                placeholder={"Somente numerais"}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Futuro previsto do condomínio</Text>

          <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
                placeholder={"Somente numerais"}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Problemas pouco falados (condomínio)</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Quantos Lotes tem o condomínio?</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Tamanho médio dos lotes</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Preço do m² vendido dos lotes</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Número de casas prontas</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Número de casas em construção</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Tempo de Venda pós construção</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Número de casas Vendidas (6-12 mêses)</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Por quê da demora em vendas?</Text>

            <View style={styles.postContainer}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>

            <Text style={[styles.font, { color:this.state.bkColor}]}>Diferencial buscado por clientes</Text>

            

            <View style={styles.postContainer}>
              
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={'#7B8794'}
                secureTextEntry={false}
              ></TextInput>
              <TouchableOpacity
              style={[styles.postAlikeFalse, { backgroundColor:this.state.bkColor}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Ionicons
                        name={this.state.visibleIcon}
                        size={30}
                        color={'#F5F5F5'}
                    />
                </View>
            </TouchableOpacity>
            </View>
            <Text  style={[styles.font, { color:this.state.bkColor, marginBottom:10}]}>Características diferenciais </Text>

            <View style={styles.postContainer}>
              <TouchableOpacity
              style={[styles.continueButton, { backgroundColor:this.state.bkColor, marginBottom:60}]}
            onPress={()=>
                this.checkListIsMarked()
            }
            >         
                <View style={styles.buttonIcon}>
                    <Text
                    style={{
                      color:"white"
                    }}>
                      Continuar
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>

          {/* <ScrollView style={styles.scrollView}>
            <View style={styles.postContainer}>
              <TouchableOpacity
                style={[styles.postAlike, { backgroundColor:"#dc143c"}]}
                onPress={()=>
                    this.checkListIsMarked()
                }
                >
                        
                <View style={styles.buttonIcon}>
                  <Ionicons
                      name={this.state.visibleIcon}
                      size={30}
                      color={'#F5F5F5'}
                      />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView> */}

      </View>
      )
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
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    marginBottom:15,
    alignSelf:"stretch",
  },
  postContainer:{
    flex:0.01,
    justifyContent:"space-around",
    flexDirection:"row",
    alignSelf:"stretch",
    //backgroundColor:"yellow"
  },
  postAlikeFalse:{
    width: RFValue(50),
    height: RFValue(50),
    flexDirection:"column",
    justifyContent:"flex-end",
    alignItems:"center",
    borderRadius: RFValue(15),
    backgroundColor:"white",
    marginTop:RFValue(29)
  },
  postAlikeTrue:{
    width: RFValue(320),
    height: RFValue(60),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: RFValue(15),
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
  },
  input: {
    height: RFValue(50),
    width: RFValue(200),
    backgroundColor:"#CCC",
    paddingLeft:40,
    marginTop:35,
    borderRadius: 8,
    marginHorizontal:20,
    fontSize:18,
    borderColor:'#E4E7EB'
  },
  font:{
    marginLeft:RFValue(35)
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
  }
});