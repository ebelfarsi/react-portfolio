import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tws-hero.jpg";
import projImg2 from "../assets/img/python-blog.png";
import projImg3 from "../assets/img/hemo.jpg";
import projImg4 from "../assets/img/cgm.png";
import projImg5 from "../assets/img/aime.png";
import projImg6 from "../assets/img/poster.png";
import projImg7 from "../assets/img/course.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Multi-Gear Trading Strategy",
      description: "A risk management-based trading strategy that triggers leverage shifting based on drawdown data for a given index.",
      imgUrl: projImg1,
    },
    {
      title: "Splunk Add-on for FIX Protocol Parsing and Analysis",
      description: "Created a Splunk add-on to parse and analyze FIX protocol messages, enhancing real-time financial transaction monitoring and troubleshooting.",
      imgUrl: projImg2,
    },
    {
      title: "Hemo: Improving Blood Utilization and Transactions",
      description: "Backend app optimizing blood component usage by coordinating between blood banks, donors, and users based on urgency, distance, and expiration.",
      imgUrl: projImg3,
    }
  ];

  const researchManuscripts = [
      {
      title: "Advancements in Non-invasive AI-Powered Glucose Monitoring: ",
      description: "Leveraging Multispectral Imaging Across Diverse Wavelengths",
      imgUrl: projImg5,  // Use appropriate image
    },
    {
      title: "Enhanced Non-Invasive CGM using High-IR PPG and Integrated Skin Physical Factors",
      description: "An in-depth review of current continuous glucose monitoring technologies and their applications in managing diabetes.",
      imgUrl: projImg4,  // Use appropriate image
    }

  ];

  const talksTutorials = [
    {
      title: "IMPROVING THE GENERATION OF PLATFORM\n" +
          "\n" +
          "ARTIFACTS FOR HPCC SYSTEMS BUILDS",
      description: "A tu",
      imgUrl: projImg6,  // Use appropriate image
    },
    {
      title: "Complete Python Megacourse: Beginner to Expert",
      description: "Learn how to work with Python with this step-by-step course!",
      imgUrl: projImg7,  // Use appropriate image
    }
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
                <p>Explore the various software solutions, research manuscripts, and educational talks and tutorials I have been involved in. Each entry represents a significant step in my professional and academic journey.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software Solutions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research Manuscripts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Talks & Tutorials</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          researchManuscripts.map((manuscript, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...manuscript}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          talksTutorials.map((talk, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...talk}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
