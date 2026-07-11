import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import heroImage from "../assets/p3.png";

const Home = () => {
  return (
    <>
      {/* ================= Navbar ================= */}

      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand className="fw-bold text-primary fs-3">
            MediCareBook
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
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

      {/* ================= Hero Section ================= */}

      <Container className="py-5">
        <Row className="align-items-center">

          <Col md={6}>
            <img
              src={heroImage}
              alt="Doctor"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={6}>
            <h1 className="display-4 fw-bold text-primary">
              Book Your Doctor Appointment Online
            </h1>

            <p className="lead mt-4">
              Find experienced doctors, book appointments instantly,
              upload medical documents, and manage your healthcare
              all in one place.
            </p>

            <Link to="/login">
              <Button size="lg" variant="primary">
                Book Your Doctor
              </Button>
            </Link>
          </Col>

        </Row>
      </Container>

      {/* ================= About Section ================= */}

      <section className="bg-light py-5">

        <Container>

          <h2 className="text-center fw-bold mb-4">
            About Us
          </h2>

          <Row>

            <Col md={6}>
              <h4>Who We Are</h4>

              <p>
                MediCareBook is an online doctor appointment booking
                platform designed to simplify healthcare access.
                Patients can search for doctors, schedule appointments,
                upload medical reports, and receive notifications.
              </p>
            </Col>

            <Col md={6}>
              <h4>Our Mission</h4>

              <p>
                Our mission is to bridge the gap between doctors
                and patients by providing a secure, user-friendly,
                and efficient online healthcare appointment system.
              </p>
            </Col>

          </Row>

        </Container>

      </section>

      {/* ================= Services ================= */}

      <Container className="py-5">

        <h2 className="text-center mb-5 fw-bold">
          Our Services
        </h2>

        <Row>

          <Col md={4} className="mb-4">

            <Card className="shadow border-0 h-100">

              <Card.Body>

                <Card.Title className="text-primary">
                  Appointment Booking
                </Card.Title>

                <Card.Text>
                  Book appointments with experienced doctors
                  anytime from anywhere.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          <Col md={4} className="mb-4">

            <Card className="shadow border-0 h-100">

              <Card.Body>

                <Card.Title className="text-success">
                  Medical Records
                </Card.Title>

                <Card.Text>
                  Upload prescriptions, reports, and
                  medical documents securely.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          <Col md={4} className="mb-4">

            <Card className="shadow border-0 h-100">

              <Card.Body>

                <Card.Title className="text-danger">
                  Notifications
                </Card.Title>

                <Card.Text>
                  Receive appointment confirmations,
                  reminders, and doctor updates instantly.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

      {/* ================= Why Choose Us ================= */}

      <section className="bg-primary text-white py-5">

        <Container>

          <h2 className="text-center mb-5">
            Why Choose Us?
          </h2>

          <Row>

            <Col md={3} className="text-center">

              <h3>100+</h3>

              <p>Verified Doctors</p>

            </Col>

            <Col md={3} className="text-center">

              <h3>5000+</h3>

              <p>Happy Patients</p>

            </Col>

            <Col md={3} className="text-center">

              <h3>24/7</h3>

              <p>Support</p>

            </Col>

            <Col md={3} className="text-center">

              <h3>Safe</h3>

              <p>Secure Platform</p>

            </Col>

          </Row>

        </Container>

      </section>

      {/* ================= Contact ================= */}

      <Container className="py-5">

        <h2 className="text-center mb-4 fw-bold">
          Contact Us
        </h2>

        <Row>

          <Col md={6}>

            <h5>Email</h5>

            <p>support@medicarebook.com</p>

            <h5>Phone</h5>

            <p>+91 9876543210</p>

            <h5>Address</h5>

            <p>Hyderabad, Telangana, India</p>

          </Col>

          <Col md={6}>

            <iframe
              title="map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>

          </Col>

        </Row>

      </Container>
    </>
  );
};

export default Home;
