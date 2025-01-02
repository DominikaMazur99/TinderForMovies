import axios from "axios";

// Mockowane dane
const mockData = [
    {
        id: "1and3011",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        title: "Avengers Endgame",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 5.3,
    },
    {
        id: "2and3012",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/8/8a/Inception_ver3.jpg",
        title: "Inception",
        summary: "A mind-bending thriller about dreams within dreams.",
        rating: 8.8,
    },
];

// Interceptor Żądania
axios.interceptors.request.use((config) => {
    console.log("Intercepting request to:", config.url);

    if (config.url === "/movies") {
        console.log("Mocking /movies request...");

        // Symulujemy odpowiedź, zanim żądanie dotrze do serwera
        return Promise.resolve({
            data: mockData,
            status: 200,
            statusText: "OK",
            headers: {
                "Content-Type": "application/json",
            },
            config,
        });
    }
    return config;
});
