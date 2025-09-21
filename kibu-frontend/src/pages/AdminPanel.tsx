// src/pages/AdminPanel.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, User, Edit, Trash2, Eye, ChevronDown } from 'lucide-react';
// Prueba una de estas importaciones según tu archivo servicesData.ts:
import {servicesData} from '../data/servicesData'; // Si es exportación por defecto
// O si tienes exportación nombrada diferente, usa:
// import { services } from '../data/servicesData';

interface AdminService {
  id: number;
  nombre: string;
  precio: string;
  promocion: boolean;
  porcentajeDescuento: number;
  descripcion: string;
  informacionAdicional: string;
  caracteristicas: string;
  imagen: string;
  categoria: string;
  disponible: number;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<AdminService[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailService, setDetailService] = useState<AdminService | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Estados del formulario de agregar
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: '',
    caracteristicas: '',
    informacionAdicional: ''
  });

  // Convertir datos de servicesData.ts al formato AdminService
  const convertToAdminService = (service: any): AdminService => ({
    id: service.id,
    nombre: service.title,
    precio: service.price.toString(),
    promocion: service.isPromotion,
    porcentajeDescuento: service.discountPercentage,
    descripcion: service.description,
    informacionAdicional: service.additionalInfo,
    caracteristicas: service.features.join(', '),
    imagen: service.image,
    categoria: service.category,
    disponible: service.available
  });

  useEffect(() => {
    // Verificar autenticación
    const token = localStorage.getItem('kibu_admin_token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Cargar servicios desde servicesData.ts
    // Usa una de estas opciones según tu archivo:
    const initialServices = servicesData.map(convertToAdminService); // Si es exportación por defecto
    // O si tienes exportación nombrada diferente:
    // const initialServices = services.map(convertToAdminService);
    setServices(initialServices);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('kibu_admin_token');
    localStorage.removeItem('kibu_admin_user');
    navigate('/login');
  };

  const filteredServices = services.filter(service =>
    service.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedService = services.find(service => service.id === selectedServiceId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newService: AdminService = {
      ...formData,
      id: Math.max(...services.map(s => s.id), 0) + 1,
      precio: formData.precio,
      porcentajeDescuento: Number(formData.porcentajeDescuento),
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      categoria: "web",
      disponible: 1
    };
    
    setServices(prev => [...prev, newService]);
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      precio: '',
      promocion: false,
      porcentajeDescuento: 0,
      descripcion: '',
      caracteristicas: '',
      informacionAdicional: ''
    });
  };

  const openDetailModal = (service: AdminService) => {
    setDetailService(service);
    setShowDetailModal(true);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setDetailService(null);
  };

  const handleEdit = (service: AdminService) => {
    setFormData({
      nombre: service.nombre,
      precio: service.precio,
      promocion: service.promocion,
      porcentajeDescuento: service.porcentajeDescuento,
      descripcion: service.descripcion,
      caracteristicas: service.caracteristicas,
      informacionAdicional: service.informacionAdicional
    });
  };

  const handleDelete = (id: number) => {
    setServices(prev => prev.filter(service => service.id !== id));
    if (selectedServiceId === id) {
      setSelectedServiceId(null);
    }
  };

  const formatPrice = (price: string) => {
    const numericPrice = parseInt(price, 10);
    if (isNaN(numericPrice)) return '0';
    return new Intl.NumberFormat('es-CO').format(numericPrice);
  };

  const calculateFinalPrice = (price: string, discount: number) => {
    const basePrice = parseInt(price, 10);
    if (isNaN(basePrice)) return '0';
    const finalPrice = basePrice * (1 - discount / 100);
    return new Intl.NumberFormat('es-CO').format(Math.round(finalPrice));
  };

  return (
    <div className="min-h-screen bg-kibu-light-gray">
      
      {/* Header del Admin */}
      <header className="bg-white shadow-kibu-navbar">
        <div className="kibu-container">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 8L12 16L4 24V8Z" fill="#B8860B" />
                    <path d="M12 4L20 12L12 20V4Z" fill="#D4A574" />
                    <path d="M20 8L28 16L20 24V8Z" fill="#B8860B" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-kibu-dark">Kibu</span>
              </Link>
              <span className="text-kibu-gray">|</span>
              <h1 className="text-xl font-semibold text-kibu-dark">Panel de Administración</h1>
            </div>

            {/* Navegación de admin */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                Inicio
              </Link>
              <Link to="/servicios" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                Servicios
              </Link>
              <Link to="/nosotros" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                Nosotros
              </Link>
              <Link to="/contacto" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Usuario y logout */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-kibu-gray" />
                <span className="text-kibu-dark">Admin</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-kibu-gray hover:text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Header de la página */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative kibu-container">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Panel de Administración</h1>
            <nav className="flex justify-center items-center space-x-2 text-gray-200">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>{'>'}</span>
              <span className="text-white font-medium">Admin</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <main className="py-8">
        <div className="kibu-container">
          
          {/* Grid principal del mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Lado izquierdo - Agregar servicio */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Agregar servicio</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del servicio
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Precio
                  </label>
                  <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promoción
                  </label>
                  <div className="relative">
                    <select
                      name="promocion"
                      value={formData.promocion ? 'Si' : 'No'}
                      onChange={(e) => setFormData(prev => ({ ...prev, promocion: e.target.value === 'Si' }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent appearance-none bg-white"
                    >
                      <option value="Si">Si / No</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Porcentaje de descuento
                  </label>
                  <input
                    type="number"
                    name="porcentajeDescuento"
                    value={formData.porcentajeDescuento}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción
                  </label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Características
                  </label>
                  <textarea
                    name="caracteristicas"
                    value={formData.caracteristicas}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Información adicional
                  </label>
                  <textarea
                    name="informacionAdicional"
                    value={formData.informacionAdicional}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-kibu-primary text-white py-3 px-4 rounded-md hover:bg-kibu-accent transition-colors font-medium"
                >
                  Agregar
                </button>
              </form>
            </div>

            {/* Lado derecho - Seleccionar servicio */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Seleccionar servicio</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Escoja un servicio
                  </label>
                  <div className="relative">
                    <select
                      value={selectedServiceId || ''}
                      onChange={(e) => setSelectedServiceId(Number(e.target.value) || null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Nombre del servicio</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.nombre}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => selectedService && handleEdit(selectedService)}
                    disabled={!selectedService}
                    className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => selectedService && handleDelete(selectedService.id)}
                    disabled={!selectedService}
                    className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Eliminar
                  </button>
                  <button 
                    onClick={() => selectedService && openDetailModal(selectedService)}
                    disabled={!selectedService}
                    className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Consultar
                  </button>
                </div>

                {selectedService && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">{selectedService.nombre}</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Precio normal</span>
                        <span className="font-medium">COP {formatPrice(selectedService.precio)}</span>
                      </div>
                      {selectedService.promocion && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cuenta con promoción</span>
                            <span className="text-kibu-primary font-medium">{selectedService.porcentajeDescuento}%</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total</span>
                            <span className="text-kibu-primary font-bold text-lg">
                              COP {calculateFinalPrice(selectedService.precio, selectedService.porcentajeDescuento)}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Descripción</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedService.descripcion}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Características</h4>
                      <ul className="space-y-1">
                        {selectedService.caracteristicas.split(',').map((item, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="text-kibu-primary mr-2">•</span>
                            {item.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Información adicional</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedService.informacionAdicional}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabla de servicios existente */}
          <div className="bg-white rounded-lg shadow-kibu-card mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-kibu-dark">Servicios existentes</h2>
                <div className="flex items-center text-sm text-kibu-gray">
                  Mostrando {filteredServices.length} de {services.length} servicios
                </div>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar servicios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kibu-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-kibu-light-gray">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Promoción
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Porcentaje de descuento
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={service.imagen}
                            alt={service.nombre}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <div className="text-sm font-medium text-kibu-dark">
                              {service.nombre}
                            </div>
                            <div className="text-sm text-kibu-gray">
                              {service.categoria}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-kibu-dark">
                        ${formatPrice(service.precio)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          service.promocion 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {service.promocion ? 'Sí' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-kibu-dark">
                        {service.porcentajeDescuento}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openDetailModal(service)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="Ver detalle"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(service)}
                            className="text-kibu-primary hover:text-kibu-accent p-1"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(service.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal de detalle del servicio */}
          {showDetailModal && detailService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                
                {/* Header del modal */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-kibu-dark">
                      Detalle del Servicio
                    </h3>
                    <button
                      onClick={closeDetailModal}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Contenido del modal */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Columna izquierda - Imagen e información básica */}
                    <div className="space-y-6">
                      
                      {/* Imagen */}
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={detailService.imagen}
                          alt={detailService.nombre}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Información básica */}
                      <div className="bg-kibu-light-gray rounded-lg p-4">
                        <h4 className="font-semibold text-kibu-dark mb-3">Información Básica</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-kibu-gray">ID:</span>
                            <span className="text-kibu-dark font-medium">{detailService.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-kibu-gray">Categoría:</span>
                            <span className="text-kibu-dark font-medium capitalize">{detailService.categoria}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-kibu-gray">Disponibles:</span>
                            <span className="text-kibu-dark font-medium">{detailService.disponible}</span>
                          </div>
                        </div>
                      </div>

                      {/* Precios */}
                      <div className="bg-kibu-light-gray rounded-lg p-4">
                        <h4 className="font-semibold text-kibu-dark mb-3">Precios</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-kibu-gray">Precio base:</span>
                            <span className="text-kibu-dark font-medium">
                              COP {formatPrice(detailService.precio)}
                            </span>
                          </div>
                          {detailService.promocion && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-kibu-gray">Descuento:</span>
                                <span className="text-green-600 font-medium">
                                  {detailService.porcentajeDescuento}%
                                </span>
                              </div>
                              <div className="flex justify-between border-t pt-2">
                                <span className="text-kibu-gray font-medium">Precio final:</span>
                                <span className="text-kibu-primary font-bold text-lg">
                                  COP {calculateFinalPrice(detailService.precio, detailService.porcentajeDescuento)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        
                        {/* Estado de promoción */}
                        <div className="mt-3 pt-3 border-t">
                          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                            detailService.promocion 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {detailService.promocion ? 'En Promoción' : 'Precio Regular'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Columna derecha - Descripciones y características */}
                    <div className="space-y-6">
                      
                      {/* Nombre del servicio */}
                      <div>
                        <h3 className="text-2xl font-bold text-kibu-dark mb-2">
                          {detailService.nombre}
                        </h3>
                      </div>

                      {/* Descripción */}
                      <div>
                        <h4 className="font-semibold text-kibu-dark mb-3">Descripción</h4>
                        <p className="text-kibu-gray leading-relaxed">
                          {detailService.descripcion}
                        </p>
                      </div>

                      {/* Información adicional */}
                      <div>
                        <h4 className="font-semibold text-kibu-dark mb-3">Información Adicional</h4>
                        <p className="text-kibu-gray leading-relaxed">
                          {detailService.informacionAdicional}
                        </p>
                      </div>

                      {/* Características */}
                      <div>
                        <h4 className="font-semibold text-kibu-dark mb-3">Características</h4>
                        <div className="bg-kibu-light-gray rounded-lg p-4">
                          <ul className="space-y-2">
                            {detailService.caracteristicas.split(',').map((caracteristica, index) => (
                              <li key={index} className="flex items-center text-kibu-gray">
                                <div className="w-2 h-2 bg-kibu-primary rounded-full mr-3"></div>
                                {caracteristica.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={closeDetailModal}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      Cerrar
                    </button>
                    <button
                      onClick={() => {
                        closeDetailModal();
                        handleEdit(detailService);
                      }}
                      className="px-4 py-2 bg-kibu-primary text-white rounded-md hover:bg-kibu-accent transition-colors inline-flex items-center"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Servicio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;