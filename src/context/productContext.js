/**
 * Create a Context
 * Provider
 * Consumer (Consumer is lengthy so resolve this resolve we will use "useContext Hook")
 */

import { createContext, useContext } from "react";

// 1st Step -> Create a Context
const AppContext = createContext();

// 2nd Step -> Create Provider
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value="Deepesh">
            {children}
        </AppContext.Provider>
    )
};

// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductContext };