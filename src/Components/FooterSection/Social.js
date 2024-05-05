import React from "react";
import { Container, Image} from "./SocialStyles";

export const Social = ({key, link, icon})=> {
    return (
        <Container key ={key} href={link}>
            <Image src={icon} alt={"Social media"}/>
        </Container>
    )
}