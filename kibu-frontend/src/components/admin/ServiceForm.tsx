// src/components/admin/ServiceForm.tsx
import React, { useState, useEffect } from 'react';
import { X, Upload, Save, ArrowLeft } from 'lucide-react';

interface ServiceFormData {
  id?: number;
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

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: ServiceFormData) => void;
  service?: ServiceFormData | null;
  mode: 'create' | 'edit';
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  isOpen,
  onClose,
  onSave,
  service,
  mode
}) => {
  const [formData, setFormData] = useState<ServiceFormData>({
    nombre: '',
    precio: '',
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: '',
    informacionAdicional: '',
    caracteristicas: '',
    imagen: '',
    categoria: '',
    disponible: 1
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: 'web', label: 'Aplicaciones Web' },
    { value: 'mobile', label: 'Aplicaciones Móviles' },
    { value: 'ai', label: 'Inteligencia Artificial' },
    { value: 'analytics', label: 'Análisis de Datos' },
    { value: 'cloud', label: 'Servicios Cloud' },
    { value: 'consulting', label: 'Consultoría' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'security', label: 'Seguridad' },
    { value: 'devops', label: 'DevOps' },
    { value: 'api', label: 'APIs' },
    { value: 'microservices', label: 'Microservicios' },
    { value: 'support', label: 'Soporte Técnico' }
  ];

  useEffect(() => {
    if (service && mode === 'edit') {
      setFormData(service);
    } else {
      // Reset form for create mode
      setFormData({
        nombre: '',
        precio: '',
        promocion: false,
        porcentajeDescuento: 0,
        descripcion: '',
        informacionAdicional: '',
        caracteristicas: '',
        imagen: '',
        categoria: '',
        disponible: 1
      });
    }
    setErrors({});
  }, [service, mode, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.precio) {
      newErrors.precio = 'El precio es requerido';
    } else if (isNaN(Number(formData.precio)) || Number(formData.precio) <= 0) {
      newErrors.precio = 'El precio debe ser un número válido mayor a 0';
    }

    if (!formData.categoria) {
      newErrors.categoria = 'La categoría es requerida';
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es requerida';
    }

    if (!formData.caracteristicas.trim()) {
      newErrors.caracteristicas = 'Las características son requeridas';
    }

    if (!formData.imagen.trim()) {
      newErrors.imagen = 'La URL de la imagen es requerida';
    }

    if (formData.promocion && (formData.porcentajeDescuento <= 0 || formData.porcentajeDescuento > 100)) {
      newErrors.porcentajeDescuento = 'El porcentaje debe estar entre 1 y 100';
    }

    if (formData.disponible < 0) {
      newErrors.disponible = 'La cantidad disponible no puede ser negativa';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Formatear datos antes de enviar
      const serviceData: ServiceFormData = {
        ...formData,
        precio: formData.precio.toString(),
        porcentajeDescuento: formData.promocion ? formData.porcentajeDescuento : 0
      };

      onSave(serviceData);
      onClose();
    } catch (error) {
      setErrors({
        general: 'Error al guardar el servicio. Intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-kibu-dark">
            {mode === 'create' ? 'Agregar Servicio' : 'Editar Servicio'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          
          {/* Error general */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
              {errors.general}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Columna izquierda */}
            <div className="space-y-6">
              
              {/* Nombre del servicio */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-kibu-dark mb-2">
                  Nombre del servicio *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.nombre ? 'border-red-500' : ''}`}
                  placeholder="Ej: Aplicaciones Web"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                )}
              </div>

              {/* Precio */}
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-kibu-dark mb-2">
                  Precio *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="precio"
                    name="precio"
                    value={formData.precio}
                    onChange={handleInputChange}
                    className={`kibu-input pl-8 ${errors.precio ? 'border-red-500' : ''}`}
                    placeholder="5500000"
                    min="0"
                  />
                </div>
                {errors.precio && (
                  <p className="mt-1 text-sm text-red-600">{errors.precio}</p>
                )}
              </div>

              {/* Categoría */}
              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-kibu-dark mb-2">
                  Categoría *
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.categoria ? 'border-red-500' : ''}`}
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.categoria && (
                  <p className="mt-1 text-sm text-red-600">{errors.categoria}</p>
                )}
              </div>

              {/* Promoción */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="promocion"
                    name="promocion"
                    checked={formData.promocion}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-kibu-primary focus:ring-kibu-primary border-gray-300 rounded"
                  />
                  <label htmlFor="promocion" className="ml-2 block text-sm text-kibu-dark">
                    Este servicio está en promoción
                  </label>
                </div>

                {/* Porcentaje de descuento */}
                {formData.promocion && (
                  <div>
                    <label htmlFor="porcentajeDescuento" className="block text-sm font-medium text-kibu-dark mb-2">
                      Porcentaje de descuento *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="porcentajeDescuento"
                        name="porcentajeDescuento"
                        value={formData.porcentajeDescuento}
                        onChange={handleInputChange}
                        className={`kibu-input pr-8 ${errors.porcentajeDescuento ? 'border-red-500' : ''}`}
                        placeholder="50"
                        min="1"
                        max="100"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                    </div>
                    {errors.porcentajeDescuento && (
                      <p className="mt-1 text-sm text-red-600">{errors.porcentajeDescuento}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Cantidad disponible */}
              <div>
                <label htmlFor="disponible" className="block text-sm font-medium text-kibu-dark mb-2">
                  Cantidad disponible
                </label>
                <input
                  type="number"
                  id="disponible"
                  name="disponible"
                  value={formData.disponible}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.disponible ? 'border-red-500' : ''}`}
                  placeholder="5"
                  min="0"
                />
                {errors.disponible && (
                  <p className="mt-1 text-sm text-red-600">{errors.disponible}</p>
                )}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              
              {/* Imagen */}
              <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-kibu-dark mb-2">
                  URL de la imagen *
                </label>
                <input
                  type="url"
                  id="imagen"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.imagen ? 'border-red-500' : ''}`}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.imagen && (
                  <p className="mt-1 text-sm text-red-600">{errors.imagen}</p>
                )}
                
                {/* Preview de imagen */}
                {formData.imagen && (
                  <div className="mt-3">
                    <img
                      src={formData.imagen}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded border"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-kibu-dark mb-2">
                  Descripción *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.descripcion ? 'border-red-500' : ''}`}
                  placeholder="Descripción breve del servicio..."
                />
                {errors.descripcion && (
                  <p className="mt-1 text-sm text-red-600">{errors.descripcion}</p>
                )}
              </div>

              {/* Información adicional */}
              <div>
                <label htmlFor="informacionAdicional" className="block text-sm font-medium text-kibu-dark mb-2">
                  Información adicional
                </label>
                <textarea
                  id="informacionAdicional"
                  name="informacionAdicional"
                  rows={3}
                  value={formData.informacionAdicional}
                  onChange={handleInputChange}
                  className="kibu-input"
                  placeholder="Información adicional sobre el servicio..."
                />
              </div>

              {/* Características */}
              <div>
                <label htmlFor="caracteristicas" className="block text-sm font-medium text-kibu-dark mb-2">
                  Características *
                </label>
                <textarea
                  id="caracteristicas"
                  name="caracteristicas"
                  rows={3}
                  value={formData.caracteristicas}
                  onChange={handleInputChange}
                  className={`kibu-input ${errors.caracteristicas ? 'border-red-500' : ''}`}
                  placeholder="Ej: React, Node.js, MongoDB, Hosting incluido"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Separa las características con comas
                </p>
                {errors.caracteristicas && (
                  <p className="mt-1 text-sm text-red-600">{errors.caracteristicas}</p>
                )}
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="kibu-btn-secondary"
              disabled={isLoading}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Cancelar
            </button>
            <button
              type="submit"
              className={`kibu-btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Guardando...
                </div>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {mode === 'create' ? 'Crear Servicio' : 'Actualizar Servicio'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;