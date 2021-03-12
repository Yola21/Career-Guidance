import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from './components/Questions';
import ChatBot from './chatbot-components/ChatBot';

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
