import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper light expand="md">
        <ItemsList>
          <Navlink>
            <StyledAFooter
              href="https://www.linkedin.com/in/laura-glutron/"
              target="blank"
            >
              Linkedin
            </StyledAFooter>
          </Navlink>
          <Navlink>
            <StyledAFooter
              href="https://github.com/lauraglutron"
              target="blank"
            >
              Github
            </StyledAFooter>
          </Navlink>
        </ItemsList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: block;
  justify-content: space-between;
  align-items: center;
  background-color: #c5dccd;
  @media (max-width: 768px) {
    display: none;
  }
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

const StyledAFooter = styled.a`
  color: #006762;
  padding: 0 20px;
  letter-spacing: 0.1em;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Footer;
