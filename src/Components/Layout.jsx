import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';
const Layout  = ({children}) => { 

    return(
        <div className="main-wrapper">
            <Sidebar/>
            {children}
        </div>
    )


}

export default Layout;