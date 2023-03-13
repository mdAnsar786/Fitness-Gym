import React from 'react';
import personal from "../../Assest/images/personal.jpg"
import personal2 from "../../Assest/images/personal2.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Traning.css'
import { Button } from '@mui/material';

const Traning = () => {
    return (
        <div>
            <div className="Traningdiv">
            <div>
                <div className="Couching">
                <h2>PERSONAL TRANING</h2>
                <p>ONLINE COACHING Envysion Fitness Training app offers. Easy to follow 
                    exercise programming; Video Exercise Demonstrations; Data logging to record .</p>
                </div>
                <div className="mainIcon">
                <div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type</div>
                </div>
             
                </div>
                <div className="lasticon">
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type.</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type.</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type.</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type.</div>
                </div>
                <div className="icontag">
                    <ArrowForwardIosIcon className="icon"/>
                    <div>It depends on the type.</div>
                </div>
              </div>
               </div>
              <div className="serchbtn">
                                 <Button>Learn More</Button>
                            </div >
            </div>
            <div className="col-md-6">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>

                    <div className="box-hostel">
                        <img src={personal} alt="" />
                        <div className="indepen-msg">
                            <img src={personal2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Traning;