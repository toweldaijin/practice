import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { WriteAreviewButton } from './Components/WriteAReviewsButton';
import { RyugakupediaLogo } from './Components/RyugakupediaLogo.jsx'
import { CountrySearchBox } from './Components/CountrySearchBox';
import { UniversitySearchBox } from './Components/UniversitySearchBox';
import { UniversitiesListPage } from './UniversitiesListPage';
import { CountriesListPage } from './Components/CountriesListPage';
import { Home } from './Components/Home';



const App = () => {
  return(
    <>
    <Router>
      <header>
        <RyugakupediaLogo/>
        <WriteAreviewButton/>
      </header>

      <Switch>
      <main>
        <Link to="/">home</Link>
        <Link to="/UniversitiesListPage"></Link>
        <Link to="/CountriesListPage"></Link>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/UniversitiesListPage" exact>
            <UniversitiesListPage />
          </Route>
          <Route path="/CountriesListPage" exact>
            <CountriesListPage/>
          </Route>
        </Switch>
      </main>
      </Switch>
    </Router>

  
    </>
  );
}

export default App;
