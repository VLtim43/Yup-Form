import styled from "styled-components";
import { colors } from "../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
  height: calc(1.5em + 60px + 14px + 10px);

  @media (max-width: 1400px) {
    margin-bottom: 25px;
    height: calc(1.5em + 40px + 14px + 10px);
  }
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

  opacity: 40%;

  @media (min-width: 1400px) {
    margin-bottom: 25px;
    height: calc(1.5em + 40px + 14px + 10px);
    svg {
      transform: scale(1.4);
    }
  }
`;

export const Input = styled.input`
  border: 2px solid ${colors.palePink};
  color: ${colors.lightBeige};
  border-radius: 4px;
  outline: none;
  padding: 15px 10px;
  font-size: 20px;

  @media (max-width: 1400px) {
    padding: 10px 6px;
    font-size: 16px;
  }

  &::placeholder {
    font-size: 19px;
    color: ${colors.lightBeige};

    @media (max-width: 1400px) {
      font-size: 15px;
    }
  }
`;

export const Label = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: ${colors.deepBlue};
  font-size: 19px;
  margin: 0px 0px 5px 1px;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: ${colors.darkSlateBlue};
  font-size: 15px;
  margin: 6px 4px;
  height: 18px;
  line-height: 14px;

  @media (max-width: 1400px) {
    font-size: 14px;
    margin: 4px 2px;
    height: 14px;
    line-height: 14px;
  }
`;
