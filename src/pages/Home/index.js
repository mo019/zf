import React,{ Component } from 'react';
import { Route } from 'react-router-dom';

import Index from '../index';
import House from '../House';
import Profile from '../Profile';

// 引入ant
import { TabBar } from 'antd-mobile';
// 引入样式
import './index.css'


// 全局菜单数据
import tabItems from'../../utils/tabBar'



class Home extends Component {

    state = {
        selectedTab: '/home',
        fullScreen: true,
      };



    render () {
        return (
            <div className='home'>
                
               {/* 二级路由 */}
               <Route path='/home' exact component={Index} />
               <Route path='/home/house' component={House} />
               <Route path='/home/profile' component={Profile} />
            
            {/* 全局导航栏 */}
               <div className='barBox'>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {/* 循环生成全局菜单 */}
          {
              tabItems.map((item) =>{
                  return(
                    <TabBar.Item
                    title={item.title}
                    key={item.title}
                    // 默认样式icon
                    icon={ <i className={`iconfont ${item.icon}`} /> }
                    // 选中后样式selectedIcon
                    selectedIcon={ <i className={`iconfont ${item.icon}`} /> }
                    // 选中状态
                    selected={this.state.selectedTab === item.path} 
                    // 编程式导航
                    onPress={() => {
                        this.props.history.push(item.path)
                      this.setState({
                        selectedTab: item.path,
                      });
                    }}
                  >          
                  </TabBar.Item>
                  )
              })
          }
  
        </TabBar>
      </div>

               
            </div>
        );
    }
}
export default Home;