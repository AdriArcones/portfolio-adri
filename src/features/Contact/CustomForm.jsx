import CustomButton from "../../shared/components/custom-button/CustomButton";
import { CircleAlert, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "../../shared/config/emailjs.config";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errorField === name) {
      setError(null);
      setErrorField(null);
    }
  };

  const validatePhone = (phone) => {
    // Validación para teléfonos españoles e internacionales
    const phoneRegex = /^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    // Validar nombre
    if (!formData.name.trim()) {
      setError('Por favor, ingresa tu nombre');
      setErrorField('name');
      return false;
    }
    
    // Validar email
    if (!formData.email.trim()) {
      setError('Por favor, ingresa tu email');
      setErrorField('email');
      return false;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un email válido');
      setErrorField('email');
      return false;
    }
    
    // Validar teléfono
    if (!formData.phone.trim()) {
      setError('Por favor, ingresa tu teléfono');
      setErrorField('phone');
      return false;
    }
    
    // Validar formato de teléfono
    if (!validatePhone(formData.phone)) {
      setError('Por favor, ingresa un teléfono válido (formato español)');
      setErrorField('phone');
      return false;
    }
    
    // Validar mensaje
    if (!formData.message.trim()) {
      setError('Por favor, ingresa un mensaje');
      setErrorField('message');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setErrorField(null);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          date: new Date().toLocaleDateString('es-ES'),
          time: new Date().toLocaleTimeString('es-ES'),
          browser: navigator.userAgent
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          className={`form__input ${errorField === 'name' ? 'form__input--error' : ''}`} 
          name="name" 
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__item">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          className={`form__input ${errorField === 'email' ? 'form__input--error' : ''}`} 
          name="email" 
          placeholder="Ej: email@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__item">
        <label htmlFor="phone">Teléfono</label>
        <input 
          type="tel" 
          id="phone" 
          className={`form__input ${errorField === 'phone' ? 'form__input--error' : ''}`} 
          name="phone" 
          placeholder="Ej: 612 34 56 78"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__item">
        <label htmlFor="message">Mensaje</label>
        <textarea 
          id="message" 
          className={`form__input form__input--textarea ${errorField === 'message' ? 'form__input--error' : ''}`} 
          name="message" 
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      {error && (
        <div className="form__item">
          <span className="form__feedback form__feedback--error"><CircleAlert />{error}</span> 
        </div>
      )}

      {success && (
        <div className="form__item">
          <span className="form__feedback form__feedback--success"><CheckCircle />¡Mensaje enviado con éxito!</span> 
        </div>
      )}

      <div className="form__item">
        <CustomButton 
          type="submit" 
          className="form__button"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </CustomButton>
      </div>
    </form>
  );
};

export default CustomForm;
