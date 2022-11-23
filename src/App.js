
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/Overview';
import Cards from './Components/Cards';

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='price' element={<Cards />} />
    </Routes>
   </Router>
    
   </>
  );
}

export default App;
