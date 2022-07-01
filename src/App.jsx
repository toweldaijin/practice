import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const highschools = [
  {
    value: 'privateInCapitalArea',
    label: '首都圏私立',
  },
  {
    value: 'publicInCapitalArea',
    label: '首都圏公立',
  },
  {
    value: 'privateInRuralArea',
    label: '地方私立',
  },
  {
    value: 'publicInruralArea',
    label: '地方公立',
  },
  {
    value: 'online',
    label: '通信制',
  },
  {
    value: 'international',
    label: 'インターナショナルスクール',
  },
  {
    value: 'abroad',
    label: '海外',
  },
  {
    value: 'other',
    label: 'その他',
  },
];


 const App = () => {

  const [highschool, setHighschool] = useState('EUR');

  const handleChange = (event) => {
    setHighschool(event.target.value);
  };

  return(
    
   <>
      <h2>出身高校</h2>
       <TextField
          id="outlined-select-highschool"
          select
          label="Select"
          value={highschool}
          onChange={handleChange}
          helperText="出身高校の分類を選んでください"
        >
          {highschools.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
   </>
  );
}

export default App;
