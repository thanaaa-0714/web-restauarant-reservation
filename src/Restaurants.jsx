import React, {
  useMemo,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

function Restaurants() {

  const [search, setSearch] =
    useState("");

  const [cuisine, setCuisine] =
    useState("");

  const [rating, setRating] =
    useState("");


  const restaurants = [

    {
      id: 101,
      name: "Spice Garden",
      location: "Coimbatore",
      cuisine: "Indian",
      rating: 4.5,
      hours: "10 AM - 10 PM"
    },

    {
      id: 102,
      name: "Urban Bites",
      location: "Chennai",
      cuisine: "Italian",
      rating: 4.3,
      hours: "11 AM - 11 PM"
    },

    {
      id: 103,
      name: "Ocean Pearl",
      location: "Madurai",
      cuisine: "Seafood",
      rating: 4.7,
      hours: "12 PM - 11 PM"
    },

    {
      id: 104,
      name: "Green Leaf",
      location: "Coimbatore",
      cuisine: "Vegetarian",
      rating: 4.6,
      hours: "9 AM - 9 PM"
    }

  ];


  const filtered =
    useMemo(() => {

      return restaurants.filter(
        (restaurant) => {

          const searchMatch =
            restaurant.location
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            restaurant.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );


          const cuisineMatch =
            cuisine === "" ||
            restaurant.cuisine === cuisine;


          const ratingMatch =
            rating === "" ||
            restaurant.rating >=
            Number(rating);


          return (
            searchMatch &&
            cuisineMatch &&
            ratingMatch
          );

        }
      );

    }, [
      search,
      cuisine,
      rating
    ]);


  return (

    <div className="restaurant-page">

      <h2>
         Restaurant Search
      </h2>


      <input
        type="text"
        placeholder="Search restaurant or location"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />


      <select
        value={cuisine}
        onChange={(e) =>
          setCuisine(e.target.value)
        }
      >

        <option value="">
          All Cuisines
        </option>

        <option value="Indian">
          Indian
        </option>

        <option value="Italian">
          Italian
        </option>

        <option value="Seafood">
          Seafood
        </option>

        <option value="Vegetarian">
          Vegetarian
        </option>

      </select>


      <select
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
      >

        <option value="">
          All Ratings
        </option>

        <option value="4">
          4+ Rating
        </option>

        <option value="4.5">
          4.5+ Rating
        </option>

      </select>


      <div className="restaurant-container">

        {filtered.length === 0 ? (

          <p>
            No restaurants found.
          </p>

        ) : (

          filtered.map(
            (restaurant) => (

              <div
                className="restaurant-card"
                key={restaurant.id}
              >

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

                <p>
                   {restaurant.hours}
                </p>

                <Link
                  to={`/restaurant/${restaurant.id}`}
                >

                  <button>
                    View Details
                  </button>

                </Link>

              </div>

            )
          )

        )}

      </div>

    </div>

  );
}

export default Restaurants;