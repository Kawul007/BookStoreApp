import styled from "styled-components";
export const Content = styled.div`
  display: inline-block;
  width: 100vw;
  height: 100vh;
  background-color:#1A5276;
  #header{
     margin-top: 50px;
     margin-left: 580px;
     width: 800px;
     height: 100px;
     background-color:  #1A5276;
     display: flex;
     h1{
         font-size: 40px;
         color:white;
     }
  }
  #log{
      margin-top: 50px;
      margin-left: 700px;
      width: 600px;
      height: 500px;
      background-color: white;
      overflow: hidden;
  }
  #e-mail{
      height: 60px;
      width: 500px;
      margin-top: 50px;
      margin-left: 50px;
      justify-content: center;
      background-color: #C8E3F6;
      display: flex;
      
  }
  #password{
      height: 60px;
      width: 500px;
      margin-top: 60px;
      margin-left: 50px;
      justify-content: center;
      background-color: #C8E3F6; 
      display: flex;
  }
  #icon{
      height: 60px;
      width: 60px;
      opacity: 40%;
  }
  #button2{
         justify-content: center;
         margin-top: 100px;
         margin-left: 135px;
         height: 60px;
         width: 300px;
         background-color: #1A5276;
         border: 3px solid white;
         /* border-radius: 1.0em; */
         color:white;
         font-family: sans-serif;
         font-size: 30px;
         font-weight: 100;
         &:hover{
             background-color: #78a7d6;
         }
     }
     #form{
         background-color: #C8E3F6;
         width: 440px;
         height: 60px;
         line-height: 60px;
         display: inline-block;
     }
     input{
        background-color: #C8E3F6;
         width: 440px;
         height: 53px; 
         border: none;
         font-size: 25px;
     }
`;
