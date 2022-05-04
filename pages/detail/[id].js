import { useRouter } from "next/router";
import { getGifByID } from "../../services/gifs";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";
import { StyledContainer, StyledTitle } from "./styles";

export default function GifDetail({ gif }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(gif);

  if (gif.message) {
    console.log("Ocurrió un error!", gif.message);
  }

  return (
    <AppLayout>
      <StyledContainer>
        {Object.keys(gif).length !== 0 && (
          <>
            <StyledTitle>{gif.data.title}</StyledTitle>
            <Card
              src={gif.data.images.original.url}
              alt={gif.data.title}
              key={gif.data.id}
            />
          </>
        )}
      </StyledContainer>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const gif = await getGifByID(id);
  const props = { gif };
  return { props };
}
