import Heading from "./Heading"
import Paragraf from "./Paragraf"



export default function Alert({title, text , variant = "info", handleAlertClose}){

   

    const variants ={
        success :"bg-green-200 ",
        info : "bg-blue-200 " ,
        danger: "bg-red-200 text-red-800"
    }

    if(!title || !text ) return null;
    return(
        <div className={ `${variants[variant]}  w-sm  p-2 fixed bottom-15 right-5 rounded-xl flex justify-between`}>
            <div>
            <Heading level={4}>{title}</Heading>
            <Paragraf size="sm">{text}</Paragraf>
            </div>

            <i onClick={handleAlertClose} className="fa-solid fa-circle-xmark cursor-pointer"></i>
            

        </div>
    )
}