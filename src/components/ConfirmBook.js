import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SeatBook } from "../Search.styled";
import { Link, useLocation } from "react-router-dom";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const ConfirmBook = () => {
  const { addSeats, addMovies } = useContext(GlobalContext);
  return (
    <SeatBook>
      <div className="box">
        <a className="button" href="#popup1">
          Confirm Booking
        </a>
      </div>
      <div className="countSeat">
        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#">
              &times;
            </a>
            <div className="bookingHead">
              <div>
                <h1>Thank You For Booking </h1>
                <p>Order Summery,</p>
              </div>
            </div>
            <div className="content">
              <div>
                {addMovies.length > 0 ? (
                  <div className="bookshowImg">
                    {addMovies.map((movie) => (
                      <img
                        src={IMG_URL + movie.poster_path}
                        alt={movie.title}
                        id="sizeImg"
                      />
                    ))}
                  </div>
                ) : (
                  <h2>Please select your Movie</h2>
                )}
              </div>
              {addSeats.length > 0 ? (
                <div>
                  {addSeats.map((season) => (
                    <div className="addSeatId">
                      <h4>{season.id},</h4>
                    </div>
                  ))}
                </div>
              ) : (
                <h2>Please select Your Seats</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </SeatBook>
  );
};

export default ConfirmBook;
