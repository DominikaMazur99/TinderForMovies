import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const DialogContainer = styled.div`
    background-color: #6c6c6c;
    color: #ffffff;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0;
    width: 80%;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
`;

export const DialogHeader = styled.div`
    padding: 20px 20px 0 20px;
    background-color: #4a4a4a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const DialogContent = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;
