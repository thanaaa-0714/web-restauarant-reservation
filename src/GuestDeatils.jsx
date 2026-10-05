import React from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useReservationContext
} from "./ReservationContext";

function GuestDetails() {

  const navigate =
    useNavigate();

  const {
    customerName,
    phone,
    dietaryPreference,
    specialRequest,

    setCustomerName,
    setPhone,
    setDietaryPreference,
    setSpecialRequest
  } = useReservationContext();


  const nextPage = () => {

    if (!customerName) {

      alert(
        "Please enter your name."
      );

      return;

    }


    if (!phone) {

      alert(
        "Please enter phone number."
      );

      return;

    }


    if (
      !/^[0-9]{10}$/.test(phone)
    ) {

      alert(
        "Phone number must contain 10 digits."
      );

      return;

    }


    if (
      specialRequest.length > 100
    ) {

      alert(
        "Special request is too long."
      );

      return;

    }


    navigate(
      "/reservation/summary"
    );

  };


  return (

    <div className="form-card">

      <h2>
        👤 Guest Details
      </h2>


      <label>
        Customer Name
      </label>

      <input
        type="text"
        value={customerName}
        placeholder="Enter your name"
        onChange={(e) =>
          setCustomerName(
            e.target.value
          )
        }
      />


      <label>
        Phone Number
      </label>

      <input
        type="tel"
        value={phone}
        placeholder="10 digit phone number"
        onChange={(e) =>
          setPhone(
            e.target.value
          )
        }
      />


      <label>
        Dietary Preference
      </label>

      <select
        value={dietaryPreference}
        onChange={(e) =>
          setDietaryPreference(
            e.target.value
          )
        }
      >

        <option value="">
          Select Preference
        </option>

        <option value="None">
          None
        </option>

        <option value="Vegetarian">
          Vegetarian
        </option>

        <option value="Vegan">
          Vegan
        </option>

        <option value="Gluten Free">
          Gluten Free
        </option>

      </select>


      <label>
        Special Request
      </label>

      <textarea
        value={specialRequest}
        placeholder="Any special request?"
        onChange={(e) =>
          setSpecialRequest(
            e.target.value
          )
        }
      />


      <button
        onClick={nextPage}
      >
        Next: Summary →
      </button>

    </div>

  );
}

export default GuestDetails;