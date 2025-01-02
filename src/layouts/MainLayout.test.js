import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MainLayout from "./MainLayout";

// Mock NavbarComponent
jest.mock("../components/navbar/NavbarComponent", () => () => (
    <div data-testid="navbar">Navbar</div>
));

// Zamockowanie MovieList
jest.mock("../components/movieList/MovieList", () => ({ movies }) => (
    <div data-testid="movie-list">
        {movies.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
        ))}
    </div>
));

// Mock danych filmów
const mockMovies = [
    {
        id: "1",
        title: "Mocked Movie 1",
        summary: "Summary 1",
        imageURL: "https://via.placeholder.com/150",
        rating: 8.5,
    },
    {
        id: "2",
        title: "Mocked Movie 2",
        summary: "Summary 2",
        imageURL: "https://via.placeholder.com/150",
        rating: 7.2,
    },
];

// Mock fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockMovies),
    })
);

describe("MainLayout", () => {
    const mockMovies = [
        {
            id: "1",
            title: "Mocked Movie 1",
            summary: "Summary 1",
            imageURL: "https://via.placeholder.com/150",
            rating: 8.5,
        },
        {
            id: "2",
            title: "Mocked Movie 2",
            summary: "Summary 2",
            imageURL: "https://via.placeholder.com/150",
            rating: 7.2,
        },
    ];

    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockMovies),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks(); // Przywrócenie oryginalnych funkcji
    });

    test("fetches and displays movies", async () => {
        render(<MainLayout />);

        // Sprawdzenie komunikatu ładowania
        expect(screen.getByText("Loading movies...")).toBeInTheDocument();

        // Poczekaj na pojawienie się `MovieList` i jego zawartości
        await waitFor(() => {
            expect(screen.getByText("Mocked Movie 1")).toBeInTheDocument();
            expect(screen.getByText("Mocked Movie 2")).toBeInTheDocument();
        });

        // Sprawdzenie, czy komunikat ładowania zniknął
        expect(screen.queryByText("Loading movies...")).not.toBeInTheDocument();
    });
    test("renders navbar correctly", async () => {
        render(<MainLayout />);

        // Sprawdź, czy navbar jest w dokumencie
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });
});
