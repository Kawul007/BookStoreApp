import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #0080c0;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  #headline{
    text-align: center;
    /* margin-top: 25px; */
    align-items: center;
    text-align:center;
    margin-left: 60px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  #search{
    height: 100px;
    width: 500px;
    text-align: center;
    align-items: center;
    line-height: 100px;
    margin-left: 200px;
  }

`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #0080c0;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;