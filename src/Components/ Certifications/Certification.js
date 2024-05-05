import { Container, Header, FrontEnd, JavaScript, Designer, Network, CyberSecurity, EthicalHacker } from "./CertificationsStyles";
import JCertificate from "./javascript.png";
import UCertificate from "./UX.png";
import CCertificate from "./cybersecurity.png";
import ECertificate from "./EHacker.png";
import Certificate from "./Certificate";


function Certifications() {
    return (
        <Container>
            <Header>My Certificates</Header>
            {/*   <FrontEnd>
        <JavaScript src={JCertificate} />
        <Designer src={UCertificate} />
        </FrontEnd>
        <Network>
        <CyberSecurity src={CCertificate} />
        <EthicalHacker src={ECertificate} />
        </Network> */}

            <FrontEnd>
                <Certificate imageUrl={JCertificate} />
                <Certificate imageUrl={UCertificate} />
            </FrontEnd>
            <Network>
                <Certificate imageUrl={CCertificate} />
                <Certificate imageUrl={ECertificate} />
            </Network>
        </Container>
    )
}

export default Certifications;