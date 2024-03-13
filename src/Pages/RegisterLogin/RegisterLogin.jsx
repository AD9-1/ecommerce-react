import React from "react";
import "./RegisterLogin.scss";
const RegisterLogin = () => {
  return (
    <div className="registerlogin">
      <div className="registerlogin-container">
        <h1>Sign Up</h1>
        <section className="registerlogin-container-fields">
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Enter email id" />
          <input type="password" placeholder="Enter Password" />
        </section>
        <button>Continue</button>
        <p className="registerlogin-container-signup">
          Already have an account? <span>Login here</span>
        </p>
        <div className="registerlogin-container-agree">
          <input type="checkbox" name="" />
          <p>By continuing ,I agree to the terms and condition</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
