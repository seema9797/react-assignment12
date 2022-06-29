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
    margin-left: 150px !important;
    margin-top: 15px;
    color: #626262;
`;

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
  //Confirm Booking
  .box {
    width: 40%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    padding: 35px;
    border: none;
    border-radius: 20px/50px;
    background-clip: padding-box;
    text-align: center;
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

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 230px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 640px;
    height: 578px;
    position: relative;
    transition: all 5s ease-in-out;
  }

  .popup h2 {
    margin-top: 0;
    color: #333;
  }
  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
  .popup .close:hover {
    color: #724fd8;
  }
  .content {
    display: flex;
    margin-top: 30px;
  
  }

  .bookshowImg img {
    width: 200px;
    height: 300px !important;
  }

  .popup .content {
    overflow: auto;
  }
  .bookingHead {
    align-items: center;
    margin-top: 25px;
    display: flex;
    justify-content: center;
  }
  .BookHeader p {
    align-items: center;
    margin-left: 150px;
  }
  .addSeatId{
    margin-left:30px
  }
  .addSeatId h4 {
    display: flex;

  }

  @media screen and (max-width: 700px) {
    .box {
      width: 70%;
    }
    .popup {
      width: 70%;
    }
  }
`;
export const DisplayImg = styled.div`
  .BookHeader {
    text-align: center;
    display:flex;
    justify-content: center;
  }
  .BookHeader h1 {
font-size: 48px
  }
  .displayimages {
    width: 80%;
    margin: 50px 140px auto;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 60px;
  }
  .displayimages #sizeImg {
    background-position: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    height: 374px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .btnSeeMore {
    position: absolute;
    margin: 100px 120px 0px;
  
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.004em;
    background-color: #352c9a;
    color: white;
    width: 145px;
    height: 43px;
    border-style: none;
    align-items: center;
    transition: all 0.4s ease 0s;
    z-index: 1;
  }
  .cardSub {
    display: none;
  }

  /*
.cardSub:hover{
    opacity:1;
    display:block;
} */

  #errorCont {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  #errorCont h1 {
    /* Heading 2 */
    font-family: "Rubik";
    font-style: normal;
    line-height: 38px;
    /* identical to box height */

    letter-spacing: 0.004em;

    color: #000000;
  }

  .container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .container:hover > .cardSub {
    display: block;
  }
  .container img:hover {
    background: rgba(98, 98, 98, 0.6);
    opacity: 0.9;
    border-radius: 20px;
  }

  .movietitle {
    position: absolute;
    font-family: "Rubik";
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    width: 300px;
    letter-spacing: 0.004em;
    color: #fff;
    z-index: 2;
    align-items: center;
    margin-left: 40px;
  }
`;