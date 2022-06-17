import styled from 'styled-components';

export const Form = styled.form`
display: flex;
justify-content: center;
margin: 40px;

.inputsearch{
    position: relative;
    width: 250px;
    height: 50px;
    padding:0px 10px;
    border: 1px solid #626262;
}
i{
    position: absolute;
    margin-left:230px;
    margin-top:15px;
    color: #626262
    
}
`
export const SeatBook= styled.div`
.seatcontainer{
    display: flex;
  
}
.countSeat{
    display: flex;
    justify-content: center;
    margin-top:50px
  
}
.numberCount{
    list-style:none;
    margin-bottom:90px
}
.numberCount li{
    list-style: none;
    margin-bottom:35px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 58px;
/* identical to box height */


color: #000000;
}

.BookMain{
    display: flex;
    justify-content: center;
}
.countSeat ul{
    display: grid;
  list-style: none;
    grid-template-columns: repeat(10, minmax(10px, 1fr));;
    grid-gap:80px;
    margin-left:40px;
}
.countSeat ul li{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 48px;
}
.seatcontainer ul{
    display: grid;
  list-style: none;
    grid-template-columns: repeat(10, minmax(10px, 1fr));;
    grid-gap:30px;
}
.seatcontainer ul li{
    text-decoration: none;
}
`
export const DisplayImg=styled.div`

.displayimages{ 
    width: 80%;
    margin: 140px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    grid-gap:60px;
}
.displayimages img 
{
    background-position:center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    height: 374px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.btnSeeMore{
    position: absolute;
    margin:100px 120px 0px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.004em;
    background-color: #352C9A;
    color: white;
    width: 145px;
    height: 43px;
    border-style: none;
    align-items:center;
    transition: all 0.4s ease 0s;
    z-index:1;
}
 .cardSub{
    display: none;
}

/*
.cardSub:hover{
    opacity:1;
    display:block;
} */


.errorCont{
    display:flex;
    justify-content: center;
}
.errorCont h1{
width: 792px;
height: 38px;
/* Heading 2 */
font-family: 'Rubik';
font-style: normal;
line-height: 38px;
/* identical to box height */

letter-spacing: 0.004em;

color: #000000;

}
.errorCont img{
width: 620px;
height: 447px;
}

.container{
   display:flex;
   justify-content: center;
    text-align: center;
    align-items: center;
    

}
.container:hover > .cardSub{
display: block;
}
.container img:hover {
    background: rgba(98, 98, 98, 0.6);
    opacity:0.9;
    border-radius:20px;
  

}

.movietitle{
position: absolute;
font-family: 'Rubik';
font-weight: 600;
font-size: 24px;
line-height: 28px;
width:300px;
letter-spacing: 0.004em;
color: #fff;
z-index:2;
align-items:center;
margin-left:40px;
}

`