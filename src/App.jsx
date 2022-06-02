import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { UniversitiesSearchPage } from './Components/UniversitiesSearchPage';
import { CountriesSearchPage } from './Components/CountriesSearchPage';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { UniversityList } from './Components/UniversityListPage';


const App = () => {
  const[word, setWord] = useState('');
  const[university, setUniversity] = useState([]);

  /* 大学のデータを取得 */
  const getUniversityData = (e) => {
    e.preventDefault();
    axios
    .get('http://universities.hipolabs.com/search?name=middle')
    .then(res => {
      setUniversity(res.data);
    })
  }

  return(
    <>
    <Router>
      
     <Header/>

      
      <main>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '0' }}
      >
        <Link to="/">
          <Box m={3}>
            <Button variant="contained" color="primary">TOP</Button>
          </Box>
        </Link>
        <br/>
        <Link to="/UniversitiesSearchPage">
          <Box m={3}>
            <Button variant="contained" color="warning">大学名で検索(英字表記)</Button>
          </Box>
        </Link>
        <br/>
        <Link to="/CountriesSearchPage">
          <Box m={3}>
            <Button variant="contained" color="warning">国名で検索</Button>
          </Box>
        </Link>
        
   
      </Grid> 
      </main>
      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route 
          path="/UniversitiesSearchPage" 
          render={({match: { url }}) => (
            <Switch>
              <Route  exact path={url}>
                <UniversitiesSearchPage/>
              </Route>
              <Route  path={`${url}/UniversityListPage`}>
                <UniversityList setWord={setWord} getUniversityData={getUniversityData}/>
              </Route>
            </Switch>
          )} />
          
        
        <Route path="/CountriesSearchPage" >
          <CountriesSearchPage />
        </Route>
      </Switch>
      
      
    </Router>

  
    </>
  );
}

export default App;
