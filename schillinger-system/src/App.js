import './Style.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contents from './components/Contents';
import AppletHistory from './components/AppletHistory';
import Recordings from './components/Recordings';
import Account from './components/Account';
import Overture from './components/books/Overture';
import OvertureSchillinger from './components/books/OvertureSchillinger';
import Introduction from './components/books/Introduction';
import IntroductionSchillinger from './components/books/IntroductionSchillinger';
import Book1 from './components/books/book1/Book1';
import Book1Ch1 from './components/books/book1/Book1Ch1';
import Book1Ch2 from './components/books/book1/Book1Ch2';
import Book1Ch3 from './components/books/book1/Book1Ch3';
import Book1Ch4 from './components/books/book1/Book1Ch4';
import Book1Ch5 from './components/books/book1/Book1Ch5';
import Book1Ch6 from './components/books/book1/Book1Ch6';
import Book1Ch7 from './components/books/book1/Book1Ch7';
import Book1Ch8 from './components/books/book1/Book1Ch8';
import Book1Ch9 from './components/books/book1/Book1Ch9';
import Book1Ch10 from './components/books/book1/Book1Ch10';
import Book1Ch11 from './components/books/book1/Book1Ch11';
import Book1Ch12 from './components/books/book1/Book1Ch12';
import Book1Ch13 from './components/books/book1/Book1Ch13';
import Book1Ch14 from './components/books/book1/Book1Ch14';
import Book1Ch1Schillinger from './components/books/book1/Book1Ch1Schillinger';
import Book1Ch2Schillinger from './components/books/book1/Book1Ch2Schillinger';
import Book1Ch3Schillinger from './components/books/book1/Book1Ch3Schillinger';
import Book1Ch4Schillinger from './components/books/book1/Book1Ch4Schillinger';
import Book1Ch5Schillinger from './components/books/book1/Book1Ch5Schillinger';
import Book1Ch6Schillinger from './components/books/book1/Book1Ch6Schillinger';
import Book1Ch7Schillinger from './components/books/book1/Book1Ch7Schillinger';
import Book1Ch8Schillinger from './components/books/book1/Book1Ch8Schillinger';
import Book1Ch9Schillinger from './components/books/book1/Book1Ch9Schillinger';
import Book1Ch10Schillinger from './components/books/book1/Book1Ch10Schillinger';
import Book1Ch11Schillinger from './components/books/book1/Book1Ch11Schillinger';
import Book1Ch12Schillinger from './components/books/book1/Book1Ch12Schillinger';
import Book1Ch13Schillinger from './components/books/book1/Book1Ch13Schillinger';
import Book1Ch14Schillinger from './components/books/book1/Book1Ch14Schillinger';
import Book2 from './components/books/book2/Book2';
import Book3 from './components/books/book3/Book3';
import Book4 from './components/books/book4/Book4';
import Book5 from './components/books/book5/Book5';
import Book6 from './components/books/book6/Book6';
import Book7 from './components/books/book7/Book7';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pendulum from './components/applets/Pendulum';
import Waveform from './components/applets/Waveform';
import Ch2Generator from './components/applets/Ch2Generator';
import Ch3Generator from './components/applets/Ch3Generator';
import Ch4Generator from './components/applets/Ch4Generator';
import Ch5Generator from './components/applets/Ch5Generator';
import Ch6Generator from './components/applets/Ch6Generator';
import Ch7Generator from './components/applets/Ch7Generator';
import Ch8Generator from './components/applets/Ch8Generator';
import Ch9Generator from './components/applets/Ch9Generator';
import Ch10Generator from './components/applets/Ch10Generator';
import Ch11Generator from './components/applets/Ch11Generator';
import Ch12Generator from './components/applets/Ch12Generator';
import Ch13Generator from './components/applets/Ch13Generator';
import Ch14Generator from './components/applets/Ch14Generator';

