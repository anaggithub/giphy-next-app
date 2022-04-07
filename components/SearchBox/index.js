import React, { useState } from "react";
import Input from "../Input";
import { StyledForm, StyledButton } from "./styles";

const SearchBox = ({ inputPlaceholder, formStyles, buttonStyles }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    setSearchError(false);
    setSearchErrorMessage("");
    e.preventDefault();
    let letters = /^[A-Za-z ]+$/;

    if (searchValue.trim() === "") {
      setSearchErrorMessage("Ingresa algo para buscar.");
      setSearchError(true);
    } else if (!searchValue.match(letters)) {
      setSearchErrorMessage("Solo se aceptan letritas.");
      setSearchError(true);
    } else {
      setSearchValue(searchValue);
      setSearchError(false);
      setSearchErrorMessage("");
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setSearchError(false);
  };

  console.log(searchValue);

  return (
    <StyledForm onSubmit={handleSubmit} formStyles={formStyles}>
      <Input
        name="search"
        type="text"
        onChange={handleChange}
        value={searchValue}
        error={searchError}
        errorMessage={searchErrorMessage}
        placeholder={inputPlaceholder}
      />
      <StyledButton type="primary" buttonStyles={buttonStyles}>
        Buscar
      </StyledButton>
    </StyledForm>
  );
};

export default SearchBox;
