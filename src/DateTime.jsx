import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function DateTime() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleNext = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    localStorage.setItem(
      "reservationDate",date
    );
    localStorage.setItem(
      "reservationTime", time
    );navigate("/reservation/table");
  };
  return (
    <div className="reservation-form">
      <h2> Select Date & Time</h2>
      <label>Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label>Time</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleNext}>Continue </button>
    </div>
  );
}export default DateTime;