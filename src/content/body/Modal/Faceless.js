import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import Imgcarouselverlogin from '../../assets/img/facelesslogin.jpg';
import Imgcarouselverregis from '../../assets/img/faceless-registro.jpg';
import Imgcarouselverperfil from '../../assets/img/perfil.jpg';
import Imgcarouselverperfil1 from '../../assets/img/faceless-perfil_2.jpg';
import Imgcarouselverperfil2 from '../../assets/img/perfil-3.jpg';
import Imgcarouselverperfil3 from '../../assets/img/perfil4.jpg';
import Imgcarouselverperfil4 from '../../assets/img/final-faceless.jpg';


import img1 from '../../assets/img/version1.png';
import img2 from '../../assets/img/version2.png';
import img3 from '../../assets/img/version3.png';
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
                <h3 className='text-center'><strong><span className='span-html'>Faceless</span></strong></h3>
                <h4 className='text-center'><strong><span className='span-html'>Laravel - PHP</span> + <span className='span-html'>Tailwind</span></strong></h4>
                    <br/>
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                    <img className='carousel-img' src={Imgcarouselverlogin} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={Imgcarouselverregis} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={Imgcarouselverperfil} text="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={Imgcarouselverperfil1} text="for slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={Imgcarouselverperfil2} text="five slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={Imgcarouselverperfil3} text="six slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={Imgcarouselverperfil4} text="six slide" />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p>MyFaceless es una aplicación de libre uso inspirada en el diseño de Instagram. La característica distintiva es que los usuarios deben seguirse mutuamente para poder ver sus contenidos. Esto significa que será de contenido privado, 
                        y solo los usuarios que se sigan mutuamente podrán acceder a su contenido. De lo contrario, deberás esperar a que el usuario que seguiste comience a seguirte, o viceversa.</p>

                    <p>La aplicacion esta hecha con <strong>Laravel 10 - PHP 8.1</strong>, <strong>Tailwind</strong>, <strong>MySql</strong>, <strong>Xampp</strong>. use una maquina virtual con <strong>docker</strong> junto con una distribución de <strong>Ubunto</strong> para tener una mayor
                    facilidad de uso, y conexión mas estable y directa con la base de datos, cabe a destacar que se puede usar directamente en windows pero hay que hacer conexiones manuales de Mysql con Xampp habilitando <strong>apache</strong> y <strong>Mysql</strong>. 
                    </p>
                    <p>
                        Si quieres usarlo no dudes en entrar <span><a href='https://github.com/MSarpi/myfaceless' target='_BLANK'>Aquí</a></span>, te llevara directamente al repositorio con los pasos a seguir para su correcta funcionalidad.
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