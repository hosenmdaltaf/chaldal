import React from 'react'
import Search from './Search'

function Navbar() {
    return (
        <div>
  
      <nav class="navbar">
        <div class="nav">
            <div class="nav-items-logo">
                <div >
                    <img className="humberger"  src="img/menu.png" class="" alt=""/> 
                </div>
                <div> 
                    <img src="img/logo-small.png" class="brand-logo" alt=""/>
                </div>
            </div>

                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product"/>
                        <div class="search-btn">
                            <img   src="img/search_icon.png" class="search-icon" alt=""/> 
                        </div>
                    </div>

            <div class="nav-items">
                    <div className="nav-logo-text">
                        <img className="navlogo" src="img/location_icon.png" alt=""/>
                        <p>Dhaka</p>
                    </div>
                    <div className="nav-logo-text"> 
                        <img  className="navlogo" src="img/query.png" alt=""/>    
                        <p>Help&More</p>
                    </div>
                    <div className="nav-logo-text">     
                        <p>En|Bn</p>
                    </div>
                    <div className="nav-logo-text">     
                        <button className="lastitem">Signin</button>
                    </div>

                </div>


            </div>
        </nav>



        </div>
    )
}

export default Navbar
