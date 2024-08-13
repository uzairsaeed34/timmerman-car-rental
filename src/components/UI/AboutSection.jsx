import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">
                Welcome to Timmerman Car Rental Service
              </h2>
              <p className="section__description">
                Welcome to Timmerman car rental service, where convenience meets
                luxury. Whether you're in town for business, leisure, or just
                need a reliable vehicle for a short-term stay, we offer a wide
                range of high-quality cars to suit your needs. Our commitment is
                to provide you with a seamless rental experience, from the
                moment you reserve your car to when you return it.
                <br />
                We understand that time is valuable, which is why we offer fast,
                easy booking and 24/7 customer support. Our fleet is
                meticulously maintained to ensure your safety and comfort on the
                road.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Wide selection of
                  vehicles to suit every need and budget.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Easy and
                  hassle-free online booking process.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> 24/7 customer
                  support to assist you whenever you need.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Regularly
                  maintained vehicles for your saftey.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
