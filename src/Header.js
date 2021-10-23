import React from 'react'
import Navbar from './Navbar'
import Search from './Search'




export default function Header() {
    return (
        <div>

            
            <Navbar/>
              {/* <p className="title">Groceries delivered in 1 hour</p>
     
    <img class="bg_image" src="pxc.jpg" alt="altaf" />
  
            <Search/> */}

            {/* <!-- hero section --> */}
            <img class="hero-section" src="img/Grocery-apps-Banner-main-450.png" alt="altaf" />
<header >

    <div class="content">
        {/* <img src="img/light-logo.png" class="logo" alt=""/> */}
        
        <h1 class="sub-heading">Groceries delivered in 1 hour</h1>
        <Search/>
    </div>
</header>





      <div class="advert-center ">

        <div class="advert-box">
          <img src="img/Grocery-apps-Banner-main-450.png" alt=""/>
        </div>

        <div class="advert-box">
          <img src="img/Grocery-apps-Banner-main-450.png" alt=""/>
        </div>

       
      </div>









           
        


        </div>
    )
}
