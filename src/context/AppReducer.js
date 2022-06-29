
const reducer= (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_BOOKCARD":
      return {
        ...state,
        addMovies: [action.payload, ...state.addMovies],
      };
    case "ADD_SEATS":
      return {
        ...state,
        addSeats: [...state.addSeats, { ...action.payload,qty:1 }],
      };

    case "REMOVE_SEATS":
      return {
        ...state,
        addSeats: state.addSeats.filter(
          (seats) => seats.id !== action.payload.id
        ),
      };
       case "REMOVE_FROM_MODAL":
      return {
        ...state,
        addMovies: state.addMovies.filter((movie) => movie.id !== action.payload),
        addSeats: state.addSeats.filter((seats) => seats.id !== action.payload)
      };
    case "STATE_NULL":
      return {
        
      }
    default:
      return state;
  }
};
export default reducer;