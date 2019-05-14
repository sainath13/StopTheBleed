import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'rn-fetch-blob'

import ApiUtils from './ApiUtils'

import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { jsxOpeningElement } from '@babel/types';

class CreateStoryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: "",
      link: "",
      name: "",
      title: "",
      isSaveButtonDisabled : false,
    }
    this._onPressCreateAccount = this._onPressCreateAccount.bind(this)
  }


  _onPressCreateAccount(){
    if(!this.state.isSaveButtonDisabled){

      this.setState({
        isSaveButtonDisabled : true 
      })

      //TODO : fix this
  fetch("https://blooming-shelf-85870.herokuapp.com/feed", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "bio": this.state.bio,
    "link": this.state.link,
    "name": this.state.name,
    "title": this.state.title
  }),
})
.then(ApiUtils.checkStatus)
.then((response) => {
  return response.json();
})//response
.then((responseJson) =>  {
  console.log(responseJson);
  Alert.alert(
    'Thanks for sharing your story with the world',
    'This story will help the world',
    [
      {text: 'OK', onPress: () => {   Actions.reset("WelcomePage") } }
    ],
    { cancelable: false }
  )
this.setState({
  isSaveButtonDisabled : false
})
}
)
.catch(e => {
  //TODO : fix this
  Actions.WelcomePage()
  Alert.alert(
      'Network request failed 😓',
      'Make sure that you are connected to internet and using correct email id',
      [
        {text: 'OK', onPress: () => {console.log('log pressed')} },
      ],
      { cancelable: false }
    )
    this.setState({
      isSaveButtonDisabled : false
    })
})

    }

}

render(){
  return (
    <View style={styles.content}>
    <View
      style={Platform.OS == "ios"
      ? styles.header
      : styles.headerAndroid}>
      <Text
        style={Platform.OS == "ios"
        ? styles.headerText
        : styles.headerTextAndroid}>
        Share your story
      </Text>
    </View>
    <View style={styles.container}>
      <View style={{
        flex: 9
      }}>


<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 10}}>
<Sae
  onChangeText={(text) => { this.setState({name: text}) } }

    label={'Title of Story'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana', color : '#272351' }}
  />
</View>

          
          <View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 10}}>
<Sae
  onChangeText={(text) => { this.setState({title: text}) } }

    label={'Name'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana', color : '#272351' }}
  />
</View>




              <View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 10}}>
<Sae
  onChangeText={(text) => { this.setState({bio: text}) } }

    label={'Description'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana',  color : '#272351' }}
  />
</View>

<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 10}}>
<Sae
  onChangeText={(text) => { this.setState({link: text}) } }

    label={'Enter URL for details'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana', color : '#272351' }}
  />
</View>



      </View>


      <TouchableOpacity
        style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#272351'
      }}
      disabled={this.state.isSaveButtonDisabled}
        onPress={this._onPressCreateAccount}>
        <View style={{}}>
        {this.state.isSaveButtonDisabled? 
          <ActivityIndicator size="large"  animating={this.state.isSaveButtonDisabled} />
      :
      <Text
      style={{
      color: 'white',
      fontSize: 25,
    }}>
      Save
    </Text>

      }
           </View>
      </TouchableOpacity>
    </View>

  </View>
  );
}
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingTop : 20,
  },
  headerAndroid: {
    flex: 1,
    //height : 27,
    paddingTop: 14,
    paddingBottom: 13,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#333156',
    borderBottomWidth: 3,
    backgroundColor: '#272351'
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#333156',
    borderBottomWidth: 3,
    backgroundColor: '#272351'
  },
  headerTextAndroid: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    //  paddingTop : 25,
    // fontFamily : 'arial'
  },
  headerText: {
    // color : '#6563A4',
    color: 'white',
    fontSize: 22,
    paddingTop: 25,
    // fontFamily : 'arial'
    fontFamily : 'verdana'
  },
  container: {
    flex: 9
  },
  picInfoHolder: {
    backgroundColor: '#6563a4',
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  picHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoHolder: {
    flex: 2.5,
  },
  infoTextHolder: {
    flex: 1,
    margin : 10,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  infoText: {
    width: 300,
    color: 'white',
    fontSize: 20,
  },
  infoTextSubinfo: {
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#F6F5FA',
    borderBottomColor: '#6563A4',
    borderBottomWidth: 2
  },
  rowLeft: {
    flex: 1,
    justifyContent: 'center'
  },
  rowLeftText: {
    fontSize: 17,
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
    alignItems: 'center',
    backgroundColor: '#6563A4',
    borderRadius: 5
  },
  wrappedText: {
    color: 'white',
    fontSize: 17,
  }
});

export default CreateStoryPage;