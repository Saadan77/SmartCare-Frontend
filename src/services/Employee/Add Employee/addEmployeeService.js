import axios from "axios";

const API_URL = "http://localhost:3001/api/employee/addEmployee";

// Fetch all groups
// export const getAllEmployees = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching employees:", error);
//     throw error;
//   }
// };

// Add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error("Service: Error adding employee:", error);
    throw error;
  }
};
