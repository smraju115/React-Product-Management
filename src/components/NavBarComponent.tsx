import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


const NavBarComponent=()=>{
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className={"navbar-brand" }to={"/home"}>Stock Management</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li  className="nav-item">
                            <NavLink className={"nav-link active"}to={"/home"}><i className="bi bi-house-door"></i> Home</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink className={"nav-link active"}to={"/category"}><i className="bi bi-ui-checks-grid"></i>  Prodcuts</NavLink>
                        </li>
                        
                    </ul>

                </div>

            </div>
        </nav>
    );
}
export default NavBarComponent;