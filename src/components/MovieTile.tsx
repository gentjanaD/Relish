import React, { useEffect, useState } from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";
import { FcCheckmark } from "react-icons/fc";
type Props = {
  addToWatchList?: (movie: any) => void;
  onList?: boolean;
  deleteFromList?: (movie: any) => void;
  movie: Movie;
  isClicked?: string;
  watchList?: Movie[];
};

const MovieTile: React.FC<Props> = ({
  addToWatchList,
  onList,
  deleteFromList,
  watchList,
  movie,
}) => {
  const onClickAddToWatchList = () => {
    addToWatchList(movie);
  };
  const onClickDeleteFromWatchList = () => {
    deleteFromList(movie);
  };

  return (
    <div className="movieTile">
      <h3>{movie.title}</h3>
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      <div>
        {onList ? (
          watchList.map((m) => m.title).includes(movie.title) ? (
            <button className="addButton" onClick={onClickAddToWatchList}>
              <FcCheckmark />
            </button>
          ) : (
            <button className="addButton" onClick={onClickAddToWatchList}>
              +
            </button>
          )
        ) : (
          <button className="deleteButton" onClick={onClickDeleteFromWatchList}>
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieTile;
