/**
 * Created by lishanwu on 17/7/19.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity, 
    Navigator
}from 'react-native';

// 导入外部的文件
var ScrollImg = require('./WYScrollImage');
var NewsDetail = require('./WYNewsDetail');
// 组件类
export default class WYHome extends Component{

  // 构造
    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
      // 初始状态
      this.state = {
          dataSource: ds.cloneWithRows(['']), // 列表行的数据
          adImage:[], // 广告
          hasError:false
      };
    }
  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={this.renderHeader.bind(this)}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }

  // 返回列表的头部视图
  renderHeader(){
    // 过滤
    if (this.state.adImage.length === 0) return;

    return(
      <ScrollImg addImgArr={this.state.adImage}/>
    )
  }

  // 返回具体的一行
  renderRow(rowData){
    if(this.state.hasError){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>您当前的网络有问题</Text>
        </View>
      )
    }else {
      return(
        <TouchableOpacity style={styles.cellStyle} onPress={()=>this.pushToDetail(rowData)}>
          {/*左边*/}
          <Image source={{uri:rowData.imgsrc}} style={styles.cellImgStyle}/>
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            <Text style={styles.titleStyle}>{rowData.title}</Text>
            <Text style={styles.rightBottomStyle}>
              <Text style={{color:'red'}}>{rowData.source}</Text>
              <Text style={{color:'orange'}}>{rowData.replyCount}跟帖</Text>
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  pushToDetail(rowData){
    // 一旦模块包装了一个导航,系统默认把导航放到该模块的getDefaultProps函数中
    var docid = rowData.docid;
    this.props.navigator.push({
      title:'详情页',
      component:NewsDetail,
      passProps:{
          name:'hello'
      }
    })
  }

  // 耗时操作
  componentDidMount() {
    // 请求网络数据
    this.loadNetData()
  }

  // 请求网络数据
  loadNetData(){
    fetch(this.props.url_api)
      .then((response)=>response.json())
      .then((responseData)=>{
        // 1.1 取出数据数组
        var dataArr = responseData[this.props.keyWord];

        // 1.2 定义局部变量
        var cellArr=[],adImgArr=[];

        // 1.3 分解数据
        for (var i=0;i<dataArr.length;i++){
          // 1.4 取出单个对象
          var item = dataArr[i];

          // 1.5 判断是否是广告
          if (item.hasAD === 1){ // 广告
            adImgArr = item.ads;
          }else {
            cellArr.push(item);
          }
        }

        // 1.6 更新状态机
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(cellArr),
          adImage:adImgArr
        })
      })
      .catch((error)=>{
        this.setState({
          hasError:true
        });
      })
  }
}

WYHome.defaultProps={

   url_api:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=1&prog=LTitleA&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=DUH4Hf95lyIDaAI03C3RSA%3D%3D&lon=HJ4tj6FL5wRHQxcf5GLEcg%3D%3D&ts=1470728804&sign=1H8K3yy9bMXakmxAlZ9P86meraJtjKQFz5vJuwhjNyl48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
    keyWord: 'T1348647853363'
}

const styles = StyleSheet.create({

  cellStyle:{
    // 改变主轴的方向
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#e8e8e8'
  },

  cellImgStyle:{
    width:120,
    height:80,
    margin:8
  },

  rightViewStyle:{

    flex:1,
    marginTop:8,
    marginBottom:8,
    // 主轴两端对齐
    justifyContent:'space-between'
  },

  titleStyle:{

    fontSize:16,
    lineHeight:20
  },

  rightBottomStyle:{

    // 设置主轴的方向
    flexDirection:'row',
    // 主轴两端对齐
    justifyContent:'space-between',
    marginRight:8
  }
});

module.exports = WYHome;