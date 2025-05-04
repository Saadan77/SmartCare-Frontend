import axios from "axios";
import { json } from "react-router-dom";

const user_id = localStorage.getItem("id");

const API_URL = `http://localhost:3000/api/appointments/user/${user_id}`;
const FAMILY_API_URL = `http://localhost:3000/api/appointments/familynames/${user_id}`;
const DOCTOR_API_URL = `http://localhost:3000/api/appointments/doctornames`;
const CREATE_API_URL = `http://localhost:3000/api/appointments/createAppointment/${user_id}`;

// Fetch all appointments
export const getAppointmentByUserId = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserfamilyNames = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please login!");
    }
    const response = await axios.get(FAMILY_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Cannot get family names by user id:", error);
    throw error;
  }
};

export const getDoctorNames = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Invalid ]oken. Pls Login!");
  }

  try {
    const response = await axios.get(DOCTOR_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Doctor Service: Error fetching doctor names:", error);
    throw error;
  }
};

export const createAppointmentService = async (appointmentData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Invalid token. Please login!");
  }

  try {
    const response = await axios.post(CREATE_API_URL, appointmentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Unable to create appointment: ", error);
  }
};
