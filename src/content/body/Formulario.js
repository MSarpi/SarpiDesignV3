import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';

function Formulario() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.from_name.trim()) {
          newErrors.from_name = 'Este campo es obligatorio';
        }
        if (!formData.from_email.trim()) {
          newErrors.from_email = 'Este campo es obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.from_email)) {
          newErrors.from_email = 'Ingrese un correo electrónico válido';
        }
        if (!formData.message.trim()) {
          newErrors.message = 'Este campo es obligatorio';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          emailjs
            .sendForm('service_7xzclfo', 'template_l3nish9', e.target, 'MUo1Gasv75y_F8z7H')
            .then(
              (result) => {
                toast.loading('Enviando..');
                setTimeout(() => {
                  toast.dismiss();
                  toast.success('Se ha enviado exitosamente!');
                }, 2000);
              },
              (error) => {
                toast.loading('Enviando..');
                setTimeout(() => {
                  toast.dismiss();
                  toast.error('Error al enviar el formulario');
                }, 2000);
              }
            );
        }
    }
  return (
    <Container>
        <div id='contactame'></div>
        <div className='margin-top' id='certificados'></div>
        <strong><p className="text-center mt-4 mb-4 titulo-secciones"  data-aos="fade-up"><span className='secciones'>Contáctame</span></p></strong>
        <h4 style={{textAlign: 'center'}} className='titulo-form'>Si tienes una duda o requieres algunos de mis servicios, no dudes en contactarme!</h4>
        <div className='Formulario-design'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="UserName">
                    <Form.Label>Ingrese su Nombre o Empresa</Form.Label>
                    <Form.Control type="text" name="from_name" placeholder="Ej: Miguel S. O Proyect SPA" onChange={handleChange} isInvalid={errors.from_name}/>
                    <Form.Control.Feedback type="invalid">{errors.from_name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Ingrese su correo</Form.Label>
                    <Form.Control type="email" name="from_email" placeholder="E: Correo@gmail.com" onChange={handleChange} isInvalid={errors.from_email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="textarea">
                    <Form.Label>Ingrese un mensaje</Form.Label>
                    <Form.Control as="textarea" name="message" placeholder='Ej: Me gusto tu pagina, tienes tiempo para platicar.'  rows={5}  onChange={handleChange} isInvalid={errors.message}/>
                </Form.Group>
                <div className="d-grid gap-4">
                
                <Button type="submit" className='btn btn-mood-form' size="lg">
                <Toaster />
                Enviar
                </Button>
                </div>
            </Form>
        </div>
    </Container>

  );
}

export default Formulario;