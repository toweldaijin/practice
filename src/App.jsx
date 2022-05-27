import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { WriteAreviewButton } from './Components/WriteAReviewsButton';
import { RyugakupediaLogo } from './Components/RyugakupediaLogo.jsx'
import { UniversitiesSearchPage } from './Components/UniversitiesSearchPage';
import { CountriesSearchPage } from './Components/CountriesSearchPage';
import { Home } from './Components/Home';
import { Header } from './Components/Header';



const App = () => {
  return(
    <>
    <Router>
      
     <Header/>

      
      <main>
        <Link to="/">home</Link>
        <br/>
        <Link to="/UniversitiesSearchPage">大学で検索</Link>
        <br/>
        <Link to="/CountriesSearchPage">国で検索</Link>
      </main>
      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/UniversitiesSearchPage" >
          <UniversitiesSearchPage />
        </Route>
        <Route path="/CountriesSearchPage" >
          <CountriesSearchPage />
        </Route>
      </Switch>
      
      
    </Router>

  
    </>
  );
}

export default App;
