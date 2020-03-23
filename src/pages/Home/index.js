import React,{ Component } from 'react';
import { Route,Link } from 'react-router-dom';

import Index from '../index';
import House from '../House';
import Profile from '../Profile'



class Home extends Component {
    render () {
        return (
            <div className='home'>
                <p>
                     <Link to='/home/index'>默认首页</Link>
                     <Link to='/home/house'>找房</Link>
                     <Link to='/home/Profile'>个人中心</Link>
                </p>
               <Route path='/home/index' component={Index} />
               <Route path='/home/house' component={House} />
               <Route path='/home/Profile' component={Profile} />
            </div>
        );
    }
}
export default Home;