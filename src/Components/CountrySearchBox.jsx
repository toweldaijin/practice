import React from "react";

export const CountrySearchBox = () => {
    return(
        <>
            <p>国名で検索</p>
            <input type="search" id="search-box" placeholder="国名を入力"></input>
            <button>検索</button>
        </>
    );
}