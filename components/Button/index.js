import { StyledButton } from "./styles";

const Button = ({ children, type, handleClick, disabled = false }) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
