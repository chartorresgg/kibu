// src/pages/Services.tsx - Actualizada para usar dataService
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Loader } from 'lucide-react';
import { dataService } from '../services/dataService';
import type { Service } from '../types/service';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar servicios al montar el componente
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      const data = await dataService.getAllServices();
      setServices(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los servicios');
      console.error('Error loading services:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar servicios por búsqueda
  const filteredServices = React.useMemo(() => {
    return services.filter(service =>
      service.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [services, searchTerm]);

  // Función para ordenar servicios
  const sortedServices = React.useMemo(() => {
    let sorted = [...filteredServices];
    
    switch (sortBy) {
      case 'name-asc':
        sorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case 'price-low':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.precio.replace(/[$.,]/g, ''));
          const priceB = parseInt(b.precio.replace(/[$.,]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.precio.replace(/[$.,]/g, ''));
          const priceB = parseInt(b.precio.replace(/[$.,]/g, ''));
          return priceB - priceA;
        });
        break;
      default:
        // Mantener orden original
        break;
    }
    
    return sorted;
  }, [filteredServices, sortBy]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-kibu-primary mx-auto mb-4" />
          <p className="text-kibu-gray">Cargando servicios...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadServices}
            className="kibu-btn-primary"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=600&fit=crop&crop=center")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative kibu-container">
          <div className="text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Servicios</h1>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center space-x-2 text-gray-200">
              <Link to="/" className="text-white font-medium">
                Inicio
              </Link>
              <span>{'>'}</span>
              <span className="text-white font-medium">Servicios</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Controles y filtros */}
      <section className="py-8 bg-kibu-light-gray border-b">
        <div className="kibu-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Buscador */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar servicios..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset a primera página al buscar
                  }}
                  className="kibu-input pl-10 w-64"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-kibu-primary" />
                <List className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Resultados y controles */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-kibu-gray">
                Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedServices.length)} de {sortedServices.length} resultados
                {searchTerm && (
                  <span className="ml-2 text-kibu-primary">
                    para "{searchTerm}"
                  </span>
                )}
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
          {currentServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-kibu-gray text-lg">
                {searchTerm ? `No se encontraron servicios para "${searchTerm}"` : 'No hay servicios disponibles'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentServices.map((service) => (
                <div key={service.id} className="kibu-card group hover:shadow-xl transition-shadow duration-300">
                  
                  {/* Imagen del servicio */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.imagen}
                      alt={service.nombre}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Etiquetas */}
                    {service.promocion && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{service.porcentajeDescuento}%
                      </div>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-kibu-dark mb-1 line-clamp-2">
                      {service.nombre}
                    </h3>
                    <p className="text-kibu-gray text-sm mb-3 line-clamp-2">
                      {service.descripcion}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-kibu-primary">
                        ${parseInt(service.precio).toLocaleString()}
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
          )}

          {/* Paginación */}
          {totalPages > 1 && (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;