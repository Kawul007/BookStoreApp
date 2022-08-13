import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: 50px;
  margin-left: 15%;
  margin-top: 50px;
  /* background-color: aqua; */
  #page-num {
    list-style: none;
    display: inline-block;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 40%;
  }
  #page-item {
    width: 40px;
    height: 40px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid black;
    color: #80ffff;
    cursor: pointer;
    font-size: 28px;
    text-align: center;
    &:hover {
    background: #6fb7ff;
    cursor: pointer;
  }
  #noline{
    text-decoration: none;
  }
  }
`;
