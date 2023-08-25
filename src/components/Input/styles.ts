import styled from "styled-components";
import { colors } from "../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
  height: calc(1.5em + 40px + 14px + 10px);
`;

export const InputWrapper = styled.div`
  width: 85%;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 2px solid ${colors.palePink};
  color: ${colors.lightBeige};
  border-radius: 4px;
  outline: none;
  padding: 10px 6px;

  font-size: 16px;

  &::placeholder {
    font-size: 15px;
    color: ${colors.lightBeige};
  }
`;

export const Label = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: ${colors.deepBlue};
  font-size: 16px;
  margin: 0px 0px 5px 1px;
`;

export const ErrorMessage = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-transform: capitalize;
  color: ${colors.darkSlateBlue};
  font-size: 14px;
  margin: 4px 2px;
  height: 14px; /* Reserve space for one line of text */
  line-height: 14px;
`;
