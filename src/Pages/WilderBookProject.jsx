import { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Spinner,
  UncontrolledCarousel,
} from "reactstrap";
import styled from "styled-components";
import wildbook1 from "../Images/wildbook1.jpg";
import wildbook2 from "../Images/wildbook2.jpg";
import wildbook3 from "../Images/wildbook3.jpg";

const items = [
  {
    src: wildbook3,
    altText: "Slide 1",
    header: "Wilder Book",
    key: "1",
  },
  {
    src: wildbook2,
    altText: "Slide 2",
    header: "Wilder Book",
    key: "2",
  },
  {
    src: wildbook1,
    altText: "Slide 3",
    header: "Wilder Book",
    key: "3",
  },
];

const WilderBookProject = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading)
    return (
      <Col className="text-center">
        <Spinner size="xl" color="info" />
      </Col>
    );

  return (
    <>
      <Row className="m-5">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <UncontrolledCarousel items={items} />
        </Col>
      </Row>
      <Row className="m-5">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <CardStyle body outline color="dark" className="text-center p-4">
            <CardTitle tag="h2">{projects[0].title}</CardTitle>
            <CardText>réalisé en {projects[0].date}</CardText>
            <CardText>pour le client {projects[0].clients_name}</CardText>
            <StyledAProject
              href="https://github.com/lauraglutron"
              target="blank"
            >
              <CardText>{projects[0].link}</CardText>
            </StyledAProject>
            <hr />
            <CardTextStyle>{projects[0].description}</CardTextStyle>
            <hr />
            <CardText>stacks: {projects[0].maintech}</CardText>
          </CardStyle>
        </Col>
      </Row>
    </>
  );
};

const CardStyle = styled(Card)`
  letter-spacing: 0.1em;
`;

const CardTextStyle = styled(Card)`
  text-align: center;
  border: none;
  // @media (max-width: 768px) {
  //   text-align: justify;
`;

const StyledAProject = styled.a`
  color: black;
  padding: 0 20px;
  letter-spacing: 0.1em;
  &:hover {
    color: #c5dccd;
    text-decoration: none;
  }
`;

export default WilderBookProject;