function App() {

  if (localStorage.getItem("schillArr") === null) {

    // make a new array to hold our schillinger applet history, place it in localStorage
    return localStorage.setItem('schillArr', '["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]');
  
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contents" component={Contents} />
          <Route path="/applethistory" component={AppletHistory} />
          <Route path="/recordings" component={Recordings} />
          <Route path="/account" component={Account} />
          <Route path="/overture" component={Overture} />
          <Route path="/overtureschillinger" component={OvertureSchillinger} />
          <Route path="/intro" component={Introduction} />
          <Route path="/introSchillinger" component={IntroductionSchillinger} />
          <Route path="/book1" component={Book1} />
          <Route path="/book1ch1" component={Book1Ch1} />
          <Route path="/book1ch2" component={Book1Ch2} />
          <Route path="/book1ch3" component={Book1Ch3} />
          <Route path="/book1ch4" component={Book1Ch4} />
          <Route path="/book1ch5" component={Book1Ch5} />
          <Route path="/book1ch6" component={Book1Ch6} />
          <Route path="/book1ch7" component={Book1Ch7} />
          <Route path="/book1ch8" component={Book1Ch8} />
          <Route path="/book1ch9" component={Book1Ch9} />
          <Route path="/book1ch10" component={Book1Ch10} />
          <Route path="/book1ch11" component={Book1Ch11} />
          <Route path="/book1ch12" component={Book1Ch12} />
          <Route path="/book1ch13" component={Book1Ch13} />
          <Route path="/book1ch14" component={Book1Ch14} />
          <Route path="/book1ch1Schillinger"  component={Book1Ch1Schillinger} />
          <Route path="/book1ch2Schillinger"  component={Book1Ch2Schillinger} />
          <Route path="/book1ch3Schillinger"  component={Book1Ch3Schillinger} />
          <Route path="/book1ch4Schillinger"  component={Book1Ch4Schillinger} />
          <Route path="/book1ch5Schillinger"  component={Book1Ch5Schillinger} />
          <Route path="/book1ch6Schillinger"  component={Book1Ch6Schillinger} />
          <Route path="/book1ch7Schillinger"  component={Book1Ch7Schillinger} />
          <Route path="/book1ch8Schillinger"  component={Book1Ch8Schillinger} />
          <Route path="/book1ch9Schillinger"  component={Book1Ch9Schillinger} />
          <Route path="/book1ch10Schillinger" component={Book1Ch10Schillinger} />
          <Route path="/book1ch11Schillinger" component={Book1Ch11Schillinger} />
          <Route path="/book1ch12Schillinger" component={Book1Ch12Schillinger} />
          <Route path="/book1ch13Schillinger" component={Book1Ch13Schillinger} />
          <Route path="/book1ch14Schillinger" component={Book1Ch14Schillinger} />
          <Route path="/book2" component={Book2} />
          <Route path="/book3" component={Book3} />
          <Route path="/book4" component={Book4} />
          <Route path="/book5" component={Book5} />
          <Route path="/book6" component={Book6} />
          <Route path="/book7" component={Book7} />
          <Route path="/ch1pendulum" component={Pendulum} />
          <Route path="/ch1waveform" component={Waveform} />
          <Route path="/ch2generator" component={Ch2Generator} />
          <Route path="/ch3generator" component={Ch3Generator} />
          <Route path="/ch4generator" component={Ch4Generator} />
          <Route path="/ch5generator" component={Ch5Generator} />
          <Route path="/ch6generator" component={Ch6Generator} />
          <Route path="/ch7generator" component={Ch7Generator} />
          <Route path="/ch8generator" component={Ch8Generator} />
          <Route path="/ch9generator" component={Ch9Generator} />
          <Route path="/ch10generator" component={Ch10Generator} />
          <Route path="/ch11generator" component={Ch11Generator} />
          <Route path="/ch12generator" component={Ch12Generator} />
          <Route path="/ch13generator" component={Ch13Generator} />
          <Route path="/ch14generator" component={Ch14Generator} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
