import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Link, Routes} from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import NavBar from './components/NavBar';
import Favourites from './components/Favourites';
import Container from './components/Container';
import FavouriteDetails from './components/FavouriteDetails';
function App() {
  return (  
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/search' element = {<Search/>}></Route>
          <Route path='/favourites' element = {<Favourites/>}></Route>
          <Route path='/Details' element = {<FavouriteDetails/>}></Route>
        </Routes>
      </Router>
  )
}

export default App;
