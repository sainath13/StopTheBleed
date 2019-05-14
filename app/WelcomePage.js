import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Alert,
  Platform,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import ApiUtils from './ApiUtils'

import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux'; // New code

class WelcomePage extends Component {

  constructor(props) {
    super(props)
    //learners are not in pune
    //instructors are in pune
    this.state = {
      isPune : 'true',
      username : '',
    }
  }
componentDidMount(){
  AsyncStorage.multiGet(['typeinfo','businessEmail','allurl','username']).then((data) => { 
    if(data[3][1] != null && data[3][1].length > 1){
      this.setState({
        username : data[3][1]
      })
    } 
  
    if(data[0][1]  != null && data[0][1] == "Instructor"){
    this.setState({
      isPune : false
    })
  
  }
  else{
    this.setState({
      isPune : true
    })

  }
  if(data[2][1] != null && data[2][1].length > 1){
    let allAttendance = data[2][1]
    let businessEmail = data[1][1]
    fetch("https://itexpo.pythonanywhere.com/attendance/entry/", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "employee_email": businessEmail,
    "url" : allAttendance 
  }),
})
.then(ApiUtils.checkStatus)
.then((response) => {
  return response.json();
})//response 
.then((responseJson) =>  {
  console.log(responseJson)
  Alert.alert(
    'Success!',
    'Marked visit to scanned QR booths!',
    [
      {text: 'OK', onPress: () => {console.log('log pressed')} },
    ],
    { cancelable: true}
  )
  AsyncStorage.multiSet([
    ['allurl', ""]
  ]);
  //TODO : if i am here i think im already successful
})
.catch(e => {
  //  Alert.alert(
  //      'Background network request failed!',
  //      'Could not send cached booths data to server',
  //      [
  //        {text: 'OK', onPress: () => {console.log('log pressed')}},
  //      ],
  //      { cancelable: true}
  //    )
  })
  }
});


}


  render(){
  return (
<View style={{
        flex: 1
      }}>

        {Platform.OS == "ios"
          ? <StatusBar backgroundColor="#6563A4" barStyle="dark-content"/>
          : <StatusBar backgroundColor="#43416d" barStyle="light-content"/>
}
{
        }
                <View style={styles.header}>
          <View
            style={Platform.OS == "ios"
            ? {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16
            }
            : {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          
          >
            <View style={{
              //backgroundColor : 'red'
            }}>


            </View>
          </View>
          <View
            style={{
            flex: 7,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text
              style={Platform.OS == "ios"
              ? styles.headerText
              : styles.headerTextAndroid}>
          Stop The Bleed 
            </Text>
          </View>
          <TouchableOpacity

 onPress={() => {
  console.log("back button pressed")
Actions.AboutPage();
}}
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 26
          }}>
          <Icon name="info-circle" size={25} color='white'></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <View
            style={{
              flex: 10,
              //backgroundColor : '#7139F0',
              backgroundColor : '#f1f2f2',
              //backgroundColor : '#7341F0',
              width: '100%', height: '100%'
            }}>
            <View style={{flex : 1, paddingLeft : 25,
            paddingRight : 25}}>
            <View style={{
                flex : 1,
            }}>
            </View>

            <View style={{
                flex : 3,
                justifyContent : "center",
            }}>
            <View style={{flex : 1, marginTop : 20, margin : 10}}>
            <Text style={{color : '#272351', fontSize : 25,
          //fontFamily : 'Verdana-bold',
          fontFamily : 'Verdana-bold',
          }}>
             Welcome,
            </Text>
            <Text style={{color : '#272351', fontSize : 25,
          fontFamily : 'Verdana-bold'
          }}>
            {this.state.username?  this.state.username : ""}!
            </Text>
            </View>
            <View style={{
                flex : 2,
            }}/>
            </View>
            <View style={{
                flex : 6,
                marginBottom : 20
            }}>
                    <View style={{
                      flex : 1,
                        flexDirection : 'row',
                        margin : 5 ,
                       
                    }}>
                                  <TouchableOpacity style={{
                                    flex : 1,
                        margin : 5,
                                    backgroundColor : '#e6e7e8',
                                    borderRadius : 10,
                                    borderColor : '#272351',
                                    borderWidth : 5
                              }}
                              
                              
                              onPress={() => {
                                console.log("back button pressed")
this.state.isPune ? Actions.CreateClassPage() : Actions.AgendaPage()
                                //Actions.AgendaPage();
                              //Actions.pop();
                            }}
                              
                              >
                              <View style={{
flex : 1.5 ,
justifyContent : 'center',
alignItems : 'center',
paddingTop : 10,

                              }}>



              <Icon name="graduation-cap" size={45} color='#302b63'></Icon>

                              </View>
                              <View style = {{
flex : 1,
justifyContent : 'center',
alignItems : 'center'

                              }}>
                              

                              <Text style={{
fontFamily : 'verdana-bold',
color : '#302b63',
fontSize : 16,
                              }}>
                              Classes 
                              </Text>
                              </View>
                              
                              </TouchableOpacity>
                                  <TouchableOpacity style={{
                                    flex : 1,
                        margin : 5,
                                     backgroundColor : '#e6e7e8',
                                    borderRadius : 10,
                                    borderColor : '#272351',
                                    borderWidth : 5
                              }}
                             
                              onPress={() => {
                                console.log("back button pressed")
                                Actions.SpeakersPage();
                              //Actions.pop();
                            }} 
                              
                              >
                              
                              
                              <View style={{
flex : 1.5 ,
justifyContent : 'center',
alignItems : 'center',
paddingTop : 10

                              }}>


              <Icon name="heartbeat" size={45} color='#302b63'></Icon>

                              </View>
                              <View style = {{
flex : 1,
justifyContent : 'center',
alignItems : 'center'

                              }}>

                              <Text style={{
fontFamily : 'verdana-bold',
color : '#302b63',
fontSize : 16,
                              }}>
                            Feed 
                              </Text>

                              </View> 
                              </TouchableOpacity>
            </View>

            <View style={{
                      flex : 1,
                        flexDirection : 'row',
                        margin : 5 
                    }}>
                                  <TouchableOpacity style={{
                                    flex : 1,
                        margin : 5,
                                    backgroundColor : '#e6e7e8',
                                    borderRadius : 10,
                                    borderColor : '#272351',
                                    borderWidth : 5
                              }}
                              
                              
                              onPress={() => {
                                console.log("back button pressed")
                                Actions.SelfHelpPage();
                              //Actions.pop();
                            } }
                              >
                              <View style={{
flex : 1.5 ,
justifyContent : 'center',
alignItems : 'center',
paddingTop : 10

                              }}>


              <Icon name="medkit" size={45} color='#302b63'></Icon>

                              </View>
                              <View style = {{
flex : 1,
justifyContent : 'center',
alignItems : 'center'

                              }}>

                              <Text style={{
fontFamily : 'verdana-bold',
color : '#302b63',
fontSize : 16,
                              }}>
                            Self help 
                              </Text>

                              </View>
                              
                              </TouchableOpacity>
                                  <TouchableOpacity style={{
                                    flex : 1,
                        margin : 5,
                                     backgroundColor : '#e6e7e8',
                                    borderRadius : 10,
                                    borderColor : '#272351',
                                    borderWidth : 5
                              }}
                              
                              onPress={() => {
                                console.log("back button pressed")
                                Actions.SignUpPage();
                              //Actions.pop();
                            }}
                              >
                              
                              
                              <View style={{
flex : 1.5 ,
justifyContent : 'center',
alignItems : 'center',
paddingTop : 10

                              }}>


              <Icon name="id-card" size={45} color='#302b63'></Icon>

                              </View>
                              <View style = {{
flex : 1,
justifyContent : 'center',
alignItems : 'center'

                              }}>

                              <Text style={{
fontFamily : 'verdana-bold',
color : '#302b63',
fontSize : 16,
                              }}>
                              Profile
                              </Text>

                              </View> 
                              </TouchableOpacity>
            </View>

                <TouchableOpacity 

                onPress={() => {
                  if(this.state.isPune){
                                       
                    AsyncStorage.multiSet([
                      ['typeinfo', 'Learner'],
                    ]);
                    this.setState({ isPune: false})
                  }
                  else{
                    AsyncStorage.multiSet([
                      ['typeinfo', 'Instructor'],
                    ]);
                    this.setState({isPune : true})
                  }
                } 

                





                }


                style={{
                      flex : 1,
                        margin : 5,
                                    borderRadius : 10,
                        backgroundColor : '#e6e7e8',
                        flexDirection : 'row',
                        alignItems : 'center',
                        justifyContent : 'center',
            }}>
 <View style={{
flex : 1.5 ,
justifyContent : 'center',
alignItems : 'center',

                              }}>
                              
                             
              <Icon name="plus-square" size={45} color='#302b63'></Icon> 
                              
                              </View>


                              <View style={{
flex : 2 ,
justifyContent : 'center',

                              }}>
                              
                              <Text
                              style={{
                                fontFamily : 'verdana-bold',
                                color : '#302b63',
                                fontSize : 20,}}
                              >
                              {this.state.isPune ? "Instructor" :  "Learner"}
                              </Text>
                              
                              </View>


            
            
            </TouchableOpacity>
             </View>  
             </View>
             </View>
          </View>

        </View>
      </View>
  )
  };
}




const styles = StyleSheet.create({
  content: {
    flex: 9,
    //backgroundColor: '#FFFFFF',
    // paddingTop : 20,
  },
  header: {
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 3,
    flex: 1,
    backgroundColor : '#302b63'
  },
  headerTextAndroid: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    paddingTop: 25,
    fontFamily : 'Verdana-bold',
    //fontFamily: 'GothamRounded-Bold'
  },
  headerText: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    paddingTop: 25,
    fontFamily : 'Verdana-bold',
    //fontFamily: 'GothamRounded-Bold'
    // fontFamily : 'arial'
  },
  container: {
    flex: 9
  },
  picInfoHolder: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#F6F5FA'
  },
  picHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoHolder: {
    flex: 2.5,
    flexDirection: 'column'
  },
  infoTextHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    color: 'black',
    fontSize: 20,
    //fontFamily: 'GothamRounded-Bold'
  },
  infoTextSubinfo: {
    fontSize: 17,
    //fontFamily: 'GothamRounded-Medium'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#F6F5FA',
    borderBottomColor: '#6563A4',
    borderBottomWidth: 2
  },
  rowLeft: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  rowLeftText: {
    fontSize: 17,
    //fontFamily: 'GothamRounded-Book',
    padding: 5
  },
  coloredWrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 2,
    borderColor: '#fefefe',
    borderWidth: 3 / 2,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    backgroundColor: '#6563A4',
    borderRadius: 5
  },
  wrappedText: {
    color: 'white',
    fontSize: 17,
    //fontFamily: 'GothamRounded-Bold',
    paddingLeft: 20
  },
  listElement: {
    margin: 1,
    //borderWidth : 1,
    //borderColor : 'red',
    height: 95,
    flexDirection: 'row',
    marginRight : 10,
    //borderBottomColor: '#9190b6',
    //borderBottomWidth: 0.25,
    ///borderRadius: 25
  },
  notificationIcon: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
     //backgroundColor : 'gray',
  },
  notificationItemText: {
    // paddingLeft : 20,
    fontSize: 20,
     //color : '#424242',
    color: '#fefefe',
    //fontFamily: 'GothamRounded-Book'
  },
  notificationItemTextDown : {
    // paddingLeft : 20,
    marginTop : 10,
    fontSize: 10,
     //color : '#424242',
    color: '#46736c',
    //fontFamily: 'GothamRounded-Book'


  },

  notificationItemTextBold: {
    // paddingLeft : 20,
    fontSize: 15,
    // fontWeight : 'bold', color : '#212121',
    color: '#3f3d6a',
    //fontFamily: 'GothamRounded-Medium'
  },
  notificationItem: {
    flex: 7,
    // borderColor : 'red', borderBottomWidth : 1, borderBottomRightRadius : 5,
    // borderBottomColor : 'black', alignItems : 'center',

    backgroundColor : '#75C1B4',
    paddingRight: 3,
    paddingLeft: 20,
    justifyContent: 'center',
    borderBottomWidth: 0.25,
    // borderBottomColor : "#12111f",
    borderBottomColor: '#9190b6',
    borderRadius: 15,
    // backgroundColor : 'red',
  },
});


export default WelcomePage;