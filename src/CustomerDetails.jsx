import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CustomerDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !guests) {
      alert("Please fill all customer details");
      return;
    }
    localStorage.setItem(
      "customerName",
      name
    );
    localStorage.setItem(
      "customerPhone",
      phone
    );
    localStorage.setItem(
      "customerEmail",
      email
    );
    localStorage.setItem(
      "guestCount",
      guests
    );
    navigate("/reservation/special-request");
  };
  return (
    <div className="reservation-form">
      <h2> Customer Details</h2>
      <form onSubmit={handleNext}>
        <label>Customer Name</label>
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        <label> Phone Number</label>
        <input type="tel"value={phone}
          onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
        <label>Email </label>
        <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <label> Number of Guests </label>
        <input type="number" min="1" value={guests}
          onChange={(e) => setGuests(e.target.value)} placeholder="Enter number of guests" />
        <button type="submit"> Continue </button>
      </form>
    </div>
  );
}export default CustomerDetails;