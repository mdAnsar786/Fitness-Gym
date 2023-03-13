import React from 'react';
import Big from "../../Assest/images/Big.png"
import './About.css'

const About = () => {
    return (
        <div>

            <div className="EnvysionFittnes1">
                <div >
                    
                    <img src={Big} alt="" className="img-Size" />
                </div>
                <div className="EnvysionFittnes2">
                    <h1>
                        Aboust us Envysion Fittnes
                    </h1>
                    <p>Envysion Fitness has been working with other people since 2017 and prides itself on providing a realistic framework which helps people balance all the important aspects of their lives while pursuing an active lifestyle.</p>
                    <div>
                        <button style={{ backgroundColor: "orange", width: "120px", height: "40px", color: "black" }}>Search More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;