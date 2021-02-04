import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import BurgerOpen from "./BurgerOpen";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <BurgerOpen toggle={toggle} />}
      <Wrapper light expand="md" location={location}>
        <Navlink>
          <StyledAHeader to="/">LauraGlutron</StyledAHeader>
        </Navlink>
        <BurgerLogo onClick={toggle}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </BurgerLogo>
        <ItemsList>
          <Navlink>
            <StyledAHeader to="/projets">Projets</StyledAHeader>
          </Navlink>
          <Navlink>
            <StyledAHeader to="/contact">Contact</StyledAHeader>
          </Navlink>
        </ItemsList>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: ${(props) => props.location.pathname === "/"};
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  li {
    list-style: none;
    padding: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerLogo = styled.div`
  width: 30px;
  height: 50px;
  margin-right: 10%;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  margin: 5px;
  border-radius: 10px;
  background-color: #006762;
`;

const LogoHeader = styled.img`
  width: 50px;
  margin-left: 50px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Navlink = styled.li`
  text-decoration: none;
  list-style: none;
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
`;

const StyledAHeader = styled(Link)`
  color: #006762;
  padding: 0 20px;
  letter-spacing: 0.1em;
  &:hover {
    color: #c5dccd;
    text-decoration: none;
  }
`;

export default Header;
