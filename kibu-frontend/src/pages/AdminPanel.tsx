// src/pages/AdminPanel.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, LogOut, User, Loader, Download, Upload, Eye, EyeOff } from 'lucide-react';
import ServiceForm from '../components/admin/ServiceForm';
import type { AdminService, ServiceFormData } from '../types/service';
import { dataService } from '../services/dataService';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<AdminService[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'services' | 'messages'>('services');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [modalType, setModalType] = useState<'delete'>('delete');
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [selectedService, setSelectedService] = useState<AdminService | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Verificar autenticación
    const token = localStorage.getItem('kibu_admin_token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Cargar servicios y mensajes
    loadServices();
    loadMessages();
  }, [navigate]);

  const loadServices = async () => {
    try {
      setLoading(true);
      const data = await dataService.getAllServices();
      setServices(data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async () => {
    try {
      const data = await dataService.getAllMessages();
      setMessages(data);
      console.log('Mensajes cargados:', data); // Debug
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

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

  const handleSaveService = async (serviceData: ServiceFormData) => {
    try {
      if (formMode === 'create') {
        const newService = await dataService.createService(serviceData);
        setServices(prev => [...prev, newService]);
      } else if (selectedService) {
        const updatedService = await dataService.updateService(selectedService.id, serviceData);
        setServices(prev => prev.map(service => 
          service.id === updatedService.id ? updatedService : service
        ));
      }
      closeServiceForm();
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    try {
      const success = await dataService.deleteService(id);
      if (success) {
        setServices(prev => prev.filter(service => service.id !== id));
        closeModal();
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAsRead = async (messageId: number) => {
    try {
      await dataService.markMessageAsRead(messageId);
      setMessages(prev => prev.map(message => 
        message.id === messageId ? { ...message, leido: true } : message
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleExportData = () => {
    const dataToExport = dataService.exportData();
    const blob = new Blob([dataToExport], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kibu_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const success = dataService.importData(content);
      if (success) {
        loadServices(); // Recargar servicios
        loadMessages(); // Recargar mensajes
        alert('Datos importados exitosamente');
      } else {
        alert('Error al importar datos');
      }
    };
    reader.readAsText(file);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-kibu-light-gray flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-kibu-primary mx-auto mb-4" />
          <p className="text-kibu-gray">Cargando panel de administración...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kibu-light-gray">
      
      {/* Header del Admin */}
      <header className="bg-white shadow-kibu-navbar">
        <div className="kibu-container">
          <div className="flex items-center justify-between h-16">
            
            

            {/* Navegación de admin */}
            <nav className="hidden md:flex items-center space-x-6">
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
                  Panel de Administración
                </h2>
                <nav className="flex items-center space-x-2 text-sm text-kibu-gray">
                  <Link to="/" className="hover:text-kibu-primary transition-colors">
                    Inicio
                  </Link>
                  <span>{'>'}</span>
                  <span className="text-kibu-dark">Admin</span>
                </nav>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openServiceForm('create')}
                  className="kibu-btn-primary inline-flex items-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Agregar servicio
                </button>

                <button
                  onClick={handleExportData}
                  className="kibu-btn-secondary inline-flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Exportar datos
                </button>

                <label className="kibu-btn-secondary inline-flex items-center cursor-pointer">
                  <Upload className="w-5 h-5 mr-2" />
                  Importar datos
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportData}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`py-2 px-1 font-medium transition-colors ${
                    activeTab === 'services'
                      ? 'border-b-2 border-kibu-primary text-kibu-primary'
                      : 'text-kibu-gray hover:text-kibu-primary'
                  }`}
                >
                  Servicios ({services.length})
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`py-2 px-1 font-medium transition-colors ${
                    activeTab === 'messages'
                      ? 'border-b-2 border-kibu-primary text-kibu-primary'
                      : 'text-kibu-gray hover:text-kibu-primary'
                  }`}
                >
                  Mensajes ({messages.length})
                  {messages.filter(m => !m.leido).length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {messages.filter(m => !m.leido).length}
                    </span>
                  )}
                </button>
              </nav>
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
                {activeTab === 'services' ? (
                  <>Mostrando {filteredServices.length} de {services.length} servicios</>
                ) : (
                  <>Mostrando {messages.length} mensajes</>
                )}
              </div>
            </div>
          </div>

          {/* Tabla de servicios o mensajes */}
          {activeTab === 'services' ? (
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
          ) : (
            <div className="bg-white rounded-lg shadow-kibu-card overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-kibu-dark mb-4">
                  Mensajes de Contacto ({messages.length})
                </h3>
                {messages.length === 0 ? (
                  <p className="text-kibu-gray text-center py-8">
                    No hay mensajes de contacto aún
                  </p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`border rounded-lg p-6 ${
                        !message.leido ? 'border-kibu-primary bg-blue-50' : 'border-gray-200'
                      }`}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold text-kibu-dark text-lg">
                              {message.name}
                            </h4>
                            {!message.leido && (
                              <span className="bg-kibu-primary text-white text-xs px-2 py-1 rounded-full">
                                Nuevo
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-kibu-gray">
                              {new Date(message.fechaEnvio).toLocaleString()}
                            </span>
                            {!message.leido && (
                              <button
                                onClick={() => handleMarkAsRead(message.id)}
                                className="text-kibu-primary hover:text-kibu-accent p-1"
                                title="Marcar como leído"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-kibu-dark text-sm block mb-1">Email:</strong>
                            <p className="text-kibu-gray">{message.email}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-kibu-dark text-sm block mb-1">Teléfono:</strong>
                            <p className="text-kibu-gray">{message.phone}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-kibu-dark text-sm block mb-1">Empresa:</strong>
                            <p className="text-kibu-gray">{message.company || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-kibu-dark text-sm block mb-1">Servicio:</strong>
                            <p className="text-kibu-gray">{message.service}</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                          <strong className="text-kibu-dark text-sm block mb-2">Mensaje:</strong>
                          <p className="text-kibu-gray leading-relaxed">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

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