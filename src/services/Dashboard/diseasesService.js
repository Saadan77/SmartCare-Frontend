import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const fetchDiseaseStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching disease stats:", error);
    return [];
  }
};

export const fetchComparisonStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data/comparison`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comparison stats:", error);
    return [];
  }
};

export const fetchAllWeeksData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data/all-weeks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all weeks data:", error);
    return [];
  }
};
