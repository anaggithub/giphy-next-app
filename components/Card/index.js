import { StyledCard } from "./styles";
 
const Card = ({ src, alt, styles, handleClick }) => (
 <StyledCard src={src} alt={alt} onClick={handleClick} styles={styles} />
);
 
export default Card;
