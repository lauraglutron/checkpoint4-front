import { Form, FormGroup, Input, Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import ContactButton from "../ContactButton";

const Contact = () => {
  return (
    <>
      <div>
        <TitleContact>Hello! Travaillons ensemble!</TitleContact>
      </div>
      <Container fluid>
        <RowReverse>
          <Col md={6}>
            <Paragraphe>laura.glutron@gmail.com</Paragraphe>
            <Paragraphe>+33 (0)6 09 93 64 80</Paragraphe>
            <Form action="mailto:laura.glutron@gmail.com" method="post">
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="name"
                      name="name"
                      id="exampleName"
                      placeholder="Nom"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="E-mail"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  type="subject"
                  name="subject"
                  id="exampleSubject"
                  placeholder="Sujet"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  style={{ resize: "none" }}
                  type="textarea"
                  name="message"
                  id="exampleText"
                  placeholder="Message"
                />
              </FormGroup>
              <ContactButton />
            </Form>
          </Col>
        </RowReverse>
      </Container>
    </>
  );
};

const TitleContact = styled.h2`
  margin: 40px 10px;
  text-align: center;
  letter-spacing: 0.1em;
`;

const RowReverse = styled(Row)`
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Paragraphe = styled.p`
  text-align: center;
  letter-spacing: 0.1em;
`;

export default Contact;
