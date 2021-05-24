import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 120px;
`;

export const Button = styled.button`
  background: transparent;
  padding: 10px 20px;
  border: none;
  border-top: 2px solid;
  border-bottom: 2px solid;
  font-size: 20px;
  margin: 0 20px;
  cursor: pointer;
`;

export const Count = styled.p`
  margin: 0 20px;
  font-size: 20px;
`;
