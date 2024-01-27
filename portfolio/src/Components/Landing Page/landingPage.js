import { Container, LocationInfo, Information, Location, GlobeImg, Globe, Page, Header, SubHeader, ArrowContainer, Arrow } from "./landingPageStyles";

function LandingPage({changeGlobeTheme, changeArrowTheme}) {
    return (
        <Container>
            <LocationInfo>
                <Information>
                    <Location>Located in Botswana</Location>
                    <GlobeImg>
                        <Globe src={changeGlobeTheme} alt="location" />
                    </GlobeImg>
                </Information>
            </LocationInfo>
            <Page>
                <Header>RAY MCMILLAN GUMBO</Header>
                <SubHeader>SOFTWARE ENGINEER, FRONT END & BACK END.</SubHeader>
                <ArrowContainer>
                    <Arrow src={changeArrowTheme} alt="Arrow"/>
                </ArrowContainer>
            </Page>
        </Container>
    )
}

export default LandingPage;