import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from './Questions';
import ChatBot from './ChatBot';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
            <Footer />
            <ChatBot className="chatbot" />
          </Route>

          <Route exact path="/questions">
            <Questions />
            <ChatBot className="chatbot"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
