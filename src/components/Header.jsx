import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <Container>
      <Left>
        <h1>dev-jenny</h1>
      </Left>
      <Right>
        <NavLinks>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </NavLinks>
        <ToggleOn onClick={() => setBtnToggle(false)} />
      </Right>
      <NavMenuWrapper>
        <NavMenu showNav={btnToggle}>
          <ToggleClose onClick={() => setBtnToggle(true)} />
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </NavMenu>
      </NavMenuWrapper>
    </Container>
  );
}

export default Header;

// styled components
const Container = styled.div`
  width: 100vw;

  height: 65px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  margin-left: 30px;
  font-size: 1.2rem;
  @media (max-width: 400px) {
    font-size: 4vw;
  }
  h1 {
    font-weight: 100;
  }
  position: relative;
  ::before {
    position: absolute;
    content: "{";
    top: 15px;
    left: -20px;
    transform: scale(2);
    color: blue;
  }
  ::after {
    position: absolute;
    content: "}";
    top: 15px;
    right: -20px;
    transform: scale(2);
    color: blue;
  }
`;
const Right = styled.div`
  margin-right: 150px;
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: white;
    margin: 15px;
    font-weight: 100;
  }
`;
const NavLinks = styled.div`
  @media (max-width: 850px) {
    display: none !important;
  }
`;
const NavMenuWrapper = styled.div``;
const NavMenu = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 1.4rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  backdrop-filter: blur(20px);
  transform: ${(props) =>
    props.showNav ? "translateX(100%)" : "translateX(0)"};
  transition: transform 300ms ease-in;
  a {
    text-decoration: none;
    color: white;
    margin: 15px;
    font-weight: 100;
  }
`;
// menu icons

const ToggleOn = styled(MenuIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: none !important;
  @media (max-width: 850px) {
    display: block !important;
  }
`;
const ToggleClose = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
