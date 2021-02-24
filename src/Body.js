import React, { Component } from 'react';
import './Body.css';
import career from './image/career.png';
import assessment from './image/assessment.png';

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="body_Intro">
                    <section>
                        <p>We are here to help the High Grad or equivalent students in choosing their career path. We will guide them in understanding their personality traits. We also provide details of colleges and career fields which best fit their personality trait.</p>
                    </section>
                    <div className="body_IntroSVG">
                        <img src={career} alt="Career Guidance" />
                    </div>
                </div>

                <div className="body_CounterBox">
                    <div>
                        <p>+100</p>
                        <p>Students helped</p>
                    </div>
                    <div>
                        <p>+100</p>
                        <p>Assessment done</p>
                    </div>
                    <div>
                        <p>+100</p>
                        <p>Found their path</p>
                    </div>
                </div>

                <div className="body_Personality">
                    <h2>Personality Traits</h2>
                    <p>Careers are determined by an interaction between our personality and the environment. We want jobs with people like us. In choosing a career, people prefer jobs where they can be around others who are like them. They search for environments that will let them use their skills and abilities, and express their attitudes and values, while taking on enjoyable problems and roles.</p>
                    <section className="body_PersonalityTraits">
                        <div>
                            <h3>REALISTIC</h3>
                            <p>Realistic types generally like to work with things more than with people. They are often described as genuine, sensible, practical, natural, thrifty, modest, persistent, and honest.</p>
                        </div>

                        <div>
                            <h3>INVESTIGATIVE</h3>
                            <p>Investigative types typically like to work with ideas more than with people or things. They are usually described as logical, curious, exact, intellectual, cautious, independent, quiet, and modest.</p>
                        </div>

                        <div>
                            <h3>ARTISTIC</h3>
                            <p>Artistic types usually like to work with ideas more than with things. They are usually described as open, creative, independent, emotional, impulsive, and original.</p>
                        </div>

                        <div>
                            <h3>SOCIAL</h3>
                            <p>Social types typically like to work with people more than with things. They are often described as helpful, understanding, responsible, warm, cooperative, convincing, friendly, kind, generous, and patient.</p>
                        </div>

                        <div>
                            <h3>ENTERPRISING</h3>
                            <p>Enterprising types generally like to work with people and ideas more than with things. They are usually described as outgoing, adventurous, energetic, optimistic, sociable, and self-confident.</p>
                        </div>

                        <div>
                            <h3>CONVENTIONAL</h3>
                            <p>Conventional types generally like to work with papers and numbers. They are typically described as practical, careful, thrifty, efficient, orderly, and persistent.</p>
                        </div>
                    </section>
                </div>

                <div className="body_Assessment">
                    <h2>Assessment</h2>
                    <p>Keeping Holland’s Theory of Vocational Personalities in Work Environment in mind, Career Counsellor App using personality traits would provide a detailed report to users on the personality traits they mostly match with. Students have to give a Personality Assessment, basis on which’s performance we will guide them through their career selection. </p>

                    <section className="body_AssessmentGuide">
                        <div>
                            <img src={assessment} alt="Assessment" />
                        </div>

                        <div id="body_AssessmentBox">
                            <h3>Personality Assessment</h3>
                            <p>Questions selected for Assessment will be according to the Holland’s Theory. Students have to answer each and every question honestly and after completing assessment they will see their results. </p>
                            <button>Take Assessment</button>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
