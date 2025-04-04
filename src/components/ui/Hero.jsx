import { useState , useEffect } from 'react';
import axios from "../../api/axios"


export default function Hero() {
    // Stato per gestire il film corrente
    const [currentMovie, setCurrentMovie] = useState(0);
    const [recentMovie , setRecentMovie] =useState([])

    // Funzione per cambiare film
    

    useEffect(() => {
        const fetchRecentMovies = () => {
            console.log('fetchRecentMovies chiamato');
           
            axios.get('/movies/recents').then((res) => {
                setRecentMovie(res.data);
            });
        };

        fetchRecentMovies();
    }, [])

    const handleNextMovie = () => {
        setCurrentMovie((prevMovie) => (prevMovie + 1) %recentMovie.length);
    };

    return (
        <div
        className={`h-140  bg-no-repeat bg-center bg-cover relative transition-all duration-500 mb-10 shadow-2xl shadow-black`} 
        style={{
            backgroundImage: recentMovie.length
                ? `url(${recentMovie[currentMovie].image})`
                : 'none',
        }}
    >
        
         
        {/* Overlay */}
        <div className="bg-black opacity-80 absolute top-0 left-0 h-full w-full"></div>

        <h1 className='absolute top-6 left-1/2 transform -translate-x-1/2  text-white text-4xl font-bold'>Ultimi film aggiunti!</h1>

        {/* Card singola */}
        {recentMovie.length > 0 && (
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3   rounded-sm shadow-sm shadow-black flex  space-x-4">
                {/* Copertina */}
                <img
                    src={recentMovie[currentMovie].image}
                    alt={recentMovie[currentMovie].title}
                    className="w-60 object-center h-80  rounded-sm"
                />
                
                {/* Dettagli */}
                <div className='p-4 text-white space-y-3'>
                    <h3 className="font-bold text-4xl">{recentMovie[currentMovie].title}</h3>
                    <p className="text-2xl font-semibold ">
                      di {recentMovie[currentMovie].director}
                    </p>
                    <p className="text-2xl font-semibold ">
                        Genere: {recentMovie[currentMovie].genre}
                    </p>
                </div>
            </div>
        )}

        {/* Pulsante per cambiare film */}
        {recentMovie.length > 1 && (
            <div className="absolute right-30 top-1/2 transform traslate-y-1/2 ">
                <button
                    onClick={handleNextMovie}
                    className="  text-white px-4 py-2 rounded"
                >
                    <i class="fa-solid fa-chevron-right font-light text-4xl"></i>
                </button>
            </div>
        )}
    </div>
    );
}

