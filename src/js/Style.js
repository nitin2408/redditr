'use strict';

var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
    navigatorios: {
        flex: 1,
        backgroundColor: '#F6F6EF',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9B0B3',
    },
    postCount: {
        fontSize: 20,
        textAlign: 'right',
        margin: 10,
        color: 'gray',
        marginLeft: 15,
    },
    subredditTitle: {
        flex: 1,
        fontSize: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: '#404749'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#20293F'
    },
    webView: {
        flex: 1,
        backgroundColor: '#A9B0B3',
        flexDirection: 'column',
    },


    
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 80
    },
    
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        
    },

    thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }










});