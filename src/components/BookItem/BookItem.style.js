import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  height: 400px;
  margin-left: 5%;
  margin-top: 100px;
  align-items: center;
  display: flex;
  display: inline-block;
  box-shadow: 5px 5px 5px grey;
  background-color: white;
  #bookitem-img {
    height: 310px;
    width: 250px;
    margin-left: 80px;
  }
  #left {
    /* margin: 0;
      height: 250px;
      width: 250px;
      margin-left: 90px; */
    /* display: inline-block; */
  }
  #right {
    display: inline-block;
    /* background-color: azure; */
    height: 330px;
    width: 1300px;
    margin-top: 0;
    margin-left: 20px;
  }
  #text {
    margin-inline-start: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
    list-style-type: none;
    font-size: 22px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  #intro {
    height: 140px;
    width: 1200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;

export const Content = styled.div``;

export const Text = styled.div``;
