import { useState } from "react"
import { useParams } from "react-router";
import axios from "../../api/axios";
//Components
import Heading from "./Heading";
import Button from "../ui/Button"
//Context
import { UseAlertContext } from "../../context/AlertContext";


const initialFormData ={
    name:"",
    vote:"0",
    text:""
}
export default function Form({onFormSubmitted}){

    const [formData , setFormdata]= useState(initialFormData);
    const { id } = useParams();
    const {setAlertData} = UseAlertContext()
    

    const handleField = (fieldName , fieldValue) => {
        setFormdata((currentFormData) => {
            return {
                ...currentFormData,
                [fieldName] : fieldValue,
            }
        } )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post(`/movies/${id}/reviews`, formData , {
        headers : {
            "Content-type" : "application/json",
        }
       }).then(() =>{
        setFormdata(initialFormData)
        setAlertData({
            title:"Aggiunta recensione",
            text:"Una nuova recensione è stata aggiunta",
            variant:"success",
        })

        onFormSubmitted()
       })
        
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-3 text-white"> 
            <div className="flex gap-3 justify-between">
            <div className="flex flex-col ">
                <label className="font-bold text-xl" htmlFor="name">Nome</label>
                <input
                className=" px-1 py-2 border-1 border-neutral-400 rounded-lg w-xl "
                 id="name"
                 name="name" 
                 type="text" 
                 required 
                 placeholder="Inserisci il tuo nome"
                 value={formData.name}
                 onChange={(e) => handleField("name" , e.target.value)}
                 />
            </div>
            <div className="flex flex-col">
                <label className="text-xl font-bold" htmlFor="vote">Voto</label>
                <input
                className=" px-1 border-1 py-2 border-neutral-400 rounded-lg w-sm" 
                id="vote" 
                name="vote"
                type="number" 
                min={0} max={5} 
                required 
                placeholder="Inserisci il voto"
                value={formData.vote}
                onChange={(e) => handleField("vote" , e.target.value)}
                

                 />
            </div>

            </div>
            <div className="flex flex-col">
                <label className="text-xl font-bold"  htmlFor="text">Testo della recensione</label>
                <textarea 
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="text" 
                name="text"
                required 
                rows={5}
                placeholder="Inserisci il testo della recensione "
                value={formData.text}
                onChange={(e) => handleField("text" , e.target.value)}
                

                >
                </textarea>
            </div>
            <div  className ="w-full">
                <Button type="submit">invia</Button>
            </div>
        </form>
    )

}