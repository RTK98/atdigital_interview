import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './footer.css';
import Logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <div className="footerSection">
      <Container>
        <Row>
          <Col md={4} className='footerSection'>
            <Image src={Logo} alt="logo" className="imageStyle" />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </Col>
          <Col md={4} className="CompanyDetails">
            <h3>Our Technologies</h3>
            <ul>
              <li>
                <a
                  href="https://www.react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  ReactJS
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  Gatsby
                </a>
              </li>
              <li>
                <a
                  href="https://www.nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  NextJS
                </a>
              </li>
              <li>
                <a
                  href="https://www.nodejs.org/en/about"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  NodeJS
                </a>
              </li>
              <li>
                <a
                  href="https://www.graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GraphQL
                </a>
              </li>
              <li>
                <a
                  href="https://www.laravel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laravel
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}  className="CompanyDetails">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="Social">
                  Social media Marketing
                </a>
              </li>
              <li>
                <a href="Web">
                  Web & Mobile App Development
                </a>
              </li>
              <li>
                <a href="Data">
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href="GoogleMarketing" >
                  Google Marketing solutions
                </a>
              </li>
              <li>
                <a href="SEO">
                  Search Engine Optimization
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
