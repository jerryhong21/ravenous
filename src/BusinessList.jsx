import React from 'react';


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
    category: "Asian Fusion",
    rating: 5.0,
    reviewCount: 24
  },
]

function Business({ restaurant }) {

  return (
    <div className="restaurant-container" style={{ backgroundImage: `url(${restaurant.image})` }}>
      {/* <img className="restaurantImg" alt={`image of ${restaurant.name}`} src={restaurant.image}/> */}
      <h1 id="name">
        {restaurant.name}
      </h1>
      <div className="location">
        <ul>
          <li className="city">{restaurant.city}</li>
          <li className="zipcode">{restaurant.zipcode}</li>
          <li className="state">{restaurant.state}</li>
          <li className="address">{restaurant.address}</li>
        </ul>
      </div>
      <h2 id="category">{restaurant.category}</h2>
      <div className="feedback">
        <p id="rating">{restaurant.rating}</p>
        <p id="reviewCount">{restaurant.reviewCount}</p>
      </div>
    </div>
  );
}


export function BusinessList({restaurantList}) {
  
  return restaurantList.map((restaurant, index) => (
    <Business key={index} restaurant={restaurant}/>
  ));
}

export default BusinessList;

