import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Alert,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import ApiUtils from './ApiUtils'

import Icon from 'react-native-vector-icons/FontAwesome';


import { Actions } from 'react-native-router-flux'; // New code

class InfoPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      personName: "",
      businessEmail : "",
      bio : "",
    }
  }


  componentWillMount(){
    AsyncStorage.multiGet(['personName','businessEmail','bio']).then((data) => { 
      console.log("this is the data that i am loading ", data)
      this.setState({
        personName : data[0][1],
        businessEmail : data[1][1],
        bio : [2][1]
      })
      });
  }

  onSuccess(e) {
//      Alert.alert( "Marking " + this.state.personName + "'s attendance for " + e.data + " with businessEmail  " +  this.state.businessEmail)
      fetch("http://itexpo.pythonanywhere.com/attendance/entry/", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "employee_email": this.state.businessEmail,
    "url" :  "cs"
  }),
})
.then(ApiUtils.checkStatus)
.then((response) => {
  return response.json();
})//response 
.then((responseJson) =>  {
  console.log(responseJson)
  Alert.alert(
    'Success',
    'Marked visit for ' + e.data,
    [
      {text: 'OK', onPress: () => {console.log('log pressed'), Actions.reset('AgendaPage')} },
    ],
    { cancelable: false }
  )
  //TODO : if i am here i think im already successful
})




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
              backgroundColor : 'black',
              justifyContent: 'center'
            }}
            onPress={() => {
            Actions.pop();
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
              Help
            </Text>
          </View>
          <View
            style={{
            flex: 1,
            alignItems: 'center',
            //backgroundColor : 'white',
            justifyContent: 'center',
            marginTop: 16
          }}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={{
              flex: 9,
              //backgroundColor : '#fefefe'
            }}>
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
    backgroundColor: '#FFFFFF',
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
    fontFamily: 'GothamRounded-Book',
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
  }
});


export default InfoPage;