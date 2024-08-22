import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ksu.jpg";
import projImg2 from "../assets/img/aui.jpg";
import projImg3 from "../assets/img/Lexis.png";
import projImg4 from "../assets/img/etx.png";
import projImg5 from "../assets/img/acatium.png";
import projImg6 from "../assets/img/skillademia.png";
import projImg7 from "../assets/img/upswing.png";
import projImg8 from "../assets/img/ksu lab.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experiences = () => {
  const academicExperiences = [
    {
      title: "Kennesaw State University",
      description: "2nd Year PhD Student",
      imgUrl: projImg1,
    },
    {
      title: "Al Akhawayn University",
      description: "Bachelor of Science in Computer Science",
      imgUrl: projImg2,
    },
  ];

  const professionalExperiences = [
    {
      title: "Graduate Research Assitant",
      description: "August 2023 - Present",
      imgUrl: projImg8,
    },
    {
      title: "Software Engineer Intern",
      description: "May 2024 - August 2024",
      imgUrl: projImg3,
    },
    {
      title: "Python Developer",
      description: "March 2022 - February 2023",
      imgUrl: projImg4,
    },
    {
      title: "Software Engineer",
      description: "March 2023 - July 2023",
      imgUrl: projImg5,
    },
    {
      title: "Python Instructor",
      description: "September 2022 - December 2022",
      imgUrl: projImg6,
    },
    {
      title: "STEM Tutor",
      description: "February 2022 - January 2023",
      imgUrl: projImg7,
    },
  ];

  const formInitialDetails = {
    nameOrEntity: '',
    email: '',
    purpose: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Submit Request');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/request-cv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Submit Request");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'CV request submitted successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="project" id="background">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Background</h2>
                <p>A committed team player who values the gratification of success as well as the challenging journey to it. Nevertheless, I do enjoy improving and acquiring skills that are thought to be vital in the industry my work revolves around.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Academic</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Request CV</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {academicExperiences.map((experience, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...experience}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Previous employers and clients include:</p>
                      <Row>
                        {professionalExperiences.map((experience, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...experience}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Please fill out the form below to request my CV. I'll get back to you as soon as possible.</p>
                      <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <Form.Group controlId="formNameOrEntity">
                          <Form.Label>Name or Entity</Form.Label>
                          <Form.Control type="text" value={formDetails.nameOrEntity} placeholder="Enter your name or entity" onChange={(e) => onFormUpdate('nameOrEntity', e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" value={formDetails.email} placeholder="Enter your email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formPurpose" className="mt-3">
                          <Form.Label>Purpose</Form.Label>
                          <Form.Control as="textarea" rows={3} value={formDetails.purpose} placeholder="Enter the purpose for requesting the CV" onChange={(e) => onFormUpdate('purpose', e.target.value)} required />
                        </Form.Group>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                          <Button variant="primary" type="submit">
                            {buttonText}
                          </Button>
                        </div>
                        {status.message && (
                          <div className="mt-3" style={{ textAlign: 'center' }}>
                            <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                          </div>
                        )}
                      </Form>
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
  );
};
