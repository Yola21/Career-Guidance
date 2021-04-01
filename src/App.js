import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Assessment from './components/Assessment';
import ChatBot from './ChatBot-Components/ChatBot';
import About from './components/About';
import Personality from './components/Personality';
import Working from './components/Working';
import FAQ from './components/FAQ';

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

          <Route exact path="/assessment">
            <Header />
            <Assessment />
            <ChatBot className="chatbot"/>
          </Route>

          <Route exact path="/about">
            <Header />
            <About />
            <ChatBot className="chatbot"/>
          </Route>

          <Route exact path="/personality">
            <Header />
            <Personality />
            <ChatBot className="chatbot"/>
          </Route>

          <Route exact path="/working">
            <Header />
            <Working />
            <ChatBot className="chatbot"/>
          </Route>

          <Route exact path="/faq">
            <Header />
            <FAQ />
            <ChatBot className="chatbot"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
