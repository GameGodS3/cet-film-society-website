import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./styles/RangamSection.css";
import rangamImg from "../static/images/rangam.png";

function RangamSection() {
  return (
    <div className="rangam-section p-5">
      <Row>
        <Col md={6} className="rangam-section-left p-1">
          <div className="section-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            dolor varius sed turpis
          </div>
          <div className="section-subtitle my-3">
            “A celebration of the independent soul of cinema, and a tribute to
            the
            <br />
            evergreen platform”
          </div>
          <div className="cta">
            EXPLORE MORE <Icon icon="ic:baseline-arrow-forward" />
          </div>
        </Col>
        <Col md={6} className="rangam-section-right">
          <Image src={rangamImg} />
        </Col>
      </Row>
    </div>
  );
}

export default RangamSection;
