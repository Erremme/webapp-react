import axios from "../api/axios"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
//components
import Heading from"../components/ui/Heading"
import Paragraf from "../components/ui/Paragraf";
import Stars from "../components/ui/Stars";
import Form from "../components/ui/Form";
//Context
import { useLoadercontext } from "../context/LoaderContext";

export default function MoviePage(){
   const {id} = useParams()
   const [movie , setMovie] = useState({})
   const navigate = useNavigate()
   const { isLoading ,setIsLoading} = useLoadercontext()

    
   useEffect(() => {
    setIsLoading(true);

    axios.get(`/movies/${id}`)
        .then((res) => {
            setMovie(res.data);
        })
        .catch((err) => {
            if (err.response?.status === 404) {
                navigate("/404");
            }
        })
        .finally(() => setIsLoading(false));
}, [id]);

 console.log(movie)

    return(
        <div className="max-w-5xl mx-auto px-2 ">
           <div className="text-center flex items-baseline gap-10 ">
                <Link className="   bg-red-500 px-4 py-2 rounded-full hover:bg-red-800 " to="/"><i className="fa-solid fa-house text-white font-bold  border-neutral-200 border-1 "></i></Link>
                <div className="w-3xl">
                    <Heading level={1}> Scheda film ({movie.title})</Heading>
                    <div className="flex justify-center my-1">
                        <div className="w-120 h-2 bg-red-500" ></div>
                    </div>
                 </div>
              
            </div>
            
           
            <div className="grid grid-cols-12 gap-2  my-12">
                
                <div className="col-span-12 md:col-span-4 shadow-black shadow-xl rounded-xl">
                    <img className="rounded-xl h-full object-center" src={movie.image} alt={movie.title} />
                </div>
                <div className="col-span-12 md:col-span-8  p-4 space-y-4">
                   <Paragraf size="md" color="primary">{movie.abstract}</Paragraf>
                   <Stars vote={movie.avg_vote} />
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Regista:</span> {movie.director}</Heading>
                   {movie.original_title && 
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Titolo Originale:</span> {movie.original_title}</Heading>
                     
                   }
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Titolo:</span> {movie.title}</Heading>
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Anno di uscita:</span> {movie.release_year}</Heading>
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Genere:</span> {movie.genre}</Heading>
                   <Heading level={3}><span className="text-red-600 font-bold text-2xl">Durata:</span> {movie.duration} min</Heading>    
                </div>

                <div className="text-center col-span-12 md:col-span-4 my-1">
                    <Heading level={3}><span className="text-red-600 font-bold text-2xl">Guarda su:</span></Heading>
                   <Heading level={3}> {movie.streaming}</Heading>

                </div>

                

            </div>
            <div className="text-center  ">
            <Heading level={2}> Cast di {movie.title}</Heading>
            <div className="flex justify-center my-1">
                <div className="w-70 h-2 bg-red-500" ></div>
            </div>

            </div>
            

            {movie?.actors?.length > 0 &&
            <div className="p-4 mt-4 space-y-4  ">
                    

                    <div className="flex gap-6 flex-wrap mb-12 ">
                        
                        {movie?.actors?.map((actor) => {
                            return(
                        <div className="" key={actor.id}>

                          <div className="shadow-black shadow-lg rounded-lg my-3">
                            <img className="w-46 h-60 rounded-lg object-center" src={actor.image} alt={actor.first_name}/>
                          </div>
                        <Heading level={3}>{actor.first_name}</Heading>
                        <Paragraf><span className="text-red-600 ">{actor.last_name}</span></Paragraf>
                        
                        </div>
                            )

                       
                    })} 

                    </div>
                    </div>

}

             <div className="text-center">
             <Heading level={2}> Recensioni di {movie.title}</Heading>
             <div className="flex justify-center my-1">
                <div className="w-100 h-2 bg-red-500" ></div>
            </div>
             </div>
                    
                 
               <div className="p-4 mt-4 space-y-4 mb-12  ">
                    
                    <div className="flex gap-6 flex-wrap">
                        
                        {movie?.reviews?.map((item) => {
                            return(
                        <div className=" " key={item.id}>
                           <div className="relative p-5 border border-gray-300 rounded-xl shadow-lg bg-white max-w-md mx-auto my-4">
  
                                <div className="absolute -bottom-4 left-7 w-7 h-8 bg-white border-trasparent border-b-1 border-r-1 border-gray-300 rotate-45 "></div>
                                    <Paragraf>{item.text}</Paragraf>
                                    <Stars vote={item.vote} />
                                </div>
                                 <div className="flex items-baseline gap-2">
                                 <i className="fa-solid fa-user p-2 text-sm bg-red-500 text-white border-neutral-200 border-1 rounded-full"></i>
                                <Heading level={3}>{item.name}</Heading>
                                   
                                 </div>
                                
                        
                        
                        </div>
                            )

                       
                    })} 

                    </div>

                </div>
              
                 <div className="text-center mb-12">
                 <Heading level={2}> Scrivi una recensione su {movie.title} </Heading>
                 <div className="flex justify-center my-1">
                <div className="w-130 h-2 bg-red-500" ></div>
                </div>
                 </div>
                <div className="bg-neutral-600 px-4 py-8 my-6 rounded-lg shadow-xl shadow-black">
                    <Form />
                </div>


        </div>
        

        
    )
}