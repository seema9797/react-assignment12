import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import MovieSearch from'./components/MovieSearch'
import { DisplayImg, Form, BookHeader } from "./styles/Search.styled";
import { displayimages,sizeImg } from './styles/Card.styed';
import { Link,useNavigate } from "react-router-dom";
import NotFond from './images/notfound.png'


//Api
const auth="api_key=16f5a39714623a8f11910f456e72441e"
const BASE_URL="https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + auth;

//images search 
const IMG_URL="https://image.tmdb.org/t/p/w500";
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=16f5a39714623a8f11910f456e72441e&query=";


const Movie = () =>{
    const [movies, setMovies] = useState([]);
    const[searchInput,setSearchInput] = useState("");
    const { addMovieToCardBook } = useContext(GlobalContext);
  
    useEffect(()=>{
      fetch(API_URL)
      .then(res=>res.json())
      .then(data=>{setMovies(data.results)
      console.log(data.results)}
      )
     
    },[])
  
    const handleSubmit=(e)=>{
      e.preventDefault();

      if (searchInput) {
        fetch(API_SEARCH + searchInput)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
          });
      } else {
            fetch(API_URL)
              .then((res) => res.json())
              .then((data) => {
                setMovies(data.results);
                console.log(data.results);
              });
     }
      
    }

    const changeHandler=(e)=>{
      setSearchInput(e.target.value)
    }

   
    return (
      <div>
        <DisplayImg className="">
          <BookHeader>
            Book Tickets
          </BookHeader>
          <MovieSearch
            changeHandler={changeHandler}
            searchInput={searchInput}
            handleSubmit={handleSubmit}
          />

          <div className="displayimages">
            {movies.length > 0 ? (
              movies.map((index) => (
                <div className="container" key={index.id}>
                  <div className="cardSub">
                    <h3 className="movietitle">{index.title}</h3>
                    <Link to="/bookseat">
                      <button
                        onClick={() => addMovieToCardBook(index)}
                        className="btnSeeMore"
                      >
                        See more
                      </button>
                    </Link>
                  </div>
                  <img
                    src={IMG_URL + index.poster_path}
                    alt={index.title}
                    id="sizeImg"
                  />
                </div>
              ))
            ) : (
              <div id="errorCont">
                <div>
                  <h2>Sorry !! No Movies Found </h2>
                  <img src={NotFond} alt="error" />
                </div>
              </div>
            )}
          </div>
        </DisplayImg>
      </div>
    );
  }

export default Movie