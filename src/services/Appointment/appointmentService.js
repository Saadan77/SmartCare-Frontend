import axios from "axios";

const user_id = localStorage.getItem("id");

const API_URL = `http://localhost:3000/api/appointments/user/${user_id}`;

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
    console.error("Error fetching clients:", error.response?.data || error.message);
    throw error;
  }
};
