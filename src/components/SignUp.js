import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormStyle from '../style/FormStyle'

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    fullName: '',
    lastName: '',
    mobile: "",
    isSuperUser: false,
    socialReg: false,
    idpassreg: false,
    isAdmin: false,
    password: "",
    email: '',
    confirmPassword: ''
  });

  const {firstName, fullName, lastName, mobile, isAdmin, idpassreg, socialReg,password, email, confirmPassword, isSuperUser } = user;

  const onchange = e => {
    setUser({ [e.target.name]: e.target.value });
  };

  const onsubmit = e => {
      e.preventDefault();
  }

  return (
    <FormStyle>
      <div className="forms">
        <h1>Register</h1>
        <form onSubmit={onsubmit}>
          <div className="inputForm">
            <label>First Name</label>
            <input
              type="text"
              required
              placeholder="First Name"
              value={firstName}
              onChange={onchange}
              name="firstName"
            />
          </div>
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
            <label>Last Name</label>
            <input
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={onchange}
              name="lastName"
            />
          </div>
          <div className="inputForm">
            <label>Mobile</label>
            <input
              type="number"
              required
              placeholder="Mobile"
              value={mobile}
              onChange={onchange}
              name="mobile"
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
          <div className="inputForm">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onchange}
              name="confirmPassword"
            />
          </div>
          <div className="inputForm superForm">
            <label>socialReg</label>
            <div className="super">
              <div className="yes">
                <input type="radio" name="socialReg" value="yes" onChange = {onchange}/>
                <label htmlFor="Yes" className='yesLabel'>Yes</label>
              </div>
              <div className="no">
                <input type="radio" name="socialReg" defaultChecked value="no" onChange = {onchange}/>
                <label htmlFor="No" className='noLabel'>No</label>
              </div>
            </div>
          </div>
          <div className="inputForm superForm">
            <label>idPassReg</label>
            <div className="super">
              <div className="yes">
                <input type="radio" name="idPassReg" value="yes" onChange = {onchange}/>
                <label htmlFor="Yes" className='yesLabel'>Yes</label>
              </div>
              <div className="no">
                <input type="radio" name="idPassReg" defaultChecked value="no" onChange = {onchange}/>
                <label htmlFor="No" className='noLabel'>No</label>
              </div>
            </div>
          </div>
          <div className="inputForm superForm">
            <label>isAdmin</label>
            <div className="super">
              <div className="yes">
                <input type="radio" name="isAdmin" value="yes" onChange = {onchange}/>
                <label htmlFor="Yes" className='yesLabel'>Yes</label>
              </div>
              <div className="no">
                <input type="radio" name="isAdmin" defaultChecked value="no" onChange = {onchange}/>
                <label htmlFor="No" className='noLabel'>No</label>
              </div>
            </div>
          </div>
          <div className="inputForm superForm">
            <label>isSuperUser</label>
            <div className="super">
              <div className="yes">
                <input type="radio" name="superUser" value="yes" onChange = {onchange}/>
                <label htmlFor="Yes" className='yesLabel'>Yes</label>
              </div>
              <div className="no">
                <input type="radio" name="superUser" value="no" defaultChecked onChange = {onchange}/>
                <label htmlFor="No" className='noLabel'>No</label>
              </div>
            </div>
          </div>
          
          <input type="submit" className="btn" />
        </form>
      </div>
    </FormStyle>
  );
};

export default SignUp;
