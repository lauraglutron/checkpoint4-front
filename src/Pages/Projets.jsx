import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../ocean.jpg";

const Projets = () => {
  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm p-1 mt-4">
          <TitleProjects to="/wilderBookProject">WILDER BOOK</TitleProjects>
          <ImgProjects src={photo} alt="photo projets" />
        </div>
        <div class="col-sm p-1 mt-4">
          <TitleProjects>KINGER</TitleProjects>
          <ImgProjects src={photo} alt="photo projets" />
        </div>
        <div class="col-sm p-1 mt-4">
          <TitleProjects>PROGRAMMER HUMOR</TitleProjects>
          <ImgProjects src={photo} alt="photo projets" />
        </div>
        <div class="col-sm p-1 mt-4">
          <TitleProjects>PIN MY RIDE</TitleProjects>
          <ImgProjects src={photo} alt="photo projets" />
        </div>
        <div class="col-sm p-1 mt-4">
          <TitleProjects>MIREN POPPINS</TitleProjects>
          <ImgProjects src={photo} alt="photo projets" />
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
  transform: translate(-50%, -50%);
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  color: white;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Projets;
