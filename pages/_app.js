import AppLayout from "../components/AppLayout";
import { GlobalStyle } from "./styles";
function MyApp({ Component, pageProps }) {
 return (
   <>
     <GlobalStyle />
     <AppLayout>
       <Component {...pageProps} />
     </AppLayout>
   </>
 );
}
 
export default MyApp;
