import Heading from "./Heading"
import Paragraf from "./Paragraf"
import Button from "./Button"
import Stars from "./Stars"
import { Link } from "react-router"
export default function card({image, title, director,genre , release_year, abstract, id, vote }){
    return(
        <div className="flex bg-white h-full rounded-xl shadow-xl">
            <div className="w-1/2">
                <img className=" w-full h-full" src={image} alt={title} />
            </div>
            <div className="p-4 w-1/2 flex flex-col space-y-3 ">
              <Heading level={3}>{title}</Heading>
              <Heading level={4}>{director}</Heading>
              <Heading level={4}>{genre}</Heading>
              <Stars vote={vote} /> 
              <Paragraf color="secondary">{release_year}</Paragraf>
              <Paragraf size="sm">{abstract}</Paragraf> 
              <div className="mt-auto text-center">
                <Link to={`/movies/${id}`}>
              <Button  type="primary">Leggi di più</Button>
              </Link>
              </div>
            </div>

        </div>
    )


}