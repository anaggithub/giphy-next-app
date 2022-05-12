import { GlobalStyle } from "./styles";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices";
import userSaga from "../sideeffects";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [saga],
});

saga.run(userSaga);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
