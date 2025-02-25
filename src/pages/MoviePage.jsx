import axios from "../api/axios"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function MoviePage(){
   const {id} = useParams()
   const [movie , setMovie] = useState({})
   const navigate = useNavigate()
    
    const fetchMovie = () => {
        axios.get(`/movies/${id}`).then((res) => {
            setMovie(res.data);
            console.log(res.data)
        })
        .catch((err) =>{
            if(err.status === 404){
                navigate("/404")
            }
        })
    }

    useEffect(fetchMovie, [id, navigate])
    return(
        <div>
            
        <h1>Moviepage : {movie.title} </h1>
        <div>
          Abstact : {movie.abstract}
        </div>


        </div>
    )
}