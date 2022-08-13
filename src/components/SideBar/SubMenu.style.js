import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  /* height: 60px; */
  text-decoration: none;
  font-size: 22px;

  &:hover {
    background: #6fb7ff;
    border-right: 4px solid #000000;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background:#0080c0;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 22px;

  &:hover {
    background: #6fb7ff;
    cursor: pointer;
  }
`;