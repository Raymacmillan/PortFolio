import React, {useState} from "react";
import { Container, CopyRight, Name, SocialLinks } from "./FooterStyles";
import { Social } from "./Social";

import Github from "./github.png";
import Instagram from "./icons8-instagram-48.png";
import X from "./icons8-twitterx-50.png";
import Discord from "./icons8-discord-48.png";


export const Footer = () => {
    const [socials, setSocials] = useState([
        {
            "icon": Github,
            "link": "https://github.com/Raymacmillan",
            "id": 0
        },
    
        {
            "icon": Instagram,
            "link": "https://www.instagram.com/ryogenxx/?next=%2F",
            "id": 1
        },
    
        {
            "icon": X,
            "link": "https://twitter.com/RyoGenxx",
            "id": 2
        },
    
        {
            "icon": Discord,
            "link": "https://discord.com/channels/@ryokun0339",
            "id": 3
        }
    
    ])
    
    return(
        <Container>
            <CopyRight>
                <div>C</div>
                <Name>2024 RMG</Name>
            </CopyRight>
            <SocialLinks>
                {socials.map((social) => (
                    <Social key={social.id} link={social.link} icon={social.icon}/>
                ))}
            </SocialLinks>
        </Container>
    )
}