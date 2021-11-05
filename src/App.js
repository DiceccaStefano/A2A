import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { useState, Fragment } from 'react';
import Camera from './components/Camera';
// import { CameraFeed } from './components/camera-feed';


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
    <Nav_bar />


    <Switch>

      <Route exact path="/">

        <Header />
        <Cards />



      </Route>

      <Route path="/servizi">

        <Services />

      </Route>

      <Route path="/fotocamera">
        <Camera />
      </Route>



      <Route path="*">
        <ErrorPage />
      </Route>




    </Switch>

    <Footer />


  </Router>;
};





export default App;
