import Sidebar from "../ui/dashboard/sidebar/sidebar";
import NavBar from "../ui/dashboard/navbar/navbar";


const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <NavBar />
                {children}
            </div>
        </div>
    );
};

export default Layout;