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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerClass = darkMode ? 'container-dark' : 'container-light';

  const [isLoading, setIsLoading] = useState(true);
  return (
        <div className={`${containerClass}`}> 
    <Navbar darkMode={darkMode}/>
    <Portada darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Mishabilidades/>
    <Empresas/>
    <Certificados/>
    
    <Proyectos/>
    <Footer/>
    <ScrollButton/>
  </div>
  );
  }
  // Let create async method to fetch fake data
//   useEffect(() => {
//     const fakeDataFetch = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 4000);
//     };

//     fakeDataFetch();
//   }, []);

//   return isLoading ? (
//     <Loader />
//   ) : (
//     <div className={`${containerClass}`}> 
//     <Navbar darkMode={darkMode}/>
//     <Portada darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
//     <Mishabilidades/>
//     <Empresas/>
//     <Certificados/>
    
//     <Proyectos/>
//     <Footer/>
//     <ScrollButton/>
//   </div>
//   );
// }

export default App;
