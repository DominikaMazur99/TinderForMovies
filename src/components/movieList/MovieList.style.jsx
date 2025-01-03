import styled, { css } from "styled-components";

export const MovieCard = styled.div`
    display: grid;
    grid-template-rows: 4fr 1fr;
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
    alignitems: center;
    justifycontent: center;
    overflow: hidden;
    padding: 10px;
`;
