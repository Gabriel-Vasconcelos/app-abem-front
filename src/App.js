import * as React from 'react';

import Container from '@mui/material/Container';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Duvidas from './components/pages/Duvidas';
import Doe from './components/pages/Doe';
import Cadastro from './components/pages/Cadastro';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>

           <Route exact path='/duvidas' element={<Duvidas/>} />

           <Route exact path='/doe' element={<Doe/>} />
           <Route exact path='/cadastro' element={<Cadastro/>} />
          </Routes>
       </Router>
  );
}

export default App;
