import React, { useState } from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/all-images/logo.png";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email!", { autoClose: 500 });
    } else {
      toast.success("subscribed successfully!", { autoClose: 500 });
    }
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={Logo} alt="car-logo" className="logo" />
                  <span>Car Rental</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              we specialize in providing top-notch car rental services tailored
              to your needs. Whether you're planning a city tour, need an
              airport transfer, or require a reliable vehicle for daily use, our
              diverse fleet and seamless booking process ensure you travel with
              ease.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Johar Town, Lahore, Pakistan</p>
              <p className="office__info">Phone: +92 303-482-7076</p>

              <p className="office__info">Email: uzairsaeed34k@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description text-black">
                Subscribe our newsletter
              </p>
              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span onClick={handleSubmit} style={{ cursor: "pointer" }}>
                  <i className="ri-send-plane-line"></i>
                </span>
                <ToastContainer />
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4 text-black">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed
                by Muhammad Uzair. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
