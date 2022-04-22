import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import getUserName from "../services";
import { getTendenciesGifs, getGifs } from "../services/gifs";
import {
  StyledContainer,
  StyledTitle,
  StyledAutor,
  StyledInput,
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
      if (gifs.message) {
        setSearchError(true);
        setSearchErrorMessage("Ocurrió un error al intentar obtener los gifs");
      } else {
        setSelectedGifs(gifs.data);
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
      </StyledMain>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
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
