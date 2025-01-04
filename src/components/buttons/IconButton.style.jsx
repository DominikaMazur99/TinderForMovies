import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform 0.2s ease-in-out;
    }
`;

export const Tooltip = styled.div`
    position: absolute;
    bottom: 30%;
    right: 10%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
    opacity: 0.9;
`;
