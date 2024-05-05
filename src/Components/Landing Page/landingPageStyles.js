import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 200px;

    padding: 10px 20px;

    height: 100vh;


    @media(width <= 768px) {
        justify-content: center;
        margin-top: 50px;
    }


`;

export const LocationInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    width: 200px;
    height: 100px;

    padding: 10px 20px;

    border-radius: 0 80px 80px 0;

    background-color: ${({theme}) => theme.locationColor};

    margin-left: -20px;

    @media(width <= 768px) {
        display: none;
    }
`;

export const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 50px;
`;

export const Location = styled.p`
    font-family: "Inter", "open sans";
    width: 50px;

    color: ${({theme}) => theme.locationFontColor};
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
    font-size: 6rem;

    font-family: "Inter", "open sans";


    color: ${({theme}) => theme.landingFontColor};

    @media(width <= 768px) {
        font-size: 2.15rem;
    }
`;

export const SubHeader = styled.div`
 font-family: "Inter", "open sans";

 color: ${({theme}) => theme.landingFontColor};
    font-size: 2rem;

    @media(width <= 768px) {
        font-size: 0.9rem;
    }
`;

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 60px;

    border-radius: 12px;

    padding: 5px;

    border: 2px solid ${({theme}) => theme.fontColor};

    margin-top: 200px;

    @media(width <= 768px) {
        width: 35px;
        height: 40px;
    }
`;

export const Arrow = styled.img`
    width: 40px;
    height: 40px;

    cursor: wait;

    @media(width <= 768px) {
        width: 30px;
        height: 30px;
    }

`;
