import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    state = {
        index: false,
    }

    componentDidMount(){
        this.changeHeader();
        console.log(this.state.index)
    }

    changeHeader = () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 30){
                this.setState({
                    index: true, 
                })
            }
            else{
                this.setState({
                    index: false,
                })
            }
        })
        
        return () => {
            window.removeEventListener("scroll")
        }
    }

    render() {
        return (
            <div className={`header ${this.state.index && "header_Show"}`}>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/assessment">
                        <li>Assessment</li>
                    </Link>
                    <Link to="/">
                        <li><h1>What's Next</h1></li>
                    </Link>
                    <Link to="/personality">
                        <li>Personality Traits</li>
                    </Link>
                    <Link to="/working">
                        <li>Working</li>
                    </Link>
                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>
                </ul>
                <div className="header_Login">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}
