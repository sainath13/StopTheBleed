import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  RefreshControl,
  Alert,
  Platform,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  Image
} from 'react-native';
import {Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');
import ApiUtils from './ApiUtils'
import dataJson from './agenda.json';
import Dialog, { DialogContent,DialogTitle } from 'react-native-popup-dialog';

import Timeline from 'react-native-timeline-listview'
import Icon from 'react-native-vector-icons/FontAwesome';



import { Actions } from 'react-native-router-flux'; // New code

class AgendaPage extends Component {
  constructor(){
    super()
    this.onRefresh = this.onRefresh.bind(this)
   
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderCircle = this.renderCircle.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.state = {
      fetching : true,
      isRefreshing: false, 
      data: [],
      selected : null,
      visible : false,
      Registered : false,
    }

  } 
  componentDidMount(){
    this.setState({
      fetching : true,
    })


    fetch("https://blooming-shelf-85870.herokuapp.com/class", {
      method: 'GET',
    })
    .then(ApiUtils.checkStatus)
    .then((response) => {
      return response.json();
    })//response
    .then((responseJson) => {
      this.setState({data : responseJson});
      this.setState({
        fetching : false,
      })
    })//responseJson
    
  }

  renderCircle(rowData, sectionID, rowID){
    var circleSize = 20
    var circleColor = rowData.circleColor
    var lineWidth = 2
    var ballPadding = (Platform.OS === 'ios') ? width/1.33 : width/1.32

    return (
       <View style={{
         }} />
     )
  }
  onRefresh(){
    this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        //TODO FIX THIS 
        data: this.state.data,
        isRefreshing: false
      });
    }, 2000);
  }

  onEventPress(data) {
    this.setState({selected: data})
    this.setState({visible : true})
  //  Alert.alert(
  //    'Success',
  //    'Marked visit for ' + data.time,
  //    [
  //      {text: 'OK', onPress: () => {console.log('log pressed'), Actions.reset('AgendaPage')} },
  //    ],
  //    { cancelable: false }
  //  )
  console.log(data)
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.speaker} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.speaker}</Text>
    var desc = (
      <View>
         <Text style={{color : '#444072'}}>
           {rowData.location} 
        </Text>
        <View style={styles.descriptionContainer}>   
          <View
                                                    style={{
                                                    marginTop: 1,
                                                    marginBottom: 1,
                                                    marginRight: 5,
                                                    borderRadius: 3,
                                                    marginTop : 3,
                                                    borderColor: 'white',
                                                    padding: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#444072'
                                                }}>
                                                    <Text
                                                        style={{
                                                        color: 'white',
                                                        fontSize: 12,
                                                        fontFamily: 'Verdana'
                                                    }}>
                                                     {rowData.date} 
                                                    </Text>
          </View>
          <View
                                                    style={{
                                                    marginTop: 1,
                                                    marginBottom: 1,
                                                    marginLeft: 5,
                                                    marginTop : 3,
                                                    marginRight: 5,
                                                    borderRadius: 3,
                                                    borderColor: 'white',
                                                    padding: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#444072'
                                                }}>
                                                    <Text
                                                        style={{
                                                        color: 'white',
                                                        fontSize: 12,
                                                        fontFamily: 'Verdana'
                                                    }}>
                                                     {rowData.distance} 
                                                    </Text>
          </View>
        </View>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
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
           Stop The Bleed Courses 
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
 
          {
       //   <Text>
       //     QR
       //   </Text>
          } 
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={{
              flex: 9,
              backgroundColor : '#fefefe',
              paddingLeft : 10,
            }}>
            {

              //TODO if this doest work then change the version to v0.17.3
            }
<Dialog
    visible={this.state.visible}
    width={0.9}
    onHardwareBackPress={() => { this.setState({
      visible : false
    })}}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
    dialogTitle={this.state.selected ? <DialogTitle title={"Instructor: " + this.state.selected.speaker}/> : <DialogTitle title="" />} 
  >
    <DialogContent>
      { this.state.selected?
      <View style={{paddingTop: 15 }}>
    {
    this.state.selected.date?
    <Text>{"Date: " + this.state.selected.date}</Text>
    :
    null
    }
      {
    this.state.selected.span?
    <Text>{"Duration: " + this.state.selected.span}</Text>
    :
    null
    }
    {
    this.state.selected.fee?
    <Text>{"Fee: " + this.state.selected.fee}</Text>
    :
    null
    }
  {
    this.state.selected.distance?
    <Text>{"Distance: " + this.state.selected.distance}</Text>
    : 
    null
  }
    {
    this.state.selected.location?
    <Text>{"Location: " + this.state.selected.location}</Text>
    :
    null
    }

    {
      <TouchableOpacity style={{ backgroundColor : '#444072', padding : 5, alignContent : 'center', alignItems : 'center', justifyContent : 'center' , marginTop : 5}}
      onPress={() => {
       this.setState({
         Registered : true
       }) 
      }}
      >
        <Text style={{color : 'white'}}> 
        {
          this.state.Registered ? "Registration Success" : "Register"
        }
        </Text>
      </TouchableOpacity>
    }
      </View>
            :
            <Text>
            </Text>
      }
    </DialogContent>
  </Dialog>
{
!this.state.fetching ?



<Timeline 
          style={styles.list}
          data={this.state.data}
          circleSize={20}
          circleColor='#444072'
          renderFullLine={true}
          innerCircle={'none'}
          separator={true}
          lineColor='#444072'
          lineWidth={2}
          timeContainerStyle={{minWidth:52,}}
          timeStyle={{textAlign: 'center', backgroundColor:'#444072', color:'white', padding:5, borderRadius:13 }}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:20},
            removeClippedSubviews: false, 
            refreshControl: (
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                />
            ),
          }}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
          enableEmptySections={true}
         renderCircle={this.renderCircle}
        />
:

<View style={{flex :1 , alignContent : "center" , alignItems : "center", justifyContent : "center", marginTop : 20}}>

<ActivityIndicator size="large"  animating={this.state.fetching}
/>
</View>

        }


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
  containerTimeline: {
    flex: 1,
	paddingTop:10,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:10,
  },
  title:{
    fontSize:16,
    color : '#444072',
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    color : '#444072',
    paddingRight: 5
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    color: 'gray'
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