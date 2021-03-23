import React from "react";
import Userfront from "@userfront/react";

Userfront.init("7n8wd5b6");

const LoginForm = Userfront.build({
  toolId: "ldlkdb",
});

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <LoginForm />
      <p>Did you forget your password?</p>
      <a href="/reset">
        <button type="button">Send me a Reset Link</button>
      </a>
    </>
  );
};

export default Login;
