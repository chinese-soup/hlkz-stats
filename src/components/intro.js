import React from 'react';
import {
    Link,
  } from "react-router-dom"

function Intro() {
    const alt = "HLKZ"
    
    return(
        <div class="section intro" id="intro">
        <div class="container">
          <div class="row">
            <div class="two-thirds column">
              <br /><br /><br />
              <h2 class="intro-multiplier">Half-Life KZ</h2>
              <h5 class="intro-heading">A gamemode based on Half-Life that focuses on beating skill movement maps as fast as possible.</h5>
              <p class="intro-description"></p>
              <Link class="button" to="/maps">Browse maps</Link>
              <Link class="button" to="/players">Browse players</Link>
            </div>
            
            <div class="one-third column logo">
              <img class="logo" src="images/logo.png" width="300px" alt={alt}></img>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Intro;