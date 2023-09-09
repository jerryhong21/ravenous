import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


export const restaurantList = [
  {
    name: "stellinis",
    image: "https://www.hunterandbligh.com.au/wp-content/uploads/2021/03/The-Star-Sydney-Welcomes-New-Italian-Restaurant-and-Bar-for-2021.-Cucina-Porto.-Image-supplied.-750x375.png",
    city: "Sydney",
    address: "1010 Paddington Way",
    state: "NSW",
    zipcode: "2029",
    category: "italian",
    rating: 4.5,
    reviewCount: 90
  },
  {
    name: "Pinnochios",
    image: "https://www.hunterandbligh.com.au/wp-content/uploads/2021/03/The-Star-Sydney-Welcomes-New-Italian-Restaurant-and-Bar-for-2021.-Cucina-Porto.-Image-supplied.-750x375.png",
    city: "Melbourne",
    address: "29 Abotsleight Rd",
    state: "VIC",
    zipcode: "2020",
    category: "Asian Fusion",
    rating: 5.0,
    reviewCount: 24
  },
  {
    name: "Pitchers",
    image: "https://www.hunterandbligh.com.au/wp-content/uploads/2021/03/The-Star-Sydney-Welcomes-New-Italian-Restaurant-and-Bar-for-2021.-Cucina-Porto.-Image-supplied.-750x375.png",
    city: "Melbourne",
    address: "29 Abotsleight Rd",
    state: "VIC",
    zipcode: "2020",
    category: "Mexican",
    rating: 5.0,
    reviewCount: 24
  },
]

function BusinessList({restaurantList}) {
  
  return (
    <div className="business-list">
      {
        restaurantList.map((restaurant, index) => (
          <Business key={index} restaurant={restaurant}/>
        ))
      }
    </div>);
}

export default BusinessList;

