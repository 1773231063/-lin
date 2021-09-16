import React, { Component } from "react";
import Goods1 from "./images/goods1.png";
import Goods2 from "./images/goods2.png";
import Goods3 from "./images/goods3.png";
import "./index.less";
export default class Car extends Component {
  state = {
    cartList: [
      {
        id: 1,
        image: Goods1,
        name: "car1",
        price: 580000,
        msg: "黑色,高端大气上档次",
        count: 1,
        isCheck: true,
      },
      {
        id: 2,
        image: Goods2,
        name: "car2",
        price: 760000,
        msg: "黑色,高端大气上档次",
        count: 1,
        isCheck: false,
      },
      {
        id: 3,
        image: Goods3,
        name: "car3",
        price: 1200000,
        msg: "黑色,高端大气上档次",
        count: 2,
        isCheck: true,
      },
    ],
  };
  render() {
    let cartList = this.state.cartList;
    //选择了几件商品
    let isCheckover = cartList.reduce((prev, item, index, arr) => {
      if (item.isCheck) {
        prev += item.count;
      }
      return prev;
    }, 0);
    //判断是否全部选中
    let isCheckAll = cartList.every((item) => item.isCheck);
    //总价
    let allMoney = cartList.reduce((prev, item) => {
      if (item.isCheck) {
        prev += item.count * item.price;
      }
      return prev;
    }, 0);
    return (
      <div className="cart">
        <h4>全部商品</h4>
        <div className="cart-main">
          <div className="cart-th">
            <div className="cart-th1">全部</div>
            <div className="cart-th2">商品</div>
            <div className="cart-th3">单价（元）</div>
            <div className="cart-th4">数量</div>
            <div className="cart-th5">小计（元）</div>
            <div className="cart-th6">操作</div>
          </div>
          <div className="cart-body">
            {cartList.map((item, index) => (
              <ul className="cart-list" key={item.id}>
                <li className="cart-list-con1">
                  <input
                    type="checkbox"
                    name="chk_list"
                    checked={item.isCheck}
                    onChange={this.change(index)}
                  />
                </li>
                <li className="cart-list-con2">
                  <img src={item.image} alt=''/>
                  <div className="item-msg">{item.msg}</div>
                </li>
                <li className="cart-list-con4">
                  <span className="price">{item.price}</span>
                </li>
                <li className="cart-list-con5">
                  <a
                    href="##"
                    className="mins"
                    onClick={this.num(false, index)}
                  >
                    -
                  </a>
                  <input
                    autoComplete="off"
                    type="text"
                    value={item.count}
                    minnum="1"
                    className="itxt"
                    readOnly
                  />
                  <a
                    href="##"
                    className="plus"
                    onClick={this.num(true, index)}
                  >
                    +
                  </a>
                </li>
                <li className="cart-list-con6">
                  <span className="sum">{item.price * item.count}</span>
                </li>
                <li className="cart-list-con7">
                  <a
                    href="#none"
                    className="sindelet"
                    onClick={this.oneDelete(index)}
                  >
                    删除
                  </a>
                  <br />
                  <a href="#none">移到收藏</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="cart-tool">
          <div className="select-all">
            <input
              className="chooseAll"
              type="checkbox"
              checked={isCheckAll}
              onChange={this.changeAll(isCheckAll)}
            />
            <span>全选</span>
          </div>
          <div className="option">
            <a href="#none" onClick={this.delete}>
              删除选中的商品
            </a>
            <a href="#none">移到我的关注</a>
            <a href="#none">清除下柜商品</a>
          </div>
          <div className="money-box">
            <div className="chosed">
              已选择
              <span>{isCheckover}</span>件商品
            </div>
            <div className="sumprice">
              <em>总价（不含运费） ：</em>
              <i className="summoney">{allMoney}</i>
            </div>
            <div className="sumbtn">
              <a className="sum-btn" href="###" target="_blank">
                结算
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //单个选中
  change = (index) => {
    return () => {
      let cartList = this.state.cartList;
      cartList = [...cartList];
      cartList[index].isCheck = !cartList[index].isCheck;

      this.setState({
        cartList: cartList,
      });
    };
  };

  //数量变化
  num = (type, index) => {
    return (event) => {
      let cartList = this.state.cartList;
      cartList = [...cartList];
      type
        ? cartList[index].count++
        : cartList[index].count > 1
        ? cartList[index].count--
        : (cartList[index].count = 1);

      this.setState({
        cartList: cartList,
      });
      event.preventDefault();
    };
  };

  //全选
  changeAll = (isCheckAll) => {
    return () => {
      let cartList = this.state.cartList;
      cartList = [...cartList];
      cartList.forEach((item) => (item.isCheck = !isCheckAll));
      this.setState({
        cartList: cartList,
      });
    };
  };

  //删除选中的商品
  delete = (event) => {
    let cartList = this.state.cartList;
    cartList = [...cartList];
    cartList = cartList.filter((item) => !item.isCheck);
    this.setState({
      cartList,
    });
    event.preventDefault();
  };

  //删除单个
  oneDelete = (index) => {
    return (event) => {
      let cartList = this.state.cartList;
      cartList = [...cartList];
      cartList.splice(index, 1);
      this.setState({
        cartList,
      });
      event.preventDefault();
    };
  };
}
