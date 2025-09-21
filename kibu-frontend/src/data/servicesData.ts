// src/data/servicesData.ts
export interface ServiceDetailData {
    id: number;
    title: string;
    price: string;
    description: string;
    longDescription: string;
    image: string;
    isPromotion: boolean;
    promotionPercentage?: number;
    originalPrice?: string;
    availability: number;
    features: string[];
    additionalInfo: string;
    gallery: string[];
    category: string;
  }
  
  export const servicesData: ServiceDetailData[] = [
    {
      id: 1,
      title: "Aplicaciones Web",
      price: "$ 5.500.000",
      originalPrice: "$ 11.000.000",
      description: "Creamos aplicaciones web a medida que se adaptan perfectamente a las necesidades de tu empresa. Desde sistemas de gestión y plataformas de e-commerce hasta dashboards administrativos y portales corporativos.",
      longDescription: "En un mundo donde el 86% de los clientes investigan online antes de comprar, tener una presencia digital profesional ya no es opcional. Nuestras aplicaciones web no solo mejoran tu imagen corporativa, sino que automatizan procesos, reducen costos operativos y generan nuevas fuentes de ingresos.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 5,
      features: [
        "Diseño UX/UI personalizado",
        "Desarrollo responsivo (móvil y desktop)",
        "Panel de administración",
        "Integración con APIs",
        "Hosting por 5 meses",
        "Soporte técnico incluido"
      ],
      additionalInfo: "Incluye diseño responsive, integración con bases de datos, APIs personalizadas y hosting optimizado para garantizar máximo rendimiento y seguridad.",
      gallery: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
      ],
      category: "web"
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      price: "$ 4.000.000",
      originalPrice: "$ 8.000.000",
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android, con interfaces intuitivas y funcionalidades avanzadas que conectan con tus usuarios.",
      longDescription: "Con más del 60% del tráfico web proviniendo de dispositivos móviles, tener una app es esencial. Nuestras aplicaciones móviles ofrecen experiencias fluidas, notificaciones push, integración con servicios de pago y funcionalidades offline.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 3,
      features: [
        "Desarrollo nativo iOS/Android",
        "React Native o Flutter",
        "Notificaciones push",
        "Integración con APIs",
        "Publicación en stores",
        "3 meses de soporte"
      ],
      additionalInfo: "Desarrollamos tanto apps nativas como híbridas, dependiendo de tus necesidades específicas y presupuesto. Incluye proceso completo de publicación en App Store y Google Play.",
      gallery: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
      ],
      category: "mobile"
    },
    {
      id: 3,
      title: "Transformación Digital",
      price: "$ 10.000.000",
      originalPrice: "$ 20.000.000",
      description: "Digitalizamos tus procesos empresariales completos, desde la consultoría inicial hasta la implementación de tecnologías que revolucionan tu forma de trabajar.",
      longDescription: "La transformación digital no es solo tecnología, es cambiar la forma en que tu empresa opera. Analizamos, diseñamos e implementamos soluciones integrales que optimizan cada aspecto de tu negocio.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 2,
      features: [
        "Análisis de procesos actuales",
        "Diseño de arquitectura digital",
        "Implementación por fases",
        "Capacitación del personal",
        "Migración de datos",
        "Soporte continuo"
      ],
      additionalInfo: "Incluye consultoría estratégica, análisis de procesos, implementación de herramientas digitales y capacitación completa del equipo. Proceso gradual para minimizar interrupciones.",
      gallery: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&crop=center"
      ],
      category: "consulting"
    },
    {
      id: 4,
      title: "Inteligencia Artificial",
      price: "$ 40.000.000",
      description: "Desarrollamos soluciones de IA personalizadas para tu empresa: chatbots inteligentes, análisis predictivo, automatización de procesos y machine learning.",
      longDescription: "La inteligencia artificial está transformando las empresas. Implementamos soluciones de IA que automatizan tareas repetitivas, mejoran la toma de decisiones y crean nuevas oportunidades de negocio.",
      image: "https://images.unsplash.com/photo-1677691824188-3e266886cb27?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 1,
      features: [
        "Chatbots inteligentes",
        "Machine Learning personalizado",
        "Análisis predictivo",
        "Procesamiento de lenguaje natural",
        "Automatización de procesos",
        "Integración con sistemas existentes"
      ],
      additionalInfo: "Utilizamos las últimas tecnologías en IA como TensorFlow, PyTorch y OpenAI. Incluye entrenamiento de modelos personalizados y desarrollo de algoritmos específicos para tu industria.",
      gallery: [
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&crop=center"
      ],
      category: "ai"
    },
    {
      id: 5,
      title: "Tienda Online",
      price: "$ 35.000.000",
      originalPrice: "$ 70.000.000",
      description: "Creamos tiendas online completas con integración de pagos, gestión de inventario, anuncios digitales y herramientas de marketing automatizado.",
      longDescription: "El e-commerce crece un 20% anualmente. Desarrollamos tiendas online que no solo venden, sino que crean experiencias de compra excepcionales con todas las herramientas necesarias para hacer crecer tu negocio digital.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 4,
      features: [
        "Plataforma e-commerce completa",
        "Integración con pasarelas de pago",
        "Gestión de inventario",
        "Marketing automation",
        "SEO optimizado",
        "Analytics avanzado"
      ],
      additionalInfo: "Incluye integración con PSE, tarjetas de crédito, WhatsApp Business, redes sociales y herramientas de email marketing. Optimizada para conversión y posicionamiento en buscadores.",
      gallery: [
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
      ],
      category: "ecommerce"
    },
    {
      id: 6,
      title: "Seguridad de Datos",
      price: "$ 40.000.000",
      description: "Implementamos sistemas de seguridad robustos con monitoreo 24/7, cifrado de datos, backups automáticos y protocolos de ciberseguridad empresarial.",
      longDescription: "La seguridad de datos es crítica en la era digital. Implementamos sistemas de seguridad multicapa que protegen tu información empresarial contra amenazas internas y externas, cumpliendo con estándares internacionales.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 3,
      features: [
        "Monitoreo 24/7",
        "Cifrado end-to-end",
        "Backups automáticos",
        "Auditorías de seguridad",
        "Certificaciones de cumplimiento",
        "Capacitación en ciberseguridad"
      ],
      additionalInfo: "Cumplimos con estándares ISO 27001, GDPR y normativas locales. Incluye plan de recuperación ante desastres y protocolos de respuesta a incidentes de seguridad.",
      gallery: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center"
      ],
      category: "security"
    },
    {
      id: 7,
      title: "DevOps",
      price: "$ 3.000.000",
      description: "Implementamos cultura DevOps en tu organización: automatización de despliegues, integración continua, monitoreo de aplicaciones y infraestructura como código.",
      longDescription: "DevOps acelera el desarrollo y mejora la calidad del software. Implementamos pipelines de CI/CD, automatización de infraestructura y prácticas que reducen tiempo de desarrollo en un 60%.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 5,
      features: [
        "CI/CD pipelines",
        "Infraestructura como código",
        "Monitoreo automatizado",
        "Containerización con Docker",
        "Orquestación con Kubernetes",
        "Capacitación del equipo"
      ],
      additionalInfo: "Utilizamos herramientas como Jenkins, GitLab CI, Docker, Kubernetes y Terraform. Incluye migración a cloud y optimización de costos de infraestructura.",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center"
      ],
      category: "devops"
    },
    {
      id: 8,
      title: "Servicios Cloud",
      price: "$ 50.000.000",
      description: "Migramos y optimizamos tu infraestructura en la nube con servidores propios de AWS, Azure o Google Cloud, garantizando escalabilidad y disponibilidad.",
      longDescription: "La nube ofrece escalabilidad, seguridad y costos optimizados. Diseñamos arquitecturas cloud que crecen con tu negocio, reducen costos operativos y garantizan disponibilidad 99.9%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 2,
      features: [
        "Migración a la nube",
        "Arquitectura escalable",
        "Optimización de costos",
        "Backup y recuperación",
        "Monitoreo 24/7",
        "Soporte especializado"
      ],
      additionalInfo: "Trabajamos con AWS, Azure y Google Cloud. Incluye análisis de costos, migración gradual, optimización de recursos y entrenamiento del equipo técnico.",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
      ],
      category: "cloud"
    },
    {
      id: 9,
      title: "Análisis de Datos",
      price: "$ 8.000.000",
      originalPrice: "$ 16.000.000",
      description: "Transformamos tus datos en insights accionables con dashboards interactivos, reportes automatizados y análisis predictivo para tomar decisiones inteligentes.",
      longDescription: "Los datos son el nuevo petróleo. Implementamos soluciones de Business Intelligence que convierten información dispersa en insights valiosos para la toma de decisiones estratégicas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 4,
      features: [
        "Dashboards interactivos",
        "Reportes automatizados",
        "Análisis predictivo",
        "ETL de datos",
        "Visualizaciones avanzadas",
        "Capacitación en herramientas"
      ],
      additionalInfo: "Utilizamos Power BI, Tableau, Python y R para análisis avanzado. Incluye limpieza de datos, modelado y creación de reportes ejecutivos automatizados.",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
      ],
      category: "analytics"
    },
    {
      id: 10,
      title: "Desarrollo de APIs",
      price: "$ 7.000.000",
      description: "Creamos APIs robustas y escalables que integran tus aplicaciones y sistemas, facilitando la comunicación entre diferentes plataformas y servicios.",
      longDescription: "Las APIs son el corazón de la integración digital. Desarrollamos interfaces de programación que conectan sistemas, automatizan procesos y permiten crear ecosistemas digitales integrados.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 6,
      features: [
        "APIs RESTful",
        "GraphQL",
        "Documentación completa",
        "Autenticación JWT",
        "Rate limiting",
        "Monitoreo de performance"
      ],
      additionalInfo: "Desarrollamos APIs siguiendo estándares REST y GraphQL. Incluye documentación técnica, testing automatizado y herramientas de monitoreo de performance.",
      gallery: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center"
      ],
      category: "api"
    },
    {
      id: 11,
      title: "Microservicios",
      price: "$ 9.000.000",
      originalPrice: "$ 18.000.000",
      description: "Diseñamos arquitecturas de microservicios que permiten crear aplicaciones modulares, escalables y mantenibles, facilitando el desarrollo ágil.",
      longDescription: "Los microservicios revolucionan el desarrollo de software. Creamos arquitecturas modulares que permiten escalabilidad independiente, despliegues más rápidos y mayor resiliencia del sistema.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
      isPromotion: true,
      promotionPercentage: 50,
      availability: 3,
      features: [
        "Arquitectura modular",
        "Containerización",
        "Service discovery",
        "Load balancing",
        "Circuit breakers",
        "Observabilidad completa"
      ],
      additionalInfo: "Implementamos patrones de microservicios con Docker, Kubernetes y service mesh. Incluye estrategias de comunicación, manejo de datos distribuidos y monitoreo.",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&crop=center"
      ],
      category: "microservices"
    },
    {
      id: 12,
      title: "Soporte Técnico",
      price: "$ 6.000.000",
      description: "Brindamos soporte técnico especializado 24/7 con asesoría siempre disponible, mantenimiento preventivo y resolución rápida de incidencias.",
      longDescription: "El soporte técnico es clave para la continuidad del negocio. Ofrecemos servicios de soporte multicanal con tiempos de respuesta garantizados y resolución proactiva de problemas.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
      isPromotion: false,
      availability: 10,
      features: [
        "Soporte 24/7",
        "Múltiples canales",
        "SLA garantizado",
        "Mantenimiento preventivo",
        "Actualizaciones automáticas",
        "Documentación técnica"
      ],
      additionalInfo: "Incluye soporte por teléfono, chat, email y acceso remoto. Mantenimiento preventivo, actualizaciones de seguridad y plan de escalamiento para incidencias críticas.",
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
      ],
      category: "support"
    }
  ];