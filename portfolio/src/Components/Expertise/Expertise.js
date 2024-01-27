import React, { useState } from "react";
import { Container } from "./ExpertiseStyles";


function MyExpertise() {
    const [company, setCompany] = useState([
        {
            "Image" : "./software-engineer.png",
            "category" : "Software Development",
            "details" : "Fluent in Java, JavaScript and Python. No paradigm escapes me, from object-oriented symphonies to functional figures. Ready to code your vision? Web-I'm your architect, crafting solutions that sing."
        },
        {
            "Image" : "./front-end-programming.png",
            "category" : "Frontend Developement",
            "details" : "React, Next.js, my brushes of choice. I weave front-end masterpieces, pixel-by-pixel, breathing life into your designs. CSS3 and HTML5 are my canvases, Bootstrap and Sass my vibrant paints. But I don't just code beauty, I craft experience. Design? I'm a budding Picasso, learning the art of usability and delight.Ready to captivate your audience? Let me translate your vision into stunning websites and apps that sing."
        },
        {
            "Image" : "./back-end.png",
            "category" : "Backend Developement",
            "details" : " spin Java into backend brilliance. RESTful APIs? My specialty, connecting your apps to a world of data, powered by SQL's precision. I'm the foundation builder, the logic weaver, ensuring your dreams flow seamlessly from front to back. Need a rock-solid backend? I'm your architect, crafting systems that scale and thrive."
        },
    ]);
    return (

        <Container>
            <h1></h1>
            <div>
                Hi,
                {company.map((person) => (
                    <><p>{person.name}</p><p>{person.age}</p></>
                ))}
            </div>
        </Container>
    )
}

export default MyExpertise;