import { Button, Grid } from '@mui/material';
import React from 'react';
import Supplement from "../../Assest/images/supplement.png"
import Man from "../../Assest/images/Man.png"
import Doumbell from "../../Assest/images/Doumbell.png"
import Women from "../../Assest/images/Women.png"
import './Shop.css'

import './Shop.css'

const Shop = () => {
    return (
        <div>
            <h4> SHOP WITH US</h4>
            <Grid container item xs={12} style={{marginLeft:"145px"}}>
                <div className="maincard">
                    <div className="supplementCard">
                        <div>
                            <img src={Supplement} alt="" className="imagTag" />
                        </div>
                        <div className="paragrap">
                               <p style={{marginBottom:"4px"}}>$80.00</p>
                                <p  style={{marginBottom:"10px"}}>Jar & Box Supplement</p>
                                 <div className="tagbtn">
                                 <Button>Shop More</Button>
                            </div >
                        </div>
                    </div>
                </div>
                <div className="maincard">
                    <div className="supplementCard">
                        <div>
                            <img src={Doumbell} alt="" className="imagTag" />
                        </div>
                        <div className="paragrap">
                               <p style={{marginBottom:"4px"}}>$80.00</p>
                                <p  style={{marginBottom:"10px"}}>Jar & Box Supplement</p>
                                 <div className="tagbtn">
                                 <Button>Shop More</Button>
                            </div >
                        </div>
                    </div>
                </div>
                <div className="maincard">
                    <div className="supplementCard">
                        <div>
                            <img src={Man} alt="" className="imagTag" />
                        </div>
                        <div className="paragrap">
                               <p style={{marginBottom:"4px"}}>$40.00</p>
                                <p  style={{marginBottom:"10px"}}>Man Gym shirt</p>
                                 <div className="tagbtn">
                                 <Button>Shop More</Button>
                            </div >
                        </div>
                    </div>
                </div>
                <div className="maincard">
                    <div className="supplementCard">
                        <div>
                            <img src={Women} alt="" className="imagTag" />
                        </div>
                        <div className="paragrap">
                               <p style={{marginBottom:"4px"}}>$50.00</p>
                                <p  style={{marginBottom:"10px"}}>Women Gym shirt</p>
                                 <div className="tagbtn">
                                 <Button>Shop More</Button>
                            </div >
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default Shop;