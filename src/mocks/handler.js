import { http } from "msw";

// const movies = [
//     {
//         id: "1",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
//         title: "Avengers: Endgame",
//         summary:
//             "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
//         rating: 8.4,
//     },
//     {
//         id: "2",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Star Wars: The Force Awakens",
//         summary:
//             "Three decades after the Empire's defeat, a new threat arises and the Resistance must face the First Order.",
//         rating: 7.8,
//     },
//     {
//         id: "3",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Black Panther",
//         summary:
//             "T'Challa, the king of Wakanda, must rise to defend his kingdom from internal and external threats.",
//         rating: 7.3,
//     },
//     {
//         id: "4",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Spider-Man: No Way Home",
//         summary:
//             "Spider-Man's identity is revealed, bringing new threats from the multiverse.",
//         rating: 8.5,
//     },
//     {
//         id: "5",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Joker",
//         summary:
//             "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
//         rating: 8.2,
//     },
//     {
//         id: "6",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Inception",
//         summary:
//             "A thief who enters people's dreams is given a task to plant an idea in a target's subconscious.",
//         rating: 8.8,
//     },
//     {
//         id: "7",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Dune",
//         summary:
//             "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
//         rating: 8.1,
//     },
//     {
//         id: "8",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Interstellar",
//         summary:
//             "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
//         rating: 8.6,
//     },
//     {
//         id: "9",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Doctor Strange in the Multiverse of Madness",
//         summary:
//             "Dr. Stephen Strange navigates the mind-bending and dangerous alternate realities of the multiverse.",
//         rating: 7.4,
//     },
//     {
//         id: "10",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Avatar: The Way of Water",
//         summary:
//             "Jake Sully and Ney'tiri must protect their family from new threats on Pandora.",
//         rating: 8.0,
//     },
//     {
//         id: "11",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "The Batman",
//         summary:
//             "Batman ventures into Gotham's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
//         rating: 7.9,
//     },
//     {
//         id: "12",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "The Matrix Resurrections",
//         summary:
//             "Neo returns to the Matrix and must confront a new enemy threatening the human race.",
//         rating: 6.7,
//     },
//     {
//         id: "13",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Tenet",
//         summary:
//             "A secret agent embarks on a mission to prevent World War III using a mysterious time inversion technology.",
//         rating: 7.5,
//     },
//     {
//         id: "14",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Parasite",
//         summary:
//             "A poor family schemes to become employed by a wealthy family by infiltrating their household.",
//         rating: 8.6,
//     },
//     {
//         id: "15",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Guardians of the Galaxy Vol. 3",
//         summary:
//             "The Guardians embark on one last mission to protect the galaxy and one of their own.",
//         rating: 8.1,
//     },
//     {
//         id: "16",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Oppenheimer",
//         summary:
//             "A biographical film exploring the life of J. Robert Oppenheimer and the development of the atomic bomb.",
//         rating: 8.9,
//     },
//     {
//         id: "17",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Barbie",
//         summary:
//             "Barbie embarks on a journey of self-discovery and exploration beyond the boundaries of her perfect world.",
//         rating: 7.2,
//     },
//     {
//         id: "18",
//         imageURL:
//             "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
//         title: "Fast X",
//         summary:
//             "Dom Toretto and his family face the most dangerous adversary they've ever encountered.",
//         rating: 6.5,
//     },
// ];

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
        id: "301xyz12",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_No_Way_Home_poster.jpg",
        title: "Spider-Man: No Way Home",
        summary:
            "Spider-Man faces multiversal foes after his identity is revealed.",
        rating: 9.1,
    },
    {
        id: "4401opq",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/1/1f/Inception_ver3.jpg",
        title: "Inception",
        summary:
            "A thief who enters dreams must plant an idea into the mind of a CEO.",
        rating: 8.8,
    },
    {
        id: "5501lmn",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/2/22/The_Batman_%282022_film%29_poster.jpg",
        title: "The Batman",
        summary:
            "Batman investigates corruption in Gotham and faces the Riddler.",
        rating: 7.9,
    },
    {
        id: "6601uvw",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/1/18/Interstellar_film_poster.jpg",
        title: "Interstellar",
        summary:
            "A group of astronauts travels through a wormhole in search of a new home for humanity.",
        rating: 8.6,
    },
    {
        id: "7701efg",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/d/d2/Avatar_2009_poster.jpg",
        title: "Avatar",
        summary:
            "A paraplegic marine dispatched to the moon Pandora becomes torn between following orders and protecting its world.",
        rating: 7.8,
    },
    {
        id: "8801rst",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/b/bc/Black_Panther_%28film%29_poster.jpg",
        title: "Black Panther",
        summary:
            "T'Challa returns to Wakanda to take his place as king after his father's death.",
        rating: 7.3,
    },
    {
        id: "9901hij",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg",
        title: "Guardians of the Galaxy",
        summary:
            "A group of intergalactic criminals must work together to stop a fanatical warrior.",
        rating: 8.0,
    },
    {
        id: "101klop",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
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
