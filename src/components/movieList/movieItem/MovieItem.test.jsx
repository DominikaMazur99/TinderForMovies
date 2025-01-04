import { render, screen, fireEvent } from "@testing-library/react";
import MovieItem from "./MovieItem";

describe("MovieItem Component", () => {
    const mockMovie = {
        id: "1",
        title: "Test Movie",
        summary: "This is a test summary",
        imageURL: "https://via.placeholder.com/150",
        rating: 8.2,
    };

    const mockOnAccept = jest.fn();
    const mockOnReject = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("renders movie details correctly", () => {
        render(
            <MovieItem
                movie={mockMovie}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );
        const image = screen.getByRole("img", {
            name: /test movie/i,
        });

        expect(image).toHaveAttribute("src", mockMovie.imageURL);
        expect(image).toHaveAttribute("alt", mockMovie.title);

        expect(screen.getByText("Test Movie")).toBeInTheDocument();
        expect(screen.getByText("This is a test summary")).toBeInTheDocument();
        expect(screen.getByText("8.2")).toBeInTheDocument();
    });

    test("renders accept and reject buttons", () => {
        render(
            <MovieItem
                movie={mockMovie}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        expect(
            screen.getByRole("button", { name: /accept/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /reject/i })
        ).toBeInTheDocument();
    });

    test("calls onAccept when accept button is clicked", () => {
        render(
            <MovieItem
                movie={mockMovie}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        const acceptButton = screen.getByRole("button", { name: /accept/i });
        fireEvent.click(acceptButton);

        expect(mockOnAccept).toHaveBeenCalledTimes(1);
        expect(mockOnAccept).toHaveBeenCalledWith("1");
    });

    test("calls onReject when reject button is clicked", () => {
        render(
            <MovieItem
                movie={mockMovie}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        const rejectButton = screen.getByRole("button", { name: /reject/i });
        fireEvent.click(rejectButton);

        expect(mockOnReject).toHaveBeenCalledTimes(1);
        expect(mockOnReject).toHaveBeenCalledWith("1");
    });

    test("does not render buttons if type is accepted", () => {
        render(
            <MovieItem
                movie={mockMovie}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
                type="accepted"
            />
        );

        expect(
            screen.queryByRole("button", { name: /accept/i })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: /reject/i })
        ).not.toBeInTheDocument();
    });
});
