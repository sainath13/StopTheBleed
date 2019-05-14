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

import Timeline from 'react-native-timeline-listview'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux'; // New code

class AgendaPage extends Component {

  constructor(props) {
    super(props)
    this.onRefresh = this.onRefresh.bind(this)
    this.data = [
      {time: '14:00', title: 'Adaptive challenges of devops', description: 'Best practices in devops and how to overcome optional and structional challenges during adoption process'},
      {time: '16:30', title: 'Enabling continuous code with As Code' , description: 'Thoughts on infrastruction as code, continuous delivery as code, build as code, deploy as code, release as code, incident managment as code'},
      {time: '17:30', title: 'Openshift/kubernets ' , description: 'some short description'},
      {time: '09:00', title: 'Registration', description: 'Start booth setup. Coffee/tea available all day'},
      {time: '10:45', title: 'Speaker', description: 'Opening remarks'},
      {time: '12:00', title: 'Keynote', description: 'Driving business values with enterprize devops - Success patterns to transform pur culture , process engineering'},
      {time: '14:00', title: 'Adaptive challenges of devops', description: 'Best practices in devops and how to overcome optional and structional challenges during adoption process'},
      {time: '16:30', title: 'Enabling continuous code with As Code' , description: 'Thoughts on infrastruction as code, continuous delivery as code, build as code, deploy as code, release as code, incident managment as code'},
      {time: '17:30', title: 'Openshift/kubernets ' , description: 'some short description'},
    ]
    this.state = {
      isRefreshing: false, 
      data: this.data
    }
    this.data2 = [
      {time: '09:00', title: 'Registration', description: 'Start booth setup. Coffee/tea available all day'},
      {time: '10:45', title: 'Speaker', description: 'Opening remarks'},
      {time: '12:00', title: 'Keynote', description: 'Driving business values with enterprize devops - Success patterns to transform pur culture , process engineering'},
      {time: '14:00', title: 'Adaptive challenges of devops', description: 'Best practices in devops and how to overcome optional and structional challenges during adoption process'},
      {time: '16:30', title: 'Enabling continuous code with As Code' , description: 'Thoughts on infrastruction as code, continuous delivery as code, build as code, deploy as code, release as code, incident managment as code'},
      {time: '17:30', title: 'Openshift/kubernets ' , description: 'some short description'},
      {time: '09:00', title: 'Registration', description: 'Start booth setup. Coffee/tea available all day'},
      {time: '10:45', title: 'Speaker', description: 'Opening remarks'},
      {time: '12:00', title: 'Keynote', description: 'Driving business values with enterprize devops - Success patterns to transform pur culture , process engineering'},
      {time: '14:00', title: 'Adaptive challenges of devops', description: 'Best practices in devops and how to overcome optional and structional challenges during adoption process'},
      {time: '16:30', title: 'Enabling continuous code with As Code' , description: 'Thoughts on infrastruction as code, continuous delivery as code, build as code, deploy as code, release as code, incident managment as code'},
      {time: '17:30', title: 'Openshift/kubernets ' , description: 'some short description'},
    ]
    
  }

  onRefresh(){
    this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        data: this.data2,
        isRefreshing: false
      });
    }, 2000);
  }

  componentDidMount(){
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
              backgroundColor : '#green',
              justifyContent: 'center'
            }}
            onPress={() => {
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
              Agenda
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
            <Timeline
          data={this.state.data}
          circleSize={20}
          circleColor='#6463a4'
          lineColor='#6463A4'
          timeContainerStyle={{minWidth:52, }}
          timeStyle={{textAlign: 'center', backgroundColor:'#6463A4', color:'white', padding:5}}
          renderFullLine={true}
          separator={true}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:20, paddingBottom : 30},
            removeClippedSubviews: false,
            refreshControl: (
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                />
            ),
          }}
        />
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
    backgroundColor: '#30459E'
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


export default AgendaPage;