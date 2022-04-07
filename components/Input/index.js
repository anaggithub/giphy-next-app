import { StyledContainer, StyledRow, StyledInput, StyledError } from "./styles";

function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  styles,
  error = false,
  errorMessage,
}) {
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
          styles={styles}
        ></StyledInput>
      </StyledRow>
      <StyledRow>
        {error && <StyledError>{errorMessage}</StyledError>}
      </StyledRow>
    </StyledContainer>
  );
}

export default Input;
