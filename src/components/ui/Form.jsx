import Button from "../ui/Button"
import { useState } from "react"
import { useParams } from "react-router";
import axios from "../../api/axios";
import Heading from "./Heading";


const initialFormData ={
    name:"",
    vote:"0",
    text:""
}
export default function Form({onFormSubmitted}){

    const [formData , setFormdata]= useState(initialFormData);
    const { id } = useParams();
    

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
        onFormSubmitted()
       })
        
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-3"> 
            <Heading level={2}> Aggiungi una recensione </Heading>
            <div className="flex flex-col">
                <label htmlFor="name">Nome</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg"
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
                <label htmlFor="vote">Voto</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
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
            <div className="flex flex-col">
                <label htmlFor="text">Testo della recensione</label>
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
            <div>
                <Button type="submit">invia</Button>
            </div>
        </form>
    )

}