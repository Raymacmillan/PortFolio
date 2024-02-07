import styled from "styled-components";

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 25px;

    gap: 30px;

    @media(width <= 768px) {
        gap: 20px;
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;

    @media(width <= 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const Area = styled.h1`
    font-size: 1.5rem;

    @media(width <= 768px) {
        font-size: 1rem;
    }
`; 
 
export const Content = styled.p`
    font-size: 1rem;

    text-align: center;

    @media(width <= 768px) {
        font-size: 0.8rem;
    }
`;