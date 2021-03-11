import React, { Component } from "react";
import "./ChatBot.css";
import Chatbot from "react-chatbot-kit";
import config from "../config/chatbotConfig";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

class ChatBot extends Component {
  state = {
    showBot: false
  };

  handleShowBot = () => {
    this.setState({
      showBot: !this.state.showBot
    });
  };

  render() {
    return (
      <div className="chatbot">
        {this.state.showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            className="chatbot_Chatbot"
          />
        )}
        <button className="chatbot_Button">
          <svg 
            onClick={this.handleShowBot}
            viewBox="0 0 640 512"
            className="chatbot_Icon"
          >
              <path
                  d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"
              ></path>
          </svg>
        </button>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSTcf9vxteFLXwKOVebZMuNkDh7PkAvwe7w&usqp=CAU"
          alt="Career Guidance Bot"
          onClick={this.handleShowBot}
        /> */}
      </div>
    );
  }
}

export default ChatBot;
