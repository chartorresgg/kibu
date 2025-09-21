// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Proyectos completados' },
    { number: '50+', label: 'Clientes satisfechos' },
    { number: '5+', label: 'Años de experiencia' },
    { number: '24/7', label: 'Soporte técnico' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-kibu-primary" />,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías para crear soluciones modernas y eficientes.'
    },
    {
      icon: <Users className="w-8 h-8 text-kibu-primary" />,
      title: 'Trabajo en equipo',
      description: 'Colaboramos estrechamente con nuestros clientes para entender sus necesidades.'
    },
    {
      icon: <Award className="w-8 h-8 text-kibu-primary" />,
      title: 'Calidad',
      description: 'Nos comprometemos a entregar productos de la más alta calidad y rendimiento.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-kibu-primary" />,
      title: 'Crecimiento',
      description: 'Ayudamos a nuestros clientes a crecer y expandir sus negocios digitalmente.'
    }
  ];

  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      position: 'CEO & Fundador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Experto en transformación digital con más de 10 años de experiencia.'
    },
    {
      name: 'Ana García',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Líder técnica especializada en arquitectura de software y DevOps.'
    },
    {
      name: 'Miguel Torres',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Desarrollador full-stack con expertise en React, Node.js y cloud computing.'
    },
    {
      name: 'Laura Martínez',
      position: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Diseñadora creativa enfocada en experiencias de usuario excepcionales.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop&crop=center")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative kibu-container">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Nosotros</h1>
            <nav className="flex justify-center items-center space-x-2 text-gray-200">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>{'>'}</span>
              <span className="text-white font-medium">Nosotros</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Sección principal - Quiénes somos */}
      <section className="py-20">
        <div className="kibu-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-kibu-dark">
                Transformamos ideas en soluciones digitales
              </h2>
              <p className="text-lg text-kibu-gray leading-relaxed">
                En Kibu, somos un equipo apasionado de desarrolladores, diseñadores y consultores 
                tecnológicos dedicados a crear soluciones digitales que impulsan el crecimiento 
                de las empresas.
              </p>
              <p className="text-lg text-kibu-gray leading-relaxed">
                Desde 2019, hemos ayudado a más de 50 empresas a digitalizar sus procesos, 
                mejorar su eficiencia operativa y alcanzar nuevos mercados a través de 
                tecnologías innovadoras.
              </p>
              
              {/* Lista de beneficios */}
              <ul className="space-y-3">
                {[
                  'Experiencia comprobada en proyectos exitosos',
                  'Tecnologías de vanguardia y mejores prácticas',
                  'Soporte continuo y mantenimiento',
                  'Enfoque personalizado para cada cliente'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-kibu-gray">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contacto" className="kibu-btn-primary inline-flex items-center">
                Trabajemos juntos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Imagen */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"
                alt="Equipo Kibu trabajando"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-kibu-primary text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-kibu-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-kibu-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros valores */}
      <section className="py-20">
        <div className="kibu-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kibu-dark mb-4">
              Nuestros valores
            </h2>
            <p className="text-lg text-kibu-gray max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y nuestra relación con los clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-kibu-card hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-kibu-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-kibu-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro equipo */}
      <section className="py-20 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kibu-dark mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-kibu-gray max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible la magia de Kibu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-kibu-card overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kibu-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-kibu-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-kibu-gray text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20">
        <div className="kibu-container">
          <div className="bg-gradient-to-r from-kibu-primary to-kibu-accent rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales
            </p>
            <Link to="/contacto" className="bg-white text-kibu-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;