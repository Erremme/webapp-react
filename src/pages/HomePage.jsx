import axios from "../api/axios"
import { useEffect, useState } from "react";
//component
import Card from "../components/ui/Card"
import Hero from "../components/ui/Hero";
//Context
import { useLoadercontext } from "../context/LoaderContext";

export default function HomePage(){
    const {setIsLoading} = useLoadercontext()
        const [movies, setMovies] = useState([])
        
    
        useEffect(() => {
            setIsLoading(true);
            
            const fetchMovies = () => {
                console.log('fetchMovies chiamato');
                
                axios.get('/movies').then((res) => {
                    setMovies(res.data);
                });
            };
        
            
            fetchMovies();
            setIsLoading(false)
        }, []);
        
    return(
           <div className="max-w-7xl mx-auto">
            <Hero/>
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

