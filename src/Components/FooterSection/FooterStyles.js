import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 20px;

    width: 100%;
    height: 100px;

    gap: 150px;

    background-color: ${(theme) => theme.FooterBackground};
`;

export const CopyRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 25px;
        width: 25px;

        border-radius: 100%;

        padding: 5px;

        border: 1px solid black;
    }
`;

export const Name = styled.p`
    color: ${({theme}) => theme.fontColor};
`;

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 25px;
`;