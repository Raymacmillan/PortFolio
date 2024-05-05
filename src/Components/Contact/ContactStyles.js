import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 150px;

    width: 100%;

    margin-top: 100px;

    padding: 50px;

    background-color: rgba(0,0,0,0.5);

    color: ${({theme}) => theme.fontColor};

    @media(width <= 768px) {
        flex-direction: column;

        padding: 20px;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        gap: 5px;
    }
    `;
export const ContactHeader = styled.h1`
        font-size: 3.8rem;
        margin: 20px 0 50px;
    
        color: ${({theme}) => theme.fontColor};

        @media(width <= 768px) {
            font-size: 2rem;
        }
`;

export const Header = styled.h1`
    font-size: 2.5rem;
    margin: 20px 0 10px;

    color: ${({theme}) => theme.fontColor};
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    gap: 20px;

    @media(width <= 768px) {
            width: 100%;
        }

`;

export const ContactText = styled.div`
margin: 0 0 -190px;
width: 700px;

@media(width <= 768px) {
    width: 100%;
    
    text-align: center;
    width: 100%;

    font-size: 0.8rem;
    order: 1;

    margin: unset;

    ${Header} {
        font-size: 2rem;
        margin-top: -50px;
    }
}
`;


export const Label = styled.label`
    font-size: 1.5rem;
`;

export const MessageBox = styled.textarea`
    padding: 10px;

    width: 650px;
    min-height: 100px;

    border-radius: 3px;
    border: none;

    outline: none;

    font-size: 1.2rem;

    margin-bottom: 40px;

    resize: none;

    @media(width <= 768px) {
        width: 80vw;
        min-height: 40px;

        padding: 8px;
    }
`;

export const Input = styled.input`
    padding: 15px;

    width: 650px;

    border-radius: 5px;
    border: none;

    outline: none;

    font-size: 1.2rem;

    @media(width <= 768px) {
        width: 80vw;

        padding: 10px;
    }

`;


export const SendBtn = styled.input.attrs({
    type: 'submit'
  })`
  padding: 12px;
  width: 120px;



  color: ${({theme}) => theme.fontColor};

  border: none;

  background-color: ${({theme}) => theme.backgroundColor};
  box-shadow: 5px 5px 5px rgba(0,0,0,0.4);

  border-radius: 5px 5px 0 0;

  transition: all ease-in-out 250ms;

  cursor: pointer;

  &:hover { 
    background-color: rgba(0,0,0,0.6);
    color: #F2F5F8;
  }
  `;


  export const SubHeading = styled.h2`
    margin: 40px 0;

    margin-bottom: 130px;
  `;