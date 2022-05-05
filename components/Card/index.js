import { StyledCard } from "./styles";

const Card = ({ src, alt, height, width, className, handleClick }) => (
  <StyledCard
    src={src}
    alt={alt}
    onClick={handleClick}
    className={className}
    height={height}
    width={width}
  />
);

export default Card;
