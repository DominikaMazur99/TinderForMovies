import axios from "axios";

const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:3000/api";

export const fetchData = async (url, method = "GET", data = null) => {
    const config = {
        method,
        url: `${API_BASE_URL}${url}`,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
