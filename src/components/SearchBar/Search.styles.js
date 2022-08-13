import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 5%;
  margin-top: 25px;
  vertical-align: middle;
  .searchInputs {
    display: flex;
  }

  .search input {
    background-color: white;
    border: 1px solid black;
    font-size: 22px;
    height: 50px;
    width: 700px;
  }

  .searchIcon {
    height: 51.5px;
    width: 70px;
    border: 1px solid black;
    background-color:white;
    display: grid;
    place-items: center;
  }

  input:focus {
    outline: none;
  }
  .searchIcon svg {
    font-size: 35px;
  }

  .dataResult {
    position: absolute;
    z-index: 999;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
  }

  .dataResult::-webkit-scrollbar {
    display: none;
  }

  .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
  }

  .dataItem p {
    margin-left: 10px;
    margin: 0;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }

  #clearBtn {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 700px;
  font-size:22px;
  margin-top: 5px;
  color: black;
  align-content: center;
`;
