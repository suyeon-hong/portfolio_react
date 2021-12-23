import './css/style.css';
import Header from './Header.js';
import Main from './components/Main';
import Youtube from './components/Youtube';
import Flickr from './components/Flickr';
import Join from './components/Join';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/flickr" component={Flickr}></Route>
      <Route exact path="/join" component={Join}></Route>
    </>
  );
}

export default App;
