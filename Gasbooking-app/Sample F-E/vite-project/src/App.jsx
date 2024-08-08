import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menubar from './components/Menubar';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
  <AuthProvider>

      <BrowserRouter>
    <Menubar/>
      <Routes>
      <Route path = "/home" exact Component= {Home}/>
      <Route path = "/" exact Component= {Login}/>
      <Route path = "/Register" exact Component= {Register}/>
      
      </Routes>
      
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
