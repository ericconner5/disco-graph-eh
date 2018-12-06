import React, { Component } from 'react';

function SearchAlbums() {
  // class SearchAlbums extends Component{
  //
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  let _artist;
  let _album;

  function handleNewAlbumSearch(event) {
    event.preventDefault();
    console.log(_artist.value);
    console.log(_album.value);
    _artist.value = '';
    _album.value = '';
    return console.log("huzzah!");
  }

  return (
    <div>
      <form onSubmit={handleNewAlbumSearch}>
        <input type="text" placeholder="Artist" ref={(input) => {_artist = input;}}></input>
        <input type="text" placeholder="Album" ref={(input) => {_album = input;}}></input>
        <button type="submit">Clickify!</button>
      </form>
    </div>
  )

}
// }


export default SearchAlbums
