import ImgSinColor from '../assets/img/portada-sin-color.png';
import ImgConColor from '../assets/img/portada-con-color.png';
import Maquita from './Efectos/Maquina';
import Documento from '../../../src/cvmiguelsarpi2023.pdf'
import ModalSobreMi from './Modal/ModalSobreMi'
import React, { useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();
export const portada = ({ darkMode, toggleDarkMode }) => {
  
 
  const mensajes = [
    "ReactJs", 
    'JavaScript',
    'HTML',
    'PHP',
    'Laravel',
    'MySql',
    'CSS',
    'Ilustración',
    'Photoshop',
    'Git',
    'Bootstrap',
    'Tailwind'
  ];
  return (
    <div className='background-header container-fluid'>
    <div className='row '>
        <div className='col-sm-12 col-md-6 col-lg-6 portada-left' data-aos="fade-right">
            <p className='text-portada-p1'>¡Hola! Soy</p>
            <p className='text-portada-p2'>Miguel Sarpi</p>
            <p className='text-portada-p3'>Analista programador Jr.</p>
            <div className="grid-maquina">
              <Maquita mensajes={mensajes} velocidad={100} />
            </div>
            <div className='row '>
              <div className='col-12 btn-header-mood'>
                <a className='btn-header'  href={Documento} download="CvMiguelSarpi2023">Descargar CV</a>
                <ModalSobreMi/>
              </div> 
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 portada-right'  data-aos="fade-left">
          <div className='contenedor-imagenes'  onClick={toggleDarkMode} >
            <span className='animolob'></span> 
            <img className='portada-sin-color img-fluid sincolor' src={ImgSinColor} alt="Imagen sin color" o/>
            <img className='portada-con-color wave img-fluid concolor' src={ImgConColor} alt="Imagen con color"/>
          </div>
        </div>
    </div>
</div>
  )
}

export default portada;
