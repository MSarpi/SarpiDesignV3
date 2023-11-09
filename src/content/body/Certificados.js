import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();

function Certificados() {
  return (
    <Container className='container_empresa size-card' >
        <div className='margin-top' id='certificados'></div>
        <strong><p className="text-center mt-4 mb-4 titulo-secciones"  data-aos="fade-down">Mis <span className='secciones'>Certificados</span></p></strong>
        <Row className='img-empresas'> 
            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                <img className='img-certificados' src="https://udemy-certificate.s3.amazonaws.com/image/UC-a5b72475-6189-4510-a700-3ef63efd6963.jpg?v=1690431772000"/>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                <img className='img-certificados' src="https://udemy-certificate.s3.amazonaws.com/image/UC-8b53b10c-3d33-4298-b656-a30b10d13137.jpg"/>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                <img className='img-certificados' src="https://udemy-certificate.s3.amazonaws.com/image/UC-79d3b740-164a-4833-93d8-e18e59bb70c7.jpg"/>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                
            </Col>

            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                <img className='img-certificados' src="https://udemy-certificate.s3.amazonaws.com/image/UC-1be941c3-7021-452e-bce1-64482780fa91.jpg"/>
            </Col>

            <Col xl={4} lg={4} md={12} sm={12} data-aos="zoom-in">
                
            </Col>
        </Row>
    </Container>
  )
}

export default Certificados
