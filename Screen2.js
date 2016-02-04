/**
 * Created by rettig on 11/9/15.
 */
'use strict';

import React, {
  ActivityIndicatorIOS,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

var Screen2 = React.createClass({

  render: function () {
    return (
      <View style={{paddingTop: 70}}>
        <Text style={{fontSize: 50, textAlign: "center", padding: 20}}>Hello.</Text>
      </View>
    );
  },

});

module.exports = Screen2;
