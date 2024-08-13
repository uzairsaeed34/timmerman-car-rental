import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Halmet/Halmet";
import CommonSection from "../components/UI/CommonSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=100095129325374",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/uzair_037",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.linkedin.com/in/uz%CE%B1%C3%AFr-%C5%A1%CE%B1%CE%B5%CE%B5d",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      toast.error("Please fill in all fields!", { autoClose: 1000 });
    } else {
      toast.success("Message sent successfully!", { autoClose: 500 });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    style={{ width: "100%" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn mb-5" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  123 Johar Town, Lahore, Pakistan
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+92 303 4827076</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    uzairsaeed34k@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </section>
    </Helmet>
  );
};

export default Contact;
