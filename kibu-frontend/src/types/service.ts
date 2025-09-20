
// src/types/service.ts
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