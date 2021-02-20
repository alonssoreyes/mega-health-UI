import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import imageLogin from "../../assets/images/image-login.jpg";
import axios from 'axios';
const Login = () => {
  

  useEffect(() => {
    axios.get('/api/usuarios').then(res => alert(res.data))
  }, []);

  function enviarDatos(e){
    e.preventDefault();
    console.log(e.target);
    const email  = e.target.email.value;
    const password = e.target.password.value;

    axios.post('/api/usuarios',{
      email:email,
      password:password
    } )
    .then(res => alert(res.data.password))
    .catch(err => console.error(err))
  }

  return (
    <div class="page-wrapper full-page">
      <div class="page-content d-flex align-items-center justify-content-center">
        <div class="row w-100 mx-0 auth-page">
          <div class="col-md-8 col-xl-6 mx-auto">
            <div class="card">
              <div class="row">
                <div class="col-md-4 pr-md-0">
                  <div class="auth-left-wrapper">
                    <div className="image-login"></div>
                  </div>
                </div>
                <div class="col-md-8 pl-md-0">
                  <div class="auth-form-wrapper px-4 py-5">
                    <h5 class="text-muted font-weight-normal mb-4">
                      Welcome back! Log in to your account.
                    </h5>
                    <form class="forms-sample" onSubmit={enviarDatos}>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          autocomplete="current-password"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" />
                          Remember me
                        </label>
                      </div>
                      <div class="mt-3">
                        <button
                          type="submit"
                          class="btn btn-primary mr-2 mb-2 mb-md-0"
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0"
                        >
                          <i
                            class="btn-icon-prepend"
                            data-feather="twitter"
                          ></i>
                          Login with twitter
                        </button>
                      </div>
                      <a href="register.html" class="d-block mt-3 text-muted">
                        Not a user? Sign up
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
