function Players() {
    return (
    <div class="section livefeed" id="feed">
              <div class="container">
              <p class="feed-description"></p>
              <div class="row">
              <div class="twelve columns">
              <h3 class="feed-multiplier"><i class="fas fa-walking"></i> Players</h3>
          <table class="u-full-width">
          <thead>
              <tr>
              <th>Name</th>
              <th>Pro records</th>
              <th>Pure records</th>
              <th>Maps beaten</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td><img src="images/flags/lt.png"></img> execut4ble &lt;insilio&gt;</td>
              <td>42</td>
              <td>2</td>
              <td>900</td>
              </tr>
              <tr>
              <td><img src="images/flags/be.png"></img> Beginner &lt;insilio&gt;</td>
              <td>152</td>
              <td>10</td>
              <td>780</td>
              </tr>
          </tbody>
          </table>
          </div>
              </div>
              <a class="button button-primary" href="#browse">Load more</a>
              </div>
          </div>
    )
}

export default Players;
