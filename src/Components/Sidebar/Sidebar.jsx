import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png';
import './Sidebar.css';
import {Link, useHistory, useLocation} from 'react-router-dom';



const Sidebar = () => {
    const location = useLocation().pathname;
    const history = useHistory();
    const [url, setUrl] = useState(history.location.pathname);


    useEffect(() => {

        if(url !== location){
            setUrl(location)
        }
    }, [history.location.pathname])

    return (
        <nav class="sidebar mb-5">
            <div class="sidebar-header">
                <a href="#" class="sidebar-brand">
                    <img src={logo} alt="Logo" className="image-logo"/>
                </a>
                <div class="sidebar-toggler not-active">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="sidebar-body">
                <ul class="nav">
                    <li class="nav-item nav-category">Principal</li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            <i class="link-icon" data-feather="box"></i>
                            <span class="link-title">Inicio</span>
                        </Link>
                    </li>
                    <li class="nav-item nav-category">Modulos</li>
                    <li class={`nav-item ${url === "/usuarios" && 'active'}`}>
                        <Link to="/usuarios" class="nav-link">
                        <i class="link-icon" data-feather="user"></i>
                        <span class="link-title">Usuarios</span>
                        </Link>
                    </li>
                    <li class={`nav-item ${url === "/equipos" && 'active'}`}>
                        <Link to="/equipos" class="nav-link">
                        <i class="link-icon" data-feather="monitor"></i>
                        <span class="link-title">Equipos</span>
                        </Link>
                    </li>
                    <li class={`nav-item ${url === "/sucursal" && 'active'}`}>
                        <Link to="/sucursal" class="nav-link">
                        <i class="link-icon" data-feather="home"></i>
                        <span class="link-title">Sucursal</span>
                        </Link>
                    </li>
                    <li class={`nav-item ${url === "/Marca" && 'active'}`}>
                        <Link to="/Marca" class="nav-link">
                        <i class="link-icon" data-feather="package"></i>
                        <span class="link-title">Marca</span>
                        </Link>
                    </li>
                    <li class={`nav-item ${url === "/tiposdeequipo" && 'active'}`}>
                        <Link to="/tiposdeequipo" class="nav-link">
                        <i class="link-icon" data-feather="smartphone"></i>
                        <span class="link-title">Tipos de Equipo</span>
                        </Link>
                    </li>
                    <li class={`nav-item ${url === "/Categoria" && 'active'}`}>
                        <Link to="/Categoria" class="nav-link">
                        <i class="link-icon" data-feather="trello"></i>
                        <span class="link-title">Catergorias</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Sidebar;