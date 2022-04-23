import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles/Rangam.css";
import rangamImg from "../static/images/rangam.png";

function Rangam() {
  return (
    <div className="rangam p-5">
      <Row>
        <Col md={6} className="rangam-left p-5">
          <div className="heading-main mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            dolor varius sed turpis
          </div>
          <div className="heading-sub mt-3">
            “A celebration of the independent soul of cinema, and a tribute to
            the
            <br />
            evergreen platform”
          </div>
          <div className="explore-button m-3 ms-0 mt-5">
            EXPLORE MORE <span>→</span>
          </div>
        </Col>
        <Col md={6} className="rangam-right">
          <Image src={rangamImg} />
        </Col>
      </Row>
    </div>
  );
}

export default Rangam;
