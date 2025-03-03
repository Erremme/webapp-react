import { createContext, useContext, useState } from "react";

 const LoaderContext = createContext();

 const LoaderProvider = ({children}) =>{
    const [isLoading , setIsLoading] = useState(false)
    return(
        <LoaderContext.Provider value={{isLoading , setIsLoading}} >
            {children}
        </LoaderContext.Provider>
    )
 }

 function useLoadercontext(){
    const context = useContext(LoaderContext)
    return context
 }

 export{LoaderProvider , useLoadercontext}