import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurants = {
    101: {
      name: "Spice Garden",
      location: "Coimbatore",
      cuisine: "Indian",
      rating: "4.5",
      hours: "10:00 AM - 10:00 PM",
      tables: 20,
      description:
        "Spice Garden offers delicious Indian food in a comfortable dining environment."
    },
    102: {
      name: "Urban Bites",
      location: "Chennai",
      cuisine: "Italian",
      rating: "4.3",
      hours: "11:00 AM - 11:00 PM",
      tables: 15,
      description:
        "Urban Bites offers Italian dishes, pasta, pizza and refreshing beverages."
    },
    103: {
      name: "Ocean Pearl",
      location: "Madurai",
      cuisine: "Seafood",
      rating: "4.7",
      hours: "12:00 PM - 10:30 PM",
      tables: 18,
      description:
        "Ocean Pearl specializes in fresh seafood and family dining."
    },
    104: {
      name: "Green Leaf",
      location: "Coimbatore",
      cuisine: "Vegetarian",
      rating: "4.4",
      hours: "9:00 AM - 9:30 PM",
      tables: 12,
      description:
        "Green Leaf provides healthy and delicious vegetarian meals."
    }
  };
  const restaurant = restaurants[id];
  if (!restaurant) {
    return (
      <div className="error-page">
        <h2>Restaurant Not Found</h2>
        <button onClick={() => navigate("/reservation")}> Back to Restaurants</button>
      </div>
    );
  }
  return (
    <div className="restaurant-details">
      <h2> {restaurant.name}</h2>
      <p> <strong>Location:</strong> {restaurant.location}</p>
      <p><strong>Cuisine:</strong> {restaurant.cuisine} </p>
      <p> <strong>Rating:</strong> {restaurant.rating} </p>
      <p> <strong>Opening Hours:</strong> {restaurant.hours} </p>
      <p> <strong>Available Tables:</strong> {restaurant.tables}</p>
      <p> <strong>Description:</strong></p>
      <p>{restaurant.description}</p>
      <button onClick={() => navigate("/reservation/date-time")} >Reserve a Table </button>
    </div>
  );
}export default RestaurantDetails;