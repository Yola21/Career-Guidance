import React, { Component } from 'react';
import './Footer.css';

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

                    <div>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <a href="/#">
                                <i class="fab fa-facebook-square facebook"> </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                <i class="fab fa-instagram instagram"> </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                <i class="fab fa-twitter-square twitter"> </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                <i class="fab fa-google-plus-square google"> </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                <i class="fab fa-linkedin linkedin"> </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="footer_Copyright">
                    <p>© 2020 Copyright: <a href="/#"> Career Guidance.com</a></p>
                </div>
            </footer>
        )
    }
}
