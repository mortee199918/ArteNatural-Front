import Router from "./app/Router"
import useToken from "./hooks/useToken";
import TokenProvider from "./providers/TokenProvider";
import { unsetToken, setAuth, validateToken } from "./services/auth";
import { useState, useEffect } from "react";
import { CartProvider } from "./pages/CartContext";
import { AuthProvider } from "./providers/AuthProvider";

const App = () => {


  return (
    <TokenProvider>
      <AuthProvider>
        <CartProvider> {/* ✅ Envuelve Router con CartProvider */}
          <Router />
        </CartProvider>
      </AuthProvider>
    </TokenProvider>
  );
}


export default App
