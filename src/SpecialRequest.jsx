import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SpecialRequest() {
  const navigate = useNavigate();
  const [request, setRequest] = useState("");
  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem("specialRequest",request
    );
    navigate("/reservation/summary");
  };
  return (
    <div className="reservation-form">
      <h2> Special Request</h2>
      <p> Do you have any special requests?</p>
      <textarea value={request} onChange={(e) => setRequest(e.target.value)}
        placeholder="Enter your special request" rows="5" /><br />
      <button onClick={handleNext}>Continue </button>
    </div>
  );
}export default SpecialRequest;