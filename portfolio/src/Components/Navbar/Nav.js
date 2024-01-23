import { Navbar, Logo, ThemeToggle, UList, ListElement, Menu, HamburgerMenu } from "./NavStyles";
import useGetWindowSize from "./useGetWindoSize";
import ThemeLogo from "./themes.png";
import DarkMenu from "./darkMenu.png";
import CloseWindow from "./closeWindow.png";
import { useState } from "react";

function Nav({changeTheme, currentThemeLogo}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const screenSize = useGetWindowSize();

    const handleIsOpen = ()=> {
        setIsOpen(!isOpen);
        setShowMenu(!showMenu);
    }


    return (
        <Navbar>
            <Logo src={currentThemeLogo} alt="Logo"/>
            {(showMenu || screenSize > 768) && <Menu>
            <UList>
                <ListElement>Home</ListElement>
                <div></div>
                <ListElement>My Expertise</ListElement>
                <div></div>
                <ListElement>Certifications</ListElement>
                <div></div>
                <ListElement>Projects</ListElement>
                <div></div>
                <ListElement>Contact</ListElement>
                <div></div>
            </UList>
            <ThemeToggle onClick={changeTheme} src={ThemeLogo} alt="Theme"/>
            </Menu>}
            <HamburgerMenu onClick={handleIsOpen} src={isOpen ? CloseWindow : DarkMenu} alt="Dark Menu"/>
        </Navbar>
    )
}

export default Nav;