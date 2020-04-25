import React,{useState} from 'react';
import '../login.css'
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let login_detail = {
      email,
      password
    };
    
    return axios
      .post("http://127.0.0.1:3000/login", login_detail)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        setError(error.response.data.error)
      });
  }

  return (
    <div className="row">
      <div className="col-lg-6">
        <form className="center-vertical" onSubmit={handleSubmit}>
          {error && (
             <div class="alert alert-danger" role="alert">
             {error}
           </div>
          )}
          <div className="form-group">
            <label className="label">Email address</label>
            <input id="loginEmailInput" type="email" className="form-control" placeholder="Enter email" name="email" onChange={onEmailChange}/>
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input id="loginPasswordInput" type="password" className="form-control" placeholder="Password" name="password" onChange={onPasswordChange} />
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
