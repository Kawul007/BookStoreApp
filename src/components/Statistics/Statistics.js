import { dark } from "@material-ui/core/styles/createPalette";
import { Block, Public } from "@material-ui/icons";
import { clear } from "@testing-library/user-event/dist/clear";
import { Button } from "antd";
import * as SiIcon from "react-icons/si";
import ReactEcharts from "echarts-for-react";
import React from "react";
import { Wrapper } from "./Statistics.styled";
import StatisticUser from "./StatisticUser";
import StatisticCollect from "./StatisticCollect";
import StatisticVisit from "./StatisticVisit";
import Clock from "../Dropdown/Clock";

// var option = {
//   color: ["#5DADE2", "#1A5276", "#1ABC9C"],
//   theme: dark,
//   legend: {},
//   tooltip: {},
//   toolbox: {
//     feature: {
//       saveAsImage: {},
//       magicType:{show:true,type:['line','bar']}
//     },
//   },
//   dataset: {
//     source: [
//       ["Matcha Latte", 43.3, 85.8, 93.7],
//       ["Milk Tea", 83.1, 73.4, 55.1],
//       ["Cheese Cocoa", 86.4, 65.2, 82.5],
//       ["Walnut Brownie", 72.4, 53.9, 39.1],
//     ],
//   },
//   xAxis: { type: "category" },
//   yAxis: {},
//   // Declare several bar series, each will be mapped
//   // to a column of dataset.source by default.
//   series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
// };
class Statistics extends React.Component {
  constructor() {
    super();
    this.state = { render: "" };
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "新增用户量":
        return <StatisticUser />;
      case "新增浏览量":
        return <StatisticVisit />;
      case "新增收藏量":
        return <StatisticCollect />;
      default:
        return <StatisticUser />;
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          <div id="nav-list">
            <div id="nav-list-style" onClick={this.handleClick.bind(this, "新增用户量")}>
              新增用户量
            </div>
            <div id="nav-list-style" onClick={this.handleClick.bind(this, "新增浏览量")}>
              新增浏览量
            </div>
            <div id="nav-list-style" onClick={this.handleClick.bind(this, "新增收藏量")}>
              新增收藏量
            </div>
            <div><Clock/></div>
          </div>
          {this._renderSubComp()}
          
        </div>
        
      </Wrapper>
    );
  }
}

export default Statistics;
