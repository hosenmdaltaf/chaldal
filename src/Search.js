import React from 'react'

function Search() {
    return (
        <div>
                {/* <div class="wrap">
                <div class="search">
               
                    <input type="text" class="searchTerm" placeholder="Search for products(eggs,food)"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                </div> */}

                <div class="search">
                    <input type="text" class="search-box" placeholder="search for products(eggs,milk)"/>
                    <button class="search-btn">search</button>
                </div>
        </div>
    )
}

export default Search
