// src/pages/Contact.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { dataService } from '../services/dataService';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Aplicaciones Web',
    'Aplicaciones Móviles',
    'Transformación Digital',
    'Inteligencia Artificial',
    'Análisis de Datos',
    'Servicios Cloud',
    'Consultoría IT',
    'Otro'
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-kibu-primary" />,
      title: 'Dirección',
      details: ['Calle 61A#9-15 Bogotá D.C.', 'ZIP 11110 33134 COL']
    },
    {
      icon: <Phone className="w-6 h-6 text-kibu-primary" />,
      title: 'Teléfono',
      details: ['+57 699 67 83', 'Lun - Vie: 8:00 AM - 6:00 PM']
    },
    {
      icon: <Mail className="w-6 h-6 text-kibu-primary" />,
      title: 'Email',
      details: ['servicios@kibu.com.co', 'info@kibu.com.co']
    },
    {
      icon: <Clock className="w-6 h-6 text-kibu-primary" />,
      title: 'Horario de atención',
      details: ['Lunes - Viernes: 8:00 AM - 6:00 PM', 'Sábados: 9:00 AM - 2:00 PM']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log('Enviando mensaje:', formData); // Debug
      const success = await dataService.submitContactMessage(formData);
      console.log('Respuesta del servicio:', success); // Debug
      
      if (success) {
        console.log('Mensaje guardado exitosamente'); // Debug
        // Verificar que se guardó en localStorage
        const messages = localStorage.getItem('kibu_messages');
        console.log('Mensajes en localStorage:', messages); // Debug
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setErrors({
          general: 'Error al enviar el mensaje. Intenta nuevamente.'
        });
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error); // Debug
      setErrors({
        general: 'Error al enviar el mensaje. Intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-kibu-dark mb-4">
            ¡Mensaje enviado exitosamente!
          </h2>
          <p className="text-kibu-gray mb-6">
            Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="kibu-btn-primary"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="bg-gradient-to-r from-kibu-secondary to-white py-16">
        <div className="kibu-container">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-kibu-dark mb-4">
              Contacto
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center space-x-2 text-kibu-gray">
              <Link to="/" className="hover:text-kibu-primary transition-colors">
                Inicio
              </Link>
              <span>{'>'}</span>
              <span className="text-kibu-dark font-medium">Contacto</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-20">
        <div className="kibu-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulario de contacto */}
            <div>
              <div className="bg-white rounded-lg shadow-kibu-card p-8">
                <h2 className="text-2xl font-bold text-kibu-dark mb-6">
                  Envíanos un mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error general */}
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                      {errors.general}
                    </div>
                  )}

                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-kibu-dark mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`kibu-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-kibu-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`kibu-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-kibu-dark mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`kibu-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+57 300 123 4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-kibu-dark mb-2">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="kibu-input"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  {/* Servicio */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-kibu-dark mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`kibu-input ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-kibu-dark mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`kibu-input ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Cuéntanos más sobre tu proyecto..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full kibu-btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              
              {/* Información general */}
              <div>
                <h2 className="text-2xl font-bold text-kibu-dark mb-6">
                  Información de contacto
                </h2>
                <p className="text-kibu-gray mb-8">
                  Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios 
                  y te responderemos lo antes posible.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-kibu-dark mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-kibu-gray">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horario destacado */}
              <div className="bg-kibu-light-gray rounded-lg p-6">
                <h3 className="font-semibold text-kibu-dark mb-3">
                  Horario de atención
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-kibu-gray">Lunes - Viernes:</span>
                    <span className="text-kibu-dark font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kibu-gray">Sábados:</span>
                    <span className="text-kibu-dark font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kibu-gray">Domingos:</span>
                    <span className="text-red-500 font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;