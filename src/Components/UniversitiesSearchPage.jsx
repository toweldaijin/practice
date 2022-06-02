import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { UniversityList } from "./UniversityListPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const UniversitiesSearchPage = (props) => {
    const { setWord, getUniversityData, university } = props;
    return (
        <>
        <Router>
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
            <Link to="/UniversitiesSearchPage/UniversityListPage">
                <Box m={3}>
                    <button
                        onClick={getUniversityData}
                        type="submit"
                        >
                        検索
                    </button> 
                </Box>
            </Link>
            
        </form>
        </Grid>

        <Switch>
            <Route path="/UniversitiesSearchPage/UniversityListPage">
                <UniversityList university={university}/>
            </Route>
        </Switch>

        </Router>

        </>
    );
}


