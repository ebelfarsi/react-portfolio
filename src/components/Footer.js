import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/eab-logo.png";
import navIcon1 from "../assets/img/in_icon.png";
import navIcon2 from "../assets/img/gmail_icon.png";
import navIcon3 from "../assets/img/github_icon.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
         <Col size={12} sm={8} className="logo-col">
  <a href="/home" className="logo-link">
    <img src={logo} alt="Logo" className="logo-img" />
  </a>
</Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/belfarsi/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:elarbi.belfarsi@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/ebelfarsi/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
