import axios from "axios";

const API_URL = "http://localhost:3001/api/services/addGroup";

// Fetch all groups
export const getGroups = async () => {
  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   // console.error("Error fetching groups:", error);
  //   throw error;
  // }
};

// Add a new group
export const addGroup = async (groupData) => {
  try {
    const response = await axios.post(API_URL, groupData);
    return response.data;
  } catch (error) {
    console.error("Error adding group:", error);
    throw error;
  }
};
