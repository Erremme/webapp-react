import { Outlet } from "react-router"
//components
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function DefaulLayout(){
    return(
        <div className=" bg-neutral-200 px-4">
        <Header />
        <main  className="py-6 my-4">
            <Outlet />
        </main>
        <Footer />
        </div>
    )
}