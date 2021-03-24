
import {getDateText} from '../helpers/getDateText';
const Navbar = ({user, onLogout}) => {
    const today = new Date().toDateString();
    return (
        <nav class="navbar mb-5">
            <a href="#" class="sidebar-toggler">
                <i data-feather="menu"></i>
            </a>
            <div class="navbar-content">
                
                <ul class="navbar-nav">
                    <li class="nav-item dropdown nav-profile">
                        <a class="nav-link dropdown-toggle mr-5" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={`${process.env.REACT_APP_API_HOST || 'http://localhost:3001'}${user.imgPath}`} alt="userr" />
                        </a>
                        <div class="dropdown-menu" aria-labelledby="profileDropdown">
                            <div class="dropdown-header d-flex flex-column align-items-center">
                                <div class="figure mb-3">
                                    <img src={`${process.env.REACT_APP_API_HOST || 'http://localhost:3001'}${user.imgPath}`} alt="" />
                                </div>
                                <div class="info text-center">
                                    <p class="name font-weight-bold mb-0">{user.name}</p>
                                    <p class="email text-muted mb-3">{user.email}</p>
                                    <p>{user.role === "ADMIN_ROLE" ? "Administrador" : user.role==="AUDITOR_ROLE" ? "Auditor" : "Empleado"}</p>
                                </div>
                            </div>
                            <div class="dropdown-body">
                                <ul class="profile-nav p-0 pt-3">
                                    <li class="nav-item" style={{cursor:'pointer'}}>
                                        <a onClick={async(e) => {
                                            e.preventDefault();
                                            localStorage.removeItem("MEGA-HEALTH-TOKEN");
                                             onLogout(null);
                                            window.location.replace('/login')

                                        }} class="nav-link">
                                            <i data-feather="log-out"></i>
                                            <span>Cerrar sesión</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;