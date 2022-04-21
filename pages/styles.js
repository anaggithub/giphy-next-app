import styled from "styled-components";
import { colors, fontSizes } from "../styles/variables";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

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
  margin-bottom: 10%;
`;

export const StyledSearchBox = styled(SearchBox)`
  margin-top: 5%;
  flex-grow: 1;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ styles }) => styles}
`;

export const StyledButton = styled(Button)`
  ${({ styles }) => styles}
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
  margin-top: 5%;
`;

export const StyledGifContainer = styled.div`
  margin-top: 10%;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
