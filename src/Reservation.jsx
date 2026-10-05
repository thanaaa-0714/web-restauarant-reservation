import React from "react";
import { Outlet } from "react-router-dom";
function Reservation() {
  return (
    <div className="reservation-page">
      <Outlet />
    </div>
  );
}export default Reservation;