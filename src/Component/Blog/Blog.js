import React from 'react';
import womanselfee from "../../Assest/images/womanselfee.jpg"
import manworkout from "../../Assest/images/manworkout.jpg"
import womanworkout from "../../Assest/images/womanworkout.jpg"
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1>FROM THE BLOG</h1>
            <div className="Blogdiv">
             <div className="col-md-6">
                <div style={{ display: "flex", justifyContent:"center", marginBottom: "30px" }}>
                    <div className="blog-hostel">
                        <img src={womanselfee} alt="" />
                        <div className="independent-masege">
                           <h4>How does online couching works?</h4>
                           <p> It can seem overwhelming with all of the sources of information out there, but Envysion Fitness makes training and achieving your goals.</p>
                           <button className="Indpenbtn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-md-6">
                <div style={{ display: "flex", justifyContent:"center", marginBottom: "30px" }}>
                    <div className="blog-hostel">
                        <img src={manworkout} alt="" />
                        <div className="independent-masege">
                           <h4> NEED TO MAKE A REATUN?</h4>
                           <p> It can seem overwhelming with all of the sources of information out there, but Envysion Fitness makes training and achieving your goals.</p>
                           <button className="Indpenbtn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-md-6">
                <div style={{ display: "flex", justifyContent:"center", marginBottom: "30px" }}>
                    <div className="blog-hostel">
                        <img src={womanworkout} alt="" />
                        <div className="independent-masege">
                           <h4>TRANING ACCESS ENVYSON?</h4>
                           <p> It can seem overwhelming with all of the sources of information out there, but Envysion Fitness makes training and achieving your goals.</p>
                           <button className="Indpenbtn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;