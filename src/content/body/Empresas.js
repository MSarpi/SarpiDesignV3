import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mt from '../assets/img/mastransporte.png'
import Consorcio from '../assets/img/consorcio.png'

import Mtbw from '../assets/img/mastransportebw.png'
import Consorciobw from '../assets/img/consorciobw.png'

import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();

function Empresas() {
  return (
    <Container className='container_empresa' id='empresas'>
        <div className='margin-top'></div>
        <strong><p className="text-center mt-4 mb-4 titulo-secciones"  data-aos="fade-up"><span className='secciones'>Empresas</span></p></strong>
        <p className='Sub-titulo-secciones' data-aos="fade-down">Estas son las empresas a las que he dado mis servicios como Programador.</p>
        <Row className='img-empresas'> 
            <Col xl={6} lg={6} md={12} sm={12} >
            <a href='https://sitio.consorcio.cl/home' target='_BLANK'>
              <img className='img-empresa' src={Consorcio}/>
              <img className='img-empresa-bw' src={Consorciobw}/>
            </a>

            </Col>
            <Col xl={6} lg={6} md={12} sm={12} >
            <a href='https://mastransporte.cl/' target='_BLANK'>
              <img className='img-empresa' src={Mt}/>
              <img className='img-empresa-bw' src={Mtbw}/>
            </a>
            </Col>
        </Row>
    </Container>
  );
}

export default Empresas;