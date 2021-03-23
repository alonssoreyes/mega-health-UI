import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const Widgets = () => {
  const [equipments, setEquipments] = useState(null);
  useEffect(() => {
    getEquipments();
  }, []);

  const getEquipments = async () => {
    try {
      const equipments = await axios.get("/api/equipos");
      setEquipments(equipments.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page-content">
      <div className="row">
        <div class="col-md-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-baseline">
                <h6 class="card-title mb-0">Equipos en inventario</h6>
                <div class="dropdown mb-2">
                  <button
                    class="btn p-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    ...
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      class="dropdown-item d-flex align-items-center"
                      to="/equipos"
                    >
                      <i data-feather="eye" class="icon-sm mr-2"></i>{" "}
                      <span class="">Ver</span>
                    </Link>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i data-feather="download" class="icon-sm mr-2"></i>{" "}
                      <span class="">Descargar</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-12 col-xl-5">
                  <h3 class="mb-2">
                    {equipments ? (
                      equipments.length
                    ) : (
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </h3>
                </div>
                <div class="col-6 col-md-12 col-xl-7">
                  <div id="apexChart2" class="mt-md-3 mt-xl-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-baseline">
                <h6 class="card-title mb-0">Equipos asignados</h6>
                <div class="dropdown mb-2">
                  <button
                    class="btn p-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    ...
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      class="dropdown-item d-flex align-items-center"
                      to="/equipos"
                    >
                      <i data-feather="eye" class="icon-sm mr-2"></i>{" "}
                      <span class="">Ver</span>
                    </Link>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i data-feather="download" class="icon-sm mr-2"></i>{" "}
                      <span class="">Descargar</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-12 col-xl-5">
                  <h3 class="mb-2">
                    {equipments ? (
                      equipments.length
                    ) : (
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </h3>
                </div>
                <div class="col-6 col-md-12 col-xl-7">
                  <div id="apexChart1" class="mt-md-3 mt-xl-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
