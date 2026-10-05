import React from "react";
import { useNavigate } from "react-router-dom";
function Confirmation() {
  const navigate = useNavigate();
  const name = localStorage.getItem("customerName");
  const date = localStorage.getItem("reservationDate");
  const time = localStorage.getItem("reservationTime");
  const table = localStorage.getItem("selectedTable");
  const guests = localStorage.getItem("guestCount");
  const handleDone = () => {
    navigate("/reservations");
  };
  return (
    <div className="reservation-form">
      <h2> Reservation Confirmed!</h2>
      <p> Your restaurant reservation has been successfully
        confirmed. </p>
      <div className="summary-box">
        <h3>Reservation Details</h3>
        <p> <strong>Customer:</strong> {name} </p>
        <p><strong>Date:</strong> {date} </p>
        <p> <strong>Time:</strong> {time} </p>
        <p> <strong>Table:</strong> {table}</p>
        <p> <strong>Number of Guests:</strong> {guests} </p>
      </div>
      <button onClick={handleDone}>View My Reservations</button>
    </div>
  );
}export default Confirmation;