import { Link } from "react-router-dom";
import styled from "styled-components";
import cotebasque from "../Images/cotebasque.jpg";
import noiretblanc from "../Images/noiretblanc.jpg";
import plage from "../Images/plage.jpg";
import portvieux from "../Images/portvieux.jpg";
import surfers from "../Images/surfers.jpg";

const Projets = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm p-1 mt-5">
          <TitleProjects2 to="/wilderBookProject">WILDER BOOK</TitleProjects2>
          <ImgProjects src={cotebasque} alt="photo projets" />
        </div>
        <div className="col-sm p-1 mt-5">
          <TitleProjects>KINGER</TitleProjects>
          <ImgProjects src={noiretblanc} alt="photo projets" />
        </div>
        <div className="col-sm p-1 mt-5">
          <TitleProjects>PROGRAMMER HUMOR</TitleProjects>
          <ImgProjects src={plage} alt="photo projets" />
        </div>
        <div className="col-sm p-1 mt-5">
          <TitleProjects>PIN MY RIDE</TitleProjects>
          <ImgProjects src={portvieux} alt="photo projets" />
        </div>
        <div className="col-sm p-1 mt-5">
          <TitleProjects2>MIREN POPPINS</TitleProjects2>
          <ImgProjects src={surfers} alt="photo projets" />
        </div>
      </div>
    </div>
  );
};

const ImgProjects = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  display: flex;
  align-items: center;
`;

const TitleProjects = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  letter-spacing: 0.1em;
  transform: translate(-50%, -50%);
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  color: white;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const TitleProjects2 = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  letter-spacing: 0.1em;
  transform: translate(-50%, -50%);
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  color: black;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Projets;
