import styled from "styled-components";


export const Navbar = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 100px;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    padding: 15px;

    background: ${({ theme }) => theme.navBackground};


    @media(width <= 768px) {
        justify-content: space-between;
    }
`;

export const UList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    list-style: none;

    color: ${({ theme }) => theme.fontColor};

    @media(width <= 768px) {
        flex-direction: column;
        align-items: flex-start;

        position: absolute;
        bottom: -35px;
        left: 0;

        transform: translate(0,100%);
       
        & div {
            width: 100vw;
            height: 1px;

            background-color: ${({ theme }) => theme.fontColor};

            margin-left: -38px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
   
`;

export const ListElement = styled.li`


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
  width: 40px;
  height: 35px;

  transition: ease-in-out 250ms;
  
  ${({ theme }) =>
        theme.isDark ? 'filter: brightness(0) invert(1);' : 'filter: brightness(1) invert(0);'
    };

  cursor: pointer;
  
  @media(width <= 768px) {
    position: absolute;
        bottom: -310px;
        left: 40px;
  }

`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    @media(width <= 768px) {
        position: absolute;
        bottom: 0;
        left: 0;
        
        transform: translate(0,100%);
        width: 100vw;
        height: 0;
    }
`;

export const HamburgerMenu = styled.img`
width: 60px;
height: 55px;
margin-right: 30px;
transition: ease-in-out 250ms;

&:hover {
    background-color: rgba(0,0,0,0.4);

    border-radius: 10px;
}

@media(width > 768px) {
    display: none;
}
`;
