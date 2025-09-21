// src/pages/ServiceDetail.tsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  
  // Buscar el servicio por ID
  const serviceData = servicesData.find(service => service.id === Number(id));
  
  // Si no se encuentra el servicio, mostrar error
  if (!serviceData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-kibu-dark mb-4">Servicio no encontrado</h2>
          <p className="text-kibu-gray mb-6">El servicio que buscas no existe o ha sido removido.</p>
          <Link to="/servicios" className="kibu-btn-primary">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <section className="py-6 bg-kibu-breadcrumb">
        <div className="kibu-container">
          <nav className="flex items-center space-x-2 text-kibu-gray">
            <Link to="/" className="hover:text-kibu-primary transition-colors">
              Inicio
            </Link>
            <span>{'>'}</span>
            <Link to="/servicios" className="hover:text-kibu-primary transition-colors">
              Servicios
            </Link>
            <span>{'>'}</span>
            <span className="text-kibu-dark font-medium">{serviceData.title}</span>
          </nav>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12">
        <div className="kibu-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Imagen principal */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={serviceData.image}
                  alt={serviceData.title}
                  className="w-full h-[650px] object-cover"  /* 500px de altura */
                />
                {serviceData.isPromotion && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold">
                    -{serviceData.promotionPercentage}%
                  </div>
                )}
              </div>
            </div>

            {/* Información del servicio */}
            <div className="space-y-6">
              
              {/* Título y precio */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-kibu-dark mb-4">
                  {serviceData.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  {serviceData.isPromotion && serviceData.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        {serviceData.originalPrice}
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        50%
                      </span>
                    </>
                  )}
                </div>
                
                <div className="text-4xl font-bold text-kibu-primary mb-2">
                  {serviceData.price}
                </div>
                
                <p className="text-kibu-gray">
                  Total: <span className="text-2xl font-bold text-kibu-primary">{serviceData.price}</span>
                </p>
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-xl font-semibold text-kibu-dark mb-3">Descripción</h3>
                <p className="text-kibu-gray leading-relaxed">
                  {serviceData.description}
                </p>
              </div>

              {/* Características */}
              <div>
                <h3 className="text-xl font-semibold text-kibu-dark mb-3">Características</h3>
                <ul className="space-y-2">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-kibu-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
              
                <Link to="/contacto" className="kibu-btn-primary flex-1">
                Contratar
                </Link>
                <Link to="/servicios" className="kibu-btn-secondary flex-1 text-center">
                  Servicios
                </Link>
              </div>

              {/* Botón regresar */}
              <Link 
                to="/servicios"
                className="inline-flex items-center text-kibu-primary hover:text-kibu-accent transition-colors"
              >
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs de información adicional */}
      <section className="py-12 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="max-w-4xl mx-auto">
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`py-2 px-1 font-medium transition-colors ${
                    activeTab === 'description'
                      ? 'border-b-2 border-kibu-primary text-kibu-primary'
                      : 'text-kibu-gray hover:text-kibu-primary'
                  }`}
                >
                  Descripción
                </button>
                <button 
                  onClick={() => setActiveTab('additional')}
                  className={`py-2 px-1 font-medium transition-colors ${
                    activeTab === 'additional'
                      ? 'border-b-2 border-kibu-primary text-kibu-primary'
                      : 'text-kibu-gray hover:text-kibu-primary'
                  }`}
                >
                  Información adicional
                </button>
              </nav>
            </div>

            {/* Contenido del tab */}
            <div className="prose max-w-none">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-2xl font-bold text-kibu-dark mb-4">
                    ¿Por qué tu empresa necesita una aplicación web personalizada?
                  </h3>
                  <p className="text-kibu-gray leading-relaxed mb-8">
                    {serviceData.longDescription}
                  </p>
                  
                  {/* Galería de imágenes en la descripción */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {serviceData.gallery.map((image, index) => (
                      <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={image}
                          alt={`${serviceData.title} ejemplo ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'additional' && (
                <div>
                  <h3 className="text-2xl font-bold text-kibu-dark mb-4">
                    Información adicional
                  </h3>
                  <p className="text-kibu-gray leading-relaxed">
                    {serviceData.additionalInfo}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;