import React,{ Component } from 'react';
import { Carousel,Flex,Grid,WingBlank,SearchBar } from 'antd-mobile';
// 获取轮播图数据
import swiper_obtain from '../../information_after/home/swiper/swiper.json';
// 获取宫格数据
import groups_obtain from '../../information_after/home/groups/groups.json';
// 获取导航栏数据
import navs_config from '../../utils/navs_config';
// 获取最新咨询数据
import news_obtain from '../../information_after/home/news/news.json';

import '../../assets/swiper/1.jpg';
// 样式
import './index.scss';



// 复制给变量
const swiper_voluation = swiper_obtain;
const groups_voluation = groups_obtain;
const new_voluation = news_obtain;





class Index extends Component {

    state = {
        // 轮播图数据
        swiper:[],
        groups:[],
        news:[],
        // 顶部搜索关键词数据
        keyword:'',
        
        // 轮播图高度
        imgHeight: 176
        // 轮播图数据放到组件中
        
      }

      a(f_1,f_2,f_3){
        this.setState(()=>({
          // 数据保存
            swiper:f_1,
            groups:f_2,
            news:f_3
            
        }))
    }


      componentDidMount(){
        // 延时加载数据
          setTimeout(()=>{
            this.a(swiper_voluation.body,groups_voluation.body,new_voluation.body)
          },100)
         
          
      }
   
      

    render () {
        return (
<div>
  {/* 顶部导航栏搜索 */}
  <Flex justify="around" className="topNav">
        <div className="searchBox">
          <div className="city" onClick={()=>this.props.history.push('/cityList')}>
            北京
            <i className="iconfont icon-arrow" />
          </div>
          <SearchBar
            value={this.state.keyword}
            onChange={(v) => this.setState({ keyword: v })}
            placeholder="请输入小区或地址"
          />
        </div>
        <div className="map" onClick={()=>this.props.history.push('/map')} >
          <i key="0" className="iconfont icon-map" />
        </div>
      </Flex>
      {/* 轮播图 */}
        <Carousel
        // 控制自动播放
          autoplay
        //   无限循环
          infinite
        >
            {/* 列表渲染 */}
          {this.state.swiper.map(val => (
            <a
              key={val.id}
              href='www.baidu.com'
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imgSre}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: this.state.imgHeight }}

                // 根据窗口自适应   组件自带
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      {/* 栏目导航 */}
      <Flex className='nav'>

          {navs_config.map((item) => {
            return (
                <Flex.Item onClick={()=> this.props.history.push(item.path)} key={item.id}>
                   <img src={item.img} alt=''/>
                    <p>{item.title}</p>
                </Flex.Item>
            )
          })}
          
      </Flex>
      {/* 小组和宫格 */}
      <div className="group">
           <Flex className="group-title" justify="between">
                <h3>租房小组</h3>
                <span>更多</span>
            </Flex>
            {/* 宫格 */}
          {/* 宫格数据 */}
          <Grid
      data={this.state.groups}
      columnNum={2}
      // 关闭默认正方形
      square={false}
      hasLine={false}
      renderItem={item => {
          return (
            // item结构
            <Flex className="grid-item" justify="between">
              <div className="desc">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <img src={item.imgSre} alt="" />
            </Flex>
          );
          }}
  />
 
            
       </div>

      {/* 最新资讯 */}
  <div className='news'>
          <h3 className='group-title'>
            最新资讯
          </h3>
          <WingBlank size='md'>
            {
              this.state.news.map(item => (
                <div className="news-item" key={item.id}>
                  <div className="imgwrap">
                    <img
                      className="img"
                      src= {item.imgSrc}
                      // 
                      alt=""
                    />
                  </div>
                  <Flex className="content" direction="column" justify="between">
                    <h3 className="title">{item.title}</h3>
                    <Flex className="info" justify="between">
                      <span>{item.from}</span>
                      <span>{item.date}</span>
                    </Flex>
                  </Flex>
                </div>
                )
                )
            }
          </WingBlank>
  </div>




</div>
        );
    }
}
export default Index;