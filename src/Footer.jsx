import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const Footer = () => {
  return (
    <Background>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <div>
              <a
                href="https://www.linkedin.com/in/laura-glutron/"
                target="blank"
              >
                <TitleFooter>Linkedin</TitleFooter>
              </a>
            </div>
          </Col>
          <Col sm={2}>
            <div>
              <a href="https://github.com/lauraglutron" target="blank">
                <TitleFooter>Github</TitleFooter>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  background-color: #f5fffa;
  width: 100%;
  padding: 10px;
`;

const TitleFooter = styled.h1`
  color: black;
  text-decoration: none;
`;

// const Paragraphe = styled.p`
//   margin-left: 50px;
//   padding-top: 10px;
//   font-family: var(--secondary-font);
// `;

export default Footer;
