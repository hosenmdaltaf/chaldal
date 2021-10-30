import React from 'react'

function Support() {
    return (
        <div >
            <div className="supportseaction">
            {/* <img  className="supportimg" src="img/banner-corporate-page.jpg" alt="support"/> */}

          

         <div className="support">
            <div className="supporttxt">
                <img src="img/icons8-bag-60.png" alt=""/>
                <h2>Do you own a business?</h2>
                <p>Become a Corporate Customer</p>
            </div>

            <div className="supportcards">
                <div className="supportcard">
                    <img src="img/icons8-money-80.png" alt="logo"/>
                    <p>Special Corporate Prices</p>
                </div>
                <div className="supportcard">
                    <img src="img/icons8-customer-support-60.png" alt="logo"/>
                    <p>24 Hour Support</p>
                </div>
                <div className="supportcard">
                    <img src="img/icons8-delivery-truck-64.png" alt="logo"/>
                    <p>Flexible Delivery</p>
                </div>
            </div>
            <div className="supportbuttontxt">
            <button className="supportbutton">Find out more</button>
            </div>
           
        </div>
           
        </div>
        </div>
    )
}

export default Support
