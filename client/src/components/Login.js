import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth";
import FormStyle from "../style/FormStyle";

const Login = ({ loginUser }) => {
  const [user, setUser] = useState({
    fullName: "",
    isSuperAdmin: false,
    isAdmin: false,
    password: "",
    email: ""
  });

  const { fullName, isAdmin, password, email, isSuperAdmin } = user;

  const onchange = e => {
    setUser({ [e.target.name]: e.target.value });
  };

  const onsubmit = e => {
    e.preventDefault();
  };

  return (
    <FormStyle>
      <div className="forms">
        <h1>Login</h1>
        <form onSubmit={onsubmit}>
          <div className="inputForm">
            <label>Full Name</label>
            <input
              type="text"
              required
              placeholder="Full Name"
              value={fullName}
              onChange={onchange}
              name="fullName"
            />
          </div>
          <div className="inputForm">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={onchange}
              name="email"
            />
          </div>
          <div className="inputForm">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={onchange}
              name="password"
            />
          </div>
          <div className="inputForm superForm">
            <label>isAdmin</label>
            <div className="super">
              <div className="yes">
                <input
                  type="radio"
                  name="isAdmin"
                  value="yes"
                  onChange={onchange}
                />
                <label htmlFor="Yes" className="yesLabel">
                  Yes
                </label>
              </div>
              <div className="no">
                <input
                  type="radio"
                  name="isAdmin"
                  value="no"
                  defaultChecked
                  onChange={onchange}
                />
                <label htmlFor="No" className="noLabel">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="inputForm superForm">
            <label>isSuperAdmin</label>
            <div className="super">
              <div className="yes">
                <input
                  type="radio"
                  name="superUser"
                  value="yes"
                  onChange={onchange}
                />
                <label htmlFor="Yes" className="yesLabel">
                  Yes
                </label>
              </div>
              <div className="no">
                <input
                  type="radio"
                  name="superUser"
                  value="no"
                  onChange={onchange}
                  defaultChecked
                />
                <label htmlFor="No" className="noLabel">
                  No
                </label>
              </div>
            </div>
          </div>

          <input type="submit" className="btn" />
        </form>
      </div>
    </FormStyle>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
