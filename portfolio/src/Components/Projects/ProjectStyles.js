import styled from "styled-components";


export const Container = styled.a`
    background-color: white;

    padding: 20px;

    border-radius: 5px;

    text-align: center;

    text-decoration: none;

    background-color: ${({ theme }) => theme.navBackground};

    color: ${({ theme }) => theme.fontColor};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.fontColor};
`;

export const ImageProject = styled.img`
    width: 450px;
    height: 280px;

    border-radius: 8px;

    @media (width <= 768px) {
        width: 380px;
        height: 250px;
    }


    box-shadow: 2px 2px 5px ${({ theme }) => theme.fontColor};
    
`;

export const ProjectTitle = styled.h1`
    margin: 10px 0;

    @media (width <= 768px) {
        font-size: 1.7rem;
    }
`;

export const TechUsed = styled.h3`
    @media (width <= 768px) {
        font-size: 1rem;
    }
`;

export const SourCode = styled.a`
    text-decoration: none;
`;