import Layout from "./Components/Layout";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/Login.jsx";
import Usuarios from "./Components/Usuarios";
import Sucursal from "./Components/Sucursal";
import Equipos from "./Components/Equipos";
import Marca from "./Components/Marca";
import TiposdeEquipo from "./Components/TiposdeEquipos";
import Categoria from "./Components/Categoria";
import ConsultaEquipo from "./Components/ConsultaEquipo";
import Responsivas from "./Components/Responsivas";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken, parseJwt } from "./helpers/token";
import Widgets from "./Components/Widgets";
require("dotenv").config(); // get env vars
function App() {
  const [user, setUser] = useState(
    localStorage.getItem("MEGA-HEALTH-TOKEN")
      ? parseJwt(localStorage.getItem("MEGA-HEALTH-TOKEN"))
      : null
  );
  const [userIsLogged, setUserIsLogged] = useState(false);
  useEffect(() => {
    const settingUser = () => {
      if (!getToken()) {
        setUserIsLogged(false);
        return;
      }

      setUser(
        localStorage.getItem("MEGA-HEALTH-TOKEN")
          ? parseJwt(localStorage.getItem("MEGA-HEALTH-TOKEN"))
          : null
      );
      setUserIsLogged(true);
    };

    settingUser();
  }, []);



  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            {!user ? (
              <Redirect to="/login" />
            ) : (
              <Route exact path="/">
                <Layout user={user}>
                  <Navbar user={user}  onLogout={setUser}/>
                  <Widgets/>
                </Layout>
              </Route>
            )}
            <Route exact path="/usuarios">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} onLogout={setUser} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="usuarios"
                        >
                          Empleados
                        </li>
                      </ol>
                    </nav>
                    <Usuarios />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/equipos">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} onLogout={setUser} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="equipos"
                        >
                          Equipos
                        </li>
                      </ol>
                    </nav>
                    <h1>Equipos</h1>

                    <Equipos />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/sucursal">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} onLogout={setUser} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="sucursal"
                        >
                          Sucursal
                        </li>
                      </ol>
                    </nav>
                    <h1>Sucursal</h1>
                    <Sucursal />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/Marca">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} onLogout={setUser} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="Marca">
                          Marca
                        </li>
                      </ol>
                    </nav>
                    <h1>Marca</h1>
                    <Marca />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/tiposdeequipo">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} onLogout={setUser} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="tiposdeequipo"
                        >
                          Tipo de Equipo
                        </li>
                      </ol>
                    </nav>
                    <h1>Tipos de Equipos</h1>
                    <TiposdeEquipo />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/Categoria">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Modulos</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="Categoria"
                        >
                          Categoria
                        </li>
                      </ol>
                    </nav>
                    <h1>Categoria</h1>
                    <Categoria />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/ConsultarEquipo">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Consultas</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="ConsultarEquipo"
                        >
                          Consultar Equipo
                        </li>
                      </ol>
                    </nav>
                    <h1>Consultar Equipo</h1>
                    <ConsultaEquipo />
                  </div>
                </Layout>
              )}
            </Route>
            <Route exact path="/Responsivas">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <Layout user={user}>
                  <Navbar user={user} />
                  <div className="page-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Consultas</a>
                        </li>
                        <li
                          class="breadcrumb-item active"
                          aria-current="Responsivas"
                        >
                          Responsivas
                        </li>
                      </ol>
                    </nav>
                    <h1>Responsivas</h1>
                    <Responsivas />
                  </div>
                </Layout>
              )}
            </Route>
            <Route path="/**">
              <Redirect to={!user ? "/login" : "/"} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
