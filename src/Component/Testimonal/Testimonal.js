import React from 'react';
import './Testimonal.css'
import South from "../../Assest/images/Southstyle.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Testimonal = () => {
    return (
        <div>
            <div className="Testimonldiv">
             <div className="testimonal">
             <h1>TESTIMONAL</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
             </div>
                <div className="imgdisplay">
                    <div >
                  <img src={South} alt="" className="imgdiv"/>
                    </div>
                    <div>
                      <h5>Krithick Hennan</h5>
                    </div>
                </div>
                <div className="arrowdiv">
                <ArrowForwardIosIcon className="Arrowicon"/>
                <ArrowBackIosIcon className="Arrowicon"/>
                </div>
            </div>
        </div>
    );
};

export default Testimonal;