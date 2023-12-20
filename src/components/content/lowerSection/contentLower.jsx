import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './contentLower.css';
import Image1 from "../../../assets/img/image2.png";
import Image2 from "../../../assets/img/image1.png";

const buttonUpper = {
  width: "129px",
  height: "38px",
  padding: "12px, 20px, 12px, 20px",
  borderRadius: "4px",
  gap: "8px",
  backgroundColor: "#F28D35",
  border: "none",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "14px",
  letterSpacing: " -0.02em",
};
function ContentLower() {
  return (
    <div className="contentLower">
      <Container>
        <Row
          style={{
            width: "1,064px",
            height: "414px",
            top: "857px",
            left: "188px",
            gap: "108px",
          }}
        >
          <Col md={6}>
            <div className="imageContainer">
              <img
                src={Image1}
                alt="Sample"
                className="img-fluid"
                style={{ width: "414px", height: "414px" }}
              />
            </div>
          </Col>
          <Col md={6} className="upperTitle">
            <h3 className="upperTitleH3">Web & Mobile App Development</h3>
            <p className="upperP">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button variant="primary" style={buttonUpper}>
              LEARN MORE
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            width: "1,064px",
            height: "416px",
            top: "1351px",
            left: "188px",
          }}
        >
          <Col md={6} style={{ textAlign: "start" }}>
            <h3 className="upperTitleH3">Digital Strategy Consulting</h3>
            <p className="upperP">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button variant="primary" style={buttonUpper}>LEARN MORE</Button>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <div className="imageContainer">
              <img src={Image2} alt="Sample" className="img-fluid" style={{width:'414px',
height: '416px'
}}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentLower;
