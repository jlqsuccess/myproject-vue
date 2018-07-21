<template>
    <div>

        <div class="caiseline"><img src="../assets/img/index/logo_nav_border.png"></div>
        <!--主体-->
        <div id="bodyId">
            <div class="banner">
                <img src="../assets/img/aboutUs/fontBg.png">
            </div>
            <div class="banner1">
                <img src="../assets/img/aboutUs/canvas.png">
            </div>
            <div class="banner2">
                <img src="../assets/img/aboutUs/canvas2.png">
            </div>
            <div class="banner3">
                <!--<div id="container"></div>-->
                <div id="container">
                    <div id="allmap" ref="allmap"></div>
                </div>
            </div>
        </div>




        <!--侧边栏-->
        <div class="g-toolbar">
            <ul class="g-toolbar-nav">
                <li class="toolbar-item">
                    <span class="toolbar-item-t">客服</span>
                    <div class="qq"></div>
                </li>
                <li class="toolbar-item">
                    <span class="toolbar-item-c2">计算器</span>
                    <div class="calc"></div>
                </li>
                <li class="toolbar-item">
                    <div class="wx-qrc"></div>
                    <div class="wx"></div>
                </li>
                <li class="toolbar-item">
                    <div class="phone-qrc"></div>
                    <div class="phone"></div>
                </li>
                <li class="toolbar-item" id="back">
                    <span class="toolbar-item-t">置顶</span>
                    <div class="totop"></div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import '../assets/css/base.css'
    import '../assets/css/aboutUs.css'
    import '../assets/js/jquery-1.11.3.js'


    export default {
        data(){
            return {}
        },
        methods: {
            map(){
                let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.356633,39.949415), 16);// 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl({//添加地图类型控件
                    mapTypes:[
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]}));
                map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                var marker = new BMap.Marker(point);        // 创建标注
                map.addOverlay(marker);
                map.addControl(new BMap.NavigationControl());
                //缩放控件
                map.addControl(new BMap.ScaleControl());
                //地图类型
                map.addControl(new BMap.MapTypeControl());
            }

        },
        mounted(){
            require('../assets/js/aboutUs.js');
            this.map()
        }
    }
</script>
<style>
    #container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #allmap{
        height: 300px;
        overflow: hidden;
    }

</style>
