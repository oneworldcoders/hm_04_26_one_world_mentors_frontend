import React from 'react';
import './login.css'

function Login() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <form className="center-vertical">
          <div className="form-group">
            <label className="label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-success">LOGIN</button>
        </form>
      </div>
      <div className="col-lg-6">
        <img src="https://res.cloudinary.com/opix/image/upload/v1587842002/mentor%20app/jjjjulllls.jpg" width="100%" height="100%" alt="Juls"/>
      </div>
    </div>
  );
}

export default Login;
