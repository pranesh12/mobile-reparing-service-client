import "./App.css";
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./components/User/Book/Book";
import BookingList from "./components/User/BookingList/BookingList";
import AddReview from "./components/User/AddReview/AddReview";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./components/Admin/OrderList/OrderList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [serviceData, setServiceData] = useState([]);
  const [buyerData, setBuyerData] = useState({
    title: null,
    price: null,
  });
  const [login, setLogin] = useState({
    email: null,
    name: null,
  });
  return (
    <userContext.Provider
      value={{ serviceData, setServiceData, login, setLogin, buyerData, setBuyerData }}>
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/book">
              <Book />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/addreview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/bookinglist">
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path="/admin/AddService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/admin/Makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/admin/OrderList">
              <OrderList />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
