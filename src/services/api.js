import axios from "axios";

const BASE_URL = "https://rihen.seedsoftengine.com/";

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
