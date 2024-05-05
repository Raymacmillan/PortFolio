import styled, { keyframes } from "styled-components";


const appear = keyframes`
    from {
        transform: scale(0.4);
    }to {
        transform: scale(1);
    }

`


export const Image = styled.img`
    width: 600px;

    border-radius: 5px;

    transition: all ease-in-out 300ms;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
    }

    @media(width <= 768px) {
        width: 350px;
    }
`;

export const ZoomIn = styled.button`
    display: none;

    @media(width <= 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        outline: none;

        width: 50px;
        height: 25px;

        background-color: black;


        font-size: 1.8rem;
        color: white;
    }
`;

export const ZoomOut = styled.button`
    display: none;

    @media(width <= 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        outline: none;

        width: 50px;
        height: 25px;

        background-color: black;
        color: white;

        font-size: 1.8rem;
    }
`;


export const ZoomBtns = styled.div`
    display: none;

    @media(width <= 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 10px;
    }

    & button {
        z-index: 10;
    }

`;


export const Container = styled.div`
    width: 80%;
    height: 80vh;


    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;


    @media(width <= 768px) {
        width: 100%;
    }

    & ${Image} {
        width: unset;
     
        @media(width <= 768px) {
        width: 400px;

     
    }

        &:hover {
            transform: none;
            cursor: inherit;
        }
    }

    animation: ${appear} 0.3s linear;


`;

export const Viewer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0,0,0,0.7);

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(width <= 768px) {
        width: 100%;
        height: 100vh;
    }

   
`;
