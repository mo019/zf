import React from 'react';
// 导入路由的三个基础组件
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import Map from './pages/Map'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
  
        <Link to='/home'>首页</Link>
        <Link to='/cityList'>城市列表</Link>
        <Link to='/map'>地图</Link>

        <Switch>
           {/* 一级路由 */}
           {/* home下面配置二级路由 */}
           <Route path='/home' component={Home} />
           <Route path='/cityList' component={CityList} />
           <Route path='/map' component={Map} />

           {/* 报错页面 */}
           <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
