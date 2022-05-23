import React from "react";
import { RyugakupediaLogo } from "./RyugakupediaLogo";
import { WriteAreviewButton } from "./WriteAReviewsButton";

export const Header = () => {
    return(
        <>
        <header>
            <RyugakupediaLogo/>
            <WriteAreviewButton/>
        </header>
        </>
    );
}