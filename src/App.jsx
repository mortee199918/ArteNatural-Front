import Router from "./app/Router"
import useToken from "./hooks/useToken";
import TokenProvider  from "./providers/TokenProvider"; 
import { unsetToken, setAuth, validateToken } from "./services/auth";
import { useState, useEffect } from "react";

const AppContent = () => {
  const { token, deleteToken } = useToken();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(()=>{
    if (token) {
      setAuth();
      validateToken().then(setAuthenticated);
      if (!authenticated){
        unsetToken()
        deleteToken()
      }
    }}
    , [token]);

  return (
      <Router auth={authenticated}/>
  );
}

const App = () => {
  return (
    <TokenProvider>
      <AppContent />
    </TokenProvider>
  )
}

export default App
