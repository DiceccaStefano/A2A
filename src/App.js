import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { useState, Fragment } from 'react';
import Camera from './components/Camera';
import AdvanceCamera from './components/AdvanceCamera';



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

import SmallFooter from './components/SmallFooter';

import Nav_bar from './components/Nav_bar';
import Nav_react from './components/Nav_react';

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

  var isMobile = false; //initiate as false
  // device detection
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  }

  return <Router>


    <Nav_react />


    <Switch>

      <Route exact path="/">



        <Header />
        <Cards />
        <Footer />




      </Route>

      <Route path="/servizi">


        <Services />
        <Footer />


      </Route>

      <Route path="/ia">

        <TencentRec />
      </Route>

      <Route path="/fotocamera">

        <Camera />
        {isMobile ? <SmallFooter /> : <Footer />}

      </Route>


      <Route path="/advcamera">

        <AdvanceCamera />
      </Route>



      <Route path="*">

        <ErrorPage />
        <Footer />

      </Route>




    </Switch>



  </Router>;
};





export default App;
