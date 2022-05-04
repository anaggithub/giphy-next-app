import React from "react";
import { StyledContainer, StyledRow, StyledInput, StyledError } from "./styles";

function Input(
  {
    name,
    type,
    value,
    placeholder,
    onChange,
    error = false,
    errorMessage,
    className,
  },
  ref
) {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledInput
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          error={error}
          className={className}
          ref={ref}
        ></StyledInput>
      </StyledRow>
      <StyledRow>
        {error && <StyledError>{errorMessage}</StyledError>}
      </StyledRow>
    </StyledContainer>
  );
}

export default React.forwardRef(Input);
