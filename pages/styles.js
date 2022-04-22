import styled from "styled-components";
import { colors, fontSizes } from "../styles/variables";
import Button from "../components/Button";
import Input from "../components/Input";

export const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;

export const StyledMain = styled.main`
  flex-grow: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledForm = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  border: solid red 5px;
  /* ${({ styles }) => styles} */
`;

export const StyledInput = styled(Input)`
  border: solid green 5px;
  /* ${({ styles }) => styles} */
`;

export const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${colors.lightBlue};
  font-size: ${fontSizes.font20};
  margin: 5% 0;
`;

export const StyledAutor = styled.h2`
  font-style: italic;
`;

export const StyledGifContainer = styled.div`
  margin-top: 30px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
