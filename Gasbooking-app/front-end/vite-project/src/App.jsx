import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menubar from './components/Menubar';
import { AuthProvider } from './context/AuthContext';
import Wavegas from './components/wave';
import Gentlegas from './components/Gentlegas'
import Hmagency from './components/Hmagency'
import Butterflygas from './components/Butterflygas';
import Kumaranagency from "./components/Kumaran"
function App() {

  return (
  <AuthProvider>

      <BrowserRouter>
    <Menubar/>
      <Routes>
      <Route path = "/home" exact Component= {Home}/>
      <Route path = "/" exact Component= {Login}/>
      <Route path = "/Register" exact Component= {Register}/>
      <Route path = '/Gentlegas' exact Component={Gentlegas}/>
      <Route path = '/Hmagency' exact Component={Hmagency}/>
      <Route path = '/Butterflygas' exact Component={Butterflygas}/>
      <Route path = '/Kumaranagency' exact Component={Kumaranagency}/>
      <Route path = '/Waveagas' exact Component={Wavegas}/>
      
      </Routes>
      
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
