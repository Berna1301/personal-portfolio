import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import desarrollo_software from "../assets/img/desarrollo_software.jpg";
import consultoria_software from "../assets/img/consultoria_software.jpg";
import mantenimiento_soporte from "../assets/img/mantenimiento_soporte.jpg";
import integracion_sistemas from "../assets/img/integracion_sistemas.jpg";
import desarrollo_movil from "../assets/img/desarrollo_movil.png";
import alexaskill from "../assets/img/alexa-skill.jpg";
import maquina from "../assets/img/vending-machine.jpg";
import taskmanager from "../assets/img/task-manager.jpg";
import QR from "../assets/img/QR.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './Projects.css';
import TrackVisibility from 'react-on-screen';

// Componente ProjectCard
const ProjectCard = ({ title, description, imgUrl }) => (
  <Col md={4} sm={6} className="project-card">
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </Col>
);

// Componente FileCard
const FileCard = ({ title, description, imgUrl }) => (
  <Col md={4} sm={6} className="file-card">
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </Col>
);

// Componente Projects
export const Projects = () => {
  const projects = [
    {
      title: "🔗 Integración de Sistemas",
      description: "Integramos diferentes sistemas y APIs para mejorar la eficiencia de tu negocio.",
      imgUrl: integracion_sistemas,
    },
    {
      title: "💻 Desarrollo de Software Personalizado",
      description: "Creamos aplicaciones que se adaptan a tus necesidades específicas.",
      imgUrl: desarrollo_software,
    },
    {
      title: "🧑‍💻 Consultoría de Software",
      description: "Asesoramos a tu empresa en la elección de las mejores tecnologías.",
      imgUrl: consultoria_software,
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
  ];

  const files = [
    {
      title: "💡 Skill de Alexa para Consulta de Alumnos para la empresa Eficaz Digital",
      description: "Desarrollamos un modelo de habilidad de Alexa utilizando Alexa Developer Console y Amazon Web Services. Esta habilidad se conecta con la API de la empresa Cura para que los profesores puedan consultar información sobre los alumnos a través de Alexa y facilitar la comunicación con los padres.",
      imgUrl: alexaskill,
    },
    {
      title: "🛒 Máquina Expendedora con Inventario Móvil",
      description: "Implementamos una máquina expendedora conectada a una aplicación móvil, la cual permite gestionar el inventario de los productos de manera eficiente y en tiempo real",
      imgUrl: maquina,
    },
    {
      title: "📋 Aplicación de Asignador de Tareas para GeoDigital",
      description: "Desarrollamos una aplicación que asigna y gestiona tareas dentro de la empresa GeoDigital, optimizando la distribución de trabajo y el seguimiento de proyectos.",
      imgUrl: taskmanager,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Servicios & Archivo</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Servicios</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Archivo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Codigo QR</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Servicios */}
                      <Tab.Pane eventKey="first">
                        <p>En Dev Course transformamos ideas en soluciones innovadoras.
                          Ofrecemos servicios de desarrollo de software a medida con la más alta calidad y eficiencia. Ya sea que necesites una aplicación móvil, un sistema web o una integración tecnológica, nuestro equipo está listo para llevar tu proyecto al siguiente nivel.</p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
{/* Archivos */}
<Tab.Pane eventKey="second">
  <p>
    En Dev Course, nos enorgullece haber trabajado en proyectos innovadores y desafiantes, proporcionando soluciones tecnológicas que impactan de manera positiva en diversos sectores. Cada archivo refleja nuestro compromiso con la calidad, eficiencia y satisfacción del cliente.
  </p>
  <Row>
    {files.map((file, index) => (
      <Col md={4} sm={12} className="mb-4 file-card" key={index}>
        <Card style={{ width: '100%' }} className="h-100 d-flex flex-column">
          <Card.Body className="d-flex flex-column">
            {/* Título y Descripción */}
            <Card.Title>{file.title}</Card.Title>
            <Card.Text>{file.description}</Card.Text>
          </Card.Body>
          {/* Imagen debajo del texto */}
          <Card.Img
            variant="bottom"
            src={file.imgUrl}
            alt={file.title}
            style={{
              width: '100%', // Ajusta el tamaño de la imagen al contenedor
              height: 'auto', // Mantiene la proporción sin recortar
              objectFit: 'contain', // Asegura que la imagen no se recorte
              marginTop: '10px', // Espacio entre la imagen y el texto
              marginBottom: '10px', // Espacio entre la imagen y el borde inferior
              padding: '0 10px', // Evita que la imagen toque los márgenes
              borderRadius: '8px', // Bordes redondeados para la imagen
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para resaltar la imagen
              alignSelf: 'center', // Asegura que la imagen esté centrada
              maxHeight: '250px', // Asegura que la imagen no sea más grande que este valor
              objectFit: 'cover' // Asegura que la imagen se ajuste a este espacio sin distorsionarse
            }}
          />
        </Card>
      </Col>
    ))}
  </Row>
</Tab.Pane>




                      {/* Tab 3 */}
                      <Tab.Pane eventKey="third">
                        <p>Tab 3 contenido</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
