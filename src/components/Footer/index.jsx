import React, { Component } from 'react'
import WX from "./images/wx_cz.jpg"

import './index.less'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="footer-container">
                <div className="footerList">
                    <div className="footerItem">
                        <h4>购物指南</h4>
                        <ul className="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行/团购</li>
                            <li>常见问题</li>
                            <li>购物指南</li>
                        </ul>

                    </div>
                    <div className="footerItem">
                        <h4>配送方式</h4>
                        <ul className="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>支付方式</h4>
                        <ul className="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                            <li>公司转账</li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>售后服务</h4>
                        <ul className="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                            <li>取消订单</li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>特色服务</h4>
                        <ul className="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>尚品汇E卡</li>
                            <li>尚品汇通信</li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>帮助中心</h4>
                        <img alt='' src={WX} />
                    </div>
                </div>
                <div className="copyright">
                    <ul className="helpLink">
                        <li>关于我们
                            <span className="space"></span>
                        </li>
                        <li>联系我们
                            <span className="space"></span>
                        </li>
                        <li>关于我们
                            <span className="space"></span>
                        </li>
                        <li>商家入驻
                            <span className="space"></span>
                        </li>
                        <li>营销中心
                            <span className="space"></span>
                        </li>
                        <li>友情链接
                            <span className="space"></span>
                        </li>
                        <li>关于我们
                            <span className="space"></span>
                        </li>
                        <li>营销中心
                            <span className="space"></span>
                        </li>
                        <li>友情链接
                            <span className="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                    <p>京ICP备19006430号</p>
                </div>
            </div>
        </div>
        )
    }

    
}
