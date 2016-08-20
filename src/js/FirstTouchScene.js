



import React, { Component} from 'react';


var styles = require('./Style');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

module.exports = class MyWeb extends Component {

      constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'Welcome'
        };
      }

      render() {
        return (
         <TabBarIOS 
            selectedTab={this.state.selectedTab}
            unselectedTintColor="yellow"
            tintColor="white"
            barTintColor="darkslateblue">
	            <TabBarIOS.Item
		              selected={this.state.selectedTab === 'Welcome'}
		              style={{backgroundColor: 'white', padding: 20}}
		              title="Welcome"
		              icon={{uri:'home'}}
		              selectedIcon={{uri:'home_filled'}}
		              onPress={() => {
		                  this.setState({
		                      selectedTab: 'Welcome',
		                  });
		              }}>
		                <Text style={{padding: 10, fontSize: 42}}>
		                  {this.state.selectedTab}
		                </Text>
	            </TabBarIOS.Item>

	            <TabBarIOS.Item
	              selected={this.state.selectedTab === 'Comments'}
	              icon={{uri:'contacts'}}
	              style={{backgroundColor: 'white', padding: 20}}
	              title="Comments"
	              icon={{uri:'home'}}
	              selectedIcon={{uri:'home_filled'}}
	              onPress={() => {
	                    this.setState({
	                        selectedTab: 'Comments',
	                    });
	              }}>
	              <Text style={{padding: 10, fontSize: 42}}>
	                  {this.state.selectedTab}
	                </Text>
	            </TabBarIOS.Item>

	            <TabBarIOS.Item
	              selected={this.state.selectedTab === 'More'}
	              icon={{uri:'contacts'}}
	              title="More Details"
	              style={{backgroundColor: 'white', padding: 20}}
	              icon={{uri:'home'}}
	              selectedIcon={{uri:'home_filled'}}
	              onPress={() => {
	                    this.setState({
	                        selectedTab: 'More',
	                    });
	              }}>
	              <Text style={{padding: 10, fontSize: 42}}>
	                  {this.state.selectedTab}
	                </Text>
	            </TabBarIOS.Item>
          </TabBarIOS>
        );
      }
    }    

