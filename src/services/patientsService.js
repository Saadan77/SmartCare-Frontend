import axios from "axios";

const API_URL = "http://localhost:3001/api/patients";

// Fetch all patients
export const getPatients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

// Add a new patient
// export const addPatient = async (patientData) => {
//   try {
//     const response = await axios.post(API_URL, patientData);
//     return response.data;
//   } catch (error) {
//     console.error('Error adding patient:', error);
//     throw error;
//   }
// };
