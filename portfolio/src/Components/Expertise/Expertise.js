import React from "react";
import { Category, Image, Area, Content } from "./ExpertiseStyles";

function MyExpertise({ImageUrl, areaCategory, areaDetails}) {
    return (
        <>
            <Category>
                <Image src={ImageUrl} alt="Image" />
                <Area>{areaCategory}</Area>
            </Category>
            <Content>{areaDetails}</Content>
        </>
    )
}

export default MyExpertise;