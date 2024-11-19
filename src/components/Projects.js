import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import desarrollo_software from "../assets/img/desarrollo_software.jpg";
import consultoria_software from "../assets/img/consultoria_software.jpg";
import mantenimiento_soporte from "../assets/img/mantenimiento_soporte.jpg";
import integracion_sistemas from "../assets/img/integracion_sistemas.jpg";
import desarrollo_movil from "../assets/img/desarrollo_movil.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "🔗 Integración de Sistemas",
      description: "Integramos diferentes sistemas y APIs para mejorar la eficiencia de tu negocio.",
      imgUrl: integracion_sistemas ,
    },
    {
      title: "💻 Desarrollo de Software Personalizado",
      description: "Creamos aplicaciones que se adaptan a tus necesidades específicas.",
      imgUrl: desarrollo_software,
    },
    {
      title: "🧑‍💻 Consultoría de Software",
      description: "Asesoramos a tu empresa en la elección de las mejores tecnologías.",
      imgUrl:  consultoria_software,
    },
    {
      title: "🛠️ Mantenimiento y Soporte",
      description: "Ofrecemos soporte continuo para asegurar que tus aplicaciones funcionen sin problemas.",
      imgUrl: mantenimiento_soporte,
    },
    {
      title: "📱 Desarrollo de Aplicaciones Móviles",
      description: "Creamos aplicaciones móviles nativas e híbridas que llegan a tus usuarios en cualquier lugar.",
      imgUrl: desarrollo_movil,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: desarrollo_movil,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>En Dev Course, nos enorgullece haber trabajado en proyectos innovadores y desafiantes, proporcionando soluciones tecnológicas que impactan de manera positiva en diversos sectores. Desde la implementación de asistentes virtuales hasta el desarrollo de sistemas de gestión, cada proyecto refleja nuestro compromiso con la calidad, eficiencia y satisfacción del cliente.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Servicios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Proyectos Concluidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
