import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Assessment</li>
                    <li><h1>Career Guidance</h1></li>
                    <li>Personality Traits</li>
                    <li>Working</li>
                    <li>FAQ</li>
                </ul>
                <div className="header_Login">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}
