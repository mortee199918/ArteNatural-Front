import Router from "./app/Router"
import useToken from "./hooks/useToken";
import TokenProvider  from "./providers/TokenProvider"; 
import { unsetToken, setAuth, validateToken } from "./services/auth";
import { useState, useEffect } from "react";

const App = () => {
  

  return (
    <TokenProvider>
      <Router />
    </TokenProvider>
  );
}


export default App
