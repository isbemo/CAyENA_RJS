import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import Inicio from './components/Inicio'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Routes>        
          <Route path ="/" exact element={<NotesList/>}/>
          <Route path ="/edit/:id" element={<CreateNote/>}/>
          <Route path ="/create" element={<CreateNote/>}/>
          <Route path ="/user" element={<CreateUser/>}/>
          <Route path ="/inicio" element={<Inicio/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
