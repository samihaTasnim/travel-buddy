
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Privateroute/PrivateRoute';
import Search from './Components/Search/Search';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/search">
          <Search></Search>
        </PrivateRoute>
        {/* <Route path="/blog">
           
          </Route> */}
        {/* <Route path="/contact">

          </Route> */}
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <h4>Page not found!!! 404 error</h4>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
