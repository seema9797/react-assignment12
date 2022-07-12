import styled from 'styled-components';

export const Form = styled.form`
display: flex;
justify-content: center;
margin: 40px;

`;
export const BookHeader = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const InputBoxStyle = styled.input`
  width: 250px;
  height: 50px;
  padding: 0px 10px;
  border: 1px solid #626262;
`;

export const InputIcon = styled.i`
    position: absolute !important;
    margin-left: 230px !important;
    margin-top: 18px;
    color: #626262;
`;
export const SeatContainer = styled.div`
display:flex;
`
export const countSeat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const UnorderSeatList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(10, minmax(10px, 1fr));
  grid-gap: 20px;
`;
export const ListSeats = styled.li`
list-style-type: none;
`
export const BookMain = styled.div`
display:flex;
justify-content: center;
`
export const seatContainer = styled.div`
display:flex;
`

export const SeatBook = styled.div`
  .seatcontainer {
    display: flex;
  }
  .countSeat {
    display: flex;
    justify-content: center;
    margin-top: 180px;
  }
  .numberCount {
    list-style: none;
  }
  .numberCount li {
    list-style: none;
    margin-top: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;

    /* identical to box height */

    color: #000000;
  }

  .BookMain {
    display: flex;
    justify-content: center;
  }
  .countSeat ul {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(10, minmax(10px, 1fr));
    grid-gap: 70px;
    margin-left: 40px;
  }
  .countSeat ul li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
  }
  .seatcontainer ul {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(10, minmax(10px, 1fr));
    grid-gap: 20px;
  }
  .seatcontainer ul li {
    text-decoration: none;
  }

  .button {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.004em;
    background-color: #352c9a;
    color: white;
    width: 190px;
    padding: 15px;
    border-style: none;
    align-items: center;
    transition: all 0.4s ease 0s;
    text-decoration: none;
  }
  .button:hover {
    background: #724fd8;
  }

  
`;
