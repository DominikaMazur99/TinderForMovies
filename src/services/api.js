import axios from "axios";

const BASE_URL = "https://dominikamazur99.github.io/api";

export const fetchData = async (url, method = "GET", data = null) => {
    const config = {
        method,
        url: `${BASE_URL}${url}`,
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
