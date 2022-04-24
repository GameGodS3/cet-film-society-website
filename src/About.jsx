import React from "react";
import "./styles/About.css";
import Navbar from "./Navbar";
import { Col, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import execomImage from "../static/images/execom-placeholder.png";
import Footer from "./Footer";

function About() {
  const execom = [
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
    {
      name: "Sai Sankar",
      position: "President",
      image: execomImage,
    },
  ];

  return (
    <div className="about">
      <Navbar />
      <div className="about-main">
        <Row className="about_us p-5 pe-0">
          <Col md={7}>
            <div className="section-title">About Us</div>
            <div className="section-subtitle pe-3">
              College Of Engineering Trivandrum, the pioneer institute of
              technical education in Kerala has held its status of excellence in
              technical and cultural aspects for 80 years since its foundation
              in 1939. Having attained the regal age of 80, CET has a very rich
              legacy of nurturing multidimensional talents & providing the best
              platforms for tehnocrats and artists alike.
              <br />
              <br />
              With its dynamic student population, CET has carved a niche for
              itself both within and outside the field of engineering expertise.
              The broad spectrum of notable alumni that CET has produced have
              imprinted the ethos of their alma mater on the vibrant arenas of
              their careers.
            </div>
            <div className="cta mt-5">
              Learn More <Icon icon="ic:baseline-arrow-forward" />
            </div>
          </Col>
          <Col md={5} className="cet-img">
            <div></div>
          </Col>
        </Row>
        <Row className="about-club p-5 pb-0">
          <Col md={5} className="">
            <div className="club-img">
              <div></div>
            </div>
          </Col>
          <Col md={7}>
            <div className="section-title">About Film Club</div>
            <div className="section-subtitle me-5">
              CET Film Society is a community aimed at celebrating the art of
              cinema. Initiated by a group of film enthusiastic students, the
              club aims at providing a platform for attention and appreciation
              to movies, primarily independent, be it Indian or foreign.
              <br />
              <br />
              Being one of the most active clubs in the college, we've organised
              numerous programs both online and offline which includes film
              screenings, discussions and several film oriented competitions. We
              often collaborate with other film-related organisations and
              encourage up and coming talents. Rangam, our annual film festival
              is one of the major events this year. It will also include a short
              film competition focused on nurturing young and promising talents.
              We also have an active social media presence with our Weekly
              Suggestions, Movie Reviews and other contests and events. The CET
              Film Society is an inclusive group rendering an imaginative and
              critical space for CETians.
            </div>
          </Col>
        </Row>
        <div className="execom-main p-5">
          <div className="section-title text-center">CET Film Club Execom</div>
          <div className="execom-members container">
            <Row className="justify-content-center ms-5 me-5 pe-5 ps-5">
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
              <Col md={3} className="member-card d-flex">
                <div className="member-image">
                  <Image src={execomImage} />
                </div>
                <div className="card-details">
                  <div className="member-name">Jacob Joshy</div>
                  <div className="member-post">President</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
