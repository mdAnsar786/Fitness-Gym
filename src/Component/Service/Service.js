import React from 'react';
import images2 from "../../Assest/images/coaching.jpg"
import Muscle from "../../Assest/images/Online.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Service.css'
import { Button } from '@mui/material';

const Service = () => {
    return (
        <div>
            
            <h2 className="serviceheader">OUR SERVICE</h2>
            <div className="servicediv">
            <div className="col-md-6">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <div className="box-hostel">
                        <img src={images2} alt="" />
                        <div className="indepen-msg">
                            <img src={Muscle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="Couching">
                <h2>ONLINE COUCHING</h2>
                <p>It can seem overwhelming with all of the sources of information out there, 
                    but Envysion Fitness makes training and achieving your goals easy by applying flexible .</p>
                </div>
                <div className="mainIcontag">
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
                <div className="lasticontag">
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
               <div>
               <div className="serchbtn">
                                 <Button>Search More</Button>
                            </div >
               </div>
               </div>
               </div>
            </div>
        
    );
};

export default Service;