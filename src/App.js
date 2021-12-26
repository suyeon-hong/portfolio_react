import './css/style.css';
import Header from './components/Header.js';
import Main from './components/Main';
import Youtube from './components/Youtube';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Route exact path="/portfolio_react/" component={Main}></Route>
      <Route exact path="/portfolio_react/youtube" component={Youtube}></Route>
      <Route exact path="/portfolio_react/flickr" component={Gallery}></Route>
      <Route exact path="/portfolio_react/join" component={Join}></Route>

      <Footer />
    </>
  );
}

export default App;
