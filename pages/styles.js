import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html,
 body {
   padding: 0;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
     background-color  : black ;
 }
 
 a {
   color: inherit;
   text-decoration: none;
 }
 
 * {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
 }
`;

export const StyledForm = styled.form`
  margin-top: 200px;
  padding: 0 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
