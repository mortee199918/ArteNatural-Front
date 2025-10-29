import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    const contextValue = {
        authenticated,
        setAuthenticated
    };
   
    return  <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    
};

