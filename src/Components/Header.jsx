import React from "react";
import { RyugakupediaLogo } from "./RyugakupediaLogo";
import { WriteAreviewButton } from "./WriteAReviewsButton";

const headerStyle = {
    justifyContent: 'center'
}

export const Header = () => {
    return(
        <>
        <header>
            <RyugakupediaLogo/>
            <br/>
            <WriteAreviewButton/>
        </header>
        </>
    );
}