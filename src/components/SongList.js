import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              //onClick is running a function that calls props.selectSong and passing in the current song you want to write over
              onClick={() => this.props.selectSong(song)}
              >
               Select
              </button>

          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return  <div className="ui divided list"> { this.renderList() } </div>;
  }
}

//state is all the state available inside the redux store
const mapStateToProps = (state) => {
  // console.log(state);
  //state is obtained from the combineReducers inside index.js
  return{ songs: state.songs };
  // since the above is returned it can be used as props in the any above functions
};

//the connect component is defined inside song list because only the SongList needs to create the CONNECT function that reaches up to the Provider and gets the list of songs.
export default connect(mapStateToProps,
  { selectSong: selectSong }
  )(SongList);

//IMPORTANT:: YOU HAVE TO PASS IN AN ACTION CREATOR OFF TO A CONNECT FUNCITON FOR IT TO MAKE CHANGES IN REDUX STATE. Here selectSong had to be passed into connect


//Steps to get data from the redux store into a component
//STEP 1 - IMPORT connect at the top
//STEP 2 - CALL connect and pass in our component as the second function call
//STEP 3 - DEFINE mapStateToProps which always has the first arg as state(which pulls data from the combineReducers)
//STEP 4 - ALWAYS return an object that shows up as props inside of our component
