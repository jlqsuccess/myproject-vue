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
        <!--主体-->
        <div class="maWrap">
            <div class="main1000">
                <div class="registerWrap">
                    <ul class="title">
                        <li class="left">用户注册</li>
                        <li class="right">已有网筹金融账号？请<router-link to="/login">登录</router-link></li>
                    </ul>
                    <form action="" id="regForm">
                        <ul class="register">
                            <li class="li1">
                                <label></label>
                                <input v-model="uPhone" type="text" placeholder="请输入手机号码" name="uphone" id="uphone">
                                <span>请输入手机号码</span>
                            </li>
                            <li class="li2">
                                <label></label>
                                <input v-model="uPwd" type="password" placeholder="请输入登录密码" name="upwd" id="upwd">
                                <p>建议密码由6-16位字母和数字组合。</p>
                                <span>请输入密码</span>
                            </li>
                            <!--/*<li class="li3">-->
                                <!--<input type="text" placeholder="请输入验证码" name="yzm" id="yzm"><div><img src="../assets/date/00_code.php"></div>-->
                                <!--<span>请输入验证码</span>-->
                            <!--</li>*/-->
                            <li class="li4">
                                <span></span>
                                <div>
                                    <label></label>
                                    <input type="text" placeholder="手机号码">
                                </div>
                            </li>
                            <li class="li5">
                                <input type="checkbox">
                                <span>我已阅读并同意<span>《网筹金融服务协议》</span>已充分了解并知晓产品风险，愿意承担相关风险。</span>
                            </li>
                            <li class="li6" style="margin-top:20px">
                                <a @click.prevent="doRegister"  id="li6register">同意用户协议并注册</a>
                            </li>
                        </ul>
                    </form>
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
    import '../assets/css/register.css'
    import '../assets/js/jquery-1.11.3.js'
    import axios from 'axios'

    export default {
        data(){
            return {
                uPhone:'',
                uPwd:''
            }
        },
        methods: {
            doRegister(){
                var url=`http://127.0.0.1/myproject-vue/src/assets/date/register.php?uphone=${this.uPhone}&upwd=${this.uPwd}`;
                axios.get(url).then((res)=>{
                    alert('注册成功');
                    this.$router.push("/login");
                }).catch((err)=>{
                    alert('用户名或密码有误');
                });
            }
        },
        mounted(){
            require("../assets/js/register.js");
        }
    }
</script>
<style>

</style>
