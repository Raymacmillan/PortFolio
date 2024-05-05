import { useState } from "react";
import { MyProjects, Header, HeaderContainer, Source, GithubImg } from "./ProjectsStyles";
import GitHubLogo from "./github.png";
import Calculator from "./Calculator.png";
import Etch from "./etch.png";
import Library from "./library.png";
import Odin from "./Odin.png";
import PreviewCard from "./previewCard.png";
import Card from "./Card.png";
import Advice from "./advice.png";
import Testimonies from "./testimonies.png";
import DropDown from "./dropDown.png";
import Notifications from "./notifications.png";
import Pricing from "./pricing.png";
import NewHomePage from "./newsHomepage.png";
import Temperature from "./temp.png";
import Interactive from "./interactive.png";
import API from "./API.jpg";


import Project from "./Project";

function Projects() {
    const [project, setProject] = useState([
        {
            "id": 13,
            ImgURL: API,
            title: "Restful API(CRUD)",
            tech: "Java",
            liveLink: "https://github.com/Raymacmillan/CRUD-API",
            link: "https://github.com/Raymacmillan/CRUD-API"
        },
        {
            "id": 9,
            ImgURL: Notifications,
            title: "Notification-Page",
            tech: "React & CSS",
            liveLink: "https://notification-page-tau.vercel.app/",
            link: "https://github.com/Raymacmillan/Notification-Page"
        },
        {
            "id": 11,
            ImgURL: NewHomePage,
            title: "News-Homepage",
            tech: "React & CSS",
            liveLink: "https://news-homepage-qvx46n7lm-raymacmillan.vercel.app/",
            link: "https://github.com/Raymacmillan/News-Homepage"
        },
        {
            "id": 2,
            ImgURL: Odin,
            title: "Sign-up-Form",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Sign-up-Form/",
            link: "https://github.com/Raymacmillan/Sign-up-Form"
        },
        {
            "id": 0,
            ImgURL: Calculator,
            title: "Calculator",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Calculator/",
            link: "https://github.com/Raymacmillan/Calculator"
        },
        {
            "id": 1,
            ImgURL: Etch,
            title: "Etch-a-Sketch",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Etch-a-Sketch/",
            link: "https://github.com/Raymacmillan/Etch-a-Sketch"
        },
        {
            "id": 3,
            ImgURL: Library,
            title: "Library",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Library/",
            link: "https://github.com/Raymacmillan/Library"
        },
        {
            "id": 4,
            ImgURL: PreviewCard,
            title: "Card-Component",
            tech: "HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Project-preview-card-component/",
            link: "https://github.com/Raymacmillan/Project-preview-card-component"
        },
        {
            "id": 5,
            ImgURL: Card,
            title: "Interactive-Card-Form",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Interactive-Card-Details-Form/",
            link: "https://github.com/Raymacmillan/Interactive-Card-Details-Form"
        },
        {
            "id": 6,
            ImgURL: Advice,
            title: "Advice-Generator-App",
            tech: "JavaScript, API's, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Advice-Generator-App/",
            link: "https://github.com/Raymacmillan/Advice-Generator-App"
        },
        {
            "id": 7,
            ImgURL: Testimonies,
            title: "Bootcamp-Testimonials-Slider",
            tech: "JavaScript, HTML & CSS",
            liveLink: "https://raymacmillan.github.io/Bootcamp-Testimonials-Slider/",
            link: "https://github.com/Raymacmillan/Bootcamp-Testimonials-Slider"
        },
        {
            "id": 8,
            ImgURL: DropDown,
            title: "Drop-down-Navigation-Menu",
            tech: "JavaScript, HTML5, CSS & SCSS/SASS",
            liveLink: "https://raymacmillan.github.io/Drop-down-Navigation-Menu/",
            link: "https://github.com/Raymacmillan/Drop-down-Navigation-Menu"
        },
        {
            "id": 10,
            ImgURL: Pricing,
            title: "Interactive-Pricing-Component",
            tech: "JavaScript, HTML5, CSS & SCSS/SASS",
            liveLink: "https://raymacmillan.github.io/Interactive-pricing-component/",
            link: "https://github.com/Raymacmillan/Interactive-pricing-component"
        },
        {
            "id": 12,
            ImgURL: Temperature,
            title: "Temperature-Converter",
            tech: "Java",
            liveLink: "https://github.com/Raymacmillan/Temperature-Converter",
            link: "https://github.com/Raymacmillan/Temperature-Converter"
        },
        {
            "id": 14,
            ImgURL: Interactive,
            title: "Interactive-Rating-Component",
            tech: "JavaScript, HTML5, CSS & SCSS/SASS",
            liveLink: "https://raymacmillan.github.io/Interactive-Rating-Component/",
            link: "https://github.com/Raymacmillan/Interactive-Rating-Component"
        },
    ])
    return (
        <>
            <HeaderContainer>
            <Header>Dive into my domain</Header>
            <Source href="https://github.com/Raymacmillan?tab=repositories">
                <GithubImg src={GitHubLogo} alt="GitHubLogo"/>
            </Source>
            </HeaderContainer>
            <MyProjects>
                {project.map((pro) => (
                    <Project key={pro.id} href={pro.liveLink} linkRef={pro.link} ImgURL={pro.ImgURL} title={pro.title} tech={pro.tech}></Project>
                ))}
            </MyProjects>
        </>
    )
};

export default Projects;