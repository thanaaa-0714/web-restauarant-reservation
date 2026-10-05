import React, {
  createContext,
  useContext,
  useState
} from "react";

const ReservationContext = createContext();


export function ReservationProvider({ children }) {

  const [selectedRestaurant, setSelectedRestaurant] =
    useState(null);

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [guests, setGuests] = useState(1);

  const [selectedTable, setSelectedTable] =
    useState(null);

  const [customerName, setCustomerName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [specialRequest, setSpecialRequest] =
    useState("");


  return (

    <ReservationContext.Provider
      value={{

        selectedRestaurant,
        setSelectedRestaurant,

        date,
        setDate,

        time,
        setTime,

        guests,
        setGuests,

        selectedTable,
        setSelectedTable,

        customerName,
        setCustomerName,

        phone,
        setPhone,

        specialRequest,
        setSpecialRequest

      }}
    >

      {children}

    </ReservationContext.Provider>

  );
}


export function useReservationContext() {

  return useContext(ReservationContext);

}