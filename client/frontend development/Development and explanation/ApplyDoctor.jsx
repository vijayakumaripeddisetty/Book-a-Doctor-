import React from "react";
import axios from "axios";
import { message, Form, Input, TimePicker, Button } from "antd";
import { Card, Container, Row, Col } from "react-bootstrap";
import dayjs from "dayjs";

const { RangePicker } = TimePicker;

const ApplyDoctor = ({ userId }) => {
  // ===============================
  // Submit Form
  // ===============================

  const handleSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        userId,
        timings: [
          values.timings[0].format("HH:mm"),
          values.timings[1].format("HH:mm"),
        ],
      };

      const response = await axios.post(
        "http://localhost:8001/api/doctor/applydoctor",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Doctor application failed.");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="shadow border-0">
            <Card.Body>

              <h2 className="text-center text-primary mb-4">
                Apply as a Doctor
              </h2>

              <Form
                layout="vertical"
                onFinish={handleSubmit}
              >
