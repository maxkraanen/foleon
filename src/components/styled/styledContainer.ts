import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  background: linear-gradient(
    115.97439396243135deg,
    rgba(233, 255, 247, 1) 5.464532328939109%,
    rgba(213, 245, 253, 1) 98.49654739485247%
  );
  min-height: 100vh;
  height: 100%;
`;

export const TitleContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
`;

export const SearchAndSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Select = styled.select`
  height: 65px;
  width: 25%;
  font-size: 24px;
  padding-left: 17px;
  border: 2px solid;
  background: transparent;
`;

export const Search = styled.input`
  height: 59px;
  width: 70%;
  font-size: 24px;
  padding-left: 17px;
  border: 2px solid;
  background: transparent;
`;
