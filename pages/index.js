import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card";
import Input from "../components/Input";
import getUserName from "../services";
import { getTendenciesGifs, getGifs } from "../services/gifs";
import {
  StyledContainer,
  StyledTitle,
  StyledAutor,
  StyledLink,
  StyledMain,
  StyledGifContainer,
  StyledForm,
  StyledButton,
} from "./styles";

export default function Home({ userName, tendencies }) {
  const [selectedGifs, setSelectedGifs] = useState(tendencies.data || []);
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    setSearchError(false);
    setSearchErrorMessage("");
    e.preventDefault();

    if (searchValue.trim() === "") {
      setSearchErrorMessage("Ingresa algo para buscar.");
      setSearchError(true);
    } else {
      const gifs = await getGifs(searchValue);
      if (gifs.error || gifs.message) {
        setSearchError(true);
        setSearchErrorMessage("Ocurrió un error al intentar obtener los gifs");
      } else {
        setSelectedGifs(gifs);
        setSearchError(false);
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setSearchError(false);
  };

  return (
    <StyledContainer>
      <StyledMain>
        <StyledTitle>Giphy App</StyledTitle>
        <StyledAutor>by {userName}</StyledAutor>
        <StyledLink>
          Link to <Link href="/detail">Details Page</Link>
        </StyledLink>
      </StyledMain>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          onChange={handleChange}
          value={searchValue}
          error={searchError}
          errorMessage={searchErrorMessage}
          placeholder="Hiii"
        />
        <StyledButton type="primary">Buscar</StyledButton>
      </StyledForm>
      <StyledGifContainer>
        {selectedGifs?.length &&
          selectedGifs.map((gif) => (
            <Card src={gif.images.original.url} alt={gif.title} key={gif.id} />
          ))}
      </StyledGifContainer>
    </StyledContainer>
  );
}

Home.getInitialProps = async () => {
  const tendencies = await getTendenciesGifs();
  const userName = await getUserName();
  return { tendencies, userName };
};
