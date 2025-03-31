
import "./css/App.css";
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourite'
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from "./contexts/MovieContext";

function App() {

  return (
    <MovieProvider>
      <NavBar/>
    
      <main className='main-content'>

        <Routes>
          <Route  path = '/' element = {<Home />} />
          <Route  path = '/fav' element = {<Favourites />} />
        </Routes>

      </main>
    </MovieProvider>

  )
}

export default App
