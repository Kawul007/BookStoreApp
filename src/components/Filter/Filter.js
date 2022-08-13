import React from "react";
import { Wrapper } from "./Filter.style";
import * as BiIcon from "react-icons/bi";
const Filter = () => {
  return (
    <Wrapper>
      <div id="all-user">
        用户数量分析
        <BiIcon.BiChevronsDown />
      </div>
      <div id="all-collect">
        收藏量分析
        <BiIcon.BiChevronsDown />
      </div>
      <div id="all-visit">
        浏览量分析
        <BiIcon.BiChevronsDown />
      </div>
    </Wrapper>
  );
};

export default Filter;
