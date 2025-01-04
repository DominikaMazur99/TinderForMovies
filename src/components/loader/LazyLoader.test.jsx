import { render, screen } from "@testing-library/react";
import LazyLoader from "./LazyLoader";
import { useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer", () => ({
    useInView: jest.fn(),
}));

describe("LazyLoader Component", () => {
    let mockOnLoadMore;

    beforeEach(() => {
        mockOnLoadMore = jest.fn();
    });

    test("renders loader correctly", () => {
        useInView.mockReturnValue({
            ref: jest.fn(),
            inView: false,
        });

        render(<LazyLoader onLoadMore={mockOnLoadMore} />);

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });

    test("calls onLoadMore when component is in view", () => {
        useInView.mockReturnValue({
            ref: jest.fn(),
            inView: true,
        });

        render(<LazyLoader onLoadMore={mockOnLoadMore} />);

        expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
    });

    test("does not call onLoadMore when component is not in view", () => {
        useInView.mockReturnValue({
            ref: jest.fn(),
            inView: false,
        });

        render(<LazyLoader onLoadMore={mockOnLoadMore} />);

        expect(mockOnLoadMore).not.toHaveBeenCalled();
    });
});
