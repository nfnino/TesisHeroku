import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/AppNavbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import newAsset from "./components/create/AssetForm";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import UserDash from "./components/dashboard/DashUsers";
import AssetDash from "./components/dashboard/DashAssets";
import Profile from "./components/auth/Profile";
import TaskDash from "./components/dashboard/DashTasks";
import newTask from "./components/create/TaskForm";
import RoutineDash from "./components/dashboard/DashRoutines";
import newRoutine from "./components/create/RoutineForm";
import assetDetails from "./components/details/AssetDetails";
import taskDetails from "./components/details/TaskDetails";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (  
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
                  <Route exact path="/" component={Landing} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/users" component={UserDash} />
                  <PrivateRoute exact path="/register" component={Register} />
                  <PrivateRoute exact path="/assets" component={AssetDash} />
                  <PrivateRoute exact path="/newAsset" component={newAsset} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/tasks" component={TaskDash} />
                  <PrivateRoute exact path="/newTask" component={newTask} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/routines" component={RoutineDash} />
                  <PrivateRoute exact path="/newRoutine" component={newRoutine} />
                  <PrivateRoute exact path="/assets/:id" component={assetDetails} />
                  <PrivateRoute exact path="/tasks/:id" component={taskDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;