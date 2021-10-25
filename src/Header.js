import React from 'react'
import Navbar from './Navbar'
import Search from './Search'




export default function Header() {
    return (
        <div>

            
      <Navbar/>
    <div class="hero-section">
    <img  src="img/landingBannerTop.jpg" alt="altaf" />
    </div>
           
<header >

    <div class="content">  
        <h1 class="sub-heading">Groceries delivered in 1 hour</h1>
        <Search/>
    </div>
</header>


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
