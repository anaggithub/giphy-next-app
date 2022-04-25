import { StyledContainer } from "./styles";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledContainer>
      <h1>Detail page in progress</h1>
      <h2>Gif {id}</h2>
    </StyledContainer>
  );
}
