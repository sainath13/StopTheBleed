import React, {Component} from 'react';
import {AppRegistry, View, StatusBar, Text, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

class OpeningPage extends Component {

componentWillMount(){
  
  
  
  //AsyncStorage.multiGet(['personName','businessEmail','bio','allurl']).then((data) => { 
  AsyncStorage.multiGet(['username','email']).then((data) => { 
    if(data[1][1]  != null ){
Actions.reset('WelcomePage')
    }else{
Actions.reset('SignUpPage')
    }
  console.log("this is the data that i am loading ", data)
  });
}
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <StatusBar backgroundColor="#6563A4" barStyle="light-content"/>
      </View>
    )
  }
};

export default(OpeningPage);
