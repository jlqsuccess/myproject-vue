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
                    <li><router-link href="/main/aboutUs">关于我们</router-link></li>
                    <li class="nav_red">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/login">登录</router-link></li>
                </ul>
            </div>
        </div>
        <div class="caiseline"><img src="../assets/img/index/logo_nav_border.png"></div>
        <div class="maiWrap">
            <div class="main1000">
                <div class="loginWrap right">
                    <ul class="top">
                        <li class="left">登录网筹金融</li>
                        <li class="right"><a href="register.html">注册有奖</a></li>
                    </ul>
                    <form id="form1" action="">
                        <ul class="loginBox">
                            <li class="accountNumber">
                                <input v-model="uPhone" type="text" placeholder="请输入手机号码" name="uphone" id="uphone">
                                <span>用户名不能为空！</span>
                            </li>
                            <li class="password">
                                <input v-model="uPwd" type="password" placeholder="请输入登录密码" name="upwd" id="upwd">
                                <span>用户名称或者密码输入错误</span>
                            </li>
                            <a @click.prevent="doLogin" href="date/login.php" class="loginButton">登录</a>
                            <a href="javascript:;" class="forgetNumber">忘记密码？</a>
                        </ul>
                    </form>
                    <span class="textWrap">一线城市优质房产、车辆抵押项目，多重风控把关</span>
                </div>
            </div>
        </div>
        <div class="footerWrap">
            <div class="footer">
                <ul>
                    <li><a href="javascript:;">关于我们</a>|</li>
                    <li><a href="javascript:;">联系我们</a>|</li>
                    <li><a href="javascript:;">帮助中心</a>|</li>
                    <li><a href="javascript:;">最新活动</a>|</li>
                    <li><a href="javascript:;">意见反馈</a>|</li>
                    <li><a href="javascript:;">人才招聘</a></li>
                </ul>
                <p>©2017 网筹金融 All rights reserved | 乾途金融信息服务（北京）有限公司 版权所有 京ICP备14024336号 | <a href="javascript:;">京公网安备 11010802021970号</a></p>
            </div>
        </div>
    </div>
</template>
<script>
    import '../assets/css/header.css'
    import '../assets/css/base.css'
    import '../assets/css/login.css'
    import '../assets/js/jquery-1.11.3.js'
    //import '../assets/js/login.js'
    //import '../assets/js/axios.min.js'
    import axios from 'axios'

    export default {
        data(){
            return {
                uPhone:'18999999999',
                uPwd:'123456'
            }
        },
        methods: {
            doLogin(){
                var url=`http://127.0.0.1/myproject-vue/src/assets/date/login.php?uphone=${this.uPhone}&upwd=${this.uPwd}`;
                axios.get(url).then((res)=>{
                    alert('登录成功');
                    this.$router.push("/main");
                }).catch((err)=>{
                    alert('用户名或密码有误');
                });
            }
        },
        mounted(){
            require("../assets/js/login.js");
        }
    }
</script>
<style>

</style>
