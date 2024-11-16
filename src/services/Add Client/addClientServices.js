import axios from "axios";

const API_URL = "http://localhost:3001/api/addClient";

// Fetch all groups
export const getAllClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

// Add a new client
export const addClient = async (clientData) => {
  try {
    const response = await axios.post(API_URL, clientData);
    return response.data;
  } catch (error) {
    console.error("Error adding client:", error);
    throw error;
  }
};
