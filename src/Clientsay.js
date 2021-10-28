import React from 'react'
import Slider from "react-slick";

function Clientsay() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    
      };
    return (
        <div className="clientseaction">
            <h2 className="clienth2">What our clients are saying</h2>
            <Slider {...settings}>
            <div className="clientsay">
                <div className="clientimgtxt">
                    <img className="clientimg" src="img/lp_feedback_faiza_haque.webp" alt="customerimg"/>
                    <p>Altaf hosen</p>
                </div>
                <div className="clienttxt">
                    <p>I have been shopping from chaldal for the past few months and i am loving the experience. Have been shopping from here and i have recommended my relatives too. They are also happy with the service. The prices are 
                    comparatively low and the products are genuine.</p>
                </div>
            </div>
            <div className="clientsay">
                <div className="clientimgtxt">
                    <img className="clientimg" src="img/lp_feedback_srabon_hasan.webp" alt="customerimg"/>
                    <p>Altaf hosen</p>
                </div>
                <div className="clienttxt">
                    <p>Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !</p>
                </div>
            </div>
            </Slider>
        </div>
    )
}

export default Clientsay
