export interface ServiceData {
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

export interface Service extends ServiceData {
  id: number;
}

// Para el formulario
export type ServiceFormData = ServiceData;

// Para el admin panel
export type AdminService = Service;

// Tipos del backend
export interface ServiceBackend {
  id: number;
  nombre: string;
  descripcion: string;
  informacionAdicional?: string;
  caracteristicas?: string;
  precio: number;
  promocion: boolean;
  porcentajeDescuento: number;
  disponible: number;
  imagenUrl?: string;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
  categoria?: {
    id: number;
    nombre: string;
    descripcion: string;
  };
}

// Función para convertir del backend al frontend
export const convertBackendToFrontend = (backendService: ServiceBackend): Service => {
  return {
    id: backendService.id,
    nombre: backendService.nombre,
    precio: `$ ${backendService.precio.toLocaleString()}`,
    promocion: backendService.promocion,
    porcentajeDescuento: backendService.porcentajeDescuento,
    descripcion: backendService.descripcion,
    informacionAdicional: backendService.informacionAdicional || '',
    caracteristicas: backendService.caracteristicas || '',
    imagen: backendService.imagenUrl || '',
    categoria: backendService.categoria?.nombre || '',
    disponible: backendService.disponible
  };
};

// Función para convertir del frontend al backend
export const convertFrontendToBackend = (frontendService: ServiceFormData): any => {
  return {
    nombre: frontendService.nombre,
    descripcion: frontendService.descripcion,
    informacionAdicional: frontendService.informacionAdicional,
    caracteristicas: frontendService.caracteristicas,
    precio: parseFloat(frontendService.precio.replace(/[^\d.]/g, '')),
    promocion: frontendService.promocion,
    porcentajeDescuento: frontendService.porcentajeDescuento,
    disponible: frontendService.disponible,
    imagenUrl: frontendService.imagen
  };
};