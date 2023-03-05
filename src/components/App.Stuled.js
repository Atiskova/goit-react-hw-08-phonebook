import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: min(100% - 30px, 1000px);
  margin-inline: auto;
  display: flex;
  gap: 50px;
`;

export const Header = styled.header`
  padding: 40px 200px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  color: rgba(179, 105, 76, 0.8);
  height: 35px;
  width: 130px;

  &:hover {
    font-size: 34px;
    color: rgba(179, 105, 76, 1);
  }
`;

export const Email = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgba(179, 105, 76, 0.5);

  &:hover {
    background-color: rgba(90, 40, 21, 1);
    color: rgba(255, 255, 255, 1);
  }
`;
