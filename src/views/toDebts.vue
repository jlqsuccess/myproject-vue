<template>
    <div>
        <!--主体-->
        <div id="projectInformation" class="slideTxtBox">
            <!--筛选条件-->
            <div id="content-box-nr-buy">
                <div class="NavigationWrap">
                    <div class="screen">
                        <div class="screen-nr">
                            <span>产品类型</span>
                            <a class="dq" href="javascript:;" id="type_all">全部</a>
                            <a href="javascript:;" id="day_loan_text" class="">抵押标</a>
                            <a href="javascript:;" id="new_user_loan" class="">新手标</a>
                            <a href="javascript:;" id="guar_loan_text" class="">担保标</a>
                        </div>
                        <div class="screen-nr">
                            <span>项目期限</span>
                            <a class="dq" href="javascript:;" id="deadline_all">全部</a>
                            <a href="javascript:;" id="deadline_one">60天以内</a>
                            <a href="javascript:;" id="deadline_two">60-180天</a>
                            <a href="javascript:;" id="deadline_three">180-360天</a>
                            <a href="javascript:;" id="deadline_four">360天以上</a>
                        </div>
                        <div class="screen-nr borderBtm">
                            <span>项目状态</span>
                            <a class="dq" href="javascript:;" id="status_all">全部</a>
                            <a href="javascript:;" id="status_toubiao" class="">筹款中</a>
                            <a href="javascript:;" id="status_manbiao" class="">已满标</a>
                            <a href="javascript:;" id="status_huankuan" class="">还款中</a>
                            <a href="javascript:;" id="status_wancheng" class="">已完成</a>
                        </div>
                        <div class="screen-nr hide">
                            <span>项目收益</span>
                            <a class="dq" href="javascript:;" id="rate_all">全部</a>
                            <a href="javascript:;" id="rate_one">9%以下</a>
                            <a href="javascript:;" id="rate_two">9%-10%</a>
                            <a href="javascript:;" id="rate_three">10%-12%</a>
                            <a href="javascript:;" id="rate_four">12%以上</a>
                        </div>
                        <a href="javascript:;" class="arrow"></a>
                    </div>
                </div>
                <!--提示-->
                <div class="news">
                    <span>一线城市优质房产、车辆抵押项目，7天到180天期限，借款利率7-15%，百元起投</span>
                    <span class="right">出借有风险，出借需谨慎</span>
                    <a href="javascript:;" class="closeNews"></a>
                </div>
                <!--产品-->
                <div class="projectListWrap" id="content-box-nr">
                    <div v-for="l in pager.data" :key="l.lid" class="projectList" id="aa">
                        <h3>
                            <span><a href="javascript:;">WCJR-18HCC205-01</a></span>
                        </h3>
                        <div class="content">
                            <ul>
                                <li>
                                    <span>借款利率：</span>
                                    <strong class="red">
                                        <span class="font">{{l.jkll}}%</span>
                                    </strong>
                                </li>
                                <li>还款方式：{{l.hkfs}}</li>
                            </ul>
                            <ul>
                                <li>
                                    项目期限：
                                    <strong>{{l.hkqx}}</strong>
                                    天
                                </li>
                                <li>担保机构: <a href="javascript:;" target="_blank">{{l.dbjg}}</a></li>
                            </ul>
                            <ul>
                                <li>
                                    项目规模:
                                    <strong>{{l.xmgm}}</strong>
                                    万
                                </li>
                                <li>
                                    <span>筹款进度：</span>
                                    <div class="ProgressBar">
                                        <span style="width: 100%">{{l.ckjd}}%</span>
                                    </div>
                                    <span class="font12">{{l.ckjd}}%</span>
                                </li>
                            </ul>
                            <div class="button">
                                <a href="javascript:;" class="investmentBtn">还款中</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--页码条-->
            <div class="PageNumber">
                <ul id="pagination">
                    <li><a @click.prevent="loadProducts(1)" href="#">首页</a></li>
                    <li v-if="pager.pno-1>0"><a @click.prevent="loadProducts(pager.pno-1)" href="#">上一页</a></li>
                    <li v-if="pager.pno-2>0"><a @click.prevent="loadProducts(pager.pno-2)" href="#">{{parseInt(pager.pno)-2}}</a></li>
                    <li v-if="pager.pno-1>0"><a @click.prevent="loadProducts(pager.pno-1)" href="#">{{parseInt(pager.pno)-1}}</a></li>
                    <li  id="current1"><a class="current" href="#">{{pager.pno}}</a></li>
                    <li v-if="parseInt(pager.pno)+1<=pager.pageCount"><a @click.prevent="loadProducts(parseInt(pager.pno)+1)" href="#">{{parseInt(pager.pno)+1}}</a></li>
                    <li v-if="parseInt(pager.pno)+2<=pager.pageCount"><a @click.prevent="loadProducts(parseInt(pager.pno)+2)" href="#">{{parseInt(pager.pno)+2}}</a></li>
                    <li v-if="parseInt(pager.pno)+1<=pager.pageCount"><a @click.prevent="loadProducts(parseInt(pager.pno)+1)" href="#">下一页</a></li>
                    <li><a @click.prevent="loadProducts(pager.pageCount)" href="#">尾页</a></li>
                </ul>
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
    import '../assets/css/toDebts.css'
    import '../assets/js/jquery-1.11.3.js'
    import axios from 'axios'

    export default {
        data(){
            return {
                pageSize:8,
                pager:{}
            }
        },
        methods: {
            loadProducts(pno){
                var url=`http://127.0.0.1/myproject-vue/src/assets/date/productlist.php?pno=${pno}&pageSize=${this.pageSize}`;
                axios.get(url).then((res)=>{
                    this.pager=res.data;
                    console.log(res.data);
                }).catch((err)=>{
                    alert('网络故障请检查');
                });
            }
        },
        mounted(){
            require('../assets/js/toDebts.js');
            this.loadProducts(1);
        }
    }
</script>
<style>

</style>
