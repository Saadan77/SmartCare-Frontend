import axios from "axios";

const API_URL = "http://localhost:3001/api/organization/ManageStandardOrganization";

// Fetch all standard organizations
export const getAllStandardOrganizations = async () => {
  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching standard organizations:", error);
  //   throw error;
  // }
};

// Add a new standard organizations
export const addStandardOrganization = async (standardOrganizationData) => {
  try {
    const response = await axios.post(API_URL, standardOrganizationData);
    return response.data;
  } catch (error) {
    console.error("Error adding standard organizations:", error);
    throw error;
  }
};
