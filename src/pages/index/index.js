import React,{ Component } from 'react';
import { Carousel } from 'antd-mobile';
// 获取轮播图
import swiper_obtain from '../../information_after/home/swiper/swiper.json'
// 复制给变量
const swiper_voluation = swiper_obtain 


class Index extends Component {

    state = {
        // 轮播图数据
        swiper:[],
        // 轮播图高度
        imgHeight: 176
        // 轮播图数据放到组件中
        
      }

      a(f){
        this.setState(()=>({
            swiper:f
            
        }))
        console.log(this.swiper,f)
    }


      componentDidMount(){
        //   setTimeout(()=>{
            this.a(swiper_voluation)
        //   },100)
          console.log(this.swiper)
          
      }

      

    render () {
        return (
<div>
      <div>
        <Carousel
        // 控制自动播放
          autoplay
        //   无限循环
          infinite
        >
            {/* 列表渲染 */}
          {this.swiper.map(val => (
            <a
              key={val.id}
              href={val.imgSre}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imgSre}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}

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
      </div>
      
                
</div>
        );
    }
}
export default Index;