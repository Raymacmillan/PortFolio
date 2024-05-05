import { useEffect, useRef, useState } from "react";
import { Container, Viewer, Image, ZoomBtns, ZoomIn, ZoomOut } from "./CertificateStyles";
import useGetWindowSize from "../Navbar/useGetWindoSize";

function Certificate({ imageUrl }) {
    const [showViewer, setShowViewer] = useState(false);
    const imageRef = useRef("");
    const [currentImageWidth, setCurrentImageWidth] = useState(100);
    const screenSize = useGetWindowSize();

    useEffect(()=> {
        if(!imageRef.current.style) return;
        if(screenSize > 768){
            imageRef.current.style.width= "100%";
            setCurrentImageWidth(1);
        }
    }, [screenSize, imageRef])

    const onZoomIn = ()=> {
        if(!imageRef) return;

        if(currentImageWidth >= 120) return;
        imageRef.current.style.width = `${currentImageWidth + 2}%`;
        setCurrentImageWidth(currentImageWidth + 2);
    }

    const onZoomOut = ()=> {
        if(!imageRef) return;
        if(currentImageWidth <= 100) return;
        imageRef.current.style.width = `${currentImageWidth - 2}%`;
        setCurrentImageWidth(currentImageWidth - 2);
    }

    const Exit = ({target})=> {
        if(target.tagName !== "DIV") return;
        setShowViewer(false);
    }
    
    return <>
        <Image src={imageUrl} alt="certificate" onClick={() => setShowViewer(true)} />
        {showViewer && <Viewer>
            <Container  onClick={Exit}>
                <Image src={imageUrl} ref={imageRef}  alt="certificate" />
                <ZoomBtns>
                    <ZoomIn onClick={onZoomIn}>+</ZoomIn>
                    <ZoomOut onClick={onZoomOut}>-</ZoomOut>
                </ZoomBtns>
            </Container>
        </Viewer>}
    </>
}

export default Certificate;