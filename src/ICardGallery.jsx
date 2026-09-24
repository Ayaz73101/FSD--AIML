import React from "react";
import ICard from "./ICard";

import AyazImage from "./image/ayaz.png";
import AniveshImage from "./image/anivesh.jpg";
import AchalImage from "./image/achal.jpg";

function ICardGallery() {
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap"
            }}
        >
            <ICard
                rollno="0055"
                name="Ayaz Khan"
                branch="AIML"
                image={AyazImage}
            />

            <ICard
                rollno="0056"
                name="Anivesh Yadav"
                branch="CSE"
                image={AniveshImage}
            />

            <ICard
                rollno="0057"
                name="Achal"
                branch="ECE"
                image={AchalImage}
            />
        </div>
    );
}

export default ICardGallery;