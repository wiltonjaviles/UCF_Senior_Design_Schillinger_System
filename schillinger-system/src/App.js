import './Style.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contents from './components/Contents';
import Recordings from './components/Recordings';
import Account from './components/Account';
import Overture from './components/books/Overture';
import Introduction from './components/books/Introduction';
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
import Book2 from './components/books/book2/Book2';
import BookThree from './components/books/book3/BookThree';
import BookFour from './components/books/book4/BookFour';
import BookFive from './components/books/book5/BookFive';
import BookSix from './components/books/book6/BookSix';
import BookSeven from './components/books/book7/BookSeven';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contents" component={Contents} />
          <Route path="/recordings" component={Recordings} />
          <Route path="/account" component={Account} />
          <Route path="/overture" component={Overture} />
          <Route path="/intro" component={Introduction} />
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
          <Route path="/book2" component={Book2} />
          <Route path="/book3" component={BookThree} />
          <Route path="/book4" component={BookFour} />
          <Route path="/book5" component={BookFive} />
          <Route path="/book6" component={BookSix} />
          <Route path="/book7" component={BookSeven} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
