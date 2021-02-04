import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, CardTitle, CardText } from "reactstrap";

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

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>WILDER BOOK</h1>
      </div>
      <Col
        xs={{ size: 10, offset: 1 }}
        md={{ size: 10, offset: 1 }}
        className="py-1"
      >
        <Card body outline color="info" className="text-center">
          <CardTitle>{projects[0].title}</CardTitle>
          <CardText>{projects[0].date}</CardText>
          <CardText>{projects[0].link}</CardText>
          <CardText>{projects[0].description}</CardText>
        </Card>
      </Col>
    </>
  );
};

export default WilderBookProject;

// <>
//   <Row>
//     {loading ? (
//       <Col className="text-center">
//         <Spinner size="xl" color="info" />
//       </Col>
//     ) : (
//       projects.map((project) => {
//         return (
//           <Project
//             id={project.id}
//             title={project.title}
//             date={project.date}
//             link={project.link}
//             description={project.description}
//             maintech={project.maintech}
//             id_clients={project.id_clients}
//             key={project.id}
//           />
//         );
//       })
//     )}
//   </Row>
// </>
