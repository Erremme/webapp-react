import { Link } from "react-router"
export default function Header(){
    return (
        <header className="bg-white px-4 py-1 rounded-xl  shadow-xl sticky top-0 flex justify-between items-center ">
          <div className="px-4">
            <Link to="/">
            <img className="w-20 inline-block" src="img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="p-2 shadow-xl rounded-lg bg-neutral-200">
            <Link className=" text-xl"  to="/movies/create"><i className="fa-solid fa-square-plus  text-blue-950 hover:text-blue-400"></i></Link>
          </div>
        </header>
    )
}