import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';


function App() {
  return (
    <FirebaseState>
    <AlertState>
      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
          <Alert/>
          <Routes>
            <Route exact path={'/'} element={<Home/>} />
            <Route exact path={'/about'} element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
