import styled from "styled-components";
import { theme, colors } from "../../styles/variables";

export const StyledLayout = styled.div`
  min-height: 100vh;
  margin: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.background};
  color: ${colors.lighDarkGray};
`;
export const StyledChildren = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledFooter = styled.div`
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;
