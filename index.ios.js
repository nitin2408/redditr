/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';


var WelcomeView = require('./src/js/Subreddit');
var FirstTouchScene = require('./src/js/FirstTouchScene');
var appStyle = require('./src/js/Style');


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

class reddit extends Component {

  constructor(props) {
    super(props)
    //Be sure to add this line in the constructor, or the "this" in method _onRightButtonPress will reference to the object itself.
    this._onRightButtonPress = this._onRightButtonPress.bind(this)
  }

  render() {
    return (
          <NavigatorIOS 
            ref="nav"
            style = {appStyle.navigatorios} 
            initialRoute= {{
              component: WelcomeView,
              title: "Navigation demo",
              // rightButtonTitle: "Right Scene",
              // onRightButtonPress: this._onRightButtonPress
            }}
          />
    );
  }


  _onRightButtonPress() {
    this.refs.nav.push({
      title: "From Right",
      component: FirstTouchScene
    })
  }
}

AppRegistry.registerComponent('reddit', () => reddit);
