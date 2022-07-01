import React from "react";
import { RyugakupediaLogo } from "./CompletedPageImage";
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