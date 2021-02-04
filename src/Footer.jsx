import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper light expand="md">
        <ItemsList>
          <Navlink>
            <StyledAHeader
              href="https://www.linkedin.com/in/laura-glutron/"
              target="blank"
            >
              Linkedin
            </StyledAHeader>
          </Navlink>
          <Navlink>
            <StyledAHeader
              href="https://github.com/lauraglutron"
              target="blank"
            >
              Github
            </StyledAHeader>
          </Navlink>
        </ItemsList>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5fffa;
`;

const ItemsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  li {
    list-style: none;
    padding: 20px 0;
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

const StyledAHeader = styled.a`
  color: #006762;
  padding: 0 20px;
  letter-spacing: 0.1em;
  &:hover {
    color: #c5dccd;
    text-decoration: none;
  }
`;

export default Footer;
