import React from 'react'
import Search from './Search'




export default function Header() {
    return (
        <div>

     
    <div class="hero-section">
    <img className="heroseactionimg" src="img/landingBannerTop.jpg" alt="altaf" />
    </div>


    <div class="content">  
        <h1 class="sub-heading">Groceries delivered in 1 hour</h1>
        <Search/>
    </div>



      <div class="advert-center ">

        <div class="advert-box">
          <img src="img/_mpimage_002.webp" alt=""/>
        </div>

        <div class="advert-box">
          <img src="img/_mpimage.webp" alt=""/>
        </div>

       
      </div>



        </div>
    )
}
