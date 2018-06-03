import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import TopNav from './components/TopNav'
import UserProfile from './components/UserProfile'
import './App.css'

// add this to make the router work
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Router>
      <div>
      <TopNav />
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={UserProfile}/>
      </div>
      </Router>
    </div>
  );
};

export default App


// wrap everything in the router
// need to do a redirect too with exact path