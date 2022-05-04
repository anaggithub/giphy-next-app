import { StyledCard } from "./styles";
const Card = ({ src, alt, className, handleClick }) => (
  <StyledCard src={src} alt={alt} onClick={handleClick} className={className} />
);
export default Card;
