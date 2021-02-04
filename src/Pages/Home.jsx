import { Jumbotron, Col } from "reactstrap";
import styled from "styled-components";
import HomeButton from "../HomeButton";

const Home = (props) => {
  return (
    <DivHome>
      <Col sm="10" md={{ size: 8, offset: 2 }}>
        <Jumbotron>
          <TitleHome className="display-3">Hello, world!</TitleHome>
          <Paragraphe className="lead">
            Je suis Laura, développeuse web et web mobile junior à Biarritz.
          </Paragraphe>
          <hr className="my-2" />
          <Paragraphe>
            Diplômée en Médiation culturelle et Communication, passionnée par le
            cinéma, les séries et le street art, j'ai travaillé pendant 15 ans
            dans les médias avant de me reconvertir dans le développement web.
          </Paragraphe>
          <HomeButton />
        </Jumbotron>
      </Col>
    </DivHome>
  );
};

const DivHome = styled.div`
  margin-top: 50px;
`;

const TitleHome = styled.h1`
  letter-spacing: 0.1em;
`;

const Paragraphe = styled.p`
  letter-spacing: 0.1em;
  text-align: justify;
`;

export default Home;
