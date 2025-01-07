import { http } from "msw";

let movies = [
    {
        id: "1and3011",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        title: "Avengers Endgame",
        summary:
            "The Avengers assemble once more to undo the chaos caused by Thanos.",
        rating: 5.3,
    },
    {
        id: "2301abc",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
        title: "Star Wars: Episode VII - The Force Awakens",
        summary:
            "A new threat rises in the galaxy as Rey discovers her connection to the Force.",
        rating: 8.2,
    },

    {
        id: "6601uvw",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        title: "Interstellar",
        summary:
            "A group of astronauts travels through a wormhole in search of a new home for humanity.",
        rating: 8.6,
    },
    {
        id: "7701efg",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        title: "Avatar",
        summary:
            "A paraplegic marine dispatched to the moon Pandora becomes torn between following orders and protecting its world.",
        rating: 7.8,
    },
    {
        id: "101klop",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        title: "Doctor Strange in the Multiverse of Madness",
        summary: "Doctor Strange explores the multiverse to protect humanity.",
        rating: 7.2,
    },
];

let acceptedMovies = [];

export const handler = [
    http.get("/api/recommendations", ({ request }) => {
        return new Response(JSON.stringify(movies), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }),
    http.get("/api/recommendations/accepted", () => {
        return new Response(JSON.stringify(acceptedMovies), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }),
    http.patch("/api/recommendations/:id", async ({ params, request }) => {
        const { id } = params;
        const { status } = await request.json();

        const movieIndex = movies.findIndex((movie) => movie.id === id);

        if (movieIndex === -1) {
            return new Response(
                JSON.stringify({ message: "Movie not found" }),
                { status: 404 }
            );
        }

        const movie = movies[movieIndex];

        if (status === "accepted") {
            acceptedMovies.push(movie);
        }

        // Usuń film z listy głównej (accepted/rejected)
        movies = movies.filter((movie) => movie.id !== id);

        return new Response(JSON.stringify(movie), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    }),
];
