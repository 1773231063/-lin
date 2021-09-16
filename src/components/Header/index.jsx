import React, { Component } from 'react'
import Logo from './images/logo.png'
import './index.less'
import {NavLink} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <header className="header">
            <div className="top">
                <div className="container">
                    <div className="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <a href="###">登录</a>
                            <a href="###" className="register">免费注册</a>
                        </p>
                    </div>
                    <div className="typeList">
                        <a href="###">我的订单</a>
                        {/* <a href="###">我的购物车</a> */}
                        <NavLink to='/car'>我的购物车</NavLink>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h1 className="logoArea">
                    <a className="logo" title="尚品汇" href="###" target="_blank">
                        {/* <img src={Logo} alt="" /> */}
                    </a>
                    <NavLink to='/home'><img src={Logo} alt=""/></NavLink>
                </h1>
                <div className="searchArea">
                    <form action="###" className="searchForm">
                        <input type="text" id="autocomplete" className="input-error input-xxlarge" />
                        <button className="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                    </form>
                </div>
            </div>
        </header>

        )
    }
}
