import axios from "axios";

const API_URL = "http://localhost:3001/api/services/addSubGroup";

// Fetch all groups
export const getSubGroups = async () => {
  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching subgroups:", error);
  //   throw error;
  // }
};

// Add a new group
export const addSubGroup = async (subGroupData) => {
  try {
    const response = await axios.post(API_URL, subGroupData);
    return response.data;
  } catch (error) {
    console.error("Error adding sub group:", error);
    throw error;
  }
};
