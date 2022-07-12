
import styled from "styled-components";

export const HeaderMovie = styled.h1`
  font-size: 48px;
  line-height: 63px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const DisplayImages = styled.div`
  width: 80%;
  margin: 50px 140px auto;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 60px;

  .SizingImg {
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
  .SizingImg:hover {
    background: rgba(98, 98, 98, 0.6);
    opacity: 0.9;
    border-radius: 20px;
  }
`;
export const SubMainCard = styled.div`
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

  &:hover {
    background: rgba(98, 98, 98, 0.6);
    opacity: 0.9;
    border-radius: 20px;
  }
`;
export const SubContain = styled.div`
  justify-content: "center";
  align-items: "center";
`;
export const ButtonShowMore = styled.button`
  position: absolute;
  margin: 270px -80px 100px;

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
  cursor: pointer;
  &:hover {
    background-color: #9747ff;
  }
`;
export const MovieTitle = styled.h3`
  position: absolute;
  font-size: 24px;
  line-height: 28px;
  width: 300px;
  letter-spacing: 0.004em;
  color: #fff;
  z-index: 2;
  align-items: center;
  color: black;
  margin: 150px 50px 100px;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const cardSub = styled.div`
  //display: none;
`;
export const containerMain = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
   &:hover > ${cardSub} {
    display: block;
  } 
`;
export const btnSeeMore = styled.button`
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
`;



export const movieTitle = styled.h3`
  position: absolute;
  font-size: 24px;
  line-height: 28px;
  width: 300px;
  letter-spacing: 0.004em;
  color: #fff;
  z-index: 2;
  align-items: center;
  margin-left: 40px;
`;