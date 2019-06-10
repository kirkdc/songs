import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  //we can pass props as an arg because we mapped state to props below
  // console.log(props);
  if(!song) {
    return <div> Select a song </div>
  }


  return(
  <div>
    <h3>Details for:</h3>
    <p>
      Title: {song.title}
      <br/>
      Duration: {song.duration}
    </p>
  </div>
  );
};

const mapStateToProps = (state) => {
  //remember that the the redux  state contains selectedSong and songs
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);