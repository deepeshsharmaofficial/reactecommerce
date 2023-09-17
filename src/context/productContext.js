/**
 * Create a Context
 * Provider
 * Consumer (Consumer is lengthy so resolve this resolve we will use "useContext Hook")
 */

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

// 1st Step -> Create a Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

// 2nd Step -> Create Provider
const AppProvider = ({ children }) => {
    
    const getProducts = async (url) => {
        try {
            const response = await axios.get(url);
            const products = await response.data;
            console.log("API Products ---> ", products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

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