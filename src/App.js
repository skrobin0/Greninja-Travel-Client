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
import Galary from "./Component/Photo Gallery/PhotoGallery"

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
            <Route path="/galary">
              <Galary></Galary>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/tourdescription/:serviceId">
              <TourDescription></TourDescription>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/addTours">
              <ToursAdd></ToursAdd>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
