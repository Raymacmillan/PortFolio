import styled, {keyframes} from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotateX(45deg) rotateY(-45deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(-90deg);
  }
  50% {
    transform: rotateX(-45deg) rotateY(-45deg);
  }
  75% {
    transform: rotateX(-90deg) rotateY(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(-360deg);
  }
`

export const Container = styled.div`
    height: 60vh;
    width: 30vw;

    position: absolute;
    top: 50vh;
    left: 50vw;

    z-index: 10;

    margin-top: 250px;

    transform: translate(-50%, 50%);

    perspective: 1000px;

    @media(width <= 768px) {
        height: 100vh;
        width: 100vw;
    }
    
`;

export const Header = styled.h1`
    text-align: center;

    font-size: 3.5rem;

    color: ${({theme}) => theme.landingFontColor};
`;

export const Cube = styled.div`
    position: absolute;
    top: 250px;
    left: 100px;

    height: 400px;
    width: 400px;

    transform-style: preserve-3d;

    animation-name: ${rotateAnimation};
    animation-duration: 30s;
    animation-iteration-count: infinite;

    &:hover {
        animation-play-state: paused;
    }

    @media(width <= 768px) {
        width: 300px;
        height: 300px;

        top: 250px;
        left: 65px;
    }
`;

export const Side = styled.div`
    position: absolute;
    text-align: center;

    background-color: white;

    box-sizing: border-box;
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 400px;
    height: 400px;

    padding: 15px;
    border: 2px solid black;


    background-color: ${({theme}) => theme.phoneBackgroundColor};
    color: ${({theme}) => theme.fontColor};

    @media(width <= 768px) {
        width: 300px;
        height: 300px;
    }

    &:nth-child(1) {
        transform: translateZ(200px);

        @media(width <= 768px) {
        
            transform: translateZ(150px);
    }
    }

    &:nth-child(2) {
        transform: translateZ(-200px);
        @media(width <= 768px) {
        
        transform: translateZ(-150px);
}
    }

    &:nth-child(3) {
        right: 200px;

        transform: rotateY(-90deg);

        @media(width <= 768px) {
        right: 150px;
    }
    }
    &:nth-child(4) {
        left: 200px;

        transform: rotateY(90deg);
        
        @media(width <= 768px) {
        left: 150px;
    }
    }
    &:nth-child(5) {
        bottom: 200px;

        transform: rotateX(90deg);

        @media(width <= 768px) {
        bottom: 150px;
    }
    }
    &:nth-child(6) {
        top: 200px;

        transform: rotateX(-90deg);

        @media(width <= 768px) {
        top: 150px;
    }
    }
 

`;