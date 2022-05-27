import React from "react";

export const UniversitySearchBox = () => {
    return(
        <>
            <p>大学名で検索</p>
            <input type="search" id="search-box" placeholder="大学名を入力"></input>
            <button>探す</button>
        </>
    );
}