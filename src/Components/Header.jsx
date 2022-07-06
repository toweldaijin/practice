import React from "react";

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