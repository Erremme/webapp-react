import { Link } from "react-router"
export default function Header(){
    return (
        <header className="bg-white border-neutral-400 border-4 px-4 py-1 my-2   sticky top-0  z-20 flex justify-between items-center ">
          <div className="p-2">
            <Link to="/">
            <img className="w-30 inline-block  " src="img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="p-2 shadow-xl shadow-neutral-800 rounded-lg bg-neutral-200">
            <Link className=" text-xl"  to="/movies/create"><i className="fa-solid fa-square-plus  text-blue-950 hover:text-blue-400"></i></Link>
          </div>
        </header>
    )
}