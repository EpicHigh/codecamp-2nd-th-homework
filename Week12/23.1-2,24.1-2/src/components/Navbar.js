import React from "react";

const logo = `https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png`;

const Navbar = () => {
	return (
		<div>
			<nav className="pa3 pa4-ns bb b--white-10">
				<div className="navbar">
					<div className="navbar-left w-50">
						<img className="br-100 pa1 ba b--black-10 h3 w3 logo" src={logo}/>
						<a
							className="link dim gray f6 f5-ns dib mr3 ml3"
							href=""
							title="About"
						>
							About
						</a>
						<a
							className="link dim gray f6 f5-ns dib mr3"
							href=""
							title="Contact"
						>
							Contact
						</a>
						<a
							className="link dim gray f6 f5-ns dib mr3"
							href=""
							title="Contact"
						>
							Create
						</a>
					</div>
					<div className="navbar-right w-50">
						<div className="wrapper-navbar-right">
							<a
								className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90 ml3-ns"
								href="/signup"
							>
								Sign Up
							</a>
							<a
								className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90"
								href="/signin"
							>
								Sign In
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
