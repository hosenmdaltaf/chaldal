import React from 'react'
import Search from './Search'

function Navbar() {
    return (
        <div>
  
        <nav class="navbar">
        <div class="nav">
            {/* <img src="img/dark-logo.png" class="brand-logo" alt=""/> */}
            <h1 class="brand-logo">Chaldal</h1>

            {/* <div class="nav-items"> */}

                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product"/>
                    <button class="search-btn">search</button>
                </div>

                <div class="nav-items">
                {/* <a href="#"><img src="img/user.png" alt=""/></a>
                <a href="#"><img src="img/cart.png" alt=""/></a> */}
                <p>Dhaka</p>
                <p>Help&More</p>
                <p>En|Bn</p>
                <p>Signin</p>
                </div>

            {/* </div> */}


        </div>
        </nav>



        </div>
    )
}

export default Navbar
