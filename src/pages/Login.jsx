import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/home");
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center ">
        <Col className="card">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Login
            </Button>
          </Form>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
