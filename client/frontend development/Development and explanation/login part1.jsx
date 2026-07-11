import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Navbar,
  Nav,
  Spinner,
} from "react-bootstrap";

import {
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      message.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8001/api/user/login",
        user
      );

      setLoading(false);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.user)
        );

        message.success(response.data.message);

        if (response.data.user.type === "admin") {
          navigate("/adminhome");
        } else {
          navigate("/userhome");
        }
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);

      message.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <>
      {/* Navbar */}

      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>

          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-primary"
          >
            MediCareBook
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>

            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>

              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* Login Section */}

      <Container className="mt-5">

        <Row className="justify-content-center">

          <Col lg={5} md={8}>

            <Card className="shadow border-0">

              <Card.Body className="p-5">

                <div className="text-center mb-4">

                  <MDBIcon
                    fas
                    icon="user-circle"
                    size="4x"
                    className="text-primary mb-3"
                  />

                  <h2 className="fw-bold">
                    Login
                  </h2>

                  <p className="text-muted">
                    Login to your account
                  </p>

                </div>

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-4">

                    <MDBInput
                      label="Email"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />

                  </Form.Group>

                  <Form.Group className="mb-4">

                    <MDBInput
                      label="Password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />

                  </Form.Group>

                  <div className="d-grid">
