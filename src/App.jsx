import './App.css';
import { WriteAreviewButton } from './Components/WriteAReviewsButton';
import { RyugakupediaLogo } from './Components/RyugakupediaLogo.jsx'
import { CountrySearchBox } from './Components/CountrySearchBox';
import { UniversitySearchBox } from './Components/UniversitySearchBox';

const App = () => {
  return (
    <>
    <header>
      <RyugakupediaLogo/>
      <WriteAreviewButton/>
    </header>

    <main>
      <div>
        <p>留学ペディアは、海外大学進学者の皆さんに合格体験記をシェアしていただくことで、留学を志す皆さんをお助けするサイトです。</p>
      </div>

      <UniversitySearchBox/>
      <CountrySearchBox/>
    </main>

    <fotter>


    </fotter>

    </>
  );
}

export default App;
