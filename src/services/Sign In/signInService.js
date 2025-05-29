import axios from "axios";

const prediction_API_URL = "http://localhost:3000/prediction-notification";
const disease_API_URL = "http://localhost:3000/disease-notification";

export const getPredictionNotificaion = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    const response = await axios.get(prediction_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending prediction email:", error.response?.data || error.message);
    throw error;
  }
};

export const getDiseaseNotificaion = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
    const response = await axios.get(disease_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending disease email:", error.response?.data || error.message);
    throw error;
  }
};
