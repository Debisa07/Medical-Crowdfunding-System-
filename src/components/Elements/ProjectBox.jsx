import React from "react";
import styled from "styled-components";
// import ProgressBar from "./ProgressBar";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn  hight="100px" width="100px"
      className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
      {/* <ProgressBar>completed={50} </ProgressBar> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  // background-color: back;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  // :hover > img {
  //   opacity: 0.5;
  // }
`;