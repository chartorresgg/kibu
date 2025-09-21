// src/pages/Services.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  isPromotion: boolean;
  promotionLabel?: string;
  category: string;
}

const Services: React.FC = () => {
  // Datos de todos los servicios basados en el mockup
  const allServices: Service[] = [
    {
      id: 1,
      title: "Aplicaciones Web",
      description: "Aplicaciones estáticas",
      price: "$ 5.500.000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "web"
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: "Para iOS y Android",
      price: "$ 4.000.000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "mobile"
    },
    {
      id: 3,
      title: "Transformación Digital",
      description: "De todos tus procesos",
      price: "$ 10.000.000",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "consulting"
    },
    {
      id: 4,
      title: "Inteligencia Artificial",
      description: "Personalizada a tu empresa",
      price: "$ 40.000.000",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      promotionLabel: "New",
      category: "ai"
    },
    {
      id: 5,
      title: "Tienda online",
      description: "Con anuncios integrados",
      price: "$ 35.000.000",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "ecommerce"
    },
    {
      id: 6,
      title: "Seguridad de datos",
      description: "Monitoreo 24/7",
      price: "$ 40.000.000",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      category: "security"
    },
    {
      id: 7,
      title: "DevOps",
      description: "Una cultura de trabajo",
      price: "$ 3.000.000",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      category: "devops"
    },
    {
      id: 8,
      title: "Servicios Cloud",
      description: "Servidores propios de AWS",
      price: "$ 50.000.000",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      promotionLabel: "New",
      category: "cloud"
    },
    {
      id: 9,
      title: "Análisis de Datos",
      description: "Tome decisiones inteligentes",
      price: "$ 8.000.000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "analytics"
    },
    {
      id: 10,
      title: "Desarrollo de API's",
      description: "Integra tus aplicaciones",
      price: "$ 7.000.000",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      category: "api"
    },
    {
      id: 11,
      title: "Microservicios",
      description: "Crea aplicaciones modulares",
      price: "$ 9.000.000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "microservices"
    },
    {
      id: 12,
      title: "Soporte técnico",
      description: "Asesoria siempre disponible",
      price: "$ 6.000.000",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      promotionLabel: "New",
      category: "support"
    }
  ];

  const [services] = useState<Service[]>(allServices);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('default');

  // Paginación
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="bg-gradient-to-r from-kibu-secondary to-white py-16">
        <div className="kibu-container">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-kibu-dark mb-4">
              Servicios
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center space-x-2 text-kibu-gray">
              <Link to="/" className="hover:text-kibu-primary transition-colors">
                Inicio
              </Link>
              <span>{'>'}</span>
              <span className="text-kibu-dark font-medium">Servicios</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Controles y filtros */}
      <section className="py-8 bg-kibu-light-gray border-b">
        <div className="kibu-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Filtros */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-white transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-kibu-primary" />
                <List className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Resultados y controles */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-kibu-gray">
                Showing 1-12 of 32 results
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-kibu-gray">Show</span>
                <select 
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-2 py-1 border border-gray-300 rounded text-center"
                >
                  <option value={16}>16</option>
                  <option value={32}>32</option>
                  <option value={48}>48</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-kibu-gray">Sort by</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-12">
        <div className="kibu-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentServices.map((service) => (
              <div key={service.id} className="kibu-card group hover:shadow-xl transition-shadow duration-300">
                
                {/* Imagen del servicio */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Etiquetas */}
                  {service.isPromotion && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{service.promotionLabel}
                    </div>
                  )}
                  
                  {service.promotionLabel === 'New' && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      New
                    </div>
                  )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-kibu-dark mb-1 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-kibu-gray text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-kibu-primary">
                      {service.price}
                    </span>
                    <Link 
                      to={`/servicio/${service.id}`}
                      className="kibu-btn-primary text-sm px-4 py-2"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-center items-center mt-12 gap-2">
            <button 
              className={`px-3 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-kibu-primary text-white hover:bg-kibu-accent'}`}
              disabled={currentPage === 1}
            >
              1
            </button>
            <button className="px-3 py-2 rounded bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors">
              2
            </button>
            <button className="px-3 py-2 rounded bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors">
              3
            </button>
            <button className="px-3 py-2 rounded bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;