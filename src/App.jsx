import { BrowserRouter, Routes, Route } from "react-router";
//Layout
import DefaulLayout from "./layout/DefaultLayout";
//pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PagenotFound from "./pages/PageNotFound";
//debug page
import DesignSistem from "./pages/DesignSistem";
//Backoffice page
import CreateMovie from "./pages/CreateMovie";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/designSistem" element={<DesignSistem />} />
        <Route element={<DefaulLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/create" element={<CreateMovie />}/>
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="*" element={<PagenotFound />}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}