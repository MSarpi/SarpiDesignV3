import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import MyJob1 from '../../assets/img/myjob1.jpg';
import MyJob2 from '../../assets/img/myjob2.jpg';
import MyJob3 from '../../assets/img/myjob3.jpg';
import MyJob4 from '../../assets/img/myjob4.jpg';
import MyJob5 from '../../assets/img/myjob5.jpg';
import MyJob6 from '../../assets/img/myjob6.jpg';
import MyJob7 from '../../assets/img/myjob7.jpg';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Faceless() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <a type='button' className='btn-ver-mas' onClick={handleShow}> Ver mas </a>

        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered scrollable
        backdrop="static"
        keyboard={false}>
            <Modal.Header className='Header-Modal-SobreMi'>
            <Modal.Title><strong>Mis Portafolioss</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body className='Body-Modal-SobreMi'>
                <Container>
                <h3 className='text-center'><strong><span className='span-html'>MyJob's</span></strong></h3>
                <h4 className='text-center'><strong><span className='span-html'>Laravel - PHP</span> + <span className='span-html'>Livewire</span> + <span className='span-html'>Tailwind</span></strong></h4>
                    <br/>
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                    <img className='carousel-img' src={MyJob1} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={MyJob2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={MyJob3} text="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={MyJob4} text="for slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={MyJob5} text="five slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={MyJob6} text="six slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={MyJob7} text="six slide" />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p>MyJob's es una aplicación de libre uso inspirada en Laborum, chile trabajo o compu trabajo. La característica distintiva es que los usuarios solo deben subir su Curriculum, CV o Hoja de vida segun el pais de donde eres. Esto quiere decir que el usuario no debe rellenar 
                        formularios tediosos y el reclutador solo debera descargar el cv del usuario y ver todo su contenido.
                    </p>

                    <p>La aplicacion esta hecha con <strong>Laravel 10 - PHP 8.1</strong>, <strong>MySql</strong>, <strong>Tailwind</strong>, <strong>MySql</strong> y <strong>Xampp</strong>.</p>
                    <p>
                        Si quieres usarlo no dudes en entrar <span><a href='https://github.com/MSarpi/my-job-s' target='_BLANK'>Aquí</a></span>, te llevara directamente al repositorio con los pasos a seguir para su correcta funcionalidad.
                    </p>
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
  );
}

export default Faceless;