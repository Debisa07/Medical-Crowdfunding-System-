import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Assets
import LogoImg from "../../assets/svg/Logo";
import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              {/* <LogoImg /> */}
              {/* <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Fanat
              </h1> */}
            </Link>
            <SocialMediaWrapper>
              {/* Add social media icons here */}
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon src={InstagramIcon} alt="Instagram" />
              </a>
            </SocialMediaWrapper>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Legash/ለጋሽ</span> All Right Reserved
            </StyleP>
            <FooterItems>
              {/* Add additional footer items here */}
              <Link className="whiteColor animate pointer font13" to="about" smooth={true} offset={-80}>
                About Us
              </Link>
              <Link className="whiteColor animate pointer font13" to="contact" smooth={true} offset={-80}>
                Contact Us
              </Link>
              <Link className="whiteColor animate pointer font13" to="services" smooth={true} offset={-80}>
                Services
              </Link>
            </FooterItems>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    margin-bottom: 20px;
  }
`;

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  @media (max-width: 550px) {
    width: 20px;
    height: 20px;
  }
`;

const FooterItems = styled.div`
  display: flex;
  margin-right: 10px;

  @media (max-width: 550px) {
   
   width: 20px;
    height: 20px;
  }
  `;