import styled from "styled-components";
import { colors, fontSizes } from "../../styles/variables";

export const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;

export const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${colors.lightBlue};
  font-size: ${fontSizes.font18};
  margin: 5% 0;
`;
