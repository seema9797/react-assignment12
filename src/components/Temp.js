import { useState } from "react";
import { SeatBook } from "../Search.styled";
import ConfirmBook from "./ConfirmBook";
import Alphasec from "./Alphasec";
import SeatNumbers from "./SeatNumbers";
import { data } from "../data.js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { Link, Switch } from "react-router-dom";
import SeatIcon from "./Seats";
import BlueSvg from "./Blue";
import DesableSvg from "./Desable";

const BookSeaat = () => {
  const [seatbook, setSeatBook] = useState(data);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [disableSeats, setDisableSeats] = useState([]);

  const handleSeatClick = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      const datainfo = selectedSeats.filter((seat) => seat.id !== seatNo.id);
      setSelectedSeats(datainfo);
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatNo]);
    }
  };

  // const colorFill=(seatNo)=>{
  //  switch(true){
  //   case selectedSeats.includes(seatNo): return 'seat-selected';
  //   case disableSeats.includes(seatNo):return 'seat-desable';
  //   default:return 'seat-default'
  //  }
  // }

  const SeatSelected = (id) => {
    const value = selectedSeats.find((seat) => seat.id == id);
    return value ? true : false;
  };
  //console.log(selectedSeats.find(seat=>seat.id=='C1'))
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
                <div key={seat.id} onClick={() => handleSeatClick(seat)}>
                  {SeatSelected(seat.id) ? <BlueSvg /> : <SeatIcon />}
                  {/* <SeatIcon /> */}
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
