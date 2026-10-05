import React from "react";


// Button
export function Button({
  children,
  onClick,
  type = "button"
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      className="common-button"
    >
      {children}
    </button>
  );
}


// Input
export function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder
}) {

  return (
    <div className="form-group">

      <label>
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

    </div>
  );
}


// DatePicker
export function DatePicker({
  value,
  onChange
}) {

  return (
    <div className="form-group">

      <label>
        Reservation Date
      </label>

      <input
        type="date"
        value={value}
        onChange={onChange}
      />

    </div>
  );
}


// RestaurantCard
export function RestaurantCard({
  restaurant,
  onSelect
}) {

  return (
    <div className="restaurant-card">

      <h3>
        {restaurant.name}
      </h3>

      <p>
         {restaurant.location}
      </p>

      <p>
         {restaurant.cuisine}
      </p>

      <p>
         {restaurant.rating}
      </p>

      <Button
        onClick={onSelect}
      >
        View Restaurant
      </Button>

    </div>
  );
}


// TableCard
export function TableCard({
  table,
  onSelect
}) {

  return (
    <div className="table-card">

      <h3>
        {table.id}
      </h3>

      <p>
        Seats: {table.seats}
      </p>

      <Button
        onClick={onSelect}
      >
        Select Table
      </Button>

    </div>
  );
}


// Loading
export function Loading() {

  return (
    <div className="loading">
      <h3>Loading...</h3>
    </div>
  );
}