import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Alert,
  Platform,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import ApiUtils from './ApiUtils'



import { Actions } from 'react-native-router-flux'; // New code

class AgendaPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
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
        <View style={styles.header}>
          <TouchableOpacity
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
            onPress={() => {
              console.log("back button pressed")
            //Actions.pop();
          }}>
            <View style={{}}>
             {
              //<Icon name="chevron-left" size={25} color='white'></Icon>

             }
            </View>
          </TouchableOpacity>
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
              Agenda
            </Text>
          </View>
          <TouchableOpacity
            style={{
            flex: 1,
            backgroundColor : 'green',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16
          }}
          onPress={() => {
            console.log("QR code button pressed");
          Actions.QRScanner();
        }}
          >
          <Text>
            QR
          </Text>
          
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={{
              flex: 9,
              backgroundColor : '#fefefe'
            }}>
            <ScrollView style={{marginTop : 10}}>
            <View style={styles.listElement}>
                            <View style={styles.notificationIcon}>
                            <Text>
                              8:00
                            </Text>
                            </View>
                            <View style={styles.notificationItem}>
                              <Text style={styles.notificationItemText}>
                              {
//                                <Text style={styles.notificationItemTextBold}>{"Hello1"+ " "}</Text>
                              }
                              Introduction
                              </Text>
                              <Text style={styles.notificationItemTextDown}>
                              {
//                                <Text style={styles.notificationItemTextBold}>{"Hello1"+ " "}</Text>
                              }
                              Introduction talks about the overall details 
                              </Text>
                            </View>


                  {
                  //         <TouchableOpacity
                  //            onPress={() => {
                  //              console.log("hello clicked")
                  //          }}
                  //            style={{
                  //            width: 100,
                  //            height: 30,
                  //            marginTop: 15,
                  //            marginBottom: 15,
                  //            marginRight: 10,
                  //            borderRadius: 2,
                  //            borderColor: '#fefefe',
                  //            borderWidth: 3 / 2,
                  //            paddingTop: 5,
                  //            paddingBottom: 5,
                  //            alignItems: 'center',
                  //            justifyContent: 'center',
                  //            backgroundColor: '#6563A4',
                  //            borderRadius: 5
                  //          }}>
                  //            <Text
                  //              style={{
                  //              color: 'white',
                  //              fontSize: 16,
                  //              //fontFamily: 'GothamRounded-Book'
                  //            }}>
                  //              Accept
                  //            </Text>
                  //          </TouchableOpacity>
                  }
                          </View>

            </ScrollView>
             </View>

            <View
              style={{
              flex: 0.95,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: '#6563a4'
            }}
              >
              <View style={{}}>
                <Text
                  style={{
                  color: 'white',
                  fontSize: 25,
                  //fontFamily: 'GothamRounded-Medium'
                }}>
                 IT Expo
                </Text>
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
    borderColor: '#333156',
    borderBottomWidth: 3,
    flex: 1,
    backgroundColor: '#6563a4'
  },
  headerTextAndroid: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    //fontFamily: 'GothamRounded-Bold'
  },
  headerText: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    paddingTop: 25,
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


export default AgendaPage;