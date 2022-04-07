import styled from "styled-components";
import { colors, fontSizes } from "../styles/variables";
import SearchBox from "../components/SearchBox";

export const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledMain = styled.main`
  flex-grow: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSearchBox = styled(SearchBox)`
  flex-grow: 1;
`;

export const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${colors.lightBlue};
  font-size: ${fontSizes.font20};
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const StyledAutor = styled.h2`
  font-style: italic;
`;

export const StyledLink = styled.p`
  margin-top: 10%;
`;
