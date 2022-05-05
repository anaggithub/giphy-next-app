import styled from "styled-components";
import { colors, fontSizes } from "../../styles/variables";

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
  margin-top: 50px;
  column-count: 1;
  column-gap: 10px;

  @media (min-width: 400px) and (max-width: 768px) {
    column-count: 2;
    column-gap: 10px;
  }

  @media (min-width: 768px) {
    column-count: 3;
    column-gap: 10px;
  }
`;

export const StyledFigure = styled.figure`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
`;
