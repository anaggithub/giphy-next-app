import Link from "next/link";
import { StyledContainer } from "./styles";

export default function About() {
  return (
    <StyledContainer>
      <h1>In progress</h1>
      <p>
        Link to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </StyledContainer>
  );
}
