import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSortDown } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
				<div className="p-3"><img className="" src="https://logowik.com/content/uploads/images/528_star_wars.jpg" width = "100px" height = "70px"/></div>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="btn-group p-3">
				  	<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
				  	  Favorites
				  	</button>
				  	<ul style={{marginLeft: "-40px"}} className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
				  	  <li><a className="dropdown-item" href="#">Menu item</a></li>
				  	  <li><a className="dropdown-item" href="#">Menu item</a></li>
				  	  <li><a className="dropdown-item" href="#">Menu item</a></li>
				  	</ul>
				</div>
				</Link>
			</div>
		</nav>
	);
};
