import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Section({ Lr1, Lr2, Lr3, Lr4, R1 }) {
  return (
    <Container>
      <Left>
        <h5>{Lr1}</h5>
        <h1>{Lr2}</h1>
        <p>{Lr3}</p>
        {!Lr4 && (
          <Buttons>
            <button className="cv">Download CV</button>
            <button>
              <GitHubIcon />
            </button>
            <button>
              <LinkedInIcon />
            </button>
          </Buttons>
        )}
      </Left>
      <Right>
        {!R1 ? (
          <img
            src="https://www.pngkey.com/png/full/494-4943447_lady-gaga-png-transparent-images-lady-gaga-black.png"
            alt=""
          />
        ) : (
          <p>{R1}</p>
        )}
      </Right>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`;
const Left = styled.div`
  h5 {
    text-transform: lowercase;
    letter-spacing: 0.5ch;
    font-size: 2rem;
    font-weight: lighter;
  }
  h1 {
    font-size: 5rem;
  }
  p {
    letter-spacing: 1ch;
    color: #2e2ee5;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    background-color: black;
    color: white;
    margin: 10px 20px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    box-shadow: -3px -3px 3px 3px #2e2ee546;
  }
  .cv {
    border-radius: 20px;
    font-size: 1.2rem;
    margin-left: 0;
    @media (max-width: 400px) {
      margin-left: 20px;
    }
  }
`;
const Right = styled.div`
  img {
    width: 400px;
    @media (max-width: 400px) {
      width: 200px;
    }
  }
  p {
    width: 400px;
    text-align: center;
    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;
