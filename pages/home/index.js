import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import getUserName from "../../services";
import { getTendenciesGifs, getGifs } from "../../services/gifs";
import {
  StyledContainer,
  StyledTitle,
  StyledAutor,
  StyledCard,
  StyledMain,
  StyledGifContainer,
  StyledForm,
} from "./styles";

export default function Home({ userName, tendencies }) {
  const router = useRouter();
  const [gifs, setGifs] = useState(tendencies.data || []);
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
        setGifs(gifs.data);
        setSearchError(false);
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setSearchError(false);
  };

  const handleGifClick = (gifId) => () => {
    router.push(`/detail/${gifId}`);
  };

  return (
    <AppLayout>
      <StyledContainer>
        <StyledMain>
          <StyledTitle>Giphy App</StyledTitle>
          <StyledAutor>by {userName}</StyledAutor>
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
          <Button type="primary">Buscar</Button>
        </StyledForm>
        <StyledGifContainer>
          {gifs?.length &&
            gifs.map((gif) => (
              <StyledCard
                src={gif.images.original.webp}
                alt={gif.title}
                key={gif.id}
                handleClick={(e) => handleGifClick(gif.id)(e)}
              />
            ))}
        </StyledGifContainer>
      </StyledContainer>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  const tendencies = await getTendenciesGifs();
  const userName = await getUserName();
  const props = { tendencies, userName };
  return { props };
}
