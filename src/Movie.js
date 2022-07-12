import { useEffect, useState } from 'react';
import MovieSearch from'./components/MovieSearch'
import {
  HeaderMovie,
  DisplayImages,
  SubMainCard,
  ButtonShowMore,
  MovieTitle,
  SubContain,
} from "./styles/Card.styed";
import{  ErrorCont,
  ErrorMsg,
  MainErrorDiv,
  ErrorImg,}from "./styles/ErrorFound.styed"
import { useHistory } from "react-router-dom";
import NotFond from './images/notfound.png'


//Api
const auth="api_key=16f5a39714623a8f11910f456e72441e"
const BASE_URL="https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + auth;

//images search 
const IMG_URL="https://image.tmdb.org/t/p/w500";
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=16f5a39714623a8f11910f456e72441e&query=";


const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) {
      fetch(API_SEARCH + searchInput)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results)
        });
    } else {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
        });
    }
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const Routs = (id, path) => {
    history.push({
      pathname: "/bookseat",
      state: {movieId: id,moviePath: path},
    });
    console.log(path,id)
  }
  return (
    <div>
      <HeaderMovie>Book Tickets</HeaderMovie>
      <MovieSearch
        changeHandler={changeHandler}
        searchInput={searchInput}
        handleSubmit={handleSubmit}
      />

      <DisplayImages>
        {movies.length > 0 ? (
          movies.map((index) => (
            <div key={index.id}>
              <SubContain>
                <MovieTitle>{index.title}</MovieTitle>
                <ButtonShowMore
                  onClick={() => Routs(index.id, index.poster_path)}
                >
                  See more
                </ButtonShowMore>
              </SubContain>
              <img
                className="SizingImg"
                src={IMG_URL + index.poster_path}
                alt="error"
              />
            </div>
          ))
        ) : (
          <ErrorCont>
            <MainErrorDiv>
              <ErrorMsg>
                Sorry, there is no result for keyword you searched.
              </ErrorMsg>
              <ErrorImg src={NotFond} alt="error" />
            </MainErrorDiv>
          </ErrorCont>
        )}
      </DisplayImages>
    </div>
  );
};

export default Movie