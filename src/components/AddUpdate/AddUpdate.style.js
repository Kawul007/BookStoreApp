import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1500px;
  height: 1800px;
  background-color: white;
  margin-left: 250px;
  margin-top: 50px;
  overflow: hidden;
  #content {
    width: 1400px;
    height: 80px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    background-color: white;
    display: flex;
  }
  #title {
    height: 60px;
    width: 200px;
    /* background-color: whitesmoke; */
    line-height: 60px;
    margin-top: 10px;
    margin-left: 50px;
    text-align: center;
    justify-content: center;
    display: inline-block;
    font-size: 25px;
    border-radius: 0.2em;
    font-family: sans-serif;
  }
  #form {
    height: 60px;
    width: 900px;
    margin-left: 50px;
    margin-top: 10px;
    display: inline-block;
    font-size: 25px;
    box-shadow: inset 0 -3em 3em 3em #E0EEF7 ;
    border-radius: 0.2em;
    font-family: sans-serif;
  }
  #writer {
    width: 1400px;
    height: 80px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #price {
    width: 1400px;
    height: 80px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #type {
    width: 1400px;
    height: 60px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #typelist{
    margin-top: 50px;
    background-color:#8BB9D8;
  }
  #info{
    width: 1400px;
    height: 300px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #info-area{
    width: 900px;
    height: 250px;
    margin-left: 50px;
    margin-top: 20px;
    font-size: 20px;
    box-shadow: inset 1em 1em 3em 3em #E0EEF7 ;
    border-radius: 0.2em;
    font-family: sans-serif;
    
  }
  #storage {
    width: 1400px;
    height: 80px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #post{
    width: 1400px;
    height: 300px;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
  }
  #poster{
    width: 300px;
    height: 300px;
    margin-top: 20px;
    margin-left: 50px;
    display: flex;
    text-align: center;
    line-height: 300px;
    justify-content: center;
    background-color: #E0EEF7;
    font-size: larger;
  }
  #space-holder2{
    width: 350px;
    height: 80px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 50px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    font-family: sans-serif;
  }
  input{
    border: none;
    
  }
  #number{
    font-size: 20px;
    height: 60px;
    width: 900px;
    margin-top: 20px;
    margin-left: 50px;
    text-align: center;
    background-color: #E0EEF7;
  }
  #btn{
    width: 500px;
    height: 50px;
    margin-top: 50px;
    margin-left: 500px;
    text-align: center;
    line-height: 50px;
    justify-content: center;
  }
  Button{
    /* width: 400px;
    height: 80px; */
    border: none;
    font-size: 25px;
    background-color: #E0EEF7;
    font-family: sans-serif;
    &:hover{
      background-color: #8BB9D8;
    }
  }
  textarea{
    border: none;
  }
`;
