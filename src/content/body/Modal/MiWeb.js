import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ImgSinColor from '../../assets/img/portadabyw.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';

import Imgcarouselver251 from '../../assets/img/versiondoscinco1.png';
import Img_carousel_ver_25_2 from '../../assets/img/versiondoscinco_2.png';
import img_carousel_ver_25_3 from '../../assets/img/versiondoscinco_3.png';

import Imgcarouselver2_1 from '../../assets/img/versiondos1.png';
import Img_carousel_ver_2_2 from '../../assets/img/versiondos2.png';
import img_carousel_ver_2_3 from '../../assets/img/versiondos3.png';


import img1 from '../../assets/img/version1.png';
import img2 from '../../assets/img/version2.png';
import img3 from '../../assets/img/version3.png';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function MiWeb() {
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
            <Modal.Title><strong>Mis Portafolios</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body className='Body-Modal-SobreMi'>
                <Container>
                <Tabs defaultActiveKey="ver" id="uncontrolled-tab-example" className="mb-3">
                {/* <Tab eventKey="ver" title="ver. 3.0">
                
                </Tab> */}
                <Tab eventKey="ver" title="ver. 2.5">
                <h3 className='text-center'><strong><span className='span-html'>SarpiDesign</span> (version 2.5) </strong></h3>
                <h4 className='text-center'><strong><span className='span-html'>Html</span> + <span className='span-html'>TailwindCSs</span></strong></h4>
                    <br/>
                <Carousel data-bs-theme="dark">

                    <Carousel.Item>
                    <img className='carousel-img' src={Imgcarouselver251} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={Img_carousel_ver_25_2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={img_carousel_ver_25_3} text="Third slide" />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p>La página web está meticulosamente diseñada utilizando HTML y estilizada con Tailwind CSS, ofreciendo una estética moderna y responsiva. Con la integración de JavaScript, la página brinda una experiencia interactiva, permitiendo a los usuarios alternar entre un modo oscuro y un modo claro. 
                    <br/><br/>
                    El modo oscuro presenta un fondo profundo y oscuro con texto en colores claros que resaltan para una lectura nocturna cómoda, mientras que el modo claro invierte la paleta de colores para reflejar un fondo claro y texto oscuro, ideal para condiciones de alta luminosidad. 
                    <br/><br/>
                    Los componentes de la interfaz se adaptan dinámicamente al cambio de tema, asegurando una transición visual suave y coherente. La cohesión entre HTML, Tailwind CSS y JavaScript resulta en un diseño fluido y accesible, con controles de tema fáciles de encontrar y utilizar, proporcionando una experiencia de usuario óptima tanto de día como de noche.</p>
                </Container>
                </Tab>
                <Tab eventKey="ver. 2.0" title="ver 2.0">
                <h3 className='text-center'><strong><span className='span-html'>SarpiDesign</span> (version 2.0) </strong></h3>
                <h4 className='text-center'><strong><span className='span-html'>Html</span> + <span className='span-html'>Bootstrap</span></strong></h4>
                <br/>
                <Carousel>
                    <Carousel.Item>
                    <img className='carousel-img' src={Imgcarouselver2_1} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={Img_carousel_ver_2_2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={img_carousel_ver_2_3} text="Third slide" />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p>Esta página web está construida con una base sólida de HTML, fortalecida con las robustas características de Bootstrap que facilitan un diseño responsivo y móvil primero. La hoja de estilo CSS personalizada complementa las utilidades de Bootstrap para ofrecer una estética única y atractiva, mientras que JavaScript se entrelaza para enriquecer la página con funcionalidades interactivas. 
                    <br/><br/>
                    El diseño responsivo garantiza que la página se adapte y reorganice de manera fluida en dispositivos de diferentes tamaños, desde teléfonos móviles hasta pantallas de escritorio grandes. La navegación es intuitiva, con un menú colapsable y botones accesibles, asegurando que la experiencia del usuario sea consistente y sin esfuerzo en todas las plataformas. 
                    <br/><br/>
                    Con la combinación de HTML, Bootstrap, CSS y JS, esta página no solo es estéticamente agradable sino también funcionalmente dinámica y accesible para todos los usuarios, independientemente del dispositivo que utilicen.</p>
                </Container>
              </Tab>
              <Tab eventKey="ver. 1.0" title="ver 1.0">
                <h3 className='text-center'><strong><span className='span-html'>SarpiDesign</span> (version 1.0) </strong></h3>
                <h4 className='text-center'><strong><span className='span-html'>Html</span> + <span className='span-html'>CSS</span></strong></h4>
                <br/>
                <Carousel>
                    <Carousel.Item>
                    <img className='carousel-img' src={img1} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carousel-img' src={img2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item-mood'>
                    <img className='carousel-img' src={img3} text="Third slide" />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <br/>
                    <p>Esta página web es un ejemplo perfecto de cómo se puede hacer mucho con las herramientas básicas de desarrollo web. Hecha con HTML estándar, la página es sencilla y directa, lo que la hace rápida de cargar y compatible con todos los navegadores. 
                    <br/><br/>
                    El CSS no se complica con cosas extras; solo se usa para hacer que la página se vea bien y sea fácil de usar. No hay diseños complicados, solo lo necesario para que sea funcional y se vea decente. El JavaScript añade las funciones necesarias sin hacer la página pesada. 
                    <br/><br/>
                    Todo es directo y al grano, lo que hace que la página funcione bien y rápido, sin complicaciones ni adornos innecesarios. Es una web práctica que hace el trabajo y se ve bien, sin complicaciones.</p>
                </Container>
              </Tab>
            </Tabs>
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

export default MiWeb;