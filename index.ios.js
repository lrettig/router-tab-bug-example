/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Actions as RouterActions,
  Animations,
  Router,
  Route,
  Schema,
  TabBar,
} from 'react-native-router-flux'

import Screen1 from './Screen1'
import Screen2 from './Screen2'

class TabIcon extends React.Component {
  render () {
    return (
      <Text
        style={this.props.selected ?
        {color: 'red'} : {color: 'black'}}>
        {this.props.title}
      </Text>
    );
  }
}

class RouterTabBugExample extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router>
          <Schema name="tab" type="switch" icon={TabIcon} />
          <Route name="tabbar">
            <Router
              footer={TabBar}
              hideNavBar={true}
              tabBarStyle={styles.tabBar}>
              <Route name="screen1" schema="tab" title="Screen1" component={Screen1}/>
              <Route name="screen2" schema="tab" title="Screen2" component={Screen2} />
            </Router>
          </Route>
        </Router>
      </View>
    );
  }
}

AppRegistry.registerComponent('RouterTabBugExample', () => RouterTabBugExample);

var styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'red',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
});
