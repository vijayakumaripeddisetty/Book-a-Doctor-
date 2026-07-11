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

import { MDBInput } from "mdb-react-ui-kit";
import { message } from "antd";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    type: "user",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Register User
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.fullName ||
      !user.email ||
      !user.password ||
      !user.phone
    ) {
      message.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8001/api/user/register",
        user
      );

      setLoading(false);

      if (response.data.success) {
        message.success(response.data.message);
        navigate("/login");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);

      message.error(
        error.response?.data?.message || "Registration Failed"
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

      {/* Register Form */}

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card className="shadow border-0">
              <Card.Body className="p-5">

                <h2 className="text-center fw-bold mb-4">
                  Register
                </h2>

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <MDBInput
                      label="Full Name"
                      type="text"
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <MDBInput
                      label="Email"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <MDBInput
                      label="Password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <MDBInput
                      label="Phone Number"
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      Select Role
                    </Form.Label>

                    <Form.Select
                      name="type"
                      value={user.type}
                      onChange={handleChange}
                    >
                      <option value="user">
                        User
                      </option>

                      <option value="admin">
                        Admin
                      </option>
                    </Form.Select>
                  </Form.Group>
