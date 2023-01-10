import React , {useState} from 'react';
//components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


//layout
import DefaultLayoutHOC from "../layout/Default.layout"


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [premierMovies, setpremierMovies] = useState([])
  const [onlineStreamEvents, setonlineStreamEvents] = useState([])

  return ( 
    <>
    <HeroCarousel/>
    <div className="container mx-auto px-4 md:px-12 my-8">
      <h1 className= "text-2xl font-bold sm:ml-3 ml-0 my-3">The best of Entertaiment</h1>
      <EntertainmentCardSlider/>
    </div> 
    </>
  )
}

export default DefaultLayoutHOC(HomePage)