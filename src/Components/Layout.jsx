import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';
const Layout  = ({children}) => { 

    return(
        <>
            <Sidebar/>
            {children}
        </>
    )


}

export default Layout;