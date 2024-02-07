import styled from "styled-components";



export const Navbar = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 100px;

    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    padding: 15px;

    z-index: 100;




    @media(width <= 768px) {
        justify-content: space-between;
    }
`;


export const UList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;

    list-style: none;

    color: ${({ theme }) => theme.fontColor};

    @media(width <= 768px) {
        flex-direction: column;
        align-items: flex-start;

        position: absolute;
        top: 90px;
        left: 15px;
        

    color: ${({ theme }) => theme.phoneFontColor};
    }
   
`;

export const ListElement = styled.li`

font-family: "Merriweather", serif;

font-size: 1.2rem;


transition: ease-in-out 250ms;

cursor: pointer;

&:hover {
      ${({ theme }) =>
        theme.isDark ? 'color: #333333;' : 'color: #FCFCFD;'
    };
      
    @media(width <= 768px) {
        ${({ theme }) =>
        theme.isDark ? 'color: #333333;' : 'color: #333333;'
    };
    }
}

`;

export const Logo = styled.img`
width: 90px;
height: 50px;

cursor: pointer;
`;

export const ThemeToggle = styled.img`
  width: 38px;
  height: 35px;

  transition: ease-in-out 250ms;
  
  ${({ theme }) =>
        theme.isDark ? 'filter: brightness(0) invert(1);' : 'filter: brightness(1) invert(0);'
    };

cursor: pointer;

@media(width <= 768px) {
    position: absolute;
        bottom: 50px;
        left: 15px;
    }

    `;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    
    @media(width <= 768px) {
        position: absolute;
        top: 0;
        left: 0;
        
        width: 100vw;
        height: 100vh;
        
        background-color: ${({theme}) => theme.phoneBackgroundColor};
    }
`;

export const HamburgerMenu = styled.img`
width: 60px;
height: 55px;
margin-right: 30px;
transition: ease-in-out 250ms;

position: absolute;
right: 10px;

&:hover {
    background-color: rgba(0,0,0,0.4);

    border-radius: 10px;
}

@media(width > 768px) {
    
    display: none;
}
`;

