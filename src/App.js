import Navbar from './content/header/navbar';
import '../src/content/assets/css/StylePrincipal.css'
import '../src/content/assets/css/StylePrincipalDark.css'
import Portada from './content/header/portada';
// import './content/style.css'
import './index.css'
import { useEffect, useState } from "react";
import Mishabilidades from './content/body/MisHabilidades';
import Empresas from './content/body/Empresas';
import Certificados from './content/body/Certificados';
import Footer from './content/footer/Footer';
import Proyectos from './content/body/Proyectos';
import ScrollButton from './content/ScrollUp';
import Loader from './content/Loader';
import MaquinaEscribir from './content/efectos/MaquinaEscribir';
import Formulario from './content/body/Formulario';

function App() {
  const mensajes = [
    "Bienvenido a SarpiDesign",
    "npm start"
  ];
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerClass = darkMode ? 'container-dark' : 'container-light';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loading-screen ${isLoading ? '' : 'hidden'}`}>
        <div>
          <MaquinaEscribir mensajes={mensajes} velocidad={100} />
        </div>{/* Puedes agregar contenido adicional dentro del div de carga si lo deseas */}
      </div>
      <div className={`${containerClass}`}> 
        <Navbar darkMode={darkMode}/>
        <Portada darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Mishabilidades/>
        <Empresas/>
        <Certificados/>
        <Proyectos/>
        <Formulario/>
        <Footer/>
        <ScrollButton/>
    </div>
    </>

    );
  }

export default App;
