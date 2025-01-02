import styled from "styled-components";

export const MovieCard = styled.div`
    background-color: #4a4a4a; /* Ciemnoszare tło */
    border: 1px solid #3a3a3a; /* Subtelny obramowanie */
    border-radius: 10px; /* Zaokrąglone rogi */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Delikatny cień */
    padding: 20px; /* Wewnętrzny margines */
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px); /* Lekko podnosi kartę przy najechaniu */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Mocniejszy cień podczas hovera */
    }

    img {
        width: 100%;
        border-radius: 8px; /* Zaokrąglenie dla obrazka */
    }

    h3,
    p {
        margin: 10px 0;
        color: #ffffff; /* Białe teksty na ciemnym tle */
    }
`;
