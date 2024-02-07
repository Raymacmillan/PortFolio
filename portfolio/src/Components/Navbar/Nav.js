import { Navbar, Logo, ThemeToggle, UList, ListElement, Menu, HamburgerMenu } from "./NavStyles";
import ThemeLogo from "./themes.png";
import DarkMenu from "./darkMenu.png";
import CloseWindow from "./closeWindow.png";
import { useState } from "react";
import useGetWindowSize from "./useGetWindoSize";
import useGetScrollY from "./useGetScrollY";

function Nav({ changeTheme, currentThemeLogo }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const screenSize = useGetWindowSize();
    const scrollYValue = useGetScrollY();

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        setShowMenu(!showMenu);
    }


    return (
        <Navbar style={{
            background: scrollYValue > 138 ? "#40798C" : "none",
            borderRadius: scrollYValue > 138 ? "8px" : "none",
            transition: "ease-in-out 2s"
        }}>

            <Logo src={currentThemeLogo} alt="Logo" />
            {(showMenu || screenSize > 768) && <Menu>
                <UList>
                    <ListElement>Home</ListElement>
                    <ListElement>My Expertise</ListElement>
                    <ListElement>Certifications</ListElement>
                    <ListElement>Projects</ListElement>
                    <ListElement>Contact</ListElement>
                </UList>
                <ThemeToggle onClick={changeTheme} src={ThemeLogo} alt="Theme" />
            </Menu>}
            <HamburgerMenu onClick={handleIsOpen} src={isOpen ? CloseWindow : DarkMenu} alt="Dark Menu" />
        </Navbar>
    )
}

export default Nav;