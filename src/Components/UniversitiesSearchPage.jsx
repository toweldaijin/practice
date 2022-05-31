import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';

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
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '0' }}
            >
            
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
            
        </Grid>
        
        </>
    );
}


