import { StyledButton } from "./styles";
 
const Button = ({ children, type, handleClick, disabled = false, className }) => {
 return (
   <StyledButton disabled={disabled} onClick={handleClick} type={type} className={className}>
     {children}
   </StyledButton>
 );
};
 
export default Button;
