import './Style.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contents from './components/Contents';
import Recordings from './components/Recordings';
import Account from './components/Account';
import BookOneRhythm from './components/BookOneRhythm';
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
          <Route path="/book1" components={BookOneRhythm} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
