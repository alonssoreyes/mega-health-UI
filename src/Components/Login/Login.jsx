import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import imageLogin from "../../assets/images/image-login.jpg";
import axios from 'axios';
import Swal from "sweetalert2";
const Login = ({onLogin}) => {

  const handleLogin = ev => { 
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    
    axios.post('/api/auth/login', {
      email,
      password
    })
      .then(res => { 
        localStorage.setItem("MEGA-HEALTH-TOKEN", res.data.token);
        window.location.href = '/home'
        // onLogin(res.data.user)
      })
      .catch(err => {
        Swal.fire({
          title:err.response.data.msg,
          icon:'error',
          timer:1500,
          showConfirmButton:false,
          position:'top-end'
        })
      })

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
                      Bienvenido, inicia sesion.
                    </h5>
                    <form class="forms-sample" onSubmit={handleLogin}>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          autocomplete="current-password"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div class="mt-3">
                        <button
                          type="submit"
                          class="btn btn-primary mr-2 mb-2 mb-md-0"
                        >
                          Entrar
                        </button>
                      </div>
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
