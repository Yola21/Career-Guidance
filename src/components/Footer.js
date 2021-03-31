import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <section className="footer_Section">
                    <div>
                        <h4>What's Next</h4>
                        <p>Careers are determined by an interaction between our personality and the environment. We want jobs with people like us. In choosing a career, people prefer jobs where they can be around others who are like them. They search for environments that will let them use their skills and abilities, and express their attitudes and values, while taking on enjoyable problems and roles. Behaviour is determined by an interaction between personality and environment. </p>
                    </div>

                    <div className="footer_Links">
                        <h4>Navigation</h4>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Assessment</li>
                            <li>Personality Traits</li>
                            <li>Working</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className="footer_SocialLinks">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <Link to="/">
                                <i className="fab fa-facebook-square facebook"> </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <i className="fab fa-instagram instagram"> </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <i className="fab fa-twitter-square twitter"> </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <i className="fab fa-google-plus-square google"> </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <i className="fab fa-linkedin linkedin"> </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="footer_Copyright">
                    <p>© 2021 Copyright: <Link to="/"> Career Guidance.com</Link></p>
                </div>
            </footer>
        )
    }
}
