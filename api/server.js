const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: "*",
    })
);
// Otwórz API dla wszystkich
app.use(express.json());

let movies = [
    {
        id: "1",
        title: "Avengers",
        summary: "Superhero movie",
        rating: 8.5,
    },
    {
        id: "2",
        title: "Interstellar",
        summary: "Sci-fi movie",
        rating: 9.1,
    },
];

// Endpoint GET dla rekomendacji
app.get("/api/recommendations", (req, res) => {
    res.json(movies);
});

// Endpoint PATCH do edycji filmu
app.patch("/api/recommendations/:id", (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;
    const movie = movies.find((m) => m.id === id);
    if (movie) {
        movie.rating = rating;
        res.json(movie);
    } else {
        res.status(404).json({ error: "Movie not found" });
    }
});

// Eksportuj aplikację (Vercel automatycznie obsłuży port)
module.exports = app;
