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
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "web"
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: "Para iOS y Android",
      price: "$ 4.000.000",
      image: "https://images.unsplash.com/photo-1647964184283-76030bd9d6e2?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "mobile"
    },
    {
      id: 3,
      title: "Transformación Digital",
      description: "De todos tus procesos",
      price: "$ 10.000.000",
      image: "https://images.unsplash.com/photo-1627645835237-0743e52b991f?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "consulting"
    },
    {
      id: 4,
      title: "Inteligencia Artificial",
      description: "Personalizada a tu empresa",
      price: "$ 40.000.000",
      image: "https://images.unsplash.com/photo-1677691824188-3e266886cb27?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1584472666879-7d92db132958?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "analytics"
    },
    {
      id: 10,
      title: "Desarrollo de API's",
      description: "Integra tus aplicaciones",
      price: "$ 7.000.000",
      image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      category: "api"
    },
    {
      id: 11,
      title: "Microservicios",
      description: "Crea aplicaciones modulares",
      price: "$ 9.000.000",
      image: "https://images.unsplash.com/photo-1601192711507-e21a1e78e549?w=400&h=300&fit=crop&crop=center",
      isPromotion: true,
      promotionLabel: "50%",
      category: "microservices"
    },
    {
      id: 12,
      title: "Soporte técnico",
      description: "Asesoria siempre disponible",
      price: "$ 6.000.000",
      image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=400&h=300&fit=crop&crop=center",
      isPromotion: false,
      promotionLabel: "New",
      category: "support"
    }
  ];

  const [services] = useState<Service[]>(allServices);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('default');

  // Función para ordenar servicios
  const sortedServices = React.useMemo(() => {
    let sorted = [...services];
    
    switch (sortBy) {
      case 'name-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-low':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$.,]/g, ''));
          const priceB = parseInt(b.price.replace(/[$.,]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$.,]/g, ''));
          const priceB = parseInt(b.price.replace(/[$.,]/g, ''));
          return priceB - priceA;
        });
        break;
      default:
        // Mantener orden original
        break;
    }
    
    return sorted;
  }, [services, sortBy]);

  // Paginación basada en servicios ordenados
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  // Función para cambiar la cantidad de items por página
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Resetear a la primera página
  };

  // Función para cambiar de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{
  backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")'
}}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative kibu-container">
    <div className="text-center text-white">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">Servicios</h1>
      <nav className="flex justify-center items-center space-x-2 text-gray-200">
        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
        <span>{'>'}</span>
        <span className="text-white font-medium">Servicios</span>
      </nav>
    </div>
  </div>
</section>

      {/* Controles y filtros */}
      <section className="py-6 bg-kibu-breadcrumb">
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
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedServices.length)} of {sortedServices.length} results
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-kibu-gray">Show</span>
                <select 
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                  className="px-2 py-1 border border-gray-300 rounded text-center"
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
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
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
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
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
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
            {/* Botón Previous */}
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors'
              }`}
            >
              Previous
            </button>

            {/* Números de página */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded ${
                  currentPage === page
                    ? 'bg-kibu-primary text-white'
                    : 'bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Botón Next */}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-kibu-dark hover:bg-kibu-primary hover:text-white transition-colors'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;