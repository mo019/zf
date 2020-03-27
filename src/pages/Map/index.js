import React,{ Component } from 'react';
// 地图找房




class Map extends Component {

    componentDidMount(){
        this.initMap()

    }

    initMap=()=>{
        // 1.创建地图实例 显示到id="container"的div上面
         var map = new window.BMap.Map("container");
        // 2.设置中线点坐标（默认北京天安门）
         var point = new window.BMap.Point(116.404, 39.915); 
        // 3.地图初始化，同时设置地图展示级别
         map.centerAndZoom(point, 15); 

    }



    render () {
        return (
            <div className='mapBox'>
                {/* 百度地图 */}
                <div id="container"></div> 
            </div>
        );
    }
}
export default Map;