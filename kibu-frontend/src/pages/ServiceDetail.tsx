// src/pages/ServiceDetail.tsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';

interface ServiceDetailData {
  id: number;
  title: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  isPromotion: boolean;
  promotionPercentage?: number;
  originalPrice?: string;
  availability: number;
  features: string[];
  additionalInfo: string;
  gallery: string[];
}

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Datos del servicio (en una app real vendría de una API)
  const serviceData: ServiceDetailData = {
    id: Number(id),
    title: "Aplicaciones web",
    price: "$ 5.500.000",
    originalPrice: "$ 11.000.000",
    description: "Creamos aplicaciones web a medida que se adaptan perfectamente a las necesidades de tu empresa. Desde sistemas de gestión y plataformas de e-commerce hasta dashboards administrativos y portales corporativos, desarrollamos soluciones escalables con tecnologías modernas como React, Angular y Node.js. Incluye diseño responsive, integración con bases de datos, APIs personalizadas y hosting optimizado para garantizar máximo rendimiento y seguridad.",
    longDescription: "En un mundo donde el 86% de los clientes investigan online antes de comprar, tener una presencia digital profesional ya no es opcional. Nuestras aplicaciones web no solo mejoran tu imagen corporativa, sino que automatizan procesos, reducen costos operativos y generan nuevas fuentes de ingresos.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
    isPromotion: true,
    promotionPercentage: 50,
    availability: 5,
    features: [
      "Diseño UX/UI personalizado",
      "Desarrollo responsivo (móvil y desktop)",
      "Panel de administración",
      "Integración con APIs",
      "Hosting por 5 meses",
      "Soporte técnico incluido"
    ],
    additionalInfo: "En un mundo donde el 86% de los clientes investigan online antes de comprar, tener una presencia digital profesional ya no es opcional. Nuestras aplicaciones web no solo mejoran tu imagen corporativa, sino que automatizan procesos, reducen costos operativos y generan nuevas fuentes de ingresos.",
    gallery: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <section className="py-6 bg-kibu-light-gray">
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
                  className="w-full h-96 object-cover"
                />
                {serviceData.isPromotion && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold">
                    -{serviceData.promotionPercentage}%
                  </div>
                )}
              </div>
              
              {/* Galería de imágenes */}
              <div className="grid grid-cols-2 gap-4">
                {serviceData.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${serviceData.title} ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
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

              {/* Información adicional */}
              <div>
                <h3 className="text-xl font-semibold text-kibu-dark mb-3">Información adicional</h3>
                <p className="text-kibu-gray leading-relaxed">
                  {serviceData.additionalInfo}
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="kibu-btn-primary flex-1">
                  Contratar
                </button>
                <Link to="/servicios" className="kibu-btn-secondary flex-1 text-center">
                  Servicios
                </Link>
              </div>

              {/* Botón regresar */}
              <Link 
                to="/servicios"
                className="inline-flex items-center text-kibu-primary hover:text-kibu-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Regresar al catálogo
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
                <button className="border-b-2 border-kibu-primary text-kibu-primary py-2 px-1 font-medium">
                  Descripción
                </button>
                <button className="text-kibu-gray hover:text-kibu-primary py-2 px-1 font-medium transition-colors">
                  Información adicional
                </button>
              </nav>
            </div>

            {/* Contenido del tab */}
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-kibu-dark mb-4">
                ¿Por qué tu empresa necesita una aplicación web personalizada?
              </h3>
              <p className="text-kibu-gray leading-relaxed">
                {serviceData.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;