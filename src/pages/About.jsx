import React, { useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Halmet/Halmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";

import "../styles/about.css";
import OurMembers from "../components/UI/OurMember";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  We prioritize your safety and comfort. Our mission is to
                  deliver reliable and secure transportation solutions tailored
                  to meet your unique needs. Whether you're planning a city
                  tour, an airport transfer, or a long-distance journey, our
                  fleet of well-maintained vehicles and professional drivers
                  ensure that your ride is smooth and stress-free.
                </p>

                <p className="section__description">
                  We understand the importance of time and convenience, which is
                  why we offer fast and easy booking options, flexible rental
                  packages, and a customer-first approach.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div className=" mb-4">
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+92 303 4827076</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center mt-5">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
