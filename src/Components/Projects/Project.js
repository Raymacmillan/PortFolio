import { Container, ImageProject, ProjectTitle, TechUsed, SourCode } from "./ProjectStyles";

function Project({ linkRef,href, ImgURL, title, tech, link }) {
    return (
        <Container href={href}>
            <ImageProject src={ImgURL} alt="ProjectImg" />
            <ProjectTitle>{title}</ProjectTitle>
            <TechUsed>{tech}</TechUsed>
            <SourCode linkRef={linkRef}></SourCode>
        </Container>
    )
}

export default Project;

