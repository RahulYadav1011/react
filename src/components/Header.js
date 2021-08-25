import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <nav className="nav">
                   
                    <Link to="">{props.title}</Link>
                    <Link to="/about"> About US</Link>
                    <Link to="/contact"> Contact US</Link>
                    <Link to=""> services US</Link>
                    

             
            </nav>
        </div>
    );
}
export default Header;