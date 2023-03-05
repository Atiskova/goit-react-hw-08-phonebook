import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 16px;
  margin-top: 15px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 80px;
  font-size: 16px;
  margin-left: 15px;
  border-radius: 5px;
  background-color: rgba(179, 105, 76, 0.5);

&:hover{
  background-color: rgba(90,40,21, 1);
  color: rgba(255, 255, 255, 1)
}
`;
