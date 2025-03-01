import axios from "../api/axios"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
//components
import Heading from"../components/ui/Heading"
import Paragraf from "../components/ui/Paragraf";
import Stars from "../components/ui/Stars";
import Form from "../components/ui/Form";

export default function MoviePage(){
   const {id} = useParams()
   const [movie , setMovie] = useState({})
   const navigate = useNavigate()
    
    const fetchMovie = () => {
        axios.get(`/movies/${id}`).then((res) => {
            setMovie(res.data);
            
        })
        .catch((err) =>{
            if(err.status === 404){
                navigate("/404")
            }
        })
    }

   

    useEffect(fetchMovie, [id, navigate])
    return(
        <div className="max-w-5xl mx-auto  ">
            <Link className="font-bold text-blue-950 bg-white p-2 rounded-lg " to="/"><i className="fa-solid fa-house text-blue-950 hover:text-blue-400"></i></Link>
            <div className="grid grid-cols-12 gap-2 shadow-xl my-4">
                <div className="col-span-12 md:col-span-4">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className="col-span-12 md:col-span-8 bg-white p-4 space-y-4 rounded-xl">
                   <Heading level={1}>{movie.title}</Heading>
                   <Heading level={2}>{movie.author}</Heading>
                   <Stars vote={movie.avg_vote} />
                   <Heading level={3}>{movie.genre}</Heading>
                   <Heading level={4}>{movie.author}</Heading>
                   <Paragraf size="md" color="secondary">{movie.release_year}</Paragraf>
                   <Paragraf size="md" color="primary">{movie.abstract}</Paragraf>
                </div>

                

            </div>

            {movie?.reviews?.length > 0 &&
            <div className="bg-white p-4 mt-4 space-y-4 rounded-xl shadow-xl ">
                    <Heading level={2}> Recensioni</Heading>
                    <ul className="space-y-3">
                        
                         {movie?.reviews?.map((item) => {
                            return(
                        <li className=" border-b-1 border-b-neutral-400" key={item.id}>
                        <Heading level={3}>{item.name}</Heading>
                        <Stars vote={item.vote} />
                        <Paragraf>{item.text}</Paragraf>
                        </li>
                            )

                       
                    })} 

                    </ul>

                </div>
                }

                <div className="bg-white p-4 my-4 rounded-xl shadow-xl">
                    <Form onFormSubmitted ={fetchMovie}/>
                </div>


        </div>
        

        
    )
}