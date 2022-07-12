import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SeatBook, } from "../styles/Search.styled";
import { ConfirmBtn, MainBtn } from "../styles/Modal.styled";
import { useParams,useLocation } from "react-router-dom";
import ConfirmBook from "./ConfirmBook";
import Alphasec from "./Alphasec";
import SeatNumbers from "./SeatNumbers";
import { data } from "../data.js";
import SeatIcon from "./Seats";
import BlueSvg from "./Blue";
import Desable from "./Desable";


const BookSeaat = () => {
  const [seatbook, setSeatBook] = useState(data);
  const [selectedSeats, setSelectedSeats] = useState([])
  const[DisplayModal,setDisplayModal] = useState(false)
 const location = useLocation();
  console.log("params", location.state.moviePath);
  
  //const { addSeatsMul, addSeats, removeSeats } = useContext(GlobalContext);
  let storeSeat = ""
    if (
      JSON.stringify(localStorage.getItem(location.state.movieId)) !== "null"
    ) {
      storeSeat = localStorage.getItem(location.state.movieId);
    }
  const handleClick = () => {
    setDisplayModal(true)
    storeSeat = storeSeat + selectedSeats
    localStorage.setItem(location.state.movieId, storeSeat);
    storeSeat = localStorage.getItem(location.state.movieId);
    
  }
    const CloseModel = () => {
      setDisplayModal(false);
    };
  const handleSeatSelections = (seatNo) => {
    selectedSeats.includes(seatNo)
      ? setSelectedSeats((preSelectedSeats) =>
          preSelectedSeats.filter((seat) => seat !== seatNo)
        )
      : setSelectedSeats((preSelectedSeats) => [...preSelectedSeats, seatNo]);
   }
  useEffect(() => {
  console.log("seat selected",selectedSeats)
},[selectedSeats])
  return (
    <SeatBook>
      <div className="countSeat">
        <SeatNumbers />
      </div>
      <div className="BookMain">
        <Alphasec />
        <div className="seatcontainer">
          <ul>
            {seatbook.map((seat, index) => {
              return (
                <div
                  key={seat.id}
                  onClick={() => handleSeatSelections(seat.id)}
                >
                  {storeSeat.includes(seat.id) ? (
                    <Desable />
                  ) : selectedSeats.includes(seat.id) ? (
                    <BlueSvg />
                  ) : (
                    <SeatIcon />
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <MainBtn>
        <ConfirmBtn onClick={handleClick}>Confirm Booking</ConfirmBtn>
      </MainBtn>
      {DisplayModal ? (
        <ConfirmBook
          selectedSeats={selectedSeats}
          pathImg={location.state.moviePath}
          closeModel={CloseModel}
        />
      ) : (
        ""
      )}
    </SeatBook>
  );
};;

export default BookSeaat;
