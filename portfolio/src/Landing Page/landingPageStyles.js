import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 200px;

    padding: 10px 20px;
`;

export const LocationInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;
`;

export const Location = styled.p`
    width: 50px;
`;

export const GlobeImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    width: 60px;
    height: 60px;

    border-radius: 100%;

    background-color: grey;
`;

export const Globe = styled.img`
    width: 35px;
    height: 35px;
`;

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    font-size: 2rem;
`;

export const SubHeader = styled.div`
    font-size: 1rem;
`;
