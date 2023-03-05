import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 90px;
  font-weight: bold;
  margin: auto;
  padding: 5px 5px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;

  &:hover {
    background: #267bef;
    color: #ffffff;
    border: none;
  }
`;
