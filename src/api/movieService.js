import axios from "axios";

export const getMovies = async () => {
    try {
        const response = await axios.get("/movies");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};
