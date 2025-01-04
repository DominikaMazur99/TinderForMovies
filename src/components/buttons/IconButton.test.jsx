import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";
import { FaCheck } from "react-icons/fa";

describe("IconButton Component", () => {
    const mockOnClick = jest.fn();

    test("renders button with content", () => {
        render(
            <IconButton
                content={<FaCheck data-testid="icon" />}
                tooltip="Approve"
                onClick={mockOnClick}
            />
        );

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    test("displays tooltip on hover", async () => {
        render(
            <IconButton
                content={<FaCheck />}
                tooltip="Approve"
                onClick={mockOnClick}
            />
        );

        const button = screen.getByRole("button");

        expect(screen.queryByText("Approve")).not.toBeInTheDocument();

        fireEvent.mouseEnter(button);

        expect(screen.getByText("Approve")).toBeInTheDocument();

        fireEvent.mouseLeave(button);

        expect(screen.queryByText("Approve")).not.toBeInTheDocument();
    });

    test("calls onClick handler when clicked", () => {
        render(
            <IconButton
                content={<FaCheck />}
                tooltip="Approve"
                onClick={mockOnClick}
            />
        );

        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
