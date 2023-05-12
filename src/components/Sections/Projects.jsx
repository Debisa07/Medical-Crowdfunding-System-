import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import ProgressBar from "../Elements/ProgressBar";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";

// const testData = [
//   { bgcolor: "#00695c", completed: 30 },
// ];

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">OUR COMPAIGNS</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment. "                
                action={() => alert("clicked")}
              />
      <ProgressBar  bgcolor={'#00695c'} completed={50} />
            </div>
            <br></br>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment."
                action={() => alert("clicked")}
              />
      <ProgressBar  bgcolor={'#00695c'} completed={30} />

            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment."
                action={() => alert("clicked")}
              />
      <ProgressBar  bgcolor={'#00695c'} completed={45} />

            </div>
          </div>
          <br></br>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment."
                action={() => alert("clicked")}
              />
      <ProgressBar  bgcolor={'#00695c'} completed={70} />
              

            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment."
                action={() => alert("clicked")}
              />
            
      <ProgressBar  bgcolor={'#00695c'} completed={38} />

            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Help Sally to get better"
                text="We need your immediate attention.  she is very ill and need immediate  treatment."
                action={() => alert("clicked")}
              />
      <ProgressBar  bgcolor={'#00695c'} completed={80} />      
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Link to="/campain">
  <FullButton title="Load More" />
</Link>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
