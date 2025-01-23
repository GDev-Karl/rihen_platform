import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/"
// Function to retrieve user overview data
export const getUserOverview = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/overview/${userId}`);
    return response.data; // Return the data if the request is successful
  } catch (error) {
    if (error.message === "Network Error") {
      // Return a fallback default data in case of a network error
      return [
        { title: "Courses in progress", value: 0 },
        { title: "Active Projects", value: 0 },
        { title: "Hours Learning", value: "0h 0m" },
        { title: "Community score", value: 0 },
      ];
    }
    //handle other errors
    throw new Error(error.message || "An error occurred while fetching data");
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data }; // Return success and data
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message || "Invalid username or password." };
    }
  } catch (error) {
    return { success: false, message: "Unable to connect to the server. Please try again later." };
  }
};