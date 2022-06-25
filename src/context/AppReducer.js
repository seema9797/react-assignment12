export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_BOOKCARD":
            return {
              ...state,
              addMovies: [action.payload, ...state.addMovies],
            };
        case "ADD_SEATS":
            return {
                
              ...state,
                addSeats: [...state.addSeats,action.payload]
                
            };
        
        case "REMOVE_SEATS":
            return {
              ...state,
              addSeats: state.addSeats.filter(
                (seats) => seats.id !== action.payload.id
              ),
            };
        default:
            return state
    }
};