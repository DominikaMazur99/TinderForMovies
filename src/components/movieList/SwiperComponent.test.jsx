import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import SwiperComponent from "./SwiperComponent";

const mockMovies = [
    { id: "1", title: "Movie 1", imageURL: "https://via.placeholder.com/150" },
    { id: "2", title: "Movie 2", imageURL: "https://via.placeholder.com/150" },
];

const mockOnAccept = jest.fn();
const mockOnReject = jest.fn();

describe("SwiperComponent", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("swipes right to reject the movie", async () => {
        render(
            <SwiperComponent
                movies={mockMovies}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        const swiper = screen.getByTestId("swiper");

        fireEvent.touchStart(swiper, {
            touches: [{ clientX: 200 }],
        });

        fireEvent.touchMove(swiper, {
            touches: [{ clientX: 400 }],
        });

        fireEvent.touchEnd(swiper, {
            changedTouches: [{ clientX: 450 }],
        });

        await waitFor(() => {
            expect(mockOnReject).toHaveBeenCalledWith("1");
        });
    });

    test("swipes left to accept the movie", async () => {
        render(
            <SwiperComponent
                movies={mockMovies}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        const swiper = screen.getByTestId("swiper");

        fireEvent.touchStart(swiper, {
            touches: [{ clientX: 400 }],
        });

        fireEvent.touchMove(swiper, {
            touches: [{ clientX: 200 }],
        });

        fireEvent.touchEnd(swiper, {
            changedTouches: [{ clientX: 150 }],
        });

        await waitFor(() => {
            expect(mockOnAccept).toHaveBeenCalledWith("1");
        });
    });

    test("does not reject if swipe is too short", async () => {
        render(
            <SwiperComponent
                movies={mockMovies}
                onAccept={mockOnAccept}
                onReject={mockOnReject}
            />
        );

        const swiper = screen.getByTestId("swiper");

        fireEvent.touchStart(swiper, {
            touches: [{ clientX: 200 }],
        });

        fireEvent.touchMove(swiper, {
            touches: [{ clientX: 210 }],
        });

        fireEvent.touchEnd(swiper, {
            changedTouches: [{ clientX: 220 }],
        });

        await waitFor(() => {
            expect(mockOnReject).not.toHaveBeenCalled();
        });
    });
});
