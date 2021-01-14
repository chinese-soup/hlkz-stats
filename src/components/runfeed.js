import React from 'react';

function Runfeed() {
    return(
        <div className="section livefeed" id="feed">
        <div className="container">
          <p className="feed-description"></p>
          <div className="row">
          <div className="one-half column">
        <h3 className="feed-multiplier"><i className="fab fa-accessible-icon"></i> Latest runs</h3>
          <ul style={{'text-align': `left`, width: `85%`, margin: `0 auto`}}>
        <li>Runner one on <b>map</b> in 1:23.456 (Pure run)</li>
        <li>Runner two on <b>map</b> in 1:23.456 (Pure run)</li>
        <li>Runner three on <b>map</b> in 1:23.456 (Pro run)</li>
        <li>Runner four on <b>map</b> in 1:23.456 (Noob run)</li>
        </ul>
  
        </div>
        <div className="one-half column">
        <h3 className="feed-multiplier"><i className="fas fa-trophy"></i> Latest WRs</h3>
          <ul style={{'text-align': `left`, width: `85%`, margin: `0 auto`}}>
          <li>Runner one on <b>map</b> in 1:23.456 (Pure run)</li>
          <li>Runner two on <b>map</b> in 1:23.456 (Noob run)</li>
          <li>Runner three on <b>map</b> in 1:23.456 (Pure run)</li>
          <li>Runner four on <b>map</b> in 1:23.456 (Pure run)</li>
        </ul>
        </div>
        </div>
        <br /><br /><br />
        <a className="button button-primary" href="#browse">Browse all</a>
        </div>
        </div>
    )
}

export default Runfeed;