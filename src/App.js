import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from './Questions';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
            <Footer />
          </Route>

          <Route exact path="/questions">
            <Questions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
