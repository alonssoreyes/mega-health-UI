import Layout from "./Components/Layout";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/Login.jsx";
import Usuarios from './Components/Usuarios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const estaLogeado = false;
  return (
    <Router>
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
                </div>
              </Layout>
            </Route>
            <Route exact path="/departamentos">
              <Layout>
                <Navbar />
                <div className="page-content">
                  <h1>Departamentos</h1>
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
