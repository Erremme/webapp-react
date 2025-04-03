import { Outlet } from "react-router"
import { useLoadercontext } from "../context/LoaderContext"
//components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loader from "../components/ui/Loader"

export default function DefaulLayout(){
    const {isLoading} = useLoadercontext()
    return(
        <div className="  px-4">
        <Header />
        <main  className="py-6 my-4">
            {isLoading ? <Loader /> : <Outlet />}
        </main>
        <Footer />
        </div>
    )
}