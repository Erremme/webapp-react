import axios from "../api/axios"
import { useEffect, useState } from "react";
//component
import Card from "../components/ui/Card"

export default function HomePage(){
    const [movies, setMovies] = useState([])
    const fetchMovies = () => {
        axios.get('/movies').then((res) => {
            setMovies(res.data);
        })
    }

    useEffect(fetchMovies, [])
    return(
           <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4">
                {movies.map((movie) => {
                    return(
                        <div key={movie.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <Card 
                            image={movie.image} 
                            title={movie.title} 
                            director={movie.director}
                            genre={movie.genre}
                            release_year={movie.release_year}
                            abstract={movie.abstract}
                            id={movie.id}
                            vote={movie.avg_vote}
                            />
                        </div>
                    )
                })
                
                }
            </div>

           </div>
        
        
    )
}

