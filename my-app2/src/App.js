import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import VIP from './components/vip';

function App() {
  return (
    <BrowserRouter>
      <header className='border p-2 container'>
        <Link to="/" className='me-2'>home </Link>
        <Link to="/about" className='me-2'>about </Link>
        <Link to="/gallery" className='me-2'>gallery </Link>
      </header>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/vip/:index" element={<VIP/>}/>
        <Route path="/*" element={<div
        className='container text-danger'>
          <h2>Page not found, 404!</h2>
        </div>}/>
      </Routes>

      <footer>
        <h3>footer</h3>
      </footer>
    </BrowserRouter>
  );
}

export default App;
