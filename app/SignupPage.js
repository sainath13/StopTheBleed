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

import ApiUtils from './ApiUtils'

import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : "",
      email : "",
      typeinfo : "",
      avail : "",
      location : "",
      state : "",
      aditionalInfo : "Example additional information",
      isSaveButtonDisabled : false,
    }
    this._onPressCreateAccount = this._onPressCreateAccount.bind(this)
  }

  componentDidMount(){
    AsyncStorage.multiGet(['username','email','typeinfo','avail','location','state']).then((data) => { 

      this.setState({
        username : data[0][1],
        email : data[1][1],
        typeinfo : data[2][1],
        avail : data[3][1],
        location : data[4][1],
        state : data[5][1],
      })
    });
  }


  _onPressCreateAccount(){


    if(!this.state.isSaveButtonDisabled){

      this.setState({
        isSaveButtonDisabled : true 
      })

  fetch("https://blooming-shelf-85870.herokuapp.com/user", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "username"     : this.state.username, 
    "email"        : this.state.email,
    "typeinfo"     : this.state.typeinfo,
    "avail"        : this.state.avail,
    "location"     : this.state.location,
    "state"        : this.state.state,
    "aditionalInfo": this.state.aditionalInfo
  }),
})
.then(ApiUtils.checkStatus)
.then((response) => {
  return response.json();
})//response
.then((responseJson) =>  {
  AsyncStorage.multiSet([
   ["username"     , responseJson.username], 
   ["email"        , responseJson.email],
   ["typeinfo"     , responseJson.typeinfo],
   ["avail"        , responseJson.avail],
   ["location"     , responseJson.location],
//   ["state"        , responseJson.state]
  ]);
  Actions.WelcomePage()
}

)
.catch(e => {
  //TODO : fix this
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
        {this.state.username ? this.state.username.length < 1 ? "Create your profile" : "Your Profile" :  "Create your profile"}
      </Text>
    </View>
    <View style={styles.container}>
      <View style={{
        flex: 9
      }}>
              <View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 5}}>
<Sae
  onChangeText={(text) => { this.setState({username : text}) } }

    label={'Name'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    value={this.state.username ? this.state.username.length > 1 ? this.state.username : null : null}
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana',  color : '#272351' }}
  />
</View>

<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 5}}>
<Sae
  onChangeText={(text) => { this.setState({email: text}) } }

    label={'Email Address'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    value={this.state.email ? this.state.email.length > 1 ? this.state.email : null : null}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana', color : '#272351' }}
  />
</View>


<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 5}}>
<Sae
  onChangeText={(text) => { this.setState({typeinfo : text}) } }

    label={'Type Information'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    value={this.state.typeinfo ? this.state.typeinfo.length > 1 ? this.state.typeinfo : null : null}
    autoCorrect={false}
    labelStyle={{
      color: '#272351',
      fontFamily : 'verdana'
    }}
    inputStyle={{fontFamily: 'verdana', color : '#272351' }}
  />
</View>

<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 5}}>
<Sae
  onChangeText={(text) => { this.setState({avail: text}) } }

    label={'Availability'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    value={this.state.avail ? this.state.avail.length > 1 ? this.state.avail: null : null}
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


<View style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10 , padding : 5}}>
<Sae
  onChangeText={(text) => { this.setState({location: text}) } }
    label={'Location'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#272351'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    value={this.state.location ? this.state.location.length > 1 ? this.state.location : null : null}
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

export default SignupPage;