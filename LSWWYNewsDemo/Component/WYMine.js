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
export default class WYMine extends Component{

  render(){
    return(
      <View style={styles.outViewStyle}><Text>我的</Text></View>
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

module.exports = WYMine;