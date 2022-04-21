import React, { useState } from "react";
import Link from "next/link";
import Card from "../components/Card";
import getUserName from "../services";
import getTendenciesGifs from "../services/gifs";
import {
 StyledContainer,
 StyledTitle,
 StyledAutor,
 StyledLink,
 StyledMain,
 StyledSearchBox,
 StyledGifContainer,
} from "./styles";
 
export default function Home({ userName, gifs }) {

  const [selectedGifs, setSelectedGifs] = useState(gifs || []);

 return (
   <StyledContainer>
     <StyledMain>
       <StyledTitle>Giphy App</StyledTitle>
       <StyledAutor>by {userName}</StyledAutor>
       <StyledLink>
         Link to <Link href="/detail">Details Page</Link>
       </StyledLink>
     </StyledMain>
     <StyledSearchBox inputPlaceholder="Hola" />
     <StyledGifContainer>
       {selectedGifs.length &&
         selectedGifs.map((gif) => (
           <Card src={gif.images.original.url} alt={gif.title} key={gif.id} />
         ))}
     </StyledGifContainer>
   </StyledContainer>
 );
}
 
Home.getInitialProps = async () => {
 const gifs = await getTendenciesGifs();
 const userName = await getUserName();
 return { gifs, userName };
};
