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

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;

    @media(width <= 768px) {
      gap: 15px;
    }
`;

export const Source = styled.a`
    text-decoration: none; 
    
    cursor: pointer;

    margin-top: 48px;
`;

export const GithubImg = styled.img`
    width: 50px;
    height: 50px;


    transition: all ease-in-out 250ms;
    
    &:hover {
        transform: scale(1.1);
    }

    @media(width <= 768px) {
        width: 30px;
        height: 30px;
    }
`;