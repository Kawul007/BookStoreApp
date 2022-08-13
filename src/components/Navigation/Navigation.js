import React from "react";
import { Wrapper, Content } from "./Navigation.styles";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Wrapper>
    <div id="all-user">
      <Link style={{ color: "black", textDecoration: "none" }} to="/home/statisticuser">
        {" "}
        新增用户
      </Link>
    </div>
    <div id="all-collect">
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to="/accountSetting/"
      >
        {" "}
        新增收藏
      </Link>
    </div>
    <div id="all-visit">
      <Link style={{ color: "black", textDecoration: "none" }} to="/login/">
        {" "}
        新增浏览
      </Link>
    </div>
    <Content>
      <div id="year"><Link style={{ color: "black", textDecoration: "none" }} to="/home/statisticuser/year/">
        {" "}
        本年
      </Link></div>
      <div id="month"><Link style={{ color: "black", textDecoration: "none" }} to="/home/statisticuser/month/">
        {" "}
        本月
      </Link></div>
      <div id="week"><Link style={{ color: "black", textDecoration: "none" }} to="/home/statisticuser/week/">
        {" "}
        本周
      </Link></div>
    </Content>
  </Wrapper>
);

export default Navigation;
