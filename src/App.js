import Recipe from './components/Recipe'
import RecipeDetails from './components/RecipeDetails';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Feedback from './components/Feedback';
import Login from './components/validation'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      
      <Router>
      <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/Loginpage' element={<Login/>}/>

          <Route path='/Result' element={<Recipe/>} />

          <Route path='/recipe/:id' element={<RecipeDetails/>}/>

          <Route path='/Feed' element={<Feedback/>} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;