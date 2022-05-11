import { useEffect } from "react";
import { useRouter } from "next/router";
import { getGifByID } from "../../services/gifs";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";
import { StyledContainer, StyledTitle } from "./styles";
import { useSelector } from "react-redux";

export default function GifDetail({ gifData }) {
  const router = useRouter();
  const { id } = router.query;

  const userLogged = useSelector((state) => state.user.name);

  if (gifData.message) {
    console.log("Ocurrió un error!", gif.message);
  }

  const gif = gifData.data;

  useEffect(() => {
    if (!userLogged) {
      router.push(`/`);
    }
  }, []);

  return (
    <AppLayout>
      <StyledContainer>
        {Object.keys(gif).length !== 0 && (
          <>
            <StyledTitle>{gif.title}</StyledTitle>
            <Card
              src={gif.images.original.webp}
              height={gif.images.original.height}
              width={gif.images.original.width}
              alt={gif.title}
              key={gif.id}
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
  const gifData = await getGifByID(id);
  const props = { gifData };
  return { props };
}
