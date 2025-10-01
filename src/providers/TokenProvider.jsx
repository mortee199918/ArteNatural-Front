import { createContext, useState} from 'react';
import { retrieveToken, removeToken, saveToken } from "./TokenManager"; // Assuming you keep this helper file

// 1. Create the Context
export const TokenContext = createContext(null);

const TokenProvider = ({ children }) => {
    // Initial state is read from local storage helper
    const [token, setToken] = useState(retrieveToken());

    // Functions to update token state and local storage
    const addToken = (newToken) => {
        saveToken(newToken);
        setToken(newToken);
    };
    const getToken = () =>
        retrieveToken()

    const deleteToken = () => {
        removeToken();
        setToken(null);
    };

    // The value that will be supplied to consuming components
    const contextValue = {
        token,
        addToken,
        deleteToken
    };

    return (
        <TokenContext.Provider value={contextValue}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider;