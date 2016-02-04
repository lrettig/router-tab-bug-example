/**
 * Created by rettig on 1/12/16.
 */
'use strict';

import React, {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {Actions as RouterActions} from 'react-native-router-flux'

var Screen1 = React.createClass({

  render: function () {
    return (
      <View style={[styles.buttonContainer, {paddingTop: 70}]}>
        <TouchableHighlight
          style={styles.button}
          onPress={RouterActions.screen2}>
        <Text style={styles.buttonText}>Tap here</Text>
        </TouchableHighlight>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 30,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 36,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

module.exports = Screen1;
