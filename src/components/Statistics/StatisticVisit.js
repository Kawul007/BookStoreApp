import React from "react";
import ReactEcharts from "echarts-for-react";
import { Wrapper } from "./Statistics.styled";
import * as SiIcon from "react-icons/si";
const btnSwitch = function showAndHidden1() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  if (div1.style.display == "block") div1.style.display = "none";
  else div1.style.display = "block";
  if (div2.style.display == "block") div2.style.display = "none";
  else div2.style.display = "block";
};
// const option = {
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
//     ],
//   },
//   xAxis: { type: "category" },
//   yAxis: {},
//   // Declare several bar series, each will be mapped
//   // to a column of dataset.source by default.
//   series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
// };
var option = {
  color: ["#8661F5"],

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
      magicType:{show:true,type:['line','bar']}
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      show: false,
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      show: false,
      type: "value",
    },
  ],
  series: [
    {
      name: "上周新增",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
      },
      data: [400, 270, 101, 204, 190, 390, 250],
    },
  ],
};
const StatisticVisit = () => {
  return (
    <>
      <Wrapper>
        <div id="bar-c">
          <ReactEcharts
            option={option}
            style={{ height: 500, width: 1000 }}
          ></ReactEcharts>
        </div>
        <div  id='top-list'>
          <div id="list-head" onClick={btnSwitch} type="button" value="TOP10">
            <SiIcon.SiHotjar
              style={{ color: "red", marginRight: 10, width: 20, height: 20 }}
            />
            热门关注
          </div>

          <div id="div1" style={{ display: "block" }}>
            <ol id="book-list">
              <div id="title">收藏量TOP10</div>
              <li>《你当像鸟飞往你的山》</li>
              <li>《计算机网络知识》</li>
              <li>《怎么样很快完成毕设？》</li>
              <li>《JavaScript实践》</li>
              <li>《放学后》</li>
              <li>《CSS基本教程》</li>
              <li>《HTML到底是什么？》</li>
              <li>《你了解什么是前端开发吗？》</li>
              <li>《Just Do It》</li>
              <li>《计算机基础知识》</li>
            </ol>
          </div>
          <div id="div2" style={{ display: "none" }}>
            <ol id="book-list">
              <div id="title">浏览量TOP10</div>
              <li>《教育的力量》</li>
              <li>《性格测试》</li>
              <li>《三体》</li>
              <li>《从0到1的JavaScript》</li>
              <li>《Python学习计划》</li>
              <li>《CSS&HTML基本教程》</li>
              <li>《The Moon Fall》</li>
              <li>《怎么样学好计算机？》</li>
              <li>《我的大学》</li>
              <li>《你不知道的计算机》</li>
            </ol>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StatisticVisit;
