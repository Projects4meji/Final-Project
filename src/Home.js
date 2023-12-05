import React, {useContext} from "react";
import { Link } from "react-router-dom";
import ToDoContext from "./context/context";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Home(){
    const {isList, isName, handleChange, handleSubmit} = useContext(ToDoContext);
    return(
        <div style={{textAlign:"center"}}>
            <h1>TO DO App</h1>
            <div className="input">
                <h1>{isList.length} Names have been Added</h1>
                <form onSubmit={handleSubmit}>
                    <input className="field" value={isName} onChange={handleChange} placeholder="Enter Name"/>
                    <button className="field">Submit</button>
                </form>
            </div>
            {/* <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "200px", height:"100vh", backgroundColor:"#F5E8C7"}}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg class="bi pe-none me-2" width="40" height="32"></svg>
                    <span class="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <Link to="/Side" class="nav-link active" aria-current="page">
                            <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/components/Add" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Pending
                        </Link>
                    </li>
                    <li>
                        <Link to="/components/Complete" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Completed
                        </Link>
                    </li>
                    <li>
                        <Link to="/components/Cancel" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        Cancelled
                        </Link>
                    </li>
                </ul>
                <hr/>
            </div> */}
            <nav>
                <ul style={{listStyleType:"none", textAlign:"left"}}>
                    <li><Link to="/Side">Home</Link></li>
                    <li><Link to="/components/Add">Add</Link></li>
                    <li><Link to="/components/Complete">Completed</Link></li>
                    <li><Link to="/components/Cancel">Cancelled</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;