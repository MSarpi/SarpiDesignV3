import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ImgSinColor from '../../assets/img/portadabyw.png'
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();
function SobreMi() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className='btn-header' onClick={handleShow}>Sobre mi</button>

      <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered scrollable
        backdrop="static"
        keyboard={false}>
        <Modal.Header className='Header-Modal-SobreMi'>
          <Modal.Title><strong>Sobre mi</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body className='Body-Modal-SobreMi'>
            <Container>
            <Row>
                <Col xs={12} md={12} lg={12} xl={6} className='sobre-mi' data-aos="fade-down-right">
                    Soy Miguel Angel Sarpi Rivero, Analista Programador Computacional graduado en 2019 del Instituto IP CHILE. 
                    <br/>
                    <br/>
                    Mi objetivo es convertirme en un Senior FullStack y ser un gran aporte tanto para mis futuros compañeros de trabajo como para mí mismo como freelancer. Actualmente, me enfoco en fortalecer mis habilidades en el desarrollo web FRONT-END con React.js y Vue.js a través de cursos en Udemy.
                    <br/>
                    <br/>
                    Poseo conocimientos teóricos y prácticos en el campo de la tecnología de la información y las comunicaciones. 
                    <br/>
                    <br/>
                    Además, tengo la capacidad de administrar y operar sistemas informáticos que involucran PHP, Laravel 8, HTML, CSS, JS, jQuery y bases de datos. También tengo experiencia en el mantenimiento de computadoras y notebooks.
                    <br/>
                    <br/>
                    En mi tiempo libre, disfruto dibujar y crear videojuegos RPG con RPG Maker, así como dar paseos y disfrutar de espacios verdes.
                </Col>
                <Col xs={12} md={12} lg={12} xl={6}>
                    <img className='img-modal' src={ImgSinColor}/>
                </Col>
            </Row>
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

export default SobreMi;