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
  View
} from 'react-native';
// 导入主文件
var Main = require('./Component/WYMain');

export default class LSWWYNewsDemo extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('LSWWYNewsDemo', () => LSWWYNewsDemo);
