import './Business.css';

function Business({ restaurant }) {

  return (
    <div className="restaurant-card" style={{ backgroundImage: `url(${restaurant.image})`, opacity: 0.8 }}>
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

export default Business;