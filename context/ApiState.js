"use client"
import ApiContext from "./ApiContext";
// import { useEffect, useState } from "react";

const ApiState = (props)=>{
    const name = 'Film Wale'
    return(
        <ApiContext.Provider 
        value={{
            name
        }}>
            {props.children}
        </ApiContext.Provider>
    )
}
export default ApiState