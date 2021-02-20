import React from 'react';
import logo from '../../assets/images/logo.png';
import './Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
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
                    <li class="nav-item">
                        <Link to="/usuarios" class="nav-link">
                        <i class="link-icon" data-feather="user"></i>
                        <span class="link-title">Usuarios</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/equipos" class="nav-link">
                        <i class="link-icon" data-feather="monitor"></i>
                        <span class="link-title">Equipos</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/departamentos" class="nav-link">
                        <i class="link-icon" data-feather="layers"></i>
                        <span class="link-title">Departamentos</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Sidebar;