import Router from "./app/Router"
import useToken from "./hooks/useToken";
import TokenProvider from "./providers/TokenProvider";
import { unsetToken, setAuth, validateToken } from "./services/auth";
import { useState, useEffect } from "react";
import { CartProvider } from "./pages/CartContext";

const App = () => {


  return (
    <TokenProvider>
      <CartProvider> {/* ✅ Envuelve Router con CartProvider */}
        <Router />
      </CartProvider>
    </TokenProvider>
  );
}


export default App
