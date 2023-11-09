import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img/mastransporteimg_1.png'
import img2 from '../../assets/img/mastransporteimg_2.png'
import img3 from '../../assets/img/mastransporteimg_3.png'
import img4 from '../../assets/img/mastransporteimg_4.png'
import img5 from '../../assets/img/mastransporteimg_5.png'
import img6 from '../../assets/img/mastransporteimg_6.png'


function MasTransporte() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
        <a type='button' className='btn-ver-mas' onClick={handleShow}> Ver mas </a>

        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered scrollable backdrop="static" keyboard={false}>
            <Modal.Header className='Header-Modal-SobreMi'>
            <Modal.Title><strong>MasTransportes</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body className='Body-Modal-SobreMi'>
                <Container>

                <h3 className='text-center'><strong><span className='span-html'>Mastransporte</span></strong></h3>
                    <br/>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                    <img className='carousel-img' src={img1} />
                    </Carousel.Item>
                    <Carousel.Item >
                    <img className='carousel-img' src={img2} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img3} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img4} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img5} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img5} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img6} />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p className='myvoz-content mt-4'>
                    Se trata sobre Contenido se envíos o despachos de paquetería o bultos a nivel nacional para tiendas ecommerce, empresas y negocios. Todo lo que necesitas para gestionar tus envíos y despachos.
                    Mi Propósito en la empresa era mejora el sistema tanto exterior como interior:
                    </p>
                    <h5>Exterior:</h5>
                    <ul>
                        <li>Mejorar el diseño principal de la pagina.</li>
                        <li>Sistema responsivo</li>
                        <li>Crear Sección de "Contáctenos"</li>
                        <li>Crear Sección de "Busca tu pedido"</li>
                        <li>Mejorar Sistema de Ayuda clientes a base de un contenedor en base de datos</li>
                        <li>Mejorar Sistema de Términos y condiciones a base de un contenedor en base de datos</li>
                    </ul>
                    <h5>Interior:</h5>
                    <ul>
                        <li>Facturación: Me encargue de crear desde cero un mantenedor de documentos tributarios</li>
                        <li>Recaudación y Cobranza: Me encargue desde cero un mantenedor en donde se pagaba los clientes que poseían alguna deuda (en base a la sección de facturación)</li>
                        <li>Mantenedores: Me encargue de crear mantenedores en donde se guardaba la información de los términos y condiciones junto con Ayuda de clientes</li>
                    </ul>
                    <h5>Lenguajes utilizados</h5>
                    <ul>
                        <li>PHP</li>
                        <li>LARAVEL</li>
                        <li>jQuery</li>
                        <li>JavaScript</li>
                        <li>MYSQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BOOTSTRAP</li>
                    </ul>
                </Container>
            
            </Container>
            </Modal.Body>
            <Modal.Footer className='Footer-Modal-SobreMi'>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default MasTransporte;
