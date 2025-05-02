import axios from "axios";

const user_id = localStorage.getItem("id");

const API_URL = `http://localhost:3000/api/appointments/user/${user_id}`;
const FAMILY_API_URL = `http://localhost:3000/api/appointments/familynames/${user_id}`;

// Fetch all appointments
export const getAppointmentByUserId = async () => {
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
    console.error("Error fetching appointments:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserfamilyNames = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please login!");
    }
    const response = await axios.get(FAMILY_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Fetched family names: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Cannot get family names by user id:", error);
    throw error;
  }
};
