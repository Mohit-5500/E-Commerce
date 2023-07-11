import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-i04c3ni3ij6kzwvd.us.auth0.com"
    clientId="9qzYgp4dAHLSYIffL40Q5ScMMZ0XUe9R"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
      </ThemeProvider>
    </Provider>
  </Auth0Provider>
);
