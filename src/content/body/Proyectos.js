import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
 
import miweb from '../assets/img/miweb.png';
import pokedex from '../assets/img/pokedex.png';
import myvoz from '../assets/img/myvoz.png';
import calculadora from '../assets/img/calculadora.png';
import ms from '../assets/img/mastransporteport.png';
import tloz from '../assets/gif/tloz.gif';
import si from '../assets/gif/si.gif';
import MiWeb from './Modal/MiWeb';
import MyVoz from './Modal/MyVoz';
import MasTransporte from './Modal/MasTransporte';
import FacelessBg from '../assets/img/facelesslogin.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'
import Faceless from './Modal/Faceless';
Aos.init();
function Proyectos() {
  return (
    <Container className='size-card ' id='proyectos'>
        <div className='margin-top'></div>
        <strong><p className="text-center mt-4 mb-4 titulo-secciones"  data-aos="fade-up">Mis <span className='secciones'>Proyectos</span> y <span className='secciones'>Trabajos</span></p></strong>
        <Row>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={FacelessBg} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Faceless</span></Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>MyFaceless es una aplicación de libre uso inspirada en el diseño de Instagram con un diseño mas simple y agradable para el usuario. Esta hecho con Laravel 10 y PHP 8.1</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <Faceless/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={pokedex} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Pokedex</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Esta es una pequeña aplicación en ReactJS con la API Pokémon. Su función principal es mostrar el listado de los Pokémon disponibles, como indica el título.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <Container>
                        <Row>
                            <Col>
                                <a href='https://github.com/MSarpi/ApiPokemon-V2.git' target='_BLANK'><i class="fa-brands fa-github redireccion-proyect"></i></a>
                            </Col>
                            <Col>
                                <a href='https://pokedex-pokemon-v2.netlify.app/' target='_BLANK'><i class="fa-brands fa-internet-explorer redireccion-proyect"></i></a>
                            </Col>
                        </Row>
                        </Container>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={myvoz} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Myvoz</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Myvoz es una app creada por mí para personas con problemas auditivos y vocales, permitiéndoles comunicarse con aquellos que no conocen lenguaje de señas.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <MyVoz/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={calculadora} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Calculadora</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Desarrollo básico que muestra operaciones matemáticas (suma, resta, división y multiplicación) con una interfaz inspirada en la calculadora de Apple.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <Row>
                            <Col>
                            <a href='https://github.com/MSarpi/Calculadora.git' target='_BLANK'><i class="fa-brands fa-github redireccion-proyect"></i></a>
                            </Col>
                            <Col>
                            <a href='https://calculadora-sarpidesign.netlify.app/' target='_BLANK'><i class="fa-brands fa-internet-explorer redireccion-proyect"></i></a>
                            </Col>
                        </Row>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={ms} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>MasTransporte</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Contenido sobre envíos nacionales de paquetería para tiendas en línea, empresas y negocios. Todo lo necesario para gestionar envíos y despachos.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <MasTransporte/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={miweb} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Mi Web</span></Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Muestro la evolución de mi portafolio, del más antiguo al más actual, usando diversas formas para crear páginas web, con o sin frameworks.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <MiWeb/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={tloz} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>The legend of zelda</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Es el famoso videojuego "Tloz" de Snes, demostrando un sistema de colisiones y ataques. Creado con HTML, CSS, JS y Kaboom.js.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <Row>
                            <Col>
                            <a href='https://github.com/MSarpi/TLOZ-Custoom.git' target='_BLANK'><i class="fa-brands fa-github redireccion-proyect"></i></a>
                            </Col>
                            <Col>
                            <a href='https://thelegendofzelda-custom.netlify.app/' target='_BLANK'><i class="fa-brands fa-internet-explorer redireccion-proyect"></i></a>
                            </Col>
                        </Row>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
            </Col> */}
            <Col xl={6} lg={6} md={12} sm={12} className='padding-card'>
                <Card  className='border-card'>
                    <Card.Img variant="top" src={si} />
                    <Card.Body className='card-body-proyect'>
                    <Card.Title className='text-center'><span className='card-title-proyect'>Space Invaders</span> </Card.Title>
                    <Card.Text className='contenido-card'>
                        <span className='card-content-proyect'>Es el famoso videojuego de disparos, demostrando movimientos laterales y lanzamientos de proyectiles. Creado con HTML, CSS, JS y Kaboom.js.</span>
                    </Card.Text>
                    <hr class="border-gray-600"/>
                    <Card.Text className='text-center'>
                        <Row>
                            <Col>
                            <a href='https://github.com/MSarpi/SpaceInvaders.git' target='_BLANK'><i class="fa-brands fa-github redireccion-proyect github"></i></a>
                            </Col>
                            <Col>
                            <a href='https://spaceinvaders-custom.netlify.app/' target='_BLANK'><i class="fa-brands fa-internet-explorer redireccion-proyect explorer"></i></a>
                            </Col>
                        </Row>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
            {/* <Col xl={4} lg={4} md={12} sm={12} className='padding-card'>
            </Col> */}

            
        </Row>
    </Container>
  );
}

export default Proyectos;