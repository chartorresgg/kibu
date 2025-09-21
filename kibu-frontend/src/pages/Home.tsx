// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone } from 'lucide-react';
import ImageCarousel from '../components/common/ImageCarousel';

const Home: React.FC = () => {
  // Datos de servicios destacados basados en el mockup
  const featuredServices = [
    {
      id: 1,
      title: "Aplicaciones Web",
      description: "Aplicaciones estáticas",
      price: "$ 5.500.000",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center", 
      isNew: false
    },
    {
      id: 2,
      title: "Análisis de datos", 
      description: "Tome decisiones inteligentes",
      price: "$ 8.000.000",
      image: "https://images.unsplash.com/photo-1584472666879-7d92db132958?w=400&h=300&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 3,
      title: "Aplicaciones móviles",
      description: "Para iOS y Android", 
      price: "$ 4.000.000",
      image: "https://images.unsplash.com/photo-1647964184283-76030bd9d6e2?w=400&h=300&fit=crop&crop=center",
      isNew: true
    }
  ];

  // Imágenes para el carrusel de "Conoce más de Kibu"
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
      alt: "Equipo Kibu trabajando en oficina moderna",
      title: "Nuestro Equipo",
      description: "Profesionales dedicados a la excelencia"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      alt: "Tecnología y desarrollo",
      title: "Tecnología Avanzada",
      description: "Utilizamos las mejores herramientas del mercado"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      alt: "Proyectos exitosos",
      title: "Proyectos Exitosos",
      description: "Más de 500 proyectos completados"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&crop=center",
      alt: "Innovación constante",
      title: "Innovación",
      description: "Siempre a la vanguardia tecnológica"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=1920&h=1080&fit=crop&crop=center")'
      }}>
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative kibu-container min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Espacio vacío para balance visual - AHORA A LA IZQUIERDA */}
            <div className="hidden lg:block"></div>

            {/* Contenido del Hero en recuadro - AHORA A LA DERECHA */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-kibu-gray">
                  ¡Te esperamos!
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold text-kibu-dark leading-tight">
                 
                  <span className="text-kibu-primary">Soluciona con Kibu</span>
                </h1>
                <p className="text-base lg:text-lg text-kibu-gray">
                  Kibu desarrolla software personalizado y soluciones tecnológicas para empresas. 
                  Creamos aplicaciones web, móviles y sistemas que automatizan procesos e impulsan 
                  el crecimiento de tu negocio.
                </p>
                
                <div className="pt-4">
                  <Link to="/servicios" className="kibu-btn-primary inline-flex items-center text-lg px-8 py-4">
                    CONSULTAR
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-white">
        <div className="kibu-container">
          
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kibu-dark mb-4">
              Servicios destacados
            </h2>
            <p className="text-lg text-kibu-gray max-w-2xl mx-auto">
              Consulta nuestros servicios de la más alta calidad
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="kibu-card group hover:shadow-xl transition-shadow duration-300">
                
                {/* Imagen del servicio */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.isNew && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kibu-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-kibu-gray mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-kibu-primary">
                      {service.price}
                    </span>
                    <Link 
                      to={`/servicio/${service.id}`}
                      className="kibu-btn-secondary text-sm"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enlace a todos los servicios */}
          <div className="text-center mt-12">
            <Link to="/servicios" className="kibu-btn-primary inline-flex items-center">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sección "Conoce más de Kibu" con carrusel */}
      <section className="py-20 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-kibu-dark">
                Conoce más de Kibu
              </h2>
              <p className="text-lg text-kibu-gray">
                Conoce quiénes somos y recibe un servicio personalizado. Descubre nuestro equipo, 
                tecnología y los proyectos que nos hacen líderes en soluciones digitales.
              </p>
              
              {/* Características destacadas */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                  <span className="text-kibu-gray">Más de 5 años de experiencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                  <span className="text-kibu-gray">500+ proyectos completados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                  <span className="text-kibu-gray">Tecnologías de vanguardia</span>
                </div>
              </div>

              <Link to="/nosotros" className="kibu-btn-primary inline-flex items-center">
                Consultar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Carrusel de imágenes */}
            <div className="relative">
              <ImageCarousel 
                images={carouselImages}
                autoPlay={true}
                interval={4000}
                showDots={true}
                className="h-96 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;