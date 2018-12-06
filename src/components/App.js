import React, { Component } from 'react';
import './../stylesheets/App.scss';
import SearchAlbums from './SearchAlbums';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAlbums/>
      </div>
    );
  }
}

export default App;
