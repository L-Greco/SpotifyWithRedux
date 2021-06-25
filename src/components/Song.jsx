import React from "react";
import { connect } from "react-redux";
import { addToPlayer } from "../actions";
import { AiOutlineHeart } from "react-icons/ai";
import { unLikeSong } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addSong: (song) => {
    dispatch(addToPlayer(song));
  },
  unLike: (song) => {
    dispatch(unLikeSong(song));
  },
});

const Song = ({ track, addSong, image, favourites, unLike }) => (
  <div className="py-3 trackHover" onClick={() => addSong({ ...track, image })}>
    <span style={{ color: "white" }}>
      {favourites.filter((song) => song.title === track.title).length > 0 && (
        <AiOutlineHeart onClick={() => unLike(track)} />
      )}
    </span>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
