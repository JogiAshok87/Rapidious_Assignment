import React,{useState,createContext} from "react";

export const Context = createContext()

const ContextProvider = (props) =>{
    const [ProductsData,setProductsData] = useState([])
    const [searchText,setSearchText] = useState('')

    const ContextValue = {
        ProductsData,setProductsData,searchText,setSearchText
    }

    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider