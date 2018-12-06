import initialState from './../constants';
import searchDiscogsReducer from './../reducers/searchDiscogsReducer';

const { expect } = window;

describe('searchDiscogsReducer', () => {

  it('Should accept and return initialState', () => {
    expect(searchDiscogsReducer(initialState, { type: null })).toEqual(initialState);
  });

  it('Should update state with input values', () => {
    expect(searchDiscogsReducer(initialState, {type: 'ADD_ALBUM', artist: 'Nirvana', albumTitle: 'Bleccch', id: 1})).toEqual({1: {
      artist: 'Nirvana',
      albumTitle: 'Bleccch'
    }});
  });

});
