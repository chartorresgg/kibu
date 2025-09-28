// src/services/dataService.ts
import type { Service, ServiceFormData } from '../types/service';

// Simulación de base de datos en memoria
let servicesData: Service[] = [
  {
    id: 1,
    nombre: "Aplicaciones Web",
    precio: "5500000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Creamos aplicaciones web a medida que se adaptan perfectamente a las necesidades de tu empresa. Desde sistemas de gestión y plataformas de e-commerce hasta dashboards administrativos y portales corporativos.",
    informacionAdicional: "En un mundo donde el 86% de los clientes investigan online antes de comprar, tener una presencia digital profesional ya no es opcional. Nuestras aplicaciones web no solo mejoran tu imagen corporativa, sino que automatizan procesos, reducen costos operativos y generan nuevas fuentes de ingresos.",
    caracteristicas: "Diseño UX/UI personalizado, Desarrollo responsivo (móvil y desktop), Panel de administración, Integración con APIs, Hosting por 5 meses, Soporte técnico incluido",
    imagen: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center",
    categoria: "web",
    disponible: 5
  },
  {
    id: 2,
    nombre: "Apps Móviles",
    precio: "4000000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android, con interfaces intuitivas y funcionalidades avanzadas que conectan con tus usuarios.",
    informacionAdicional: "Con más del 60% del tráfico web proviniendo de dispositivos móviles, tener una app es esencial. Nuestras aplicaciones móviles ofrecen experiencias fluidas, notificaciones push, integración con servicios de pago y funcionalidades offline.",
    caracteristicas: "Desarrollo nativo iOS/Android, React Native o Flutter, Notificaciones push, Integración con APIs, Publicación en stores, 3 meses de soporte",
    imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
    categoria: "mobile",
    disponible: 3
  },
  {
    id: 3,
    nombre: "Transformación Digital",
    precio: "10000000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Digitalizamos tus procesos empresariales completos, desde la consultoría inicial hasta la implementación de tecnologías que revolucionan tu forma de trabajar.",
    informacionAdicional: "La transformación digital no es solo tecnología, es cambiar la forma en que tu empresa opera. Analizamos, diseñamos e implementamos soluciones integrales que optimizan cada aspecto de tu negocio.",
    caracteristicas: "Análisis de procesos actuales, Diseño de arquitectura digital, Implementación por fases, Capacitación del personal, Migración de datos, Soporte continuo",
    imagen: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center",
    categoria: "consulting",
    disponible: 2
  },
  {
    id: 4,
    nombre: "Inteligencia Artificial",
    precio: "40000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Desarrollamos soluciones de IA personalizadas para tu empresa: chatbots inteligentes, análisis predictivo, automatización de procesos y machine learning.",
    informacionAdicional: "La inteligencia artificial está transformando las empresas. Implementamos soluciones de IA que automatizan tareas repetitivas, mejoran la toma de decisiones y crean nuevas oportunidades de negocio.",
    caracteristicas: "Chatbots inteligentes, Machine Learning personalizado, Análisis predictivo, Procesamiento de lenguaje natural, Automatización de procesos, Integración con sistemas existentes",
    imagen: "https://images.unsplash.com/photo-1677691824188-3e266886cb27?w=600&h=400&fit=crop&crop=center",
    categoria: "ai",
    disponible: 1
  },
  {
    id: 5,
    nombre: "Tienda Online",
    precio: "35000000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Creamos tiendas online completas con integración de pagos, gestión de inventario, anuncios digitales y herramientas de marketing automatizado.",
    informacionAdicional: "El e-commerce crece un 20% anualmente. Desarrollamos tiendas online que no solo venden, sino que crean experiencias de compra excepcionales con todas las herramientas necesarias para hacer crecer tu negocio digital.",
    caracteristicas: "Plataforma e-commerce completa, Integración con pasarelas de pago, Gestión de inventario, Marketing automation, SEO optimizado, Analytics avanzado",
    imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    categoria: "ecommerce",
    disponible: 4
  },
  {
    id: 6,
    nombre: "Seguridad de Datos",
    precio: "40000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Implementamos sistemas de seguridad robustos con monitoreo 24/7, cifrado de datos, backups automáticos y protocolos de ciberseguridad empresarial.",
    informacionAdicional: "La seguridad de datos es crítica en la era digital. Implementamos sistemas de seguridad multicapa que protegen tu información empresarial contra amenazas internas y externas, cumpliendo con estándares internacionales.",
    caracteristicas: "Monitoreo 24/7, Cifrado end-to-end, Backups automáticos, Auditorías de seguridad, Certificaciones de cumplimiento, Capacitación en ciberseguridad",
    imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    categoria: "security",
    disponible: 3
  },
  {
    id: 7,
    nombre: "DevOps",
    precio: "3000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Implementamos cultura DevOps en tu organización: automatización de despliegues, integración continua, monitoreo de aplicaciones y infraestructura como código.",
    informacionAdicional: "DevOps acelera el desarrollo y mejora la calidad del software. Implementamos pipelines de CI/CD, automatización de infraestructura y prácticas que reducen tiempo de desarrollo en un 60%.",
    caracteristicas: "CI/CD pipelines, Infraestructura como código, Monitoreo automatizado, Containerización con Docker, Orquestación con Kubernetes, Capacitación del equipo",
    imagen: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&crop=center",
    categoria: "devops",
    disponible: 5
  },
  {
    id: 8,
    nombre: "Servicios Cloud",
    precio: "50000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Migramos y optimizamos tu infraestructura en la nube con servidores propios de AWS, Azure o Google Cloud, garantizando escalabilidad y disponibilidad.",
    informacionAdicional: "La nube ofrece escalabilidad, seguridad y costos optimizados. Diseñamos arquitecturas cloud que crecen con tu negocio, reducen costos operativos y garantizan disponibilidad 99.9%.",
    caracteristicas: "Migración a la nube, Arquitectura escalable, Optimización de costos, Backup y recuperación, Monitoreo 24/7, Soporte especializado",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
    categoria: "cloud",
    disponible: 2
  },
  {
    id: 9,
    nombre: "Análisis de Datos",
    precio: "8000000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Transformamos tus datos en insights accionables con dashboards interactivos, reportes automatizados y análisis predictivo para tomar decisiones inteligentes.",
    informacionAdicional: "Los datos son el nuevo petróleo. Implementamos soluciones de Business Intelligence que convierten información dispersa en insights valiosos para la toma de decisiones estratégicas.",
    caracteristicas: "Dashboards interactivos, Reportes automatizados, Análisis predictivo, ETL de datos, Visualizaciones avanzadas, Capacitación en herramientas",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    categoria: "analytics",
    disponible: 4
  },
  {
    id: 10,
    nombre: "Desarrollo de APIs",
    precio: "7000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Creamos APIs robustas y escalables que integran tus aplicaciones y sistemas, facilitando la comunicación entre diferentes plataformas y servicios.",
    informacionAdicional: "Las APIs son el corazón de la integración digital. Desarrollamos interfaces de programación que conectan sistemas, automatizan procesos y permiten crear ecosistemas digitales integrados.",
    caracteristicas: "APIs RESTful, GraphQL, Documentación completa, Autenticación JWT, Rate limiting, Monitoreo de performance",
    imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
    categoria: "api",
    disponible: 6
  },
  {
    id: 11,
    nombre: "Microservicios",
    precio: "9000000",
    promocion: true,
    porcentajeDescuento: 50,
    descripcion: "Diseñamos arquitecturas de microservicios que permiten crear aplicaciones modulares, escalables y mantenibles, facilitando el desarrollo ágil.",
    informacionAdicional: "Los microservicios revolucionan el desarrollo de software. Creamos arquitecturas modulares que permiten escalabilidad independiente, despliegues más rápidos y mayor resiliencia del sistema.",
    caracteristicas: "Arquitectura modular, Containerización, Service discovery, Load balancing, Circuit breakers, Observabilidad completa",
    imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
    categoria: "microservices",
    disponible: 3
  },
  {
    id: 12,
    nombre: "Soporte Técnico",
    precio: "6000000",
    promocion: false,
    porcentajeDescuento: 0,
    descripcion: "Brindamos soporte técnico especializado 24/7 con asesoría siempre disponible, mantenimiento preventivo y resolución rápida de incidencias.",
    informacionAdicional: "El soporte técnico es clave para la continuidad del negocio. Ofrecemos servicios de soporte multicanal con tiempos de respuesta garantizados y resolución proactiva de problemas.",
    caracteristicas: "Soporte 24/7, Múltiples canales, SLA garantizado, Mantenimiento preventivo, Actualizaciones automáticas, Documentación técnica",
    imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
    categoria: "support",
    disponible: 10
  }
];

let users = [
  {
    id: 1,
    email: "admin@kibu.com",
    password: "admin123",
    nombre: "Administrador KiBu",
    rol: "admin"
  }
];

let contactMessages: any[] = [];

// Simulación de delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Servicios CRUD
export const dataService = {
  // Servicios
  async getAllServices(): Promise<Service[]> {
    await delay(500); // Simular latencia de red
    return [...servicesData];
  },

  async getServiceById(id: number): Promise<Service | null> {
    await delay(300);
    return servicesData.find(service => service.id === id) || null;
  },

  async createService(serviceData: ServiceFormData): Promise<Service> {
    await delay(800);
    const newId = Math.max(...servicesData.map(s => s.id), 0) + 1;
    const newService: Service = {
      ...serviceData,
      id: newId
    };
    servicesData.push(newService);
    
    // Guardar en localStorage para persistencia
    localStorage.setItem('kibu_services', JSON.stringify(servicesData));
    
    return newService;
  },

  async updateService(id: number, serviceData: ServiceFormData): Promise<Service> {
    await delay(600);
    const index = servicesData.findIndex(service => service.id === id);
    if (index === -1) {
      throw new Error('Servicio no encontrado');
    }
    
    const updatedService: Service = {
      ...serviceData,
      id
    };
    
    servicesData[index] = updatedService;
    localStorage.setItem('kibu_services', JSON.stringify(servicesData));
    
    return updatedService;
  },

  async deleteService(id: number): Promise<boolean> {
    await delay(400);
    const index = servicesData.findIndex(service => service.id === id);
    if (index === -1) {
      return false;
    }
    
    servicesData.splice(index, 1);
    localStorage.setItem('kibu_services', JSON.stringify(servicesData));
    
    return true;
  },

  // Autenticación
  async login(email: string, password: string): Promise<{user: any, token: string} | null> {
    await delay(1000);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return null;
    }
    
    const token = `demo_token_${Date.now()}`;
    return { user: { ...user, password: undefined }, token };
  },

  // Mensajes de contacto
  async submitContactMessage(messageData: any): Promise<boolean> {
    await delay(1200);
    const newMessage = {
      id: contactMessages.length + 1,
      ...messageData,
      fechaEnvio: new Date().toISOString(),
      leido: false
    };
    
    contactMessages.push(newMessage);
    localStorage.setItem('kibu_messages', JSON.stringify(contactMessages));
    
    console.log('Mensaje guardado:', newMessage); // Debug
    console.log('Mensajes actuales:', contactMessages); // Debug
    
    return true;
  },

  async getAllMessages(): Promise<any[]> {
    await delay(300);
    return [...contactMessages];
  },

  async markMessageAsRead(messageId: number): Promise<boolean> {
    await delay(400);
    const index = contactMessages.findIndex(message => message.id === messageId);
    if (index === -1) {
      return false;
    }
    
    contactMessages[index].leido = true;
    localStorage.setItem('kibu_messages', JSON.stringify(contactMessages));
    
    return true;
  },

  // Inicialización desde localStorage
  initializeData(): void {
    const savedServices = localStorage.getItem('kibu_services');
    if (savedServices) {
      try {
        servicesData = JSON.parse(savedServices);
      } catch (error) {
        console.error('Error loading saved services:', error);
      }
    }

    const savedMessages = localStorage.getItem('kibu_messages');
    if (savedMessages) {
      try {
        contactMessages = JSON.parse(savedMessages);
        console.log('Mensajes cargados desde localStorage:', contactMessages); // Debug
      } catch (error) {
        console.error('Error loading saved messages:', error);
      }
    } else {
      // Inicializar array vacío si no existe
      contactMessages = [];
      localStorage.setItem('kibu_messages', JSON.stringify(contactMessages));
    }
  },

  // Exportar datos para backup
  exportData(): string {
    return JSON.stringify({
      services: servicesData,
      messages: contactMessages,
      timestamp: new Date().toISOString()
    }, null, 2);
  },

  // Importar datos desde backup
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      if (data.services) {
        servicesData = data.services;
        localStorage.setItem('kibu_services', JSON.stringify(servicesData));
      }
      if (data.messages) {
        contactMessages = data.messages;
        localStorage.setItem('kibu_messages', JSON.stringify(contactMessages));
      }
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
};