import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    max-width: 1200px;
    padding-bottom: 70px;
`;

export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const MovieCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.03);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    h3,
    p {
        margin: 10px;
    }
`;
