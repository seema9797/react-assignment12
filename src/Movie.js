import {useEffect,useState} from 'react';
import Moviesearch from'./components/Moviesearch'
import {DisplayImg} from'./Search.styled'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const auth="api_key=16f5a39714623a8f11910f456e72441e"
const BASE_URL="https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + auth;

//images search 
const IMG_URL="https://image.tmdb.org/t/p/w500";
const searcURL=BASE_URL + "/search/movie?"+auth + "&query";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";


const Movie = () =>{
    const [movies, setMovies] = useState([]);
    const[searchInput,setsearchInput] = useState("");
    
    const getMoviesResponse =async()=>{
      const url=`${BASE_URL}/search/movie?${auth}&query=${searchInput}`
    }
  
  // const searchItems=(searhValue)=>{
  //   setsearchInput(searhValue)
  //   console.log(searhValue)
  //   movies.filter((item)=>{
  //     return Object.values(item).join(' ').toLowerCase().includes(searchInput.includes())
  //   })
  // }
  
    useEffect(()=>{
      fetch(API_URL)
      .then(res=>res.json())
      .then(data=>{setMovies(data.results)
      console.log(data.results)}
      )
     
    },[])
  
    return (
      <div>
  <Moviesearch setsearchInput={setsearchInput}/>
  <DisplayImg className="">
    <div className="displayimages">
  {
    movies.filter((index)=>{
      if(searchInput ==""){
        return index
      }else if(index.title.toLowerCase().includes(searchInput.toLowerCase())){
        return index
      }
    })
    .map((index,key)=>(
  
        <div className="container"> 
              <div className="cardSub">
                <h3 className="movietitle">{index.title}</h3>
               <Link to="/bookseat"> <button className="btnSeeMore">See more</button></Link>
              </div>
          <img src={IMG_URL+index.poster_path} alt={index.title}/>
       </div>
    
    ))
    }
    <div className="errormsg"></div>
  </div>
  </DisplayImg>
  </div>
  
    );
  }

export default Movie