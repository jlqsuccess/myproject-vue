<template>
    <div>
        <div class="top">
            <div class="top-width1000">
                <div class="left top-l">
                    <img src="../assets/img/header/top_icon02.png" class="left l-phone">
                    <div class="left phone">服务热线:400-110-1122（09:00～18:00）</div>
                    <a href="#" class="left weibo"></a>
                    <a href="#" class="left qq"></a>
                    <a href="#" class="left weixin">
                        <div class="weixin_box"></div>
                    </a>
                    <p class="testWrap left">出借有风险，出借需谨慎</p>
                </div>
                <ul class="right top-r">
                    <li><router-link to="/register" class="red">有奖注册</router-link></li>
                    <li class="longString"></li>
                    <li><router-link to="/appLandingPage" class="smallPhone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手机APP</router-link></li>
                    <li class="longString"></li>
                    <li><a href="#">新手指南</a></li>
                    <li class="longString"></li>
                    <li><a href="#">帮助中心</a></li>
                </ul>
            </div>
        </div>
        <div class="logo-nav">
            <div class="logo-nav-1000">
                <router-link to="/main/main2">
                    <img src="../assets/img/header/logo.png">
                </router-link>
                <ul class="right">
                    <li class="nav-red"><router-link to="/main/main2">首页</router-link></li>
                    <li><router-link to="/main/toDebts">我要出借</router-link></li>
                    <li><router-link to="/main/safeInsurance">安全保障</router-link></li>
                    <li><router-link to="/main/toOperate">信息披露</router-link></li>
                    <li><router-link to="/main/aboutUs">关于我们</router-link></li>
                    <li class="nav_red">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/login">登录</router-link></li>
                </ul>
            </div>
        </div>

        <router-view></router-view>

        <div class="foot">
            <div class="foot-bj">
                <div class="foot-1000">
                    <div class="foot-01">
                        <ul class="width16">
                            <li class="foot-icon01">
                                <span>出借，是件容易的事</span>
                            </li>
                            <li>
                                <a href="#">选择产品</a>
                                <span>|</span>
                                <a href="#">轻松出借</a>
                            </li>
                        </ul>
                        <ul class="width34">
                            <li>
                                <span>安全保障，安心出借</span>
                            </li>
                            <li>
                                <a href="#">账户安全</a>
                                <span>|</span>
                                <a href="#">数据安全</a>
                                <span>|</span>
                                <a href="#">投诉入口</a>
                            </li>
                        </ul>
                        <ul class="width34">
                            <li>
                                <span>福利多多，奖励不停</span>
                            </li>
                            <li>
                                <a href="#">活动</a>
                                <span>|</span>
                                <a href="#">赚取积分</a>
                                <span>|</span>
                                <a href="#">积分领奖</a>
                            </li>
                        </ul>
                        <ul class="width16">
                            <li>
                                <span>玩转网筹金融</span>
                            </li>
                            <li>
                                <a href="#">如何出借</a>
                                <span>|</span>
                                <a href="#">新手须知</a>
                            </li>
                        </ul>
                    </div>
                    <div class="foot-02">
                        <div class="foot-02-l">
                            <div class="foot-02-l01">
                                <ul class="left">
                                    <li>网筹官方微博&nbsp;&nbsp;<a href="" class="white">+关注</a></li>
                                    <li><a href="">关于我们</a> 丨 <a href="#">帮助中心</a></li>
                                    <li><a href="">常见问题</a> 丨 <a href="#">联系我们</a></li>
                                </ul>
                                <dl class="left">
                                    <dt><img src="../assets/img/footer/foot_icon02.png"></dt>
                                    <dd>jinrongservice@jinrongweb.com</dd>
                                </dl>
                            </div>
                            <div class="foot-02-l02">
                                <a href="#" class="a1"></a>
                                <a href="#" class="a2"></a>
                                <a href="#" class="a3"></a>
                                <a href="#" class="a4"></a>
                                <a href="#" class="a5"></a>
                            </div>
                            <div class="foot-02-l03">
                                ©2017 网筹金融 All rights reserved | 乾途金融信息服务（北京）有限公司 版权所有 京ICP备14024336号 |
                                <a href="#"><span>京公网安备 11010802021970号</span></a>
                            </div>
                            <div class="foot-02-l04" style="text-align:center">北京市海淀区高梁桥斜街59号院1号楼16层1609</div>
                        </div>
                        <div class="foot-02-r">
                            <img src="../assets/img/footer/foot_icon01.jpg">
                            <p>扫描关注官网微信</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../assets/css/header.css'
    import '../assets/css/base.css'
    import '../assets/css/footer.css'
    import '../assets/css/index.css'
    import '../assets/js/jquery-1.11.3.js'

    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){
        }
    }
</script>
<style>

</style>
