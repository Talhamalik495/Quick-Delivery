import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CartContextProvider from "./context/CartContext.jsx";
import ThemContextProvider from "./context/ThemContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemContextProvider>
      <CartContextProvider>
        <AuthContext>
          <App />
        </AuthContext>
      </CartContextProvider>
    </ThemContextProvider>

    <ToastContainer />
  </StrictMode>
);
