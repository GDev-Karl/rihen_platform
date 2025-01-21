import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Function to retrieve user overview data
export const getUserOverview = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/overview/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while retrieving data.");
  }
};

