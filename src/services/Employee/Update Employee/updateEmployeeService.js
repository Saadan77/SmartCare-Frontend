import axios from "axios";

const API_URL = "http://localhost:3001/api/employee/updateEmployee";

export const updateEmployee = async (employeeUpdatedData) => {
  try {
    const response = await axios.post(API_URL, employeeUpdatedData);
    return response.data;
  } catch (error) {
    console.error("Service: Error updating employees:", error);
    throw error;
  }
};
