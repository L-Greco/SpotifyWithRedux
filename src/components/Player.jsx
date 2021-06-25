import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { likeSong, unLikeSong } from "../actions";

const mapStateToProps = (state) => ({
  favourites: state.favourites,
  song: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  like: (song) => {
    dispatch(likeSong(song));
  },
  unLike: (song) => {
    dispatch(unLikeSong(song));
  },
});

const Player = ({ song, like, unLike, favourites }) => (
  <div
    className="container-fluid fixed-bottom bg-container pt-1"
    style={{ zIndex: "90000" }}
  >
    <Row>
      <div className="col-lg-10 ">
        <Row>
          <div className="col-2 ml-md-3 ml-lg-0 ">
            {song.image && (
              <img
                className="img-fluid"
                style={{ height: "80px", width: "80px" }}
                src={song.image}
                alt="some  here"
              />
            )}
          </div>
          {song.title && (
            <div className="col-3 mr-0" style={{ color: "white" }}>
              <div className="d-flex" style={{ flexDirection: "row" }}>
                <div className="d-flex" style={{ flexDirection: "column" }}>
                  <p>{song.title} </p>
                  <p className="text-muted">{song.artist.name} </p>
                </div>
                <div
                  className="d-flex ml-2"
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineHeart
                    className="heart"
                    onClick={() =>
                      favourites.filter((track) => track.id === song.id)
                        .length > 0
                        ? unLike(song)
                        : like(song)
                    }
                  />
                </div>
              </div>
            </div>
          )}
          {/* offset-3 offset-md-4 offset-lg-5 */}

          <div className="col-6 col-md-4 col-lg-2  playerControls mt-1">
            <Row>
              <a href="/">
                <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Previous.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Play.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Next.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Repeat.png" alt="shuffle" />
              </a>
            </Row>
          </div>
        </Row>
        <Row className="justify-content-center playBar py-3">
          <div className="col-8 col-md-6">
            <div id="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={Math.floor(parseInt(song.duration) / 60)}
              ></div>
            </div>
          </div>
        </Row>
      </div>
    </Row>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
