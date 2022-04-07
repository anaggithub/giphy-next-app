import Link from "next/link";
import getUserName from "../services";
import getTendenciesGifs from "../services/gifs";
import {
  StyledContainer,
  StyledTitle,
  StyledAutor,
  StyledLink,
  StyledMain,
  StyledSearchBox,
} from "./styles";

export default function Home({ userName, gifs }) {
  console.log(gifs);
  return (
    <StyledContainer>
      <StyledMain>
        <StyledTitle>Giphy App</StyledTitle>
        <StyledAutor>by {userName}</StyledAutor>
        <StyledLink>
          Link to <Link href="/detail">Details Page</Link>
        </StyledLink>
      </StyledMain>
      <StyledSearchBox inputPlaceholder="Hola" />
    </StyledContainer>
  );
}

Home.getInitialProps = async () => {
  const gifs = await getTendenciesGifs();
  const userName = await getUserName();
  return { gifs, userName };
};
