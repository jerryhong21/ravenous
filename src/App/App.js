import logo from '../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import { restaurantList } from '../BusinessList/BusinessList';
import SearchBar from '../Searchbar/Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className="row" id="restaurant-grid">
          <BusinessList className="restaurantList" id="restaurantList" restaurantList={restaurantList}/>
          {/* <Business className="restaurant" id={restaurant1.name} restaurant={restaurant1}/> */}
          {/* <Business className="restaurant" id={restaurant2.name} restaurant={restaurant2}/> */}
      </div>
        
    </div>
  );
}

export default App;
