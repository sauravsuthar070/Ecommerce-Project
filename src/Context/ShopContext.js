import React, { createContext } from 'react'
import all_product from "../component/Assegts/all_product";

export const ShopContext = createContext(null);

const ShopcontextProvider = (props) =>{

    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
           {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontextProvider;