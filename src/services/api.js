import axios from "axios";

export const fetchData = async (url, method = "GET", data = null) => {
    const config = {
        method,
        url: `http://localhost:3000/api${url}`,
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
