import './Style.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contents from './components/Contents';
import Recordings from './components/Recordings';
import Account from './components/Account';
import Overture from './components/Overture';
import Introduction from './components/Introduction';
import BookOne from './components/BookOne';
import BookTwo from './components/BookTwo';
import BookThree from './components/BookThree';
import BookFour from './components/BookFour';
import BookFive from './components/BookFive';
import BookSix from './components/BookSix';
import BookSeven from './components/BookSeven';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contents" component={Contents} />
          <Route path="/recordings" component={Recordings} />
          <Route path="/account" component={Account} />
          <Route path="/overture" component={Overture} />
          <Route path="/intro" component={Introduction} />
          <Route path="/book1" component={BookOne} />
          <Route path="/book2" component={BookTwo} />
          <Route path="/book3" component={BookThree} />
          <Route path="/book4" component={BookFour} />
          <Route path="/book5" component={BookFive} />
          <Route path="/book6" component={BookSix} />
          <Route path="/book7" component={BookSeven} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
