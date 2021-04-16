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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/book">
            <Book />
          </Route>
          <Route path="/dashboard/addreview">
            <AddReview />
          </Route>
          <Route path="/dashboard/bookinglist">
            <BookingList />
          </Route>
          <Route path="/dashboard/AddService">
            <AddService />
          </Route>
          <Route path="/dashboard/Makeadmin">
            <MakeAdmin />
          </Route>
          <Route path="/dashboard/OrderList">
            <OrderList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
