/**
 * Created by xiaomage on 16/8/9.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

// 组件类
export default class WYNewsDetail extends Component{

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {

        htmlString:'<img src="http://img.51ztzj.com/upload/image/20150317/sj201503171007_279x419.jpg" width="100%" height="100%">'
      };
    }

  render(){
    return(
      <WebView
        automaticallyAdjustContentInsets={true}
        source={{html:this.state.htmlString,baseUrl:''}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
      />
    )
  }

  componentDidMount() {

    var docid = this.props.docid;
    // 请求路径的拼接
    var url_api = 'http://c.m.163.com/nc/article/'+this.props.docid+'/full.html';
    fetch(url_api)
      .then((response)=>response.json())
      .then((responseData)=>{
        console.log(responseData);

        alert(url_api);
        // 1. 取出所有的数据
        var allData = responseData[docid];
        // 2. 取出body中的数据
        var body = allData['body'];
        // 3. 取出图片数组
        var img = allData['img'];
        // 4. 遍历图片数组
        if (img.length>0){
          for(var i=0;i<img.length;i++){
            // 5.取出单个对象
            var item = img[i];
            // 6.取出src
            var src = item.src;
            // 7.创建html标签
            var imgHtml = '<img src="'+ src +'" width="100%">';
            // 8.替换body中的占位标签
            body = body.replace(item.ref,imgHtml);
          }
        }

        // 更新状态,刷新UI
        this.setState({
          htmlString:body
        });
      })
  }
}


// 样式类
const styles = StyleSheet.create({
  outViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  }
});
