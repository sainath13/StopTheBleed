import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
  Alert,
  Linking,
  Clipboard,
  Platform,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import ApiUtils from './ApiUtils'
import dataJson from './speakers.json';

import Icon from 'react-native-vector-icons/FontAwesome';

import Accordion from 'react-native-collapsible/Accordion';

//const SECTIONS = [
//  {
//    title: 'First',
//    content: 'Lorem ipsum...',
//    imageURL : 'this is short description about the speaker',
//    linkedInURL : 'this is linked in url for the speaker'
//  },
//  {
//    title: 'Second',
//    content: 'Lorem ipsum...',
//    imageURL : 'url1'
//  },
//];
import { Actions } from 'react-native-router-flux'; // New code

class BoothsPage extends Component {
  state = {
    activeSections: [],
    data: [],
  };
  componentDidMount(){

    AsyncStorage.multiGet(['location']).then((data) => { 
      if(data[0][1]  != null && data[0][1] == "bengaluru"){
     //   Alert.alert(
     //     'Pune😓',
     //     'Make sure that you are connected to internet and using correct email id'+ data[0][0] + data[0][1],
     //     [
     //       {text: 'OK', onPress: () => {console.log('log pressed')} },
     //     ],
     //     { cancelable: false }
     //   ),
    
     //   this.setState()
     this.setState({
      data : dataJson.speakersBegaluru
     })
      }
      else{
    //      Alert.alert(
    //        'Bengaluru😓',
    //        'Make sure that you are connected to internet' + data[0][0] + data[0][1],
    //        [
    //          {text: 'OK', onPress: () => {console.log('log pressed')} },
    //        ],
    //        { cancelable: false }
    //      )
    this.setState({
        data : dataJson.speakers
    })
      }
    });
  }

  _renderSectionTitle = section => {
    return (
      <View style={{backgroundColor : 'red'}}>
        <Text>{section.content}</Text>
      </View>
    );
  };


  _renderHeader = section => {
    return (

      <View style={styles.listElement}>
      <View style={styles.notificationIcon}>
        <Image
          style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          marginLeft: 10,
          borderColor : '#D3D3D3',
          borderWidth : 2,
        }}
          source={

          section.name == "Chinari B Prusty (CB)" ?
            require('./images/chinari.jpg')
          : section.name == "Dr. Santosh Mohanty" ?
            require('./images/santosh.jpg')
          : section.name == "Siva Rama Krishna" ?
            require('./images/siva.jpg')
          : section.name == "Usha Narayanabhatta" ?
            require('./images/usha.jpg')
          : section.name == "Santh Govindaraj" ?
            require('./images/santh.jpg')
          : section.name == "Jamie Wymer" ?
            require('./images/Jamie.png')
          : section.name == "Raghavendra Guttur" ?
            require('./images/Raghavendra.png')
          : section.name == "Bhushan Jawlekar" ?
            require('./images/Bhushan.png')
          : section.name == "Madhanraj Jeyapragasam" ?
            require('./images/Madhanraj.png')
          : section.name == "Madhanraj Jeyapragasam" ?
            require('./images/Madhanraj.png')
          : section.name == "Manoharan Ramaswamy" ?
            require('./images/Manoharan.png')
          : section.name == "Dinkar Gupta" ?
            require('./images/Dinkar.png')
          : section.name == "Srinivasan Thiagarajan" ?
            require('./images/Srinivasan.png')
          : section.name == "Mohibuddin Khan" ?
            require('./images/Mohibuddin.png')
          : section.name == "Praveen Bhadada" ?
            require('./images/Praveen.png')
          : section.name == "Ashish Mishra" ?
            require('./images/Ashish.png')
          : section.name == "Ashutosh Sharma" ?
            require('./images/Ashutosh.png')
          : section.name == "Sushma Singh" ?
            require('./images/sushma.jpg')
          : section.name == "Radhika Venkatraman" ?
            require('./images/radhika.jpg')
          : section.name == "John Burns" ?
            require('./images/john.jpg')
          : section.name == "Lingeswaran M" ?
            require('./images/lingeswaran.jpg')
          : section.name == "Rajesh Srinivasan" ?
            require('./images/rajesh.jpg')
          : section.name == "Sachin Pikle" ?
            require('./images/sachin.jpg')
          : section.name == "Homyar Bhathena" ?
            require('./images/homyar.jpg')
          : require('./images/ms.png')}
          />
      </View>
      <View style={styles.notificationItem}>
        <Text style={styles.notificationItemText}>
          <Text style={styles.notificationItemTextBold}>{section.name}</Text>
        </Text>
      </View>
{
     section.linkedin.length > 2 ?  
      <TouchableOpacity
        onPress={() => {
        
          Linking.openURL(section.linkedin);
      }}
        style={{
        width: 30,
        height: 30,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 10,
        borderRadius: 2,
        borderColor: '#fefefe',
        borderWidth: 3 / 2,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#30459E',
        borderRadius: 5
      }}>
      <Icon name="info" size={16} color='white'></Icon>
      {
      //  <Text
      //    style={{
      //    color: 'white',
      //    fontSize: 16,
      //    //fontFamily: 'GothamRounded-Book'
      //  }}>
      //   2 
      //  </Text>
      }
      </TouchableOpacity>
     
     :
     null
    }
    </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={{ backgroundColor : '#fefefe'}}>
      <View style={{ margin : 15, }}>
      <Text style={styles.notificationItemText}>{section.title}</Text>
      </View>
      <View
     style={{
     borderBottomWidth: 0.25,
     borderBottomColor : "#12111f",
    borderBottomColor: '#9190b6',
    borderRadius: 25,
     }} 
      
      >
      <View style={{backgroundColor : '#fefefe', marginLeft : 15, marginRight : 15, marginBottom : 10 , 
    //backgroundColor : 'red',
    }}>
      <Text>{section.bio}</Text>
      </View>

    </View>
      </View>
    );
  };


  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

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
             Stories 
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
              backgroundColor : '#fefefe'
            }}>
            <ScrollView>
            <Accordion
        underlayColor={"#c0bfd0"}
        sections={this.state.data}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
          </ScrollView>
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
    borderColor: 'black',
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
    //borderBottomWidth: 2
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
  listElement: {
    margin: 1,
    marginTop : 5,
    height: 65,
    flexDirection: 'row',
    //borderBottomColor: '#9190b6',
    //borderBottomWidth: 0.25,
    //borderRadius: 25
  },
  notificationItem: {
    flex: 7,
    // borderColor : 'red', borderBottomWidth : 1, borderBottomRightRadius : 5,
    // borderBottomColor : 'black', alignItems : 'center',
    paddingRight: 3,
    paddingLeft: 10,
    justifyContent: 'center',
    //borderBottomWidth: 0.25,
    // borderBottomColor : "#12111f",
    //borderBottomColor: '#9190b6',
    borderRadius: 25,
    // backgroundColor : 'red',
  },
  wrappedText: {
    color: 'white',
    fontSize: 17,
    //fontFamily: 'GothamRounded-Bold',
    paddingLeft: 20
  },
  notificationItemText: {
    // paddingLeft : 20,
    fontSize: 15,
    // color : '#424242',
    color: '#1c1b30',
    fontFamily: 'verdana-bold'
  },
  notificationItemTextBold: {
    // paddingLeft : 20,
    fontSize: 15,
    // fontWeight : 'bold', color : '#212121',
    color: '#3f3d6a',
    //fontFamily: 'GothamRounded-Medium'
  },

  notificationIcon: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor : 'black',
  },

});


export default BoothsPage;