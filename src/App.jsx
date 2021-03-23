import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userfront from "@userfront/react";
import Home from "./pages/home";
import Login from "./pages/login";
import PassReset from "./pages/passReset";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

Userfront.init("7n8wd5b6");

// const SignupForm = Userfront.build({
//   toolId: "bmarma",
// });

// const PasswordResetForm = Userfront.build({
//   toolId: "nakokm",
// });

export default function App() {
  return (
    <Router>
      <Header />
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav> */}

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/reset">
          <PassReset />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

// function PasswordReset() {
//   return (
//     <div>
//       <h2>Password Reset</h2>
//       <PasswordResetForm />
//     </div>
//   );
// }
