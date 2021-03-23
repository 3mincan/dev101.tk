import React from "react";
import Form from "./Form";
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";

const LogoutButton = Userfront.build({
  toolId: "kldndo",
});

const Dashboard = () => {
  function renderFn({ location }) {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <>
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        </>
      );
    }

    // If the user is logged in, show the dashboard
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
      <div>
        <h2>Dashboard</h2>
        <pre>{userData}</pre>
        <LogoutButton />
        <Form />
      </div>
    );
  }

  return <Route render={renderFn} />;
};

export default Dashboard;
