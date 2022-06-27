import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SeatBook } from "../Search.styled";
import ConfirmBook from "./ConfirmBook";
import Alphasec from "./Alphasec";
import SeatNumbers from "./SeatNumbers";
import { data } from "../data.js";
import SeatIcon from "./Seats";
import BlueSvg from "./Blue";
//import DesableSvg from "./Desable";

const BookSeaat = () => {
  const [seatbook, setSeatBook] = useState(data);
  const { addSeatsMul,addSeats } = useContext(GlobalContext);


  return (
    <SeatBook>
      <div className="countSeat">
        <SeatNumbers />
      </div>
      <div className="BookMain">
        <Alphasec />
        <div className="seatcontainer">
          <ul>
            {seatbook.map((seat) => {
              return (
                <div key={seat.id}
                  onClick={() => addSeatsMul(seat)}
                >
                  {addSeats.some((element) => element.id === seat.id) ? (
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
      <ConfirmBook />
    </SeatBook>
  );
};

export default BookSeaat;
