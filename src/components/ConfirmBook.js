import {useState } from "react";

import {
  ModelMainContainer,
  ModelContainer,
  TitleCloseBtn,
  CardSubContainer,
  TitleCloseButton,
  Cardimg,
  HeaderConfirm,
  NumberOfSeats,
  MainCountSeat,
  Seats,
  MainDivision,
  DivisionPart,
  MainDivisionLast,
  DivisionPartLast
} from "../styles/Modal.styled";
const ConfirmBook = ({ selectedSeats, pathImg, closeModel }) => {
  const [Cancle, setCancel] = useState(false);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  let total = selectedSeats.length * 250;
  let SGST = (total * 12) / 100;
  console.log("SGST", SGST);

  return (
    <ModelMainContainer>
      <ModelContainer>
        <TitleCloseBtn>
          <TitleCloseButton onClick={closeModel}>x</TitleCloseButton>
        </TitleCloseBtn>
        <HeaderConfirm>Confirm book</HeaderConfirm>
        <CardSubContainer>
          <Cardimg>
            <img src={IMG_URL + pathImg} alt="error" className="setSizeImg" />
          </Cardimg>
          <MainCountSeat>
            <Seats>Seats:</Seats>
            <NumberOfSeats>
              {selectedSeats.map((seatNo) => {
                return <h1>{seatNo}</h1>;
              })}{" "}
            </NumberOfSeats>
            <MainDivision>
              <DivisionPart>{selectedSeats.length} * 250:</DivisionPart>
              <DivisionPart>{total}</DivisionPart>
            </MainDivision>
            <MainDivision>
              <DivisionPart>SGST 12% </DivisionPart>
              <DivisionPart>{SGST}</DivisionPart>
            </MainDivision>
            <MainDivision>
              <DivisionPart>CGST 12% </DivisionPart>
              <DivisionPart>{SGST}</DivisionPart>
            </MainDivision>
            <MainDivisionLast>
              <DivisionPartLast>total:</DivisionPartLast>
              <DivisionPartLast> {total + SGST * 2}</DivisionPartLast>
            </MainDivisionLast>
          </MainCountSeat>
        </CardSubContainer>
      </ModelContainer>
    </ModelMainContainer>
  );
};

export default ConfirmBook;
