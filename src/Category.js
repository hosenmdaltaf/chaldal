import React from 'react'

function Category() {
    return (
        <div>
          <div className="categoryhead">
            <h2 className="categoryh2">Our Product Categories</h2>
            </div>
           <div className="categoryrow">

              <div className="Categorybox">
                <p className="categorytext">Cooking</p>
                <img className="categoryimg" src="img/pet-care.webp" alt=""/>
              </div>
              <div className="Categorybox">
                <p  className="categorytext">Cooking</p>
                <img className="categoryimg" src="img/popular.webp" alt=""/>
              </div>
              <div className="Categorybox">
                <p  className="categorytext">Cooking</p>
                <img className="categoryimg" src="img/popular.webp" alt=""/>
              </div>

           </div>


           <div className="categoryrow">

            <div className="Categorybox">
              <p className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/vehicle-essentials.webp" alt=""/>
            </div>
            <div className="Categorybox">
              <p  className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/vehicle-essentials.webp" alt=""/>
            </div>
            <div className="Categorybox">
              <p  className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/vehicle-essentials.webp" alt=""/>
            </div>

          </div>

          <div className="categoryrow">

            <div className="Categorybox">
              <p className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/office-products.webp" alt=""/>
            </div>
            <div className="Categorybox">
              <p  className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/office-products.webp" alt=""/>
            </div>
            <div className="Categorybox">
              <p  className="categorytext">Cooking</p>
              <img className="categoryimg" src="img/office-products.webp" alt=""/>
            </div>

          </div>

            
        </div>
    )
}

export default Category
