import axios from "axios";

const API_URL = "http://localhost:3001/api/employee/searchEmployee";

export const searchEmployee = async (params) => {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== "")
    );

    const response = await axios.get(API_URL, { params: filteredParams });
    return response.data;
  } catch (error) {
    console.error("Service: Error searching employees:", error);
    throw error;
  }
};
