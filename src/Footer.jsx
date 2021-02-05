import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <DivFooter>
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
      </DivFooter>
    </>
  );
};

const DivFooter = styled.div`
  margin-top: 100px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: block;
  background-color: #c5dccd;
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
