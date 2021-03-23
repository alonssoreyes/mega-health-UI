import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';
/*import Background from '../assets/images/Fondo_Login.png'; 

var sectionStyle = {
     width: "100%",
     height: "400px",
     backgroundImage: `url(${Background}) `
     
  };*/

const Layout  = ({children}) => { 

    return(
        <>
          
            <Sidebar/>
            {children}
        </>
    )


}

export default Layout;