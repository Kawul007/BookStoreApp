import React from "react";
import { Wrapper, Content, Text } from "./UserStatistic.style";
import ReactEcharts from "echarts-for-react";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from 'react-icons/ai';
const UserStatistic = () => {
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
      "到目前：" +
      year +
      "年" +
      month +
      "月" +
      day +
      "日" +
      h +
      ":" +
      m +
      ":" +
      s +
      arr[week]
    );
  };
  // 
 const option = {
    color:['#3498DB', '#C70039','#16A085'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '注册量',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 324, 390, 330, 320]
      },
      {
        name: '浏览量',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [200, 182, 133, 340, 290, 230, 210]
      },
      {
        name: '收藏量',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
  return (
    <>
      <Wrapper>
        <div id="timer">
          {getTime()} 总注册量：<strong>1526</strong> 总浏览量：
          <strong>22315</strong> 总收藏量：<strong>2022</strong>
        </div>
      </Wrapper>
      <Content>
        <div id="no1">
          <div id="icons1">
            <FcIcons.FcBusinessman style={{ height: 80, width: 80 }} />
          </div>
          <div id="text1">
            新增注册量：<b>33443</b>
          </div>
        </div>
        <div id="no2">
          <div id="icons2">
            <FcIcons.FcLike style={{ height: 80, width: 80 }} />
          </div>
          <div id="text2">
            新增收藏量：<b>33443</b>
          </div>
        </div>
        <div id="no3">
          <div id="icons3">
            <FcIcons.FcReading style={{ height: 80, width: 80 }} />
          </div>
          <div id="text3">
            新增浏览量：<b>33443</b>
          </div>
        </div>
      </Content>
      <Text>
        <ReactEcharts
          option={option}
          style={{ height: 600, width: 1900 }}
        ></ReactEcharts>
      </Text>
    </>
  );
};

export default UserStatistic;
