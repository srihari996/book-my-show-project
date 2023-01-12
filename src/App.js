import "./App.css";

//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlaysPage from "./pages/Plays.Page";

//Routes
import {Routes,Route} from 'react-router-dom';
import axios from "axios";

//React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"]= "acf5938e7cefe55cbb523d2347edf60c";

function App() {
  return <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/plays" element={<PlaysPage />} />
  </Routes>
}

export default App;
