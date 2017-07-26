/**
 * Created by lishanwu on 17/7/19.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
}from 'react-native';

// 组件类
export default class WYFind extends Component{

  render(){
    return(
      <View style={styles.outViewStyle}><Text>发现</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  outViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'orange'
  }
});

module.exports = WYFind;