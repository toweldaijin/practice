import React from "react";
import { useState } from "react";

export const UniversitiesSearchPage = (props) => {
    const [universitySearchValue, setUniversitySearchvalue] = useState("");

    const handleUniversitySearchInputChanges = (e) => {
        setUniversitySearchvalue(e.target.value);
    }
    
    const resetUniversityInputField = () => {
        setUniversitySearchvalue("")
    }

    const callUniversitySearchFunction = (e) => {
        e.preventDefault();
        /* console.log(universitySearchValue); */
       /*  props.UniversitiySearch(universitySearchValue); */ 
        resetUniversityInputField();
    }

    return (
        <>
        <p>大学名で検索</p>
        {/* 検索ボックス */}
        <input 
            type="text" 
            id="search-box" 
            placeholder="大学名を入力"
            value={universitySearchValue}
            onChange={handleUniversitySearchInputChanges}
            >
        </input>
        {/* 送信ボタン */}
        <input
            onClick={callUniversitySearchFunction}
            type="submit"
            value="検索">
        </input>
        </>
    );
}


