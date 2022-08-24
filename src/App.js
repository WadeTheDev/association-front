import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Association from './pages/Association';
import Messages from './pages/Message';
import AllMessages from './pages/AllMessages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  return(
    <BrowserRouter>
    <header>
    <h4><Link className='link' to='/'>Associations</Link></h4>
    <h4><Link className='link' to='/all-messages'>Messages</Link></h4>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:association' element={<Association/>}></Route>
      <Route path='/messages' element={<Messages/>} ></Route>
      <Route path='/all-messages' element={<AllMessages/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App;
