// src/pages/AdminPanel.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, LogOut, User } from 'lucide-react';
import ServiceForm from '../components/admin/ServiceForm';

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
  const [showModal, setShowModal] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [modalType, setModalType] = useState<'delete'>('delete');
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [selectedService, setSelectedService] = useState<AdminService | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Datos iniciales de servicios
  const initialServices: AdminService[] = [
    {
      id: 1,
      nombre: "Aplicaciones Web",
      precio: "5500000",
      promocion: true,
      porcentajeDescuento: 50,
      descripcion: "Aplicaciones estáticas personalizadas",
      informacionAdicional: "Desarrollo completo con tecnologías modernas",
      caracteristicas: "React, Node.js, MongoDB, Hosting incluido",
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      categoria: "web",
      disponible: 5
    },
    {
      id: 2,
      nombre: "Aplicaciones Móviles",
      precio: "4000000",
      promocion: true,
      porcentajeDescuento: 50,
      descripcion: "Apps para iOS y Android",
      informacionAdicional: "Desarrollo nativo y multiplataforma",
      caracteristicas: "React Native, Flutter, Push notifications",
      imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      categoria: "mobile",
      disponible: 3
    },
    {
      id: 3,
      nombre: "Transformación Digital",
      precio: "10000000",
      promocion: true,
      porcentajeDescuento: 50,
      descripcion: "Digitalización de procesos empresariales",
      informacionAdicional: "Consultoría completa en transformación digital",
      caracteristicas: "Análisis, implementación, capacitación",
      imagen: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
      categoria: "consulting",
      disponible: 2
    },
    {
      id: 4,
      nombre: "Inteligencia Artificial",
      precio: "40000000",
      promocion: false,
      porcentajeDescuento: 0,
      descripcion: "Soluciones de IA personalizadas",
      informacionAdicional: "Machine Learning y Deep Learning",
      caracteristicas: "TensorFlow, Python, APIs personalizadas",
      imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      categoria: "ai",
      disponible: 1
    }
  ];

  useEffect(() => {
    // Verificar autenticación
    const token = localStorage.getItem('kibu_admin_token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Cargar servicios (simulado)
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

  const openModal = (type: 'delete', service?: AdminService) => {
    setModalType(type);
    setSelectedService(service || null);
    setShowModal(true);
  };

  const openServiceForm = (mode: 'create' | 'edit', service?: AdminService) => {
    setFormMode(mode);
    setSelectedService(service || null);
    setShowServiceForm(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const closeServiceForm = () => {
    setShowServiceForm(false);
    setSelectedService(null);
  };

  const handleSaveService = (serviceData: any) => {
    if (formMode === 'create') {
      // Agregar nuevo servicio
      const newService: AdminService = {
        ...serviceData,
        id: Math.max(...services.map(s => s.id), 0) + 1
      };
      setServices(prev => [...prev, newService]);
    } else {
      // Actualizar servicio existente
      const updatedService: AdminService = {
        ...serviceData,
        id: selectedService?.id || 0
      };
      setServices(prev => prev.map(service => 
        service.id === updatedService.id ? updatedService : service
      ));
    }
  };

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular API call
      setServices(prev => prev.filter(service => service.id !== id));
      closeModal();
    } catch (error) {
      console.error('Error al eliminar servicio:', error);
    } finally {
      setIsLoading(false);
    }
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

      {/* Contenido principal */}
      <main className="py-8">
        <div className="kibu-container">
          
          {/* Header de la página */}
          <div className="bg-white rounded-lg shadow-kibu-card p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              <div>
                <h2 className="text-2xl font-bold text-kibu-dark mb-2">
                  Gestión de servicios
                </h2>
                <nav className="flex items-center space-x-2 text-sm text-kibu-gray">
                  <Link to="/" className="hover:text-kibu-primary transition-colors">
                    Inicio
                  </Link>
                  <span>{'>'}</span>
                  <span className="text-kibu-dark">Servicios</span>
                </nav>
              </div>

              <button
                onClick={() => openServiceForm('create')}
                className="kibu-btn-primary inline-flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Agregar servicio
              </button>
            </div>
          </div>

          {/* Controles y búsqueda */}
          <div className="bg-white rounded-lg shadow-kibu-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              
              {/* Buscador */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar servicios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="kibu-input pl-10"
                />
              </div>

              {/* Información */}
              <div className="flex items-center text-sm text-kibu-gray">
                Mostrando {filteredServices.length} de {services.length} servicios
              </div>
            </div>
          </div>

          {/* Tabla de servicios */}
          <div className="bg-white rounded-lg shadow-kibu-card overflow-hidden">
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Descripción
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Información adicional
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-kibu-dark uppercase tracking-wider">
                      Características
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
                        ${parseInt(service.precio).toLocaleString()}
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
                      <td className="px-6 py-4 text-sm text-kibu-gray max-w-xs truncate">
                        {service.descripcion}
                      </td>
                      <td className="px-6 py-4 text-sm text-kibu-gray max-w-xs truncate">
                        {service.informacionAdicional}
                      </td>
                      <td className="px-6 py-4 text-sm text-kibu-gray max-w-xs truncate">
                        {service.caracteristicas}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openServiceForm('edit', service)}
                            className="text-kibu-primary hover:text-kibu-accent p-1"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openModal('delete', service)}
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

          {/* Formulario de servicios */}
          <ServiceForm
            isOpen={showServiceForm}
            onClose={closeServiceForm}
            onSave={handleSaveService}
            service={selectedService}
            mode={formMode}
          />

          {/* Modal de confirmación de eliminación */}
          {showModal && modalType === 'delete' && selectedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-kibu-dark mb-4">
                  Confirmar eliminación
                </h3>
                <p className="text-kibu-gray mb-6">
                  ¿Estás seguro de que deseas eliminar el servicio "{selectedService.nombre}"? 
                  Esta acción no se puede deshacer.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="kibu-btn-secondary"
                    disabled={isLoading}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleDelete(selectedService.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Eliminando...' : 'Eliminar'}
                  </button>
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