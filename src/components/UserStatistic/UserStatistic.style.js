import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  #timer {
    width: 90%;
    height: 100px;
    margin: 50px;
    justify-content: space-between;
    box-shadow: 5px 5px 5px grey;
    background-color: white;
    padding-left: 200px;
    font-size: 30px;
    line-height: 100px; //垂直居中
    align-items: center; //水平居中
  }
`;

export const Content = styled.div`
  height: 400px;
  width: 95%;
  margin-left: 50px;
  margin-top: 20px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  #no1 {
    width: 450px;
    height: 180px;
    font-size: 30px;
    align-items: center;
    line-height: 150px;
    background-color: white;
    margin-top: 50px;
    justify-content: space-between;
    line-height: 150px;
    margin-left: 150px;
    box-shadow: 5px 5px 5px grey;
    display: inline-block;
    display: flex;
    &:hover {
        background: #c1ffff;
        transition: transform .5s ease-out;
        transform: scale(1.1);
    }
    #icons1{
      padding: 0;
      height: 100px;
      width: 100px;
      text-align: center;
      line-height: 100px;
      margin-left: 15px;
      margin-top: 40px;
      float: left;

    }
    #text1{
      padding: 0;
      height: 100px;
      width: 300px;
      text-align: center;
      line-height: 100px;
      float: left;
      margin-top: 40px;
      margin-left: 20px;
    }
  }
  #no2 {
    width: 450px;
    height: 180px;
    font-size: 30px;
    align-items: center;
    line-height: 150px;
    background-color: white;
    margin-top: 50px;
    margin-left: 150px;
    justify-content: space-between;
    display: inline-block;
    display: flex;
    box-shadow: 5px 5px 5px grey;
    &:hover {
        background: #c1ffff;
        transition: transform .5s ease-out;
        transform: scale(1.1);
    }
    #icons2{
      padding: 0;
      height: 100px;
      width: 100px;
      text-align: center;
      line-height: 100px;
      margin-left: 15px;
      margin-top: 40px;
      float: left;

    }
    #text2{
      padding: 0;
      height: 100px;
      width: 300px;
      text-align: center;
      line-height: 100px;
      float: right;
      margin-top: 40px;
      margin-left: 20px;
    }
  }
  #no3 {
    width: 450px;
    height: 180px;
    font-size: 30px;
    align-items: center;
    line-height: 150px;
    background-color: white;
    margin-top: 50px;
    margin-left: 150px;
    display: flex;
    justify-content: space-between;
    display: inline-block;
    box-shadow: 5px 5px 5px grey;
    &:hover {
        background: #c1ffff;
        transition: transform .5s ease-out;
        transform: scale(1.1);
    }
    #icons3{
      padding: 0;
      height: 100px;
      width: 100px;
      text-align: center;
      line-height: 100px;
      margin-left: 15px;
      margin-top: 40px;
      float: left;

    }
    #text3{
      padding: 0;
      height: 100px;
      width: 300px;
      text-align: center;
      line-height: 100px;
      float: right;
      margin-top: 40px;
      margin-left: 20px;
    }
  }
`;

export const Text = styled.div`
  justify-content: space-between;
  display: flex;
  


`;
