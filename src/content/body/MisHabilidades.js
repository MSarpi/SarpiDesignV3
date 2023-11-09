import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();

const Mishabilidades = () => {
  return (
    <Container className='size-card' id='habilidades'>
      <strong><p className="text-center mt-4 mb-4 titulo-secciones" data-aos="fade-up">Mis <span className='secciones'>Habilidades</span></p></strong>
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-4">
          <Card className='border-card-ability border-card-ability card-ability' >
            <p className='icono-habilidades'><i class="fa-solid fa-pen-fancy fa-shake"></i></p>
            <Card.Body className='card-body-ability'>
              <Card.Title className='titulo-habilidad'><strong><p>Diseño</p></strong></Card.Title>
              <Card.Text>
                <p className='contenido-titulo'>Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.</p>
              </Card.Text>
              <Card.Text>
                <div className='content-ability'>
                    <div class="text-center">
                      <div class="card-body">
                            <p className='card-body-titulo'>Disfruto diseñando:</p>
                            <p className='card-body-content'>Web, Aplicaciones, Logotipos y Ilustraciones</p>
                            <hr class="border-gray-600"/>
                            <p  className='card-body-titulo'>Herramientas de diseño:</p>
                            <p className='card-body-content'>Photoshop</p>
                            <p className='card-body-content'>MediBang Paint Pro</p>
                            <p className='card-body-content'>Sony Vega</p>
                            <p className='card-body-content'>Lápiz y papel</p>
                      </div>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
        <Card className='border-card-ability border-card-ability card-ability' >
            <p className='icono-habilidades'><i class="fa-solid fa-computer fa-bounce"></i></p>
            <Card.Body className='card-body-ability'>
              <Card.Title className='titulo-habilidad'><strong><p>Frontend Developer</p></strong></Card.Title>
              <Card.Text>
                <p className='contenido-titulo'>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
              </Card.Text>
              <Card.Text>
                <div className='content-ability'>
                    <div class="text-center">
                      <div class="card-body">
                            <p className='card-body-titulo'>Lenguajes:</p>
                            <p className='card-body-content'> React, HTML, CSS, JavaScript, jQuery, Bootstrap, tailwind, AJAX</p>
                            <hr class="border-gray-600"/>
                            <p className='card-body-titulo'>Herramientas:</p>
                            <p className='card-body-content'>Git</p>
                            <p className='card-body-content'>Visual Studio Code</p>
                            <p className='card-body-content'>ResponsivelyApp</p>
                      </div>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
        <Card className='border-card-ability border-card-ability card-ability' >
            <p className='icono-habilidades'><i class="fa-solid fa-laptop-code fa-beat"></i></p>
            <Card.Body className='card-body-ability'>
              <Card.Title className='titulo-habilidad'><strong><p>Backend Developer</p></strong></Card.Title>
              <Card.Text>
                <p className='contenido-titulo'>Me gusta codificar cosas desde cero. tanto para aplicaciones moviles y paginas web's.ㅤㅤ</p>
              </Card.Text>
              <Card.Text>
                <div className='content-ability'>
                    <div class="text-center">
                      <div class="card-body">
                            <p  className='card-body-titulo'>Lenguajes:</p>
                            <p  className='card-body-content'>PHP, LARAVEL, MYSQL, Java</p>
                            <hr class="border-gray-600"/>
                            <p  className='card-body-titulo'>Herramientas de diseño:</p>
                            <p className='card-body-content'>Dbeaver</p>
                            <p className='card-body-content'>Android Studio</p>
                            <p className='card-body-content'>Visual Studio Code</p>
                            <p className='card-body-content'>Git</p>
                      </div>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Mishabilidades;
