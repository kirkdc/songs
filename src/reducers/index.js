//have to wire reducers together with the combine reducers func
import { combineReducers } from 'redux';



// REDUCERS HERE

//list of songs reducer(static)
const songsReducer = () => {
  return [
    { title: "Enter Sandman", duration: '5:02' },
    { title: "Reign In Blood", duration: '4:08' },
    { title: "Tornado of Consequences", duration: '6:32' },
    { title: "Run To The Hills", duration: '7:10' }
  ];
};

//selected song reducer(also static)
//called with the first arg as currently selected song defaulted to null so when the app first starts you dont have ant songs.
//SECOND ARG is action object. THIS IS WHERE IT CONNECTS TO THE ACTION CREATOR
const selectedSongReducer = (selectedSong=null, action) => {
//now we look at the action obj and inspect its type. If the type is song selected we return the payload. if not return whatever the selected song is
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
    //the above action.type === 'SONG_SELECTED' ties into the type: SONG_SELECTED from folder actions > index.js
  }
  return selectedSong;
};

//making use of combineReducers import
export default combineReducers({
  //the keys of this object have to be the keys that show up inside of the state object

  //songs = songsReducer defined above and same with selectedSongReducer
  songs: songsReducer,
  selectedSong: selectedSongReducer
});