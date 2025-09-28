// src/services/apiService.ts
const API_BASE_URL = 'http://localhost:8080/api';

interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// Tipos que coinciden con el backend
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

export interface ServiceCreateRequest {
  nombre: string;
  descripcion: string;
  informacionAdicional?: string;
  caracteristicas?: string;
  precio: number;
  promocion: boolean;
  porcentajeDescuento: number;
  disponible: number;
  imagenUrl?: string;
}

class ApiService {
  private async fetchApi<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return {} as T;
      }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // === SERVICIOS ===
  
  // Obtener todos los servicios
  async getAllServices(): Promise<ServiceBackend[]> {
    return this.fetchApi<ServiceBackend[]>('/services');
  }

  // Obtener servicios con paginación
  async getServicesPaginated(
    page: number = 0, 
    size: number = 12, 
    sort: string = 'nombre,asc'
  ): Promise<PaginatedResponse<ServiceBackend>> {
    return this.fetchApi<PaginatedResponse<ServiceBackend>>(
      `/services/paged?page=${page}&size=${size}&sort=${sort}`
    );
  }

  // Obtener servicio por ID
  async getServiceById(id: number): Promise<ServiceBackend> {
    return this.fetchApi<ServiceBackend>(`/services/${id}`);
  }

  // Buscar servicios por nombre
  async searchServices(
    nombre: string, 
    page: number = 0, 
    size: number = 12
  ): Promise<PaginatedResponse<ServiceBackend>> {
    return this.fetchApi<PaginatedResponse<ServiceBackend>>(
      `/services/search?nombre=${encodeURIComponent(nombre)}&page=${page}&size=${size}`
    );
  }

  // Obtener servicios en promoción
  async getServicesOnPromotion(): Promise<ServiceBackend[]> {
    return this.fetchApi<ServiceBackend[]>('/services/promociones');
  }

  // Crear nuevo servicio
  async createService(service: ServiceCreateRequest): Promise<ServiceBackend> {
    return this.fetchApi<ServiceBackend>('/services', {
      method: 'POST',
      body: JSON.stringify(service),
    });
  }

  // Actualizar servicio
  async updateService(id: number, service: ServiceCreateRequest): Promise<ServiceBackend> {
    return this.fetchApi<ServiceBackend>(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(service),
    });
  }

  // Eliminar servicio (soft delete)
  async deleteService(id: number): Promise<void> {
    return this.fetchApi<void>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // === HEALTH CHECK ===
  async checkHealth(): Promise<any> {
    return this.fetchApi<any>('/actuator/health', {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Instancia singleton del servicio
export const apiService = new ApiService();

// Hook personalizado para usar el servicio API
export const useApiService = () => {
  return apiService;
};