import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(90,40,21, 0.5);
  width: 400px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: 500;
  width: 300px;
`;

export const Input = styled.input`
  font-size: 20px;
  height: 30px;
  width: 300px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 15px;
  font-size: 28px;
  font-weight: 700;
  border-radius: 10px;
  background-color: rgba(179, 105, 76, 0.5);

&:hover{
  background-color: rgba(90,40,21, 1);
  color: rgba(255, 255, 255, 1)
}
`;
