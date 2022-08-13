import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: black; */
  height: 70px;
  width: 1550px;
  display: flex;
  background-color: white;
  font-size: large;
  align-items: center;
  margin-left: 150px;
  margin-top: 0;
  #all-collect {
    margin-left: 80px;
    font-size: large;
    align-items: center;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }

  #all-visit {
    margin-left: 80px;
    font-size: large;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }
  #all-user {
    margin-left: 80px;
    font-size: large;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }
`;

export const Content = styled.div`
  width: 400px;
  margin-left: 550px;
  display: flex;
  font-size: large;
  text-align: center;
  #year {
    margin-left: 80px;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }
  #month {
    margin-left: 80px;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }
  #week {
    margin-left: 80px;
    &:hover {
      border-bottom: 1px solid #0080c0;
    }
  }
`;
