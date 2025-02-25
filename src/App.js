import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./component/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import VodInput from './component/vodInput';
import Footer from './component/footer';
import MovieInfo from './component/movieInfo';

function App() {
  return (
    <BrowserRouter>
      <VodInput/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/info/:id" element={<MovieInfo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
