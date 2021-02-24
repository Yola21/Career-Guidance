import React, { Component } from 'react';
import './Body.css';
import career from './image/career.png';

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="body_Intro">
                    <section>
                        <h3>Career Guidance</h3>
                        <p>We are here to help the High Grad or equivalent students in choosing their career path. We will guide them in understanding their personality traits. We also provide details of colleges and career fields which best fit their personality trait.</p>
                    </section>
                    <div className="body_IntroSVG">
                        <img src={career} alt="Career Guidance" />
                    </div>
                </div>
            </div>
        )
    }
}
