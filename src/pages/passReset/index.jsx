import React from "react";
import Userfront from "@userfront/react";

const PasswordResetForm = Userfront.build({
  toolId: "nakokm",
});

const PassReset = () => {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
};

export default PassReset;
