import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
//initialize state
const initialState = {
  addMovies: localStorage.getItem("addMovies")
    ? JSON.parse(localStorage.getItem("addMovies"))
    : [],
  addSeats: localStorage.getItem("addSeats")
    ? JSON.parse(localStorage.getItem("addSeats"))
    : [],
};

//createContext
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("addMovies", JSON.stringify(state.addMovies));
    localStorage.setItem("addSeats", JSON.stringify(state.addSeats));
  }, [state]);

  //actions
  const addMovieToCardBook = (movies) => {
    dispatch({ type: "ADD_MOVIE_TO_BOOKCARD", payload: movies });
  };
  const addSeatsMul = (seatNo) => {
    //console.log(state.addSeats,"outside if")
    if (
      state.addSeats.some((element) => {
        return element.id === seatNo.id;
      })
    ) {
      //console.log(state.addSeats, "inside if");
      dispatch({ type: "REMOVE_SEATS", payload: seatNo });
    } else {
      dispatch({
        type: "ADD_SEATS",
        payload: seatNo,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        addMovies: state.addMovies,
        addSeats: state.addSeats,
        addMovieToCardBook,
        addSeatsMul,
        selectedSeats: state.selectedSeats,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
