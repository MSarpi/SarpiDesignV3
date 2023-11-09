import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/img/myvoz1.jpg'
import img2 from '../../assets/img/myvoz2.jpg'
import img3 from '../../assets/img/myvoz3.jpg'

function MyVoz() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <a type='button' className='btn-ver-mas' onClick={handleShow}> Ver mas </a>

      <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered scrollable backdrop="static" keyboard={false}>
            <Modal.Header className='Header-Modal-SobreMi'>
                <Modal.Title><strong>MyVoz</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body className='Body-Modal-SobreMi'>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12} className='myvoz-content mt-4'>
                        <p>Tengo el agrado de informarles que mi aplicación "MyVoz" está totalmente disponible para su descarga en dispositivos Android.
                            <br/><br/>
                            Se trata de una aplicación diseñada para ayudar a personas con discapacidades auditivas o dificultades en el habla, con el propósito de facilitar la comunicación con aquellas personas que no conocen el lenguaje de señas. La aplicación es totalmente gratuita y no contiene ningún tipo de anuncios, lo que la hace más agradable para el usuario.
                            <br/><br/>
                            Puedes encontrar la aplicación buscándola por su nombre: "MyVoz", o simplemente haciendo clic en el siguiente enlace que te llevará directamente a la tienda de <span><a href='https://play.google.com/store/apps/details?id=app.design.myvoice' target='_BLANK'>Google Play.</a></span> 
                            <br/><br/></p>
                            <br/>
                            <p>Lenguajes y sistema usados</p>
                            <ul>
                                <li>JAVA</li>
                                <li>AndroidStudio</li>
                            </ul>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={img1} className='myvoz-img'/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} className='myvoz-img'/> 
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} className='myvoz-img'/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='Footer-Modal-SobreMi'>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default MyVoz
