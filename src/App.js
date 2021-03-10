import Layout from "./Components/Layout";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/Login.jsx";
import Usuarios from './Components/Usuarios';
import Sucursal from './Components/Sucursal'
import Equipos from './Components/Equipos'
import Marca from './Components/Marca'
import TiposdeEquipo from './Components/TiposdeEquipos'
import Categoria from './Components/Categoria'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Inicio</h1>
                </div>
              </Layout>
            </Route>
            <Route exact path="/usuarios">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <Usuarios/>
                </div>
              </Layout>
            </Route>
            <Route exact path="/equipos">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Equipos</h1>
                  <Equipos/>
                </div>
              </Layout>
            </Route>
            <Route exact path="/sucursal">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Sucursal</h1>
                  <Sucursal/>
                </div>
              </Layout>
            </Route>
            <Route exact path="/Marca">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Marca</h1>
                  <Marca/>
                </div>
              </Layout>
            </Route>
            <Route exact path="/tiposdeequipo">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Tipos de Equipos</h1>
                  <TiposdeEquipo/>
                </div>
              </Layout>
            </Route>
                <Route exact path="/Categoria">
                <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Categorias</h1>
                  <Categoria/>
                </div>
              </Layout>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
