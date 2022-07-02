import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import React, { useState, useMemo } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import countryList from 'react-select-country-list';

const years = [
  {
    value: 'before2012',
    label: '2012年以前',
  },
  {
    value: '2013',
    label: '2013年',
  },
  {
    value: '2014',
    label: '2014年',
  },
  {
    value: '2015',
    label: '2015年',
  },
  {
    value: '2016',
    label: '2016年',
  },
  {
    value: '2017',
    label: '2017年',
  },
  {
    value: '2018',
    label: '2018年',
  },
  {
    value: '2019',
    label: '2019年',
  },
  {
    value: '2020',
    label: '2020年',
  },
  {
    value: '2021',
    label: '2021年',
  },
];

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

  const [year, setYear] = useState('before2012');
  const yearHandleChange = (event) => {
    setYear(event.target.value);
  };

  const [country, setCountry] = useState('Japan');
  const countries = useMemo(() => countryList().getData(), []);
  const countryHandleChange = (event) => {
    setCountry(event.target.value);
  };

  const [highschool, setHighschool] = useState('privateInCapitalArea');
  const highschoolHandleChange = (event) => {
    setHighschool(event.target.value);
  };

  return(
    
   <>
      <h2>受験年度</h2>
       <TextField
          id="outlined-select-years"
          select
          label="Select"
          value={year}
          onChange={yearHandleChange}
          helperText="受験年度を選んでください"
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      
      <h2>大学のある国</h2>
        <TextField
          id="outlined-select-highschool"
          select
          label="Select"
          value={countries}
          onChange={countryHandleChange}
          helperText="国を選んでください"
        >
          </TextField>

      <h2>出身高校</h2>
       <TextField
          id="outlined-select-highschool"
          select
          label="Select"
          value={highschool}
          onChange={highschoolHandleChange}
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
