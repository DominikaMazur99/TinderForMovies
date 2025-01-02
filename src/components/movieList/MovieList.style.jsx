import styled from "styled-components";

export const MovieCard = styled.div`
    background-color: #4a4a4a;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: contain;
        border-radius: 8px;
        background-color: #000;
    }

    h3,
    p {
        margin: 10px 0;
        color: #ffffff;
    }
`;
