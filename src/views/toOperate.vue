<template>
    <div>
        <div class="caiseline"><img src="../assets/img/index/logo_nav_border.png"></div>

        <div class="InformationDisclosure_content">
            <div class="MyInvestment">
                <div class="hd">
                    <ul class="tab">
                        <li class="on">平台信息</li>
                        <li >运营数据</li>
                        <li >审计报告</li>
                        <li >法人承诺书</li>
                    </ul>
                </div>
                <div class="bd">
                    <div class="Information" style="display:block"><img src="../assets/img/toOperate/index.png"></div>
                    <div class="data" style="display:none">
                        <div class="banner2">
                            <strong>运营数据</strong>
                            <p>平台安全运营 <span class="day">1421</span>天</p>
                        </div>
                        <div class="tableWrap ">
                            <span>数据概况 <em>（平台累计总数据）</em></span>
                            <ul>
                                <li><span>
								<p><em>461,700,000.00</em>元</p>
								<span>累计借款金额</span>
							</span></li>
                                <li><span>
								<p><em>2957</em>笔</p>
								<span>累计借款笔数</span>
							</span></li>
                                <li><span>
								<p><em>1012</em>人</p>
								<span>累计借款人数</span>
							</span></li>
                                <li><span>
								<p><em>5590</em>人</p>
								<span>累计出借人数</span>
							</span></li>
                                <li><span>
								<p><em>86,187,494.27</em>元</p>
								<span>总待收金额</span>
							</span></li>
                                <li><span>
								<p><em>9,557,124.28</em>元</p>
								<span>总违约金额</span>
							</span></li>
                                <li><span>
								<p><em>60</em>笔</p>
								<span>总违约笔数</span>
							</span></li>
                                <li><span>
								<p><em>9,557,124.28</em>元</p>
								<span>总代偿金额</span>
							</span></li>
                                <li><span>
								<p><em>60</em>笔</p>
								<span>总代偿笔数</span>
							</span></li>
                                <li><span>
								<p><em>0.5893</em>%</p>
								<span>最大单一借款人待还金额占比</span>
							</span></li>
                                <li><span>
								<p><em>2.7756</em>%</p>
								<span>前十大借款人待还金额占比</span>
							</span></li>
                                <li><span>
								<p><em>0.00</em>元</p>
								<span>90天以上违约总金额</span>
							</span></li>
                                <li><span>
								<p><em>0</em>笔</p>
								<span>90天以上违约总笔数</span>
							</span></li>
                            </ul>
                        </div>
                        <div class="tableWrap2 ">
                            <p class="tit">
                                <span class="left">当期数据 <em>（当期数据总和，可通过选择查看以往数据）</em></span>
                                <select id="dateinfo" name="dateinfo" onchange="getData(this.value)">
                                    <option value="2018年5月" selected="selected">2018年5月</option>
                                    <option value="2018年4月">2018年4月</option>
                                    <option value="2018年3月">2018年3月</option>
                                    <option value="2018年2月">2018年2月</option>
                                    <option value="2018年1月">2018年1月</option>
                                    <option value="2017年12月">2017年12月</option>
                                    <option value="2017年11月">2017年11月</option>
                                    <option value="2017年10月">2017年10月</option>
                                    <option value="2017年9月">2017年9月</option>
                                </select>
                            </p>
                            <ul>
                                <li>
                                    <em class="left img1"></em>
                                    <div style="text-align: left;" class="text">
	                                <span>
	                                	<span class="num"><em class="numData">19,025,000.00</em>元</span>
	                                	<span style="display: inline;">当期借款总金额</span>
	                                </span>
                                    </div>
                                </li>
                                <li class="noMargin">
                                    <em class="left img2"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">122</em>笔</span>
	                                	<span style="display: inline;">当期借款总笔数</span>
	                                </span>
                                    </div>
                                </li>
                                <li>
                                    <em class="left img3"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">122</em>人</span>
	                                	<span style="display: inline;">当期借款总人数</span>
	                                </span>
                                    </div>
                                </li>
                                <li class="noMargin">
                                    <em class="left img4"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">554</em>人</span>
	                                	<span style="display: inline;">当期出借总人数</span>
	                                </span>
                                    </div>
                                </li>
                                <li>
                                    <em class="left img5"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">19,025,000.00</em>元</span>
	                                	<span style="display: inline;">当期出借总金额</span>
	                                </span>
                                    </div>
                                </li>
                                <li class="noMargin">
                                    <em class="left img6"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">16,929,598.80</em>元</span>
	                                	<span style="display: inline;">当期回款总金额</span>
	                                </span>
                                    </div>
                                </li>
                                <li>
                                    <em class="left img7"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">3,446,975.50</em>元</span>
	                                	<span style="display: inline;">当期违约总金额</span>
	                                </span>
                                    </div>
                                </li>
                                <li class="noMargin">
                                    <em class="left img8"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">18</em>笔</span>
	                                	<span style="display: inline;">当期违约总笔数</span>
	                                </span>
                                    </div>
                                </li>
                                <li>
                                    <em class="left img9"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">3,446,975.50</em>元</span>
	                                	<span style="display: inline;">当期代偿总金额</span>
	                                </span>
                                    </div>
                                </li>
                                <li class="noMargin">
                                    <em class="left img10"></em>
                                    <div style="text-align: left;" class="text">
                                    <span>
	                                	<span class="num"><em class="numData">18</em>笔</span>
	                                	<span style="display: inline;">当期代偿总笔数</span>
	                                </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="Information1" style="display:none"><img src="../assets/img/toOperate/index2.png"></div>
                    <div class="Information2" style="display:none"><img src="../assets/img/toOperate/index3.png"></div>
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
    import '../assets/css/toOperate.css'
    import '../assets/js/jquery-1.11.3.js'

    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){
            require('../assets/js/toOperate.js');
        }
    }
</script>
<style>

</style>
