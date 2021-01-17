import './Style.css';
import Nav from './components/Nav';
import About from './components/About';
import Contents from './components/Contents';
import Recordings from './components/Recordings';
import Account from './components/Account';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contents" component={Contents} />
          <Route path="/recordings" component={Recordings} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
