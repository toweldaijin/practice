import React from "react";
import MainLogo from "./RyugakupediaLogoImage.jpeg";

const imgStyle = {
    width: "300px",
    height: "auto"
}

export const RyugakupediaLogo = () =>{
    return(
        <img style={imgStyle} src={MainLogo} alt="留学ペディアロゴ" />
    );
}