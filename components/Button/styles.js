import styled, { css } from "styled-components";
import { theme, fontSizes } from "../../styles/variables";

export const StyledButton = styled.button`
  font-size: ${fontSizes.font16};
  font-family: ${theme.fontPrimary};
  border-radius: 10px;
  text-decoration: none;
  padding: 0.7rem 3rem;
  margin: 0.2rem;
  width: 200px;
  height: 48px;
  cursor: pointer;
  ${({ type }) => types[type]}
  ${({ styles }) => styles}
  &:disabled {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "cursor")};
    opacity: ${({ disabled }) => (disabled ? "0.6" : "0")};
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const types = {
  primary: css`
    background-color: ${theme.colorPrimary};
    border: ${theme.colorPrimary} solid 2px;
    color: ${theme.colorSecondary};
  `,
  secondary: css`
    background-color: ${theme.colorSecondary};
    border: ${theme.colorPrimary} solid 2px;
    color: ${theme.colorPrimary};
  `,
};
