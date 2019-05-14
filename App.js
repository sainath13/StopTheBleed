/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,BackHandler, ToastAndroid} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import SignupPage from './app/SignupPage';
import CreateClassPage from './app/CreateClassPage';
import CreateStoryPage from './app/CreateStoryPage';
import QRScanner from './app/QRScanner'
import AgendaPage from './app/AgendaPagemodifiedbackup';
import AboutPage from './app/AboutPage';
import OpeningPage from './app/OpeningPage';
import WelcomePage from './app/WelcomePage';
import InfoPage from './app/InfoPage';
import SpeakersPage from './app/SpeakersPage';
import WebViewPage from './app/WebViewPage';
import BoothsPage from './app/BoothsPage';
import SelfHelpPage from './app/SelfHelpPage';


import { Actions } from 'react-native-router-flux'; // New code


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
//export default class App extends Component<Props> {
//  render() {
//    return (
//      <View style={styles.container}>
//      <Text style={styles.welcome}>
//        Welcome to the Demo! sfsad
//      </Text>
//    </View>
//    );
 // }
//}

const App = () => {

var backLoginScene = false; 
  return (
    <Router
      backAndroidHandler={() => {
                if (Actions.currentScene == "WelcomePage") {
                    if (backLoginScene == false) {
                        ToastAndroid.show("Click back again to exit.", ToastAndroid.SHORT);
                        backLoginScene = !backLoginScene;
                        return true;
                    } else {
                        backLoginScene = false;
                        BackHandler.exitApp();
                    }
                    return false;
                }
                else{
                  backLoginScene = false;
                }
              }}
                >
      <Scene key="root">
<Scene key="OpeningPage" 
initial
component={OpeningPage} hideNavBar />
        <Scene
          key="SignUpPage"
          hideNavBar
          component={SignupPage}
          title="SignUp page"
        />
        <Scene key="QRScanner"
        hideNavBar
          component={QRScanner}
          title="QR scanner"
        />
        <Scene key="SelfHelpPage"
        hideNavBar
          component={SelfHelpPage}
          title="Create a Class"
        />
        <Scene key="CreateClassPage"
        hideNavBar
          component={CreateClassPage}
          title="Create a Class"
        />
        <Scene key="CreateStoryPage"
        hideNavBar
          component={CreateStoryPage}
          title="Create a story"
        />
        <Scene key="AboutPage"
        hideNavBar
          component={AboutPage}
          title="About"
        />
        <Scene
          key="WelcomePage"
          hideNavBar
          component={WelcomePage}
          title="WelcomePage"
        />
        <Scene
          key="InfoPage"
          hideNavBar
          component={InfoPage}
          title="InfoPage"
        />
        <Scene
          key="BoothsPage"
          hideNavBar
          component={BoothsPage}
          title="BoothsPage"
        />
        <Scene
          key="SpeakersPage"
          hideNavBar
          component={SpeakersPage}
          title="SpeakersPage"
        />
        <Scene
          key="AgendaPage"
          hideNavBar
          component={AgendaPage}
          title="AgendaPage"
        />
        <Scene
          key="WebViewPage"
          hideNavBar
          component={WebViewPage}
          title="WebViewPage"
        />
      </Scene>
    </Router>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App;