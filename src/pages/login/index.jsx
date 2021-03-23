import React from "react";
import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
  toolId: "ldlkdb",
});

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <LoginForm />
    </>
  );
};

export default Login;
