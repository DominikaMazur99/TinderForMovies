import styled, { css } from "styled-components";

export const MovieCard = styled.div`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    min-height: 90%;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
    background-color: #4a4a4a;

    ${({ $isMobile }) =>
        !$isMobile &&
        css`
            &:hover {
                cursor: pointer;
            }
        `}

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
        border-radius: 8px 8px 0 0;

        background-color: #000;
        ${({ $isMobile }) =>
            !$isMobile &&
            css`
                max-height: 200px;
            `}
    }

    h3,
    p {
        margin: 10px 0;
        color: #ffffff;
    }
`;

export const SwiperContainer = styled.div`
    height: 80vh;
    display: flex;
    overflow: hidden;
    padding: 10px;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transition: opacity 0.2s ease, background 0.2s ease;
    opacity: ${({ $swipeDistance }) => ($swipeDistance ? 1 : 0)};
    background: ${({ $swipeDirection }) =>
        $swipeDirection === "right"
            ? "rgba(255, 0, 0, 0.4)"
            : $swipeDirection === "left"
            ? "rgba(0, 255, 0, 0.4)"
            : "transparent"};
`;

export const SwipeInfo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
    transform: ${({ $swipeDistance }) =>
        `translateX(${$swipeDistance * 0.3}px)`};
`;

export const Arrow = styled.span`
    font-size: 2rem;
    margin: 0 10px;
`;
