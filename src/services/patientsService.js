import axios from "axios";

const API_URL = "http://localhost:3000/api/patients";

export const getPatients = async () => {
  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching patients:", error);
  //   throw error;
  // }
};

export const addPatient = async (patientData) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(API_URL, patientData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    // console.error(
    //   "Error adding patient:",
    //   error.response?.data || error.message
    // );
    throw error;
  }
};
