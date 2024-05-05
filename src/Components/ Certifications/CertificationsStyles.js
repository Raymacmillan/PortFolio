import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    gap: 60px 0;

    padding: 15px;

    margin-top: 1000px;


    transition: ease-in-out 250ms;

    background-color: ${({theme}) => theme.phoneBackgroundColor};

    border-radius: 2px;

@media(width <= 768px) {
        padding: 10px;
    }
`;

export const Header = styled.div`
    margin-bottom: 50px;
    font-size: 3.5rem;


    color: ${({ theme }) => theme.landingFontColor};

    @media(width <= 768px) {
        font-size: 2rem;
    }
`;

export const FrontEnd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 100px;

    @media(width <= 768px) {
        flex-direction: column;
    }
`;


export const Network = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 100px;

    @media(width <= 768px) {
        flex-direction: column;
    }
`;




