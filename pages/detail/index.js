import Link from "next/link";
import { StyledContainer } from "../styles";

export default function Detail() {
  return (
    <StyledContainer>
      <h1>In progress</h1>
      <p>
        Link to <Link href="/">Home</Link>
      </p>
    </StyledContainer>
  );
}
