import styled from "styled-components";
import { theme, colors, fontSizes } from "../../styles/variables";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  ${({ styles }) => styles}
`;

export const StyledRow = styled.div`
  padding: 0 15px;
  display: flex;
  width: 100%;
  height: 40px;
`;

export const StyledInput = styled.input`
  font-size: ${fontSizes.font14};
  font-family: ${theme.fontPrimary};
  width: 100%;
  outline: none;
  border-radius: 3px;
  /* border: ${({ error }) =>
    error
      ? `solid 1.5px ${theme.colorError}`
      : `1px solid ${colors.lightGray}`}; */
  border: ${({ error }) => (error ? "solid 1px #c95151" : "solid 1px #c9c9c9")};
`;

export const StyledError = styled.p`
  font-size: ${fontSizes.font14};
  font-family: ${theme.fontPrimary};
  margin: 0 auto;
  margin-top: 10px;
`;
