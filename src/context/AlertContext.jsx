import Alert from "../components/ui/Alert";
import { createContext, useContext , useState } from "react";

const AlertContext = createContext();

const AlertProvider = ({children}) => {
    const [alertData , setAlertData] = useState({
        title:"",
        text:"",
        variant: "",
    })

    const initalAlert ={
            title:"",
            text:"",
            variant: "",   
    }

    return (
    <AlertContext.Provider value={{alertData , setAlertData}}>
       <Alert 
       title={alertData.title} 
       text={alertData.text} 
       variant={alertData.variant} 
       handleAlertClose={() => setAlertData(initalAlert)}
       />
       {children}
    </AlertContext.Provider>
    )
}

function UseAlertContext() {
    const context = useContext(AlertContext)
    return context;
}

export {AlertProvider , UseAlertContext}