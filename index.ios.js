/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  InteractionManager
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        
      </ScrollView>
    );
  }
}

export default class ReactNativeNBA extends Component {

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      // ...需要长时间同步执行的任务...
      fetch('https://op.juhe.cn/onebox/basketball/nba?key=5b8f01f903aff48407e9c2c57e0e58c0')
      .then((res) => res.json())
      .then((resJson) => console.log(resJson))
      .catch((e) => {
        console.log(e);
      });
    });
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'NBA赛事',
          barTintColor: '#c00',
          titleTextColor: '#fff',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ReactNativeNBA', () => ReactNativeNBA);
