import styled from "styled-components";

const HomeButton = () => {
  return (
    <DivButtonStyled>
      <a href="/projets">
        <ButtonStyled>Explorer les projets</ButtonStyled>
      </a>
    </DivButtonStyled>
  );
};

const DivButtonStyled = styled.div`
  display: flex;
  justify-content: start;
`;

const ButtonStyled = styled.button`
  color: black;
  background-color: transparent;
  border: 0.1rem solid black;
  border-radius: 0.5em;
  text-align: center;
  letter-spacing: 0.1em;
  padding: 0.3rem 1.2rem;
  margin: 1rem;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    color: black;
    background-color: #f5fffa;
    border: 0.1rem solid #f5fffa;
  }
  &:focus {
    outline: none;
  }
`;

export default HomeButton;