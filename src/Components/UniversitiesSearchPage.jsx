import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';

export const UniversitiesSearchPage = (props) => {
    const { setWord, getUniversityData } = props;
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
        <form>
            {/* 検索ボックス */}
            <input 
                type="text" 
                id="search-box" 
                placeholder="大学名を入力"
                onChange={e => setWord(e.target.value)}
                >
            </input>
            {/* 送信ボタン */}
            <button
                onClick={getUniversityData}
                type="submit"
            >
                検索
            </button>
        </form>
        </Grid>
        </>
    );
}


