import constants from './../constants';
const { initialState, types} = constants;

const searchDiscogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_ALBUM:
      const newAlbum = Object.assign({}, {
        [action.id]: {
          artist: action.artist,
          albumTitle: action.albumTitle
        }
      });
      return newAlbum;

    default:
      return state;
  }
}

export default searchDiscogsReducer;
