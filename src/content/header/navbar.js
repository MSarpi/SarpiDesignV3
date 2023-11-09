import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'

function Navbar() {
	Aos.init();
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		
		<div className="navbar-mood">
		<div className="header_logo" >
			<a onClick={showNavbar} href="#" class="font-semibold tracking-tight icon-text"><span><i class="fa-solid fa-computer fa-bounce icon-text"></i></span>ㅤSarpiDesign</a>
		</div>
		<div className="header_nav">

			<div className="row navegacion">
				<div className="col-3 ">

				</div>
				<div className="col-6 header_nav_center">
						<nav  ref={navRef}>
						<a className="navHeader" href="#habilidades" onClick={showNavbar}>Habilidades</a>
						<a className="navHeader" href="#empresas" onClick={showNavbar}>Empresas</a>
						<a className="navHeader" href="#certificados" onClick={showNavbar}>Certificados</a>
						<a className="navHeader" href="#proyectos" onClick={showNavbar}>Mis proyectos</a>
						<a className="navHeader" href="#contactame" onClick={showNavbar}>Contactame</a>
						<div className="iconMobil">
							<ul>
							<li>
							<a class="icon-nav" href="https://api.whatsapp.com/send?phone=56957326432&text=Hola!%20vengo%20de%20tu%20pagina%20web" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
							</li>
							<li>
							<a class="icon-nav" href="https://www.linkedin.com/in/miguel-sarpi/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>	
							</li>
							<li>
							<a class="icon-nav" href="https://github.com/MSarpi" target="_blank"><i class="fa-brands fa-github"></i></a>
							</li>
							<li>
							<a class="icon-nav" href="https://www.instagram.com/jinsei_ilustrador/?hl=es-la" target="_blank"><i class="fa-brands fa-instagram"></i></a>
							</li>
							</ul>

						</div>
						<button
							className="nav-btn nav-close-btn"
							onClick={showNavbar}>
							<FaTimes />
						</button>
					</nav>
				</div>
				<div className="col-3 header_boton" >
					<a class="icon-hover what" href="https://api.whatsapp.com/send?phone=56957326432&text=Hola!%20vengo%20de%20tu%20pagina%20web" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
					<a class="icon-hover link" href="https://www.linkedin.com/in/miguel-sarpi/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
					<a class="icon-hover git" href="https://github.com/MSarpi" target="_blank"><i class="fa-brands fa-github"></i></a>
					<a class="icon-hover inst" href="https://www.instagram.com/jinsei_ilustrador/?hl=es-la" target="_blank"><i class="fa-brands fa-instagram"></i></a>
				</div>
			</div>
			
			<button
				className="nav-btn-open"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
		</div>
	);
}

export default Navbar;
