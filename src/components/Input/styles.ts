import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

export const Label = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  margin-top: 4px;
  color: red;
  font-size: 14px;
`;
