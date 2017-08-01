/**
 * Created by xiaomage on 16/8/9.
 */
import React ,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

// 导入第三方的类库
import TabNavigator from 'react-native-tab-navigator';

var Home = require('./WYHome');
var Message = require('./WYMessage');
var Find = require('./WYFind');
var Mine = require('./WYMine');

// 组件类
export default class WYMain extends Component{
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        selectedTab:'home'
      };
    }

  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          selectedTitleStyle={styles.tabTitleStyle}
          renderIcon={() => <Image source={{uri:'tabbar_home'}} style={styles.imgStyle} />}
          renderSelectedIcon={() => <Image source={{uri:'tabbar_home_highlighted'}} style={styles.imgStyle}/>}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Navigator
            // 初始化路由
            initialRoute={{
                           name:'home',
                           params:{
                               docid:'1234567',
                                },
                           component:Home}}
            // 界面之间过渡的动画效果
            configureScence={(route)=>{
                return Navigator.SceneConfigs.PushFromRight;
            }}
            // 把路由中的版块生成一个模块
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            }}
          />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'message'}
          title="消息"
          selectedTitleStyle={styles.tabTitleStyle}
          renderIcon={() => <Image source={{uri:'tabbar_message_center'}} style={styles.imgStyle} />}
          renderSelectedIcon={() => <Image source={{uri:'tabbar_message_center_highlighted'}} style={styles.imgStyle} />}
          onPress={() => this.setState({ selectedTab: 'message' })}>
          <Text>Hello2</Text>
          {/*<Navigator
            // 初始化路由
            initialRoute={{name:'message',component:Message}}
            // 界面之间过渡的动画效果
            configureScence={(route)=>{
                return Navigator.SceneConfigs.PushFromRight;
            }}
            // 把路由中的版块生成一个模块
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.props} navigator={navigator}/>
            }}
          />*/}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="发现"
          selectedTitleStyle={styles.tabTitleStyle}
          renderIcon={() => <Image source={{uri:'tabbar_discover'}} style={styles.imgStyle} />}
          renderSelectedIcon={() => <Image source={{uri:'tabbar_discover_highlighted'}} style={styles.imgStyle} />}
          onPress={() => this.setState({ selectedTab: 'find' })}>
          <Text>Hello3</Text>
          {/*<Navigator
            // 初始化路由
            initialRoute={{name:'find',component:Find}}
            // 界面之间过渡的动画效果
            configureScence={(route)=>{
                return Navigator.SceneConfigs.PushFromRight;
            }}
            // 把路由中的版块生成一个模块
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.props} navigator={navigator}/>
            }}
          />*/}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="我的"
          selectedTitleStyle={styles.tabTitleStyle}
          renderIcon={() => <Image source={{uri:'tabbar_profile'}} style={styles.imgStyle} />}
          renderSelectedIcon={() => <Image source={{uri:'tabbar_profile_highlighted'}} style={styles.imgStyle} />}
          onPress={() => this.setState({ selectedTab: 'mine' })}>
          <Text>Hello4</Text>
          {/*<Navigator
            // 初始化路由
            initialRoute={{name:'mine',component:Mine}}
            // 界面之间过渡的动画效果
            configureScence={(route)=>{
                return Navigator.SceneConfigs.PushFromRight;
            }}
            // 把路由中的版块生成一个模块
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.props} navigator={navigator}/>
            }}
          />*/}
        </TabNavigator.Item>
      </TabNavigator>

    )
  }
}

const styles = StyleSheet.create({
  imgStyle:{
    width: 30,
    height: 30,
    marginTop:10
  },
  tabTitleStyle:{
    color:'orange'
  }
});
// 模块输出
module.exports = WYMain;

