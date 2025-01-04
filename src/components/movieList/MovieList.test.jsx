import { render, screen, fireEvent, act } from "@testing-library/react";
import MovieList from "./MovieList";

jest.mock("./movieItem/MovieItem", () => ({ movie, onAccept, onReject }) => (
    <div data-testid="movie-item">
        <img src={movie.imageURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>
        <p>Rating: {movie.rating}</p>
        <button onClick={() => onAccept(movie.id)}>Accept</button>
        <button onClick={() => onReject(movie.id)}>Reject</button>
    </div>
));

jest.mock("../loader/LazyLoader", () => ({ onLoadMore }) => (
    <div data-testid="lazy-loader" onClick={onLoadMore}>
        Load More
    </div>
));

const mockMovies = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    summary: "A movie description",
    rating: (Math.random() * 4 + 6).toFixed(1),
    imageURL: "https://via.placeholder.com/150",
}));

describe("MovieList Component", () => {
    test("renders initial 8 movies", () => {
        render(
            <MovieList
                movies={mockMovies}
                onAccept={jest.fn()}
                onReject={jest.fn()}
            />
        );

        const movieItems = screen.getAllByTestId("movie-item");
        expect(movieItems.length).toBe(8);
    });

    test("renders LazyLoader when more movies are available", () => {
        render(
            <MovieList
                movies={mockMovies}
                onAccept={jest.fn()}
                onReject={jest.fn()}
            />
        );

        const lazyLoader = screen.getByTestId("lazy-loader");
        expect(lazyLoader).toBeInTheDocument();
    });

    test("does not render LazyLoader when all movies are shown", () => {
        render(
            <MovieList
                movies={mockMovies.slice(0, 8)}
                onAccept={jest.fn()}
                onReject={jest.fn()}
            />
        );

        const lazyLoader = screen.queryByTestId("lazy-loader");
        expect(lazyLoader).not.toBeInTheDocument();
    });

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test("loads more movies when LazyLoader is clicked", async () => {
        render(
            <MovieList
                movies={mockMovies}
                onAccept={jest.fn()}
                onReject={jest.fn()}
            />
        );

        let movieItems = screen.getAllByTestId("movie-item");
        expect(movieItems.length).toBe(8);

        const lazyLoader = screen.getByTestId("lazy-loader");

        await act(async () => {
            fireEvent.click(lazyLoader);
            jest.advanceTimersByTime(1000);
        });

        movieItems = screen.getAllByTestId("movie-item");
        expect(movieItems.length).toBeGreaterThan(8);
    });

    test("calls onAccept when accept button is clicked", () => {
        const onAcceptMock = jest.fn();
        render(
            <MovieList
                movies={mockMovies}
                onAccept={onAcceptMock}
                onReject={jest.fn()}
            />
        );

        const acceptButton = screen.getAllByText("Accept")[0];
        fireEvent.click(acceptButton);

        expect(onAcceptMock).toHaveBeenCalledWith(1);
    });

    test("calls onReject when reject button is clicked", () => {
        const onRejectMock = jest.fn();
        render(
            <MovieList
                movies={mockMovies}
                onAccept={jest.fn()}
                onReject={onRejectMock}
            />
        );

        const rejectButton = screen.getAllByText("Reject")[0];
        fireEvent.click(rejectButton);

        expect(onRejectMock).toHaveBeenCalledWith(1);
    });
});
