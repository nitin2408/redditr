
import React, { Component} from 'react';


var styles = require('./Style');
import response from './subreddit.json';

import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

module.exports = class WelcomeView extends Component {
  constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2
          }),
          loaded : false
        };
  }

  componentDidMount() {
    this.fetchSubReddits();
  }


  fetchSubReddits() {
     fetch("http://www.reddit.com/reddits.json").then((r) => r.json()).then((response) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(response.data.children),
            loaded: true
          });
     }).done();
  }
  renderRow(rowData){
    return (
        <TouchableHighlight underlayColor='red'>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>
              {rowData.data.display_name}
            </Text>
          </View>
        </TouchableHighlight>
    )





  }

  render() {

    if (!this.state.loaded) {
      return(
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Loading Stories, please wait ...
          </Text>
        </View>
      );
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  } 

}

