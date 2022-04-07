import { StyledButton } from "./styles";

const Button = ({ children, type, styles, handleClick, disabled = false }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={handleClick}
      styles={styles}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
