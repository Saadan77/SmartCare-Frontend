import axios from "axios";

const API_URL = "http://localhost:3000/api/addClient";

// Fetch all clients with authentication
export const getAllClients = async () => {
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
    console.error("Error fetching clients:", error.response?.data || error.message);
    throw error;
  }
};

// Add a new client
export const addClient = async (clientData) => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the stored token

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    const response = await axios.post(API_URL, clientData, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach token
        "Content-Type": "application/json", // Ensure correct content type
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding client:", error.response?.data || error.message);
    throw error;
  }
};
