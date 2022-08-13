import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1600px;
  height: 600px;
  /* margin-left: 150px; */
  display: flex;

  #header {
    width: 1500px;
    height: 500px;
    margin-left: 50px;
    margin-top: 10px;
    display: block;
    background-color: aliceblue;
  }
  #bar-c {
    width: 1000px;
    height: 500px;
    margin-top: 20px;
    margin-left: 150px;
    background-color: white;
    display: inline-block;
    transition: all 0.5s ease-out;
  }
  #top-list {
    width: 450px;
    height: 500px;
    margin-top: 20px;
    margin-left: 115px;
    background-color: white;
    display: inline-block;
  }
  #list-head {
    width: 400px;
    height: 40px;
    font-size: 15px;
    margin-left: 10px;
    margin-top: 20px;
    font-family: sans-serif;
    display: inline-block;
    opacity: 0.9;
    font-size: 20px;
    text-align: center;
    background-color: #cce5ff;
    line-height: 40px;
    border: 2px solid #cce5ff;
    &:hover {
      background-color: #8cc6ff;
    }
  }
  #nav-list{
    height: 70px;
    width: 1500px;
    font-size: 20px;
    font-family: sans-serif;
    align-items: center;
    text-align: center;
    display: flex;
    margin-left: 150px;
    background-color: white;
    /* list-style-type: none; */
    opacity: 80%;
  }
  #nav-list-style{
    height: 70px;
    width:200px;
    text-align: center;
    margin-left: 50px;
    line-height: 70px;
    overflow: hidden;
    &:hover{
      border-top: 2px solid #cce5ff;
      border-left: 2px solid #cce5ff;
      border-right: 2px solid #cce5ff;
    }
  }
  
  #book-list{
    height: 450px;
    width: 380px;
    font-size: 20px;
    font-family: sans-serif;
    align-items: center;
    /* list-style-type: none; */
    opacity: 80%;
    li {
      margin: 5px;
      &:hover {
        background: #cce5ff;
      }
    }
  }
  #title {
    height: 40px;
    width: 200px;
    font-size: 25px;
    opacity: 90%;
    margin-left: 100px;
  }
`;
