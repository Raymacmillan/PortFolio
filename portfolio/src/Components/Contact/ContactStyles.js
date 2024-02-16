import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    width: 100%;

    margin-top: 100px;

    padding: 20px;

    background-color: rgba(0,0,0,0.5);

    color: ${({theme}) => theme.fontColor};
`;

export const Header = styled.h1`
    font-size: 3rem;
    margin: 20px 0 50px;


    color: ${({theme}) => theme.fontColor};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Label = styled.label`
    font-size: 1.5rem;
`;

export const MessageBox = styled.textarea`
    padding: 10px;

    width: 700px;
    min-height: 200px;

    border-radius: 3px;
    border: none;

    outline: none;

    font-size: 1.2rem;

    margin-bottom: 40px;

    resize: none;
`;

export const Input = styled.input`
    padding: 15px;

    width: 700px;

    border-radius: 5px;
    border: none;

    outline: none;

    font-size: 1.2rem;
`;
