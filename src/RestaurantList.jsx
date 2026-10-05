import React from "react";
import { useNavigate } from "react-router-dom";
function RestaurantList() {
  const navigate = useNavigate();
  const restaurants = [
    {
      id: 101,
      name: "Spice Garden",
      location: "Coimbatore",
      cuisine: "Indian",
      rating: "4.5",
      hours: "10:00 AM - 10:00 PM"
    },
    {
      id: 102,
      name: "Urban Bites",
      location: "Chennai",
      cuisine: "Italian",
      rating: "4.3",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      id: 103,
      name: "Ocean Pearl",
      location: "Madurai",
      cuisine: "Seafood",
      rating: "4.7",
      hours: "12:00 PM - 10:30 PM"
    },
    {
      id: 104,
      name: "Green Leaf",
      location: "Coimbatore",
      cuisine: "Vegetarian",
      rating: "4.4",
      hours: "9:00 AM - 9:30 PM"
    }
  ];
  return (
    <div className="restaurant-list-page">
      <h2> Choose a Restaurant</h2>
      <p>Select a restaurant to view its details and reserve a table.</p>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id} >
            <h3>{restaurant.name}</h3>
            <p> {restaurant.location}</p>
            <p> {restaurant.cuisine}</p>
            <p> {restaurant.rating}</p>
            <p>{restaurant.hours} </p>
            <button onClick={() =>
                navigate(`/reservation/restaurant/${restaurant.id}`)}>Select Restaurant </button>
          </div>
        ))}
      </div>
    </div>
  );
}export default RestaurantList;