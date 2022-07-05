import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import React, { useState, useMemo } from 'react'
import TextField from '@mui/material/TextField';
import HomeImageUrl from './Components/HomeImageUrl.png';
import Button from '@mui/material/Button';
import { color } from '@mui/system';


 const App = () => {

  return(
    
   <>
    
    <div>
      <h2>留学ペディアは、海外大学合格体験記をシェアすることで、留学を志す皆さんをお助けするサイトです。</h2>
      <img 
          src={HomeImageUrl} 
          alt="人々が地球の周りで手を繋いでいる" 
          style={{height:"300px", width:"300px"}}
      />
    </div>

    <div 
      className='searchArea' 
      style={{
              backgroundColor:"#92B4EC",
              color:"white"
            }}
    >
      <p>国で検索</p>
      <TextField 
        id="SearchByCountry" />
      <Button variant="contained">検索</Button>
      
      <p>大学名で検索</p>
      <TextField id="SearchByUniversity" />
      <Button variant="contained">検索</Button>
    </div>
   </>

  );
}

export default App;
