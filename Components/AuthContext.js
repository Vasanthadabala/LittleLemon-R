import React,{Children, createContext} from "react";

export const  AuthContext  =  createContext();

const AuthProvider = () =>{
    return(
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    )
}