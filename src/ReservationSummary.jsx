import React from "react";
import { useNavigate } from "react-router-dom";
function ReservationSummary() {
  const navigate = useNavigate();
  const name = localStorage.getItem("customerName");
  const phone = localStorage.getItem("customerPhone");
  const email = localStorage.getItem("customerEmail");
  const guests = localStorage.getItem("guestCount");
  const date = localStorage.getItem("reservationDate");
  const time = localStorage.getItem("reservationTime");
  const table = localStorage.getItem("selectedTable");
  const request =
    localStorage.getItem("specialRequest") || "No special request";
  return (
    <div className="reservation-form">
      <h2> Reservation Summary</h2>
      <div className="summary-box">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email} </p>
        <p><strong>Guests:</strong> {guests} </p>
        <h3>Reservation Details</h3>
        <p><strong>Date:</strong> {date} </p>
        <p><strong>Time:</strong> {time}</p>
        <p> <strong>Table:</strong> {table} </p>
        <h3>Special Request</h3>
        <p> {request}</p>
      </div>
      <button onClick={() =>navigate("/reservation/confirmation")
        }> Confirm Reservation</button>
    </div>
  );
}export default ReservationSummary;