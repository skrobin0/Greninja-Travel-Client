import "./App.css";
import Home from "./Component/Home-Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Component/Context/AuthProvider";
import TourDescription from "./Component/Tour Details/Tour Description/TourDescription";
import Login from "./Component/Login/Login";
import MyOrder from "./Component/Tour Manage/My Order/MyOrder";
import ManageOrder from "./Component/Tour Manage/Manage All Order/ManageOrder";
import ToursAdd from "./Component/Tour Manage/Tours Add/ToursAdd";
import Gallery from "./Component/Photo Gallery/PhotoGallery";
import PrivateRoute from "./Component/Private/PrivateRoute";
import Error from "./Component/Error/Error";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/tourdescription/:serviceId">
              <TourDescription></TourDescription>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/addTours">
              <ToursAdd></ToursAdd>
            </Route>
            <Route path="/*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
