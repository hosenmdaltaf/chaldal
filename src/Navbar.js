import React from 'react'
// import Search from './Search'

function Navbar() {
    return (
        <div>
  
      <nav class="navbar">
        <div class="nav">
            <div class="nav-items-logo">
                <div >
                    <img className="humberger"  src="img/icons8-menu.svg" class="" alt=""/> 
                </div>
                <div> 
                    <img src="img/logo-small.png" class="brand-logo" alt=""/>
                </div>
            </div>

                    {/* <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product"/>
                        <div class="search-btn">
                            <img   src="img/search_icon.png" class="search-icon" alt=""/> 
                        </div>
                    </div>  */}


                    <div id='search-box'>
                    <form action='/search' id='search-form' method='get' target='_top'>
                    <input id='search-text' placeholder="search brand, product(e.g. eggs,milk,potato)" type='text' />
                    {/* <div class="search-btn">
                            <img   src="img/search_icon.png" class="search-icon" alt=""/> 
                        </div> */}
                    </form>
                    </div>


   

            <div class="nav-items">
                <div className="navitemstextfirst">
                    <div className="nav-logo-text1">
                        <img className="navlogo1" src="img/location_icon.png" alt=""/>
                        <p>Dhaka</p>
                        <img  className="navlogo2" src="img/dropdown-icon-png-22.jpg" alt=""/>   
                    </div>
                    <div className="nav-logo-text"> 
                        <img  className="navlogo2" src="img/query.png" alt=""/>    
                        <p>Help&More</p>
                    </div>
                </div>

                <div className="navitemstextsecond">
                    <div className="nav-logo-text">     
                        <p>En|Bn</p>
                    </div>
                    <div className="nav-logo-text-last">     
                        <button className="lastitem">Signin</button>
                    </div>
                </div>

                </div>


            </div>
        </nav>
  

        </div>
    )
}

export default Navbar
