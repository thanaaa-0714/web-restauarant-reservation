import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function TableSelection() {
  const navigate = useNavigate();
  const [table, setTable] = useState("");
  const tables = [
    "Table 1",
    "Table 2",
    "Table 3",
    "Table 4",
    "Table 5",
    "Table 6"
  ];
  const handleNext = () => {
    if (!table) {
      alert("Please select a table");
      return;
    }
    localStorage.setItem("selectedTable", table);
    navigate("/reservation/customer");
  };
  return (
    <div className="reservation-form">
      <h2>Select Your Table</h2>
      <div className="table-list">
        {tables.map((item) => (
          <button key={item}className={
              table === item? "selected-table": ""
            }onClick={() => setTable(item)} >{item} </button>
        ))}
      </div>
      <button onClick={handleNext}> Continue</button>
    </div>
  );
}export default TableSelection;