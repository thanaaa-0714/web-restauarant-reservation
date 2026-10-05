import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "./ErrorBoundary";
import Reservation from "./Reservation";
import Checkout from "./Checkout";
import Reservations from "./Reservations";
import RestaurantList from "./RestaurantList";
import RestaurantDetails from "./RestaurantDetails";
import DateTime from "./DateTime";
import TableSelection from "./TableSelection";
import CustomerDetails from "./CustomerDetails";
import SpecialRequest from "./SpecialRequest";
import ReservationSummary from "./ReservationSummary";
import Confirmation from "./Confirmation";
import "./index.css";
function Home() {
  return (
    <div className="home">
      <h2> Restaurant Reservation System</h2>
      <p> Search restaurants and reserve your table easily. </p>
      <Link to="/login">
        <button> Login to Start Reservation </button>
      </Link>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary>
          <header className="header">
            <h1>Restaurant Reservation System </h1>
          </header>
          <nav className="navbar">
            <Link to="/"> Home</Link>
            <Link to="/signup">Sign Up </Link>
            <Link to="/login">Login </Link>
            <Link to="/reservation"> Restaurants </Link>
            <Link to="/checkout"> Checkout</Link>
            <Link to="/reservations"> My Reservations </Link>
          </nav>
          <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservation" element={
                <ProtectedRoute>
                  <Reservation />
                </ProtectedRoute>
              } >
              <Route index element={<RestaurantList />}/>
              <Route  path="restaurant/:id" element={<RestaurantDetails />} />
              <Route path="date-time" element={<DateTime />}/>
              <Route path="table" element={<TableSelection />} />
              <Route path="customer" element={<CustomerDetails />} />
              <Route path="special-request" element={<SpecialRequest />} />
              <Route path="summary" element={<ReservationSummary />}/>
              <Route path="confirmation" element={<Confirmation />} />
            </Route>
            <Route path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute> } />
            <Route path="/reservations" element={
                <ProtectedRoute>
                  <Reservations />
                </ProtectedRoute>
              }/>
          </Routes>
          </main>
          <footer className="footer">
            <p> © 2026 Restaurant Reservation System</p>
          </footer>
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  );
}export default App;