import styled from "styled-components";

export const MyProjects = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    width: 100%;

    margin-top: 50px;

    padding: 20px;

    @media (width <= 768px) {
        flex-direction: column;
    }
`;

export const Header = styled.h1`
    font-size: 3.8rem;

    text-align: center;

    color: ${({theme}) => theme.landingFontColor};

    @media (width <= 768px) {
        font-size: 2rem;
    }

    margin-top: 50px;
`;