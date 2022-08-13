import React, { Component } from "react";
import { Wrapper } from "./Clock.style";

const getTime = () => {
    var date1 = new Date();
    var h = date1.getHours();
    h = h > 10 ? h : "0" + h;
    var m = date1.getMinutes();
    m = m > 10 ? m : "0" + m;
    var s = date1.getSeconds();
    s = s > 10 ? s : "0" + s;
    let year = date1.getFullYear();
    let month = date1.getMonth() + 1;
    let day = date1.getDate();
    let week = date1.getDay();
    let arr = [
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    return (
      year +
      "年" +
      month +
      "月" +
      day +
      "日 " +
      arr[week]
    //   h +
    //   ":" +
    //   m +
    //   ":" +
    //   s 
    );
    }
export default class Clock extends Component {
  state = {
    time: new Date().toTimeString().slice(0, 8), // 第一步：初始化时间状态
  };

  componentDidMount() {
    // 第三步：组件的生命周期，挂载
    this.tick();
  }

  componentWillUnmount() {
    // 第四步：组件将要被卸载时注意定时器必须清除
    clearTimeout(this.timer);
  }

  tick = () => {
    // 第二步：设置时间间隔，更新时间
    this.timer = setInterval(() => {
      // 但是这样设计后，页面上的时间并不会实时修改，只会在每次刷新后修改
      this.setState({
        // 所以我们要借助生命周期函数：
        time: new Date().toTimeString().slice(0, 8),
      });
    }, 1000);
  };
  
  render() {
    return (
      <Wrapper>
        <div id="timer">
          <div id="time-title"><strong>{getTime()}</strong></div>
          <div id="time-contact"><strong>{this.state.time}</strong></div>
        </div>
      </Wrapper>
    );
  }
}
