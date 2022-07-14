import {useState } from "react";

import {
  ModelMainContainer,
  ModelContainer,
  TitleCloseBtn,
  CardSubContainer,
  TitleCloseButton,
  CardImg,
  HeaderConfirm,
  NumberOfSeats,
  MainCountSeat,
  Seats,
  MainDivision,
  DivisionPart,
  MainDivisionLast,
  DivisionPartLast,
  DivisionPartHead,
} from "../styles/Modal.styled";
const ConfirmBook = ({ selectedSeats, pathImg, closeModel }) => {
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
          <CardImg>
            <img src={IMG_URL + pathImg} alt="error" className="setSizeImg" />
          </CardImg>
          <MainCountSeat>
            <Seats>Seats:</Seats>
            <NumberOfSeats>
              {selectedSeats.map((seatNo) => {
                return <h1>{seatNo}</h1>;
              })}{" "}
            </NumberOfSeats>
            <MainDivision>
              <DivisionPartHead>{selectedSeats.length} * 250:</DivisionPartHead>
              <DivisionPartHead>{total}</DivisionPartHead>
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
