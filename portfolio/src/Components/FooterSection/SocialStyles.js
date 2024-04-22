import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;

    padding: 5px;

    transition: all ease-in-out 250ms;
    
    &:hover {
        transform: scale(1.1);
    }


    border-radius: 100%;
`;

export const Image = styled.img`
    width: 30px;
    height: 30px;

`;