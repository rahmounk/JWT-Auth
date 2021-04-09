import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from "../UserContext";


const Nav = () => {

	const {user} = useContext(UserContext);
	
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/"> JWT-Auth</Link>
					
					<ul className="navbar-nav me-auto mb-2 mb-md-0">

						{/* opérateur ternaire pour retirer register et login quand on est connecté en tant utilisateur */}
						{!user ? (
						<>
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/register"> Register </Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/login">Login</Link>
							</li>
						</>
						) : ( 

						<li className="nav-item">
							<Link className="nav-link" to="/user"> User </Link>
						</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
