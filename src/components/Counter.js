import React from 'react'
import CountUp from 'react-countup';
import career from '../image/career.png';
import './Counter.css'; 

function Counter() {
    const value1 = 150;
    const value2 = 250;
    const value3 = 350;

    return (
        <div className="counter">
            <div className="body_CounterSVG">
                <img src={career} alt="Career Guidance" className="body_SVG" />
            </div>
            <div className="body_Box">
                <div>
                    <span>+
                        <CountUp
                            end={value1}
                            // duration={10}
                        />
                    </span>

                    <p>Students helped</p>
                </div>
                <div>
                    <span>+
                        <CountUp
                            end={value2}
                            // duration={10}
                        />
                    </span>
                    <p>Assessment done</p>
                </div>
                <div>
                    <span>+
                        <CountUp
                            end={value3}
                            // duration={10}
                        />
                    </span>
                    <p>Found their path</p>
                </div>
            </div>
        </div>
    )
}

export default Counter
