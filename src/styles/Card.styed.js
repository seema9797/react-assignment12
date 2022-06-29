
import styled from "styled-components";

export const displayImages = styled.div`
  width: 80%;
  margin: 50px 140px auto;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 60px;
`;

export const sizeImg = styled.img`
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
`;

export const BookHeader2 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;