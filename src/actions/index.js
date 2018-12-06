import types from './constants';

export const addAlbum = (artist, albumTitle, id) => {
  type: types.ADD_ALBUM,
  artist,
  albumTitle,
  id
  }
}
