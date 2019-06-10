//This is the ACTION CREATOR
export const selectSong = (song) => {
//Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

// everytime you want to update your data with REDUX you have to call an action creator