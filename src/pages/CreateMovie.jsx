import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "../api/axios";
//components
import Heading from "../components/ui/Heading"
import Button from "../components/ui/Button"

const initialFormData ={
    title:"",
    director:"",
    genre:"",
    release_year:"",
    abstract:"",
    image: undefined, 

}

export default function CreateMovie(){

    const [formData , setFormdata]= useState(initialFormData);
    const { id } = useParams();
    const navigate = useNavigate()
    

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

       axios.post("/movies", formData , {
        headers : {
            "Content-type" : "multipart/form-data",
        }
       }).then(() =>{
        setFormdata(initialFormData)
        navigate("/");
       })
        
    }
    return(
        <div  className="max-w-5xl mx-auto ">
           <Heading level={1}> Aggiungi un nuovo film</Heading>
           <div className="bg-white rounded-xl my-4">

           <form onSubmit={handleSubmit} className="space-y-3 p-4 "> 
            
            <div className="flex flex-col">
                <label htmlFor="title">Titolo film</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg"
                 id="title"
                 name="title" 
                 type="text" 
                 required 
                 placeholder="Inserisci il titolo del film"
                 value={formData.title}
                 onChange={(e) => handleField("title" , e.target.value)}
                 />
            </div>
            <div className="flex flex-col">
                <label htmlFor="director">Regista</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="director" 
                name="director"
                type="text" 
                required 
                placeholder="Inserisci nome del regista"
                value={formData.director}
                onChange={(e) => handleField("director" , e.target.value)}
                

                 />
            </div>

            <div className="flex flex-col">
                <label htmlFor="genre">Genere del film</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="genre" 
                name="genre"
                type="text" 
                required 
                placeholder="Inserisci il genere del film"
                value={formData.genre}
                onChange={(e) => handleField("genre" , e.target.value)}
                 />
            </div>

            <div className="flex flex-col">
                <label htmlFor="release_year">Anno di rilascio</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="release_year" 
                name="release_year"
                type="text" 
                required 
                placeholder="Inserisci l' anno di rilascio"
                value={formData.release_year}
                onChange={(e) => handleField("release_year" , e.target.value)}
                 />
            </div>

            <div className="flex flex-col">
                <label htmlFor="abstract">Testo della recensione</label>
                <textarea 
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="abstract" 
                name="abstract"
                required 
                rows={5}
                placeholder="Inserisci il testo della trama "
                value={formData.abstract}
                onChange={(e) => handleField("abstract" , e.target.value)}
                >
                </textarea>
            </div>

            <div className="flex flex-col">
                <label htmlFor="image">Immagine di copertina</label>
                <input
                className=" px-1 border-1 border-neutral-400 rounded-lg" 
                id="image" 
                name="image"
                accept="image/*"
                type="file" 
                required 
                onChange={(e) => handleField("image" , e.target.files[0])}
                 />
            </div>
            <div>
                <Button type="submit">invia</Button>
            </div>
        </form>

           </div>
        </div>
    )
}