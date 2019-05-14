import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  Alert,
  RefreshControl,
  ActivityIndicator,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux'; // New code

class AboutPage extends Component {

  constructor(props) {
    super(props)
  }
  render(){
  return (
<View style={{
        flex: 1
      }}>

        {Platform.OS == "ios"
          ? <StatusBar backgroundColor="#30459E" barStyle="dark-content"/>
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
            Actions.pop();
            teset = new Date("2019-09-28T22:59:02").getTime()
            teset2 = new Date("2019-10-28T22:59:02").getTime()
            if (teset2 > teset ){
            //Alert.alert( "Marking " + teset );
          }
 

          }}>
            <View style={{
              //backgroundColor : 'red'
            }}>

              <Icon name="chevron-left" size={20} color='white'></Icon>

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
             About 
            </Text>
          </View>
          <TouchableOpacity
            style={{
            flex: 1,
          //  backgroundColor : 'green',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16
          }}
          onPress={() => {
        }}
          >
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={{
              flex: 9,
              backgroundColor : '#fefefe',
              paddingLeft : 10,
              paddingRight : 10,
            }}>
            <Text style={{marginTop : 20, 
            fontFamily : 'verdana',
            fontSize : 17,
            }}>
             This app is created for Stop The bleed Hackathon hosted on HackerEarth. This app is a demo version as this is a submission for the hackathon.
            </Text>

             </View>
          </View>
          <TouchableOpacity
                  style={{
                  flex: 1
                }}
                  onPress={() => {
                    Actions.WebViewPage({PageName : "Support"});
                }}>
                  <View
                    style={{
                    flexDirection: 'row',
                    backgroundColor: '#F6F5FA',
                    borderBottomColor: '#6563A4',
                    borderBottomWidth: 2
                  }}>
                    <View
                      style={{
                      flex: 6,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 17,
                        padding: 15
                      }}>
                       Support 
                      </Text>
                    </View>
                    <View
                      style={{
                      flex: 1,
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 5,
                      marginRight: 10,
                      borderRadius: 2,
                      paddingTop: 5,
                      paddingBottom: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5
                    }}>
                      <Icon name="caret-right" size={25} color='#6564A4'></Icon>
                    </View>
                  </View>
                </TouchableOpacity>
          <TouchableOpacity
                  style={{
                  flex: 1
                }}
                  onPress={() => {
                    Actions.WebViewPage({PageName : "Privacy Policy"});
                }}>
                  <View
                    style={{
                    flexDirection: 'row',
                    backgroundColor: '#F6F5FA',
                    borderBottomColor: '#6563A4',
                    borderBottomWidth: 2
                  }}>
                    <View
                      style={{
                      flex: 6,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 17,
                        padding: 15
                      }}>
                        Privacy Policy
                      </Text>
                    </View>
                    <View
                      style={{
                      flex: 1,
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 5,
                      marginRight: 10,
                      borderRadius: 2,
                      paddingTop: 5,
                      paddingBottom: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5
                    }}>
                      <Icon name="caret-right" size={25} color='#6564A4'></Icon>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                  flex: 1
                }}
                  onPress={() => {
                    Actions.WebViewPage({PageName : "Terms of Use"});
                }}>
                  <View
                    style={{
                    flexDirection: 'row',
                    backgroundColor: '#F6F5FA',
                    borderBottomColor: '#6563A4',
                    borderBottomWidth: 2
                  }}>
                    <View
                      style={{
                      flex: 6,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 17,
                        padding: 15
                      }}>
                        Terms and Conditions 
                      </Text>
                    </View>
                    <View
                      style={{
                      flex: 1,
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 5,
                      marginRight: 10,
                      borderRadius: 2,
                      paddingTop: 5,
                      paddingBottom: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5
                    }}>
                      <Icon name="caret-right" size={25} color='#6564A4'></Icon>
                    </View>
                  </View>
                </TouchableOpacity>

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
    backgroundColor: '#302b63'
  },
  headerTextAndroid: {
    // color : '#30459E',
    color: 'white',
    fontSize: 22,
    //fontFamily: 'GothamRounded-Bold'
  },
  headerText: {
    // color : '#30459E',
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
    borderBottomColor: '#30459E',
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
    backgroundColor: '#30459E',
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


export default AboutPage;