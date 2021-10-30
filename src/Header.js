import React from 'react'
import Search from './Search'




export default function Header() {
    return (
        <div>

     
    <div class="hero-section">
    {/* <img className="heroseactionimg" src="img/landingBannerTop.jpg" alt="altaf" /> */}
  


  
        <h1 class="sub-heading">Groceries delivered in 1 hour</h1>
        {/* <Search/> */}
{/*   
        <div class="content">   */}
        <div id='search-boxhead'>
                    <form action='/search' id='search-form'>
                    <input id='search-texthead' placeholder="search brand, product(e.g. eggs,milk,potato)"  type='text'/>
                    <div class="search-btnhead">
                            <img   src="img/search_icon.png" class="search-icon" alt=""/> 
                        </div>
                    </form>
                    </div>
   
                    {/* </div> */}



      </div>

        </div>
    )
}
