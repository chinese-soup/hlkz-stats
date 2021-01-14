import React from 'react';

function PlayItNow() {
    return (
        <div class="section play" id="play">
        <div class="container">
          <h3 class="section-heading">Get started</h3>
          <p class="section-description"><h6>Official SourceRuns Half-Life KZ servers are available in the following locations.</h6></p>
          <div class="row">
             <ul style={{'list-style': `none`, 'margin': `0 auto`}}>
             <li><img src="images/flags/se.png"></img> play.sourceruns.org:27016</li>
             <li><img src="images/flags/gb.png"></img> 212.71.238.124:27015</li>
             </ul>
          </div>
        </div>
      </div>
    )
}

export default PlayItNow;