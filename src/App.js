import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Names from './Pages/Names';
import Emails from './Pages/Emails';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Kezdőlap</Link></li>
            <li><Link to="/Names">Nevek</Link></li>
            <li><Link to="/Emails">Email</Link></li>
          </ul>
        </nav>
      </header>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Names' element={<Names />}/>
          <Route path='/Emails' element={<Emails />}/>
        </Routes>


      <footer>Copyright &copy; 2023</footer>
    </BrowserRouter>
  );
}

export default App;
