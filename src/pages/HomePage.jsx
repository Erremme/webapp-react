import axios from "../api/axios"
import { useEffect, useState } from "react";

export default function HomePage(){
    const [movies, setMovies] = useState([])
    const fetchMovies = () => {
        axios.get('/movies').then((res) => {
            setMovies(res.data);
        })
    }

    useEffect(fetchMovies, [])
    return(
        <div>
        <h1>Homepage</h1>
        <div>
         {movies.map((item) =>{
            return(
                <div key={item.id}>{item.title}</div>
            )
         })}
        </div>
        </div>
    )
}