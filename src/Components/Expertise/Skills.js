import React, {useState} from "react";
import SEngineeer from "./software-engineer.png";
import FrontEnd from "./front-end-programming.png";
import BackEnd from "./back-end.png";
import MyExpertise from "./Expertise";
import { Container, Header, Cube, Side } from "./SkillsStyles";

function Skills() {
    const [field, setField] = useState([
        {
            "Image": SEngineeer,
            "category": "Software Development",
            "details": "Fluent in Java. No paradigm escapes me, from object-oriented symphonies to functional figures. Ready to code your vision? Web-I'm your architect, crafting solutions that sing.",
            "id": 0
        },
        {
            "Image": FrontEnd,
            "category": "Frontend Developement",
            "details": "React, Next.js, my brushes of choice. I weave front-end masterpieces, pixel-by-pixel, breathing life into your designs. CSS3 and HTML5 are my canvases, Bootstrap and Sass my vibrant paints. But I don't just code beauty, I craft experience. Design? I'm a budding Picasso, learning the art of usability and delight.Ready to captivate your audience? Let me translate your vision into stunning websites and apps that sing.",
            "id": 1
        },
        {
            "Image": BackEnd,
            "category": "Backend Developement",
            "details": " spin Java into backend brilliance. RESTful APIs? My specialty, connecting your apps to a world of data, powered by SQL's precision. I'm the foundation builder, the logic weaver, ensuring your dreams flow seamlessly from front to back. Need a rock-solid backend? I'm your architect, crafting systems that scale and thrive.",
            "id": 2
        },
        {
            "Image": SEngineeer,
            "category": "Software Development",
            "details": "Fluent in JavaScript. Ready to code your vision? The web is my canvas where i play around with JavaScript and it's frameworks and libraries.",
            "id": 3
        },
        {
            "Image": FrontEnd,
            "category": "Frontend Developement",
            "details": "Fluent in Python. Not only fluent in Web technologies but also fluent in Data Science, machine learning. The core part of Computer Science, crafting real world brains of the web with machine learning and data Science",
            "id": 4
        },
        {
            "Image": BackEnd,
            "category": "Backend Developement",
            "details": " spin Java into backend brilliance. RESTful APIs? My specialty, connecting your apps to a world of data, powered by SQL's precision. I'm the foundation builder, the logic weaver, ensuring your dreams flow seamlessly from front to back. Need a rock-solid backend? I'm your architect, crafting systems that scale and thrive.",
            "id": 5
        },
    ]);

    return (
        <Container>
            <Header>My Expertise!</Header>
        <Cube>
            {field.map((skill) => (
                 <Side key={skill.id}>
                     <MyExpertise ImageUrl={skill.Image} areaCategory={skill.category} areaDetails={skill.details}/>
                 </Side>
            ))}
        </Cube>
        </Container>
    )
}

export default Skills;