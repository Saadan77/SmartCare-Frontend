import axios from "axios";

const BASE_API_URL = "http://localhost:3001/api";

// Fetch all organization types
export const getOrganizationTypes = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getOrganizationTypes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching organization types:", error);
    throw error;
  }
};

// Fetch all organization natures
export const getOrganizationNatures = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getOrganizationNatures`);
    return response.data;
  } catch (error) {
    console.error("Error fetching organization natures:", error);
    throw error;
  }
};

// Fetch all organization specialities
export const getOrganizationSpeciality = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getOrganizationSpeciality`);
    return response.data;
  } catch (error) {
    console.error("Error fetching organization speciality:", error);
    throw error;
  }
};

// Fetch all organization regions
export const getOrganizationRegions = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getOrganizationRegions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching organization regions:", error);
    throw error;
  }
};

// Fetch all organization categories
export const getOrganizationCategory = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getOrganizationCategory`);
    return response.data;
  } catch (error) {
    console.error("Error fetching organization category:", error);
    throw error;
  }
};
