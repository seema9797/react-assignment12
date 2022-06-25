import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SeatBook } from "../Search.styled";
import ConfirmBook from "./ConfirmBook";
import Alphasec from "./Alphasec";
import SeatNumbers from "./SeatNumbers";
import { data } from "../data.js";
//import { Link, Switch } from "react-router-dom";
import SeatIcon from "./Seats";
import BlueSvg from "./Blue";
import DesableSvg from "./Desable";

const BookSeaat = () => {
  const [seatbook, setSeatBook] = useState(data);
  const { addSeatsMul,addSeats } = useContext(GlobalContext);

  // let storeMovie = addSeatsMul.find(o => o.id === seatbook.id)
  // const watchMoviesDesable=storeMovie?true:false

  // const handleSeatClick = (seatNo) => {
  //   if (selectedSeats.includes(seatNo)) {
  //     const datainfo = selectedSeats.filter((seat) => seat.id !== seatNo.id);
  //     setSelectedSeats(datainfo);
  //   } else {
  //     setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatNo]);
  //   }
  // };

  // const colorFill=(seatNo)=>{
  //  switch(true){
  //   case selectedSeats.includes(seatNo): return 'seat-selected';
  //   case disableSeats.includes(seatNo):return 'seat-desable';
  //   default:return 'seat-default'
  //  }
  // }

  // const SeatSelected = (id) => {
  //   const value = selectedSeats.find((seat) => seat.id == id);
  //   return value ? true : false;
  // };
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
                <div key={seat.id}
                  onClick={() => addSeatsMul(seat)}
                //  disabled={ watchMoviesDesable}
                >
                  {addSeats.some((element) => element.id === seat.id) ? (
                    <BlueSvg />
                  ) : (
                    <SeatIcon />
                  )}
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
