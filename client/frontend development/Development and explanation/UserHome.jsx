import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Badge } from "antd";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import DoctorList from "../components/DoctorList";
import Notification from "../components/Notification";
import ApplyDoctor from "./ApplyDoctor";

const UserHome = () => {
  const navigate = useNavigate();

  // -------------------------------
  // State Variables
  // -------------------------------

  const [loading, setLoading] = useState(false);

  const [userdata, setUserdata] = useState(null);

  const [doctors, setDoctors] = useState([]);

  const [activeMenuItem, setActiveMenuItem] = useState("home");

  // -------------------------------
  // Get User from Local Storage
  // -------------------------------

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (user) {
      setUserdata(user);
    }
  }, []);

  // -------------------------------
  // Fetch Updated User Data
  // -------------------------------

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/user/getuserdata",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setUserdata(response.data.user);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.user)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------
  // Fetch Doctors
  // -------------------------------

  const getDoctors = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8001/api/doctor/getalldoctors",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setLoading(false);

      if (response.data.success) {
        setDoctors(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Unable to fetch doctors.");
    }
  };

  // -------------------------------
  // Load Data on Component Mount
  // -------------------------------

  useEffect(() => {
    getUserData();
    getDoctors();
  }, []);

  // -------------------------------
  // Logout
  // -------------------------------

  const handleLogout = () => {
    localStorage.clear();

    message.success("Logged out successfully.");

    navigate("/");
  };
