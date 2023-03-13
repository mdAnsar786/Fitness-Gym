import React from 'react';
import Muscle from "../../Assest/images/Muscle.png"
import './FitnessGoal.css'
import { Button } from '@mui/material';

const FitnessGoal = () => {
    return (
        <div>
            <div className="Fitnessmaindiv">
                <div className="Fitnessdiv">
                    <h1><span style={{color:"yellow"}}>REACH</span> YOUR FITNESS<span style={{color:"yellow"}}>GOAL</span> 
                    <span style={{color:"black"}}>FASTER</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <div className="shopbtn">
                        <Button>Shop More</Button>
                    </div >
                </div>
                <div>
                    <img src={Muscle} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FitnessGoal;