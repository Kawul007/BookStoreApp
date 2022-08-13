import ReactEcharts from "echarts-for-react";
import React from "react";
import { Wrapper } from "./Cards.style";
var option1 = {
  color: ["#FC0342"],

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
      data: [6, 3, 8, 5, 9, 4, 7],
    },
  ],
};
var option2 = {
    color: ["#1ABC9C"],
  
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
        data: [4, 7, 1, 4, 9, 3, 5],
      },
    ],
  };
var option3 ={
    color: ['#8661F5'],
  
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
        show:true,
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
        data: [8, 3, 11, 6, 9, 4, 5],
      },
    ],
  };
const Cards = () => {
  return (
    <Wrapper>
      <div id="fans">
        <div id="font">粉丝总量</div>
        <div id="fans-num">
          <strong>55</strong>
        </div>
       
        <div id="line-c" >
          <ReactEcharts
            option={option1}
            style={{ height: 200, width: 350 }}
          ></ReactEcharts>
        </div>
        <div id="fan-footer">
          <span>上周新增总数：55</span>
        </div>
      </div>
      <div id="collections">
        <div id="font">总收藏量</div>
        <div id="fans-num">
          <strong>77</strong>
        </div>
        <div id="line-c" >
          <ReactEcharts
           option={option2}
            style={{ height: 200, width: 350 }}
          ></ReactEcharts>
        </div>
        <div id="fan-footer">
          <span>上周新增总数：55</span>
        </div>
      </div>
      <div id="visitors">
        <div id="font">总浏览量</div>
        <div id="fans-num">
          <strong>260</strong>
        </div>
        <div id="line-c">
          <ReactEcharts
            option={option3}
            style={{ height: 200, width: 350 }}
          ></ReactEcharts>
        </div>
        <div id="fan-footer">
          <span>上周新增总数：886</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cards;
