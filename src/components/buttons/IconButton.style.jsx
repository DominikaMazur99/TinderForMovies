import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`;

export const Tooltip = styled.div`
    position: absolute;
    bottom: 120%; /* Nad przyciskiem */
    left: 50%;
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
