import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DialogComponent from "./DialogComponent";

const mockAcceptedMovies = [
    {
        id: "1",
        title: "Inception",
        summary: "A mind-bending thriller about dreams.",
        rating: 8.8,
    },
    {
        id: "2",
        title: "The Dark Knight",
        summary: "Batman faces Joker in Gotham City.",
        rating: 9.0,
    },
];

describe("DialogComponent", () => {
    const mockOnClose = jest.fn();

    test("renders when show is true", () => {
        render(
            <DialogComponent
                show={true}
                onClose={mockOnClose}
                acceptedMovies={mockAcceptedMovies}
            />
        );

        expect(screen.getByText("Accepted Movies")).toBeInTheDocument();
        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
    });

    test("displays fallback text when no accepted movies are present", () => {
        render(
            <DialogComponent
                show={true}
                onClose={mockOnClose}
                acceptedMovies={[]}
            />
        );

        expect(
            screen.getByText("Not any accepted films here...")
        ).toBeInTheDocument();
    });

    test("does not render when show is false", () => {
        render(
            <DialogComponent
                show={false}
                onClose={mockOnClose}
                acceptedMovies={mockAcceptedMovies}
            />
        );

        expect(screen.queryByText("Accepted Movies")).not.toBeInTheDocument();
    });

    test("calls onClose when clicking outside the dialog", () => {
        render(
            <DialogComponent
                show={true}
                onClose={mockOnClose}
                acceptedMovies={mockAcceptedMovies}
            />
        );

        const backdrop = screen.getByTestId("backdrop");

        fireEvent.mouseDown(backdrop);
        fireEvent.mouseUp(backdrop);
        fireEvent.click(backdrop);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClose when close button is clicked", () => {
        render(
            <DialogComponent
                show={true}
                onClose={mockOnClose}
                acceptedMovies={mockAcceptedMovies}
            />
        );

        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
