import React, { Component } from 'react'
import Mellow from './Audio/mellow.mp3';
// import {Howl, Howler} from "howler";
import './home.css'
const Home = function(props) {
    return (
        <div className="container">
            <h1 className="header"> Breath In And Out</h1>
            <audio src={Mellow} controls autoPlay/>
        </div>
      
    );
  }
 
export default Home;
