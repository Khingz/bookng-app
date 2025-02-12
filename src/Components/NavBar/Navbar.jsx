import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logoIcon from "../../Assets/Icons/thumb.png";
import logoName from "../../Assets/Icons/ticz.png";
import arrowRight from "../../Assets/Icons/Line 5.png";

const Navbar = () => {
	return (
		<nav className="nav-container">
			<div className="brand-container">
				<img src={logoIcon} alt="" srcset="" />
				<img src={logoName} alt="" srcset="" />
			</div>
			<ul className="nav-link-list">
				<li>
					<NavLink to="/" activeClassName="active">
						Events
					</NavLink>
				</li>
				<li>
					<NavLink to="/my-ticket" activeClassName="active">
						My Tickets
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" activeClassName="active">
						About Project
					</NavLink>
				</li>
			</ul>
			<div className="my-tickets-container">
				<button>
					MY TICKETS
					<img src={arrowRight} alt="" srcset="" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
