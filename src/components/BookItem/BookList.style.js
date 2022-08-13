import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1400px;
  height: 800px;
  margin-left: 200px;
  margin-top: 20px;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  #up {
    height: 50px;
    width: 150px;
    font-size: 20px;
    margin-left: 100px;
    a:link {
      text-decoration: none;
    }
  }
  #wrap {
    width: 1200px;
    height: 700px;
    margin-top: 50px;
    margin-left: 100px;
    display: flex;
  }
  #img {
    margin-top: 20px;
    margin-left: 20px;
    width: 200px;
    height: 200px;
    display: inline-block;
  }
  #content {
    margin-top: 20px;
    margin-left: 20px;
    width: 900px;
    height: 400px;
    display: inline-block;
  }
  #line {
    height: 50px;
    width: 750px;
    margin-left: 25px;
    margin-top: 25px;
    display: flex;
  }
  #line1 {
    height: 50px;
    width: 750px;
    margin-left: 25px;
    margin-top: 225px;
    display: flex;
  }
  /* #type {
    width: 700px;
    height: 50px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  } */
  #space-holder2 {
    width: 350px;
    height: 50px;
    display: inline-block;
    margin-top: 10px;
    /* margin-left: 25px; */
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    font-family: sans-serif;
  }
  #title {
    width: 100px;
    height: 50px;
    /* background-color: whitesmoke; */
    text-align: center;
    justify-content: center;
    /* line-height: 50px; */
    font-size: 20px;
  }
  #form {
    height: 50px;
    width: 600px;
    margin-left: 25px;
    display: inline-block;
    font-size: 20px;
    box-shadow: inset 0 -3em 3em 3em #e0eef7;
    border-radius: 0.2em;
    font-family: sans-serif;
  }
  input {
    border: none;
  }
  #info-area {
    width: 600px;
    height: 200px;
    margin-left: 25px;
    margin-top: 20px;
    font-size: 20px;
    box-shadow: inset 1em 1em 3em 3em #e0eef7;
    border-radius: 0.2em;
    font-family: sans-serif;
  }
  textarea {
    border: none;
  }
  #changeable {
    margin-top: 225px;
    margin-left: 25px;
  }
`;
