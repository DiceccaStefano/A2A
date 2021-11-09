import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { useState, Fragment } from 'react';
import Camera from './components/Camera';



//CSS
import './App.css';












//React Router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";




//Components
import Footer from './components/Footer';

import Nav_bar from './components/Nav_bar';

import Header from './components/Header';


import Cards from './components/Cards';

import Services from './components/Services';

import ErrorPage from './components/ErrorPage';

import TencentRec from './components/TencentRec';






//Camera

import './styles.css';

// Upload to local seaweedFS instance
// const uploadImage = async file => {
//  const formData = new FormData();
//  formData.append('file', file);


// Connect to a seaweedfs instance
// };

// const Camera = () => {
//   return (
//     <div className="container-fluid">
//       <div className="App">
//         <h1>Image capture test</h1>
//         <p>Capture image from USB webcamera and upload to form</p>
//         <CameraFeed sendFile={uploadImage} />
//       </div>
//     </div>

//   );
// }



const App = () => {

  return <Router>



    <Switch>

      <Route exact path="/">
        <Nav_bar />

        <Header />
        <Cards />
        <Footer />




      </Route>

      <Route path="/servizi">
        <Nav_bar />

        <Services />
        <Footer />


      </Route>

      <Route path="/ia">
        <Nav_bar />
        <TencentRec />
      </Route>

      <Route path="/fotocamera">
        <Nav_bar />
        <Camera />
      </Route>



      <Route path="*">
        <Nav_bar />
        <ErrorPage />
        <Footer />

      </Route>




    </Switch>



  </Router>;
};





export default App;
