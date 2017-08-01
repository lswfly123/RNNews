import React , {Component}from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class WYScrollImage extends Component{

  // 构造
    constructor(props) {
      super(props);

      // 初始状态
      this.state = {
        
      };
    }

  render(){
    return(
      <View>
<<<<<<< HEAD
        <Swiper style={styles.wrapper} height={140} horizontal={true} autoplay={true}>
=======
        <Swiper height={140} horizontal={true} autoplay={true}>
>>>>>>> 90d808db2e0470dba6d46c10abfa626927bfc5ca
          {this.renderItem()}
        </Swiper>
      </View>
    )
  }

  // 返回每一帧的页面
  renderItem(){
    // 1.取出数组数据
    var imgArr = this.props.addImgArr;
    // 2.定义组件数组
    var itemArr = [];
    // 3.遍历数据数组
    for(var i=0;i<imgArr.length;i++){
      // 4.取出单个对象
      var item = imgArr[i];
      // 5.创建组件装入数组
      itemArr.push(
        <View key={i} style={styles.slide1}>
          <Image source={{uri:item.imgsrc}} style={styles.image}/>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      )
    }
    return itemArr;
  }
}
WYScrollImage.defaultProps={
  adImgArr: []  // 接收其它界面传过来的值
}


const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB'
  },

  image: {
    flex: 1,
  },

  titleStyle:{
    position:'absolute',
    bottom:0,
    left:0,
    width:screenWidth,
    height:25,
    lineHeight:20,

    backgroundColor:'rgba(255,255,255,.4)',

  }
});


// 输出组件
module.exports = WYScrollImage;