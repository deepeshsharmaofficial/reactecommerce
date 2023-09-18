/**
 * Create a Context
 * Provider
 * Consumer (Consumer is lengthy so resolve this resolve we will use "useContext Hook")
 */

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../reducer/productReducer";

// 1st Step -> Create a Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleProductLoading: false,
    singleProduct: {},
    API: API
}

// 2nd Step -> Create Provider
const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await axios.get(url);
            const products = await response.data;
            console.log("API Products ---> ", products);
            dispatch({ type : "SET_API_DATA", payload: products });
        } catch (error) {
            console.log(error);
            dispatch({ type : "API_ERROR" });
        }
    }

    // 2nd API Call for Single Product

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
        try {
            const response = await axios.get(url);
            const singleProduct = await response.data;
            dispatch({ type : "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type : "SET_SINGLE_PRODUCT_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return ( 
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
};

// Custom Global Hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductContext };